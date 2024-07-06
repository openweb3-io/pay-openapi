package com.walletpay;

import com.walletpay.internal.ApiClient;
import com.walletpay.internal.ApiCallback;
import com.walletpay.internal.Configuration;
import com.walletpay.internal.ProgressResponseBody;
import com.walletpay.internal.auth.ApiKeyAuth;
import okhttp3.*;
import org.jetbrains.annotations.NotNull;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import com.walletpay.exceptions.WalletpaySigningException;
import java.io.IOException;

public final class Walletpay {
	public static final String VERSION = "1.24.0";
	private static final String HMAC_SHA256 = "HmacSHA256";
	private final Order order;
	private final Account account;

	public Walletpay(final String apikey, final String privateKey) {
		this(apikey, privateKey, new WalletpayOptions());
	}

	public Walletpay(final String apikey, final String privateKey, final WalletpayOptions options) {
		OkHttpClient.Builder builder = new OkHttpClient.Builder();
        builder.addNetworkInterceptor(getProgressInterceptor());
		builder.addInterceptor(new Interceptor() {
			@NotNull
			@Override
			public Response intercept(@NotNull Chain chain) throws IOException {
				Request originalRequest = chain.request();
				Request.Builder builder = originalRequest.newBuilder();

				String timestamp = String.format("%d",System.currentTimeMillis());
				builder.header("x-request-timestamp",timestamp);

				String url = originalRequest.url().toString();
				String body = originalRequest.body() == null ? "" : originalRequest.body().toString();
				// 计算请求的 SHA-256 签名
                String signature = null;
                try {
                    signature = calculateSignature(privateKey, body, url, timestamp);
                } catch (WalletpaySigningException e) {
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
		apiClient.setUserAgent(String.format("walletpay-libs/%s/java", Walletpay.VERSION));
		ApiKeyAuth apiKeyAuth = (ApiKeyAuth) apiClient.getAuthentication("ApiKeyAuth");
		apiKeyAuth.setApiKey(apikey);

		Configuration.setDefaultApiClient(apiClient);

		this.order = new Order();
		this.account = new Account();
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

	public Order getOrder() {
		return order;
	}

	public Account getAccount() {
		return account;
	}

    private static String calculateSignature(final String secret, final String body, final String uri, final String timestamp) throws WalletpaySigningException {
		try {
			String toSign = String.format("%s%s%s", body, uri, timestamp);
			Mac sha512Hmac = Mac.getInstance(HMAC_SHA256);
			SecretKeySpec keySpec = new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), HMAC_SHA256);
			sha512Hmac.init(keySpec);
			byte[] macData = sha512Hmac.doFinal(toSign.getBytes(StandardCharsets.UTF_8));
			return Base64.getEncoder().encodeToString(macData);
		} catch (InvalidKeyException | NoSuchAlgorithmException e) {
			throw new WalletpaySigningException(e.getMessage());
		}
    }
}
