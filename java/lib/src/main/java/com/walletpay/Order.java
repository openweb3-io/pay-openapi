package com.walletpay;

import com.walletpay.exceptions.ApiException;
import com.walletpay.internal.api.OrderApi;
import com.walletpay.models.OrderIn;
import com.walletpay.models.OrderOut;
import com.walletpay.models.ListResponseOrderOut;

public final class Order {
	private final OrderApi api;

	Order() {
		api = new OrderApi();
	}

	public ListResponseOrderOut list(final OrderListOptions options) throws ApiException {
		try {
			return api.v1OrderList(options.getLimit(), options.getOffset(), options.getChain(), options.getChannel());
		} catch (com.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public OrderOut create(final OrderIn OrderIn) throws ApiException {
		return this.create(OrderIn, new PostOptions());
	}

	public OrderOut create(final OrderIn OrderIn, final PostOptions options) throws ApiException {
		try {
			return api.v1OrderCreate(OrderIn);
		} catch (com.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public OrderOut getOrCreate(final OrderIn OrderIn) throws ApiException {
		return this.getOrCreate(OrderIn, new PostOptions());
	}

	public OrderOut getOrCreate(final OrderIn OrderIn, final PostOptions options) throws ApiException {
		try {
			return api.v1OrderCreate(OrderIn);
		} catch (com.walletpay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
