package io.openweb3.walletpay;

import java.net.http.HttpHeaders;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Optional;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import java.io.*;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.Signature;
import java.security.SignatureException;
import java.security.spec.X509EncodedKeySpec;

import io.openweb3.walletpay.exceptions.VerificationException;

public final class Webhook {
	static final String X_MSG_ID_KEY = "x-id";
	static final String X_MSG_SIGNATURE_KEY = "x-signature";
	static final String X_MSG_TIMESTAMP_KEY = "x-timestamp";
	static final String UNBRANDED_MSG_ID_KEY = "webhook-id";
	static final String UNBRANDED_MSG_SIGNATURE_KEY = "webhook-signature";
	static final String UNBRANDED_MSG_TIMESTAMP_KEY = "webhook-timestamp";
	private static final String HMAC_SHA256 = "HmacSHA256";
	private static final int TOLERANCE_IN_SECONDS = 5 * 60; // 5 minutes
	private static final long SECOND_IN_MS = 1000L;

    private final String publicKeyPath;

	public Webhook(final String publicKeyPath) {
        this.publicKeyPath = publicKeyPath;
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

		try {
			return verifyData(payload, msgSignature.get(), this.getPubKey());
		} catch (Exception e) {
			throw new VerificationException("Signature verify failed");
		}
	}

    private PublicKey getPubKey() throws Exception {
        String pubKeyString = Utils.getStringFromFile(this.publicKeyPath);
        pubKeyString = pubKeyString.replaceAll("(-+BEGIN PUBLIC KEY-+\\r?\\n|-+END PUBLIC KEY-+\\r?\\n?)", "");
        byte[] keyBytes = Base64.getDecoder().decode(pubKeyString.getBytes(StandardCharsets.UTF_8));

        // generate public key
        X509EncodedKeySpec spec = new X509EncodedKeySpec(keyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");

        return keyFactory.generatePublic(spec);
    }

    public static boolean verifyData(String dataString, String signatureString, PublicKey publicKey)
            throws NoSuchAlgorithmException, InvalidKeyException, SignatureException, UnsupportedEncodingException {
        byte[] signatureBytes = Base64.getDecoder().decode(signatureString);
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initVerify(publicKey);
        signature.update(dataString.getBytes(StandardCharsets.UTF_8));
        return signature.verify(signatureBytes);
    }

}
