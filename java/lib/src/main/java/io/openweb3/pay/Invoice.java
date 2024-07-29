package io.openweb3.pay;

import io.openweb3.pay.exceptions.ApiException;
import io.openweb3.pay.internal.api.InvoiceApi;
import io.openweb3.pay.models.InvoiceIn;
import io.openweb3.pay.models.InvoiceOut;
import io.openweb3.pay.models.ListResponseInvoiceOut;

public final class Invoice {
	private final InvoiceApi api;

	Invoice() {
		api = new InvoiceApi();
	}

	public ListResponseInvoiceOut list(final String appId, final InvoiceListOptions options) throws ApiException {
		try {
			return api.v1InvoiceList(appId, options.getLimit(), options.getOffset(), options.getUserId(), options.getChannel());
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public InvoiceOut create(final String appId, final InvoiceIn InvoiceIn) throws ApiException {
		return this.create(appId, InvoiceIn, new PostOptions());
	}

	public InvoiceOut create(final String appId, final InvoiceIn InvoiceIn, final PostOptions options) throws ApiException {
		try {
			return api.v1InvoiceCreate(appId, InvoiceIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public InvoiceOut getOrCreate(final String appId, final InvoiceIn InvoiceIn) throws ApiException {
		return this.getOrCreate(appId, InvoiceIn, new PostOptions());
	}

	public InvoiceOut getOrCreate(final String appId, final InvoiceIn InvoiceIn, final PostOptions options) throws ApiException {
		try {
			return api.v1InvoiceCreate(appId, InvoiceIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// retrieve
	public InvoiceOut get(final String appId, final String idOrUid) throws ApiException {
		try {
			return api.v1InvoiceGet(appId, idOrUid);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
