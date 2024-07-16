package io.openweb3.walletpay;

import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiCallback;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.ProgressResponseBody;
import io.openweb3.walletpay.internal.auth.ApiKeyAuth;
import okhttp3.*;
import org.jetbrains.annotations.NotNull;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.*;
import java.security.interfaces.RSAPrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;

import io.openweb3.walletpay.exceptions.SigningException;
import java.io.IOException;

public final class Pay {
	public static final String VERSION = "0.2.0";
	private final Order order;

	public Pay(final String apikey, final String privateKey) {
		this(apikey, privateKey, new PayOptions());
	}

	public Pay(final String apikey, final String privateKey, final PayOptions options) {
		OkHttpClient.Builder builder = new OkHttpClient.Builder();
        builder.addNetworkInterceptor(getProgressInterceptor());
		builder.addInterceptor(new Interceptor() {
			@NotNull
			@Override
			public Response intercept(@NotNull Chain chain) throws IOException {
				Request originalRequest = chain.request();
				Request.Builder builder = originalRequest.newBuilder();

				String timestamp = String.format("%d",System.currentTimeMillis());
				builder.header("x-request-time",timestamp);

				String path = originalRequest.url().encodedPath();
				String query = originalRequest.url().encodedQuery();
				String uri = path;
                if (query != null && !query.isEmpty()) {
					uri += "?" + query;
				}
				String body = originalRequest.body() == null ? "" : originalRequest.body().toString();
				// 计算请求的 SHA-256 签名
                String signature = null;
                try {
                    signature = calculateSignature(privateKey, body, uri, timestamp);
                } catch (SigningException e) {
                    throw new RuntimeException(e);
                }
                if (signature != null) {
					// 将签名添加到请求头
					builder.header("x-signature", signature);
				}

				Request newRequest = builder.build();
				return chain.proceed(newRequest);
			}
		});

		OkHttpClient httpClient = builder.build();

		ApiClient apiClient = new ApiClient(httpClient);
		apiClient.setBasePath(options.getServerUrl());
		apiClient.setUserAgent(String.format("pay-libs/%s/java", Pay.VERSION));
		ApiKeyAuth apiKeyAuth = (ApiKeyAuth) apiClient.getAuthentication("ApiKeyAuth");
		apiKeyAuth.setApiKey(apikey);

		Configuration.setDefaultApiClient(apiClient);

		this.order = new Order();
	}

	private Interceptor getProgressInterceptor() {
		return new Interceptor() {
			@NotNull
			@Override
			public Response intercept(@NotNull Interceptor.Chain chain) throws IOException {
				final Request request = chain.request();
				final Response originalResponse = chain.proceed(request);
				if (request.tag() instanceof ApiCallback) {
					final ApiCallback callback = (ApiCallback) request.tag();
					return originalResponse.newBuilder()
							.body(new ProgressResponseBody(originalResponse.body(), callback))
							.build();
				}
				return originalResponse;
			}
		};
	}

    private static String calculateSignature(final String privateKey, final String body, final String uri, final String timestamp) throws SigningException {
		try {
			String content = String.format("%s%s%s", body, uri, timestamp);
			Signature sign = Signature.getInstance("SHA256withRSA");

			String stripPrivateKey = privateKey;
			if (privateKey.startsWith("-----BEGIN")) {
				stripPrivateKey = privateKey.replace("-----BEGIN PRIVATE KEY-----", "")
						.replace("-----END PRIVATE KEY-----", "")
						.replaceAll("\\s", ""); // 移除所有空白字符
			}

			Base64.Decoder decoder = Base64.getDecoder();
			PKCS8EncodedKeySpec ks = new PKCS8EncodedKeySpec(decoder.decode(stripPrivateKey));
			KeyFactory kf = KeyFactory.getInstance("RSA");
			RSAPrivateKey pvt = (RSAPrivateKey)kf.generatePrivate(ks);

			sign.initSign(pvt);
			sign.update(content.getBytes(StandardCharsets.UTF_8));
			return toHex(sign.sign());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		} catch (InvalidKeySpecException | SignatureException | InvalidKeyException e) {
            throw new SigningException(e.getMessage());
        }
    }

	private static String toHex(byte[] array) {
		BigInteger bi = new BigInteger(1, array);
		String hex = bi.toString(16);
		int paddingLength = (array.length * 2) - hex.length();
		if (paddingLength > 0) {
			return String.format("%0" + paddingLength + "d", 0) + hex;
		} else {
			return hex;
		}
	}

	public Order getOrder() {
		return order;
	}
}
