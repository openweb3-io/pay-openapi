package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;
import io.openweb3.walletpay.internal.api.WebhookEndpointApi;
import io.openweb3.walletpay.models.EndpointIn;
import io.openweb3.walletpay.models.EndpointOut;
import io.openweb3.walletpay.models.ListResponseEndpointOut;

public final class Endpoint {
	private final WebhookEndpointApi api;

	Endpoint() {
		api = new WebhookEndpointApi();
	}

	public ListResponseEndpointOut list(final EndpointListOptions options) throws ApiException {
		try {
			return api.v1EndpointList(options.getLimit(),  options.getCursor(), options.getOrder());
		} catch (io.openweb3.walletpay.internal.ApiException e) {
            throw new RuntimeException(e);
        }
    }

	public EndpointOut create(final EndpointIn EndpointIn) throws ApiException {
		return this.create(EndpointIn, new PostOptions());
	}

	public EndpointOut create(final EndpointIn EndpointIn, final PostOptions options) throws ApiException {
		try {
			return api.v1EndpointCreate(EndpointIn);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public EndpointOut getOrCreate(final EndpointIn EndpointIn) throws ApiException {
		return this.getOrCreate(EndpointIn, new PostOptions());
	}

	public EndpointOut getOrCreate(final EndpointIn EndpointIn, final PostOptions options) throws ApiException {
		try {
			return api.v1EndpointCreate(EndpointIn);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
	// delete
	public EndpointOut delete(final String endpointId) throws ApiException {
		try {
			return api.v1EndpointDelete(endpointId);
		} catch (io.openweb3.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

}
