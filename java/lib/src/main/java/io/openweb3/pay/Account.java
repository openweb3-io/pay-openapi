package io.openweb3.pay;

import io.openweb3.pay.exceptions.ApiException;
import io.openweb3.pay.internal.api.AccountApi;
import io.openweb3.pay.models.ListResponseAccountOut;

public final class Account {
	private final AccountApi api;

	public Account() {
		api = new AccountApi();
	}

	public ListResponseAccountOut list(final AccountListOptions options) throws ApiException {
		try {
			return api.v1AccountList(options.getLimit(), options.getOffset());
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
