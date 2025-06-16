package io.openweb3.pay;

import io.openweb3.pay.exceptions.ApiException;
import io.openweb3.pay.internal.api.PaymentApi;
import io.openweb3.pay.models.CreatePaymentRequest;
import io.openweb3.pay.models.Payment;
import io.openweb3.pay.models.PagePayment;

public final class Payments {
	private final PaymentApi api;

	Payments() {
		api = new PaymentApi();
	}

	public PagePayment list(final String appId, final PaymentListOptions options) throws ApiException {
		try {
			return api.v1PaymentsList(appId, options.getLimit(), options.getOffset(),options.getPaymentMethod(), options.getUserId());
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public Payment create(final String appId, final CreatePaymentRequest PaymentIn) throws ApiException {
		return this.create(appId, PaymentIn, new PostOptions());
	}

	public Payment create(final String appId, final CreatePaymentRequest PaymentIn, final PostOptions options)
			throws ApiException {
		try {
			return api.v1PaymentsCreate(appId, PaymentIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public Payment getOrCreate(final String appId, final CreatePaymentRequest PaymentIn) throws ApiException {
		return this.getOrCreate(appId, PaymentIn, new PostOptions());
	}

	public Payment getOrCreate(final String appId, final CreatePaymentRequest PaymentIn, final PostOptions options)
			throws ApiException {
		try {
			return api.v1PaymentsCreate(appId, PaymentIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// retrieve
	public Payment get(final String appId, final String idOrUid) throws ApiException {
		try {
			return api.v1PaymentsRetrieve(appId, idOrUid);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
