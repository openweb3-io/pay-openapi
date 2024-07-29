package io.openweb3.pay;

import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiCallback;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.ProgressResponseBody;
import io.openweb3.pay.internal.auth.ApiKeyAuth;
import okhttp3.*;
import org.jetbrains.annotations.NotNull;

import java.nio.charset.StandardCharsets;
import java.security.*;
import java.security.interfaces.RSAPrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;

import io.openweb3.pay.exceptions.SigningException;
import java.io.IOException;


public final class Pay {
	public static final String VERSION = "0.2.0";
	private final Invoice invoice;
	private final Endpoint endpoint;

	public Pay(final String apikey, final String privateKeyPath) {
		this(apikey, privateKeyPath, new PayOptions());
	}

	public Pay(final String apikey, final String privateKeyPath, final PayOptions options) {
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
                    signature = calculateSignature(privateKeyPath, body, uri, timestamp);
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

		this.invoice = new Invoice();
		this.endpoint = new Endpoint();
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

    private static String calculateSignature(final String privateKeyPath, final String body, final String uri, final String timestamp) throws SigningException {
		try {
			String content = String.format("%s%s%s", body, uri, timestamp);
			Signature sign = Signature.getInstance("SHA256withRSA");

			String stripPrivateKey = Utils.getStringFromFile(privateKeyPath);
			// 开头行和结束行，以及所有换行字符
			stripPrivateKey = stripPrivateKey.replaceAll("(-+BEGIN.*-+\\r?\\n|-+END.*-+\\r?\\n?|\\n|\\r)", ""); 

			Base64.Decoder decoder = Base64.getDecoder();
			PKCS8EncodedKeySpec ks = new PKCS8EncodedKeySpec(decoder.decode(stripPrivateKey));
			KeyFactory kf = KeyFactory.getInstance("RSA");
			RSAPrivateKey pvt = (RSAPrivateKey)kf.generatePrivate(ks);

			sign.initSign(pvt);
			sign.update(content.getBytes(StandardCharsets.UTF_8));
			return Utils.toHex(sign.sign());
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		} catch (InvalidKeySpecException | SignatureException | InvalidKeyException e) {
            throw new SigningException(e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }



	public Invoice getInvoice() {
		return invoice;
	}

	public Endpoint getEndpoint() {
		return endpoint;
	}
	
}
