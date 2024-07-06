package io.openweb3.pay;

import io.openweb3.pay.exceptions.ApiException;
import io.openweb3.pay.internal.api.OrderApi;
import io.openweb3.pay.models.OrderIn;
import io.openweb3.pay.models.OrderOut;
import io.openweb3.pay.models.ListResponseOrderOut;

public final class Order {
	private final OrderApi api;

	Order() {
		api = new OrderApi();
	}

	public ListResponseOrderOut list(final OrderListOptions options) throws ApiException {
		try {
			return api.v1OrderList(options.getLimit(), options.getOffset(), options.getChain(), options.getChannel());
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public OrderOut create(final OrderIn OrderIn) throws ApiException {
		return this.create(OrderIn, new PostOptions());
	}

	public OrderOut create(final OrderIn OrderIn, final PostOptions options) throws ApiException {
		try {
			return api.v1OrderCreate(OrderIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public OrderOut getOrCreate(final OrderIn OrderIn) throws ApiException {
		return this.getOrCreate(OrderIn, new PostOptions());
	}

	public OrderOut getOrCreate(final OrderIn OrderIn, final PostOptions options) throws ApiException {
		try {
			return api.v1OrderCreate(OrderIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}
}
