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

	public ListResponseEndpointOut list(final EndpointListOptions options) throws ApiException {
		try {
			return api.v1EndpointList(options.getLimit(),  options.getCursor());
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public EndpointOut create(final EndpointIn EndpointIn) throws ApiException {
		return this.create(EndpointIn, new PostOptions());
	}

	public EndpointOut create(final EndpointIn EndpointIn, final PostOptions options) throws ApiException {
		try {
			return api.v1EndpointCreate(EndpointIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public EndpointOut getOrCreate(final EndpointIn EndpointIn) throws ApiException {
		return this.getOrCreate(EndpointIn, new PostOptions());
	}

	public EndpointOut getOrCreate(final EndpointIn EndpointIn, final PostOptions options) throws ApiException {
		try {
			return api.v1EndpointCreate(EndpointIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// retrieve 
	public EndpointOut retrieve(final String endpointId) throws ApiException {
		try {
			return api.v1EndpointRetrieve(endpointId);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// update
	public EndpointOut patch(final String endpointId, final EndpointPatch endpointPatch) throws ApiException {
		try {
			return api.v1EndpointPatch(endpointId, endpointPatch);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// delete
	public EndpointOut delete(final String endpointId) throws ApiException {
		try {
			return api.v1EndpointDelete(endpointId);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

}
