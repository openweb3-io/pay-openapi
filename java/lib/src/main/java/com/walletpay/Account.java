package com.walletpay;

import com.walletpay.exceptions.ApiException;
import com.walletpay.internal.api.AccountApi;
import com.walletpay.models.ListResponseAccountOut;

public final class Account {
	private final AccountApi api;

	public Account() {
		api = new AccountApi();
	}

	public ListResponseAccountOut list(final AccountListOptions options) throws ApiException {
		try {
			return api.v1AccountList(options.getLimit(), options.getOffset());
		} catch (com.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
