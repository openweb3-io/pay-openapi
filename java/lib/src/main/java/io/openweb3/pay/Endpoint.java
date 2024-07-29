package io.openweb3.pay;

import io.openweb3.pay.exceptions.ApiException;
import io.openweb3.pay.internal.api.EndpointApi;
import io.openweb3.pay.models.EndpointIn;
import io.openweb3.pay.models.EndpointOut;
import io.openweb3.pay.models.EndpointPatch;
import io.openweb3.pay.models.ListResponseEndpointOut;

public final class Endpoint {
	private final EndpointApi api;

	Endpoint() {
		api = new EndpointApi();
	}

	public ListResponseEndpointOut list(final String appId, final EndpointListOptions options) throws ApiException {
		try {
			return api.v1EndpointList(appId, options.getLimit(), options.getCursor(), options.getOrdering());
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public EndpointOut create(final String appId, final EndpointIn EndpointIn) throws ApiException {
		return this.create(appId, EndpointIn, new PostOptions());
	}

	public EndpointOut create(final String appId, final EndpointIn EndpointIn, final PostOptions options) throws ApiException {
		try {
			return api.v1EndpointCreate(appId, EndpointIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public EndpointOut getOrCreate(final String appId, final EndpointIn EndpointIn) throws ApiException {
		return this.getOrCreate(appId, EndpointIn, new PostOptions());
	}

	public EndpointOut getOrCreate(final String appId, final EndpointIn EndpointIn, final PostOptions options) throws ApiException {
		try {
			return api.v1EndpointCreate(appId, EndpointIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// get
	public EndpointOut get(final String appId, final String endpointId) throws ApiException {
		try {
			return api.v1EndpointGet(appId, endpointId);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// update
	public EndpointOut patch(final String appId, final String endpointId, final EndpointPatch endpointPatch) throws ApiException {
		try {
			return api.v1EndpointPatch(appId, endpointId, endpointPatch);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// delete
	public EndpointOut delete(final String appId, final String endpointId) throws ApiException {
		try {
			return api.v1EndpointDelete(appId, endpointId);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

}
