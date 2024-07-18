package io.openweb3.pay;

import java.net.http.HttpHeaders;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Optional;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import io.openweb3.pay.exceptions.VerificationException;
import io.openweb3.pay.exceptions.SigningException;

public final class Webhook {
	static final String SECRET_PREFIX = "whsec_";
	static final String X_MSG_ID_KEY = "x-id";
	static final String X_MSG_SIGNATURE_KEY = "x-signature";
	static final String X_MSG_TIMESTAMP_KEY = "x-timestamp";
	static final String UNBRANDED_MSG_ID_KEY = "webhook-id";
	static final String UNBRANDED_MSG_SIGNATURE_KEY = "webhook-signature";
	static final String UNBRANDED_MSG_TIMESTAMP_KEY = "webhook-timestamp";
	private static final String HMAC_SHA256 = "HmacSHA256";
	private static final int TOLERANCE_IN_SECONDS = 5 * 60; // 5 minutes
	private static final long SECOND_IN_MS = 1000L;

	private final byte[] key;

	public Webhook(final String secret) {
		this.key = secret.getBytes();
	}

	public Webhook(final byte[] secret) {
		this.key = secret;
	}

	public boolean verify(final String payload, final HttpHeaders headers) throws VerificationException {
		Optional<String> msgId = headers.firstValue(X_MSG_ID_KEY);
		Optional<String> msgSignature = headers.firstValue(X_MSG_SIGNATURE_KEY);
		Optional<String> msgTimestamp = headers.firstValue(X_MSG_TIMESTAMP_KEY);

		if (msgId.isEmpty() || msgSignature.isEmpty() || msgTimestamp.isEmpty()) {
			// fallback to unbranded
			msgId = headers.firstValue(UNBRANDED_MSG_ID_KEY);
			msgSignature = headers.firstValue(UNBRANDED_MSG_SIGNATURE_KEY);
			msgTimestamp = headers.firstValue(UNBRANDED_MSG_TIMESTAMP_KEY);
			if (msgId.isEmpty() || msgSignature.isEmpty() || msgTimestamp.isEmpty()) {
				throw new VerificationException("Missing required headers");
			}
		}

		long timestamp = Webhook.verifyTimestamp(msgTimestamp.get());

		String expectedSignature;
		try {
			expectedSignature = this.sign(msgId.get(), timestamp, payload).split(",")[1];
		} catch (SigningException e) {
			throw new VerificationException("Failed to generate expected signature");
		}

		String[] msgSignatures = msgSignature.get().split(" ");
		for (String versionedSignature : msgSignatures) {
			String[] sigParts = versionedSignature.split(",");
			if (sigParts.length < 2) {
				continue;
			}
			String version = sigParts[0];
			if (!version.equals("v1")) {
				continue;
			}
			String signature = sigParts[1];
			return MessageDigest.isEqual(signature.getBytes(), expectedSignature.getBytes());
		}

		throw new VerificationException("No matching signature found");
	}

	public String sign(final String msgId, final long timestamp, final String payload) throws SigningException {
		try {
			String toSign = String.format("%s.%s.%s", msgId, timestamp, payload);
			Mac sha512Hmac = Mac.getInstance(HMAC_SHA256);
			SecretKeySpec keySpec = new SecretKeySpec(this.key, HMAC_SHA256);
			sha512Hmac.init(keySpec);
			byte[] macData = sha512Hmac.doFinal(toSign.getBytes(StandardCharsets.UTF_8));
			String signature = Base64.getEncoder().encodeToString(macData);
			return String.format("v1,%s", signature);
		} catch (InvalidKeyException | NoSuchAlgorithmException e) {
			throw new SigningException(e.getMessage());
		}
	}

	private static long verifyTimestamp(final String timestampHeader) throws VerificationException {
		long now = System.currentTimeMillis() / Webhook.SECOND_IN_MS;

		long timestamp;
		try {
			timestamp = Long.parseLong(timestampHeader);
		} catch (NumberFormatException e) {
			throw new VerificationException("Invalid Signature Headers");
		}

		if (timestamp < (now - TOLERANCE_IN_SECONDS)) {
			throw new VerificationException("Message timestamp too old");
		}
		if (timestamp > (now + TOLERANCE_IN_SECONDS)) {
			throw new VerificationException("Message timestamp too new");
		}
		return timestamp;
	}
}
