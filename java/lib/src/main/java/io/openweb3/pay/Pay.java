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
					String content = String.format("%s%s%s", body, uri, timestamp);
                    signature = calculateSignature(privateKey, content);
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
	private static String calculateSignature(final String privateKey, final String content) throws SigningException {
		try {
			Signature sign = Signature.getInstance("SHA256withRSA");

			// 开头行和结束行，以及所有换行字符
			String stripPrivateKey = privateKey.replaceAll("(-+BEGIN.*-+\\r?\\n|-+END.*-+\\r?\\n?|\\n|\\r)", ""); 

			Base64.Decoder decoder = Base64.getDecoder();
            byte[] pkcs1Bytes = decoder.decode(stripPrivateKey);
            byte[] pkcs8Bytes = convertPkcs1ToPkcs8(pkcs1Bytes);
			PKCS8EncodedKeySpec ks = new PKCS8EncodedKeySpec(pkcs8Bytes);
			KeyFactory kf = KeyFactory.getInstance("RSA");
			RSAPrivateKey pvt = (RSAPrivateKey)kf.generatePrivate(ks);

			sign.initSign(pvt);
			sign.update(content.getBytes(StandardCharsets.UTF_8));
            byte[] data = sign.sign();
            return Base64.getEncoder().encodeToString(data);
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return null;
		} catch (InvalidKeySpecException | SignatureException | InvalidKeyException e) {
            throw new SigningException(e.getMessage());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

        /**
     * 将 PKCS#1 格式的私钥字节数组转换为 PKCS#8 格式
     * @param pkcs1Bytes PKCS#1 格式的私钥字节数组
     * @return PKCS#8 格式的私钥字节数组
     * @throws GeneralSecurityException
     */
    private static byte[] convertPkcs1ToPkcs8(byte[] pkcs1Bytes) throws GeneralSecurityException {
        // PKCS#1 格式的私钥字节数组转换为 PKCS#8 格式
        int pkcs1Length = pkcs1Bytes.length;
        int totalLength = pkcs1Length + 22;
        byte[] pkcs8Header = new byte[] {
            0x30, (byte) 0x82, (byte) ((totalLength >> 8) & 0xff), (byte) (totalLength & 0xff),
            0x2, 0x1, 0x0, 0x30, 0xd, 0x6, 0x9, 0x2a, (byte) 0x86, 0x48, (byte) 0x86, (byte) 0xf7, 0xd, 0x1, 0x1, 0x1, 0x5, 0x0, 0x4, (byte) 0x82, (byte) ((pkcs1Length >> 8) & 0xff), (byte) (pkcs1Length & 0xff)
        };
        byte[] pkcs8Bytes = new byte[pkcs8Header.length + pkcs1Bytes.length];
        System.arraycopy(pkcs8Header, 0, pkcs8Bytes, 0, pkcs8Header.length);
        System.arraycopy(pkcs1Bytes, 0, pkcs8Bytes, pkcs8Header.length, pkcs1Bytes.length);
        return pkcs8Bytes;
    }


	public Invoice getInvoice() {
		return invoice;
	}

	public Endpoint getEndpoint() {
		return endpoint;
	}
	
}
