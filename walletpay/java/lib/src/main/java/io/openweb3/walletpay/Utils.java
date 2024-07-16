package io.openweb3.walletpay;

import io.openweb3.walletpay.exceptions.ApiException;

final class Utils {
    private Utils() {
    }

    public static ApiException WrapInternalApiException(final io.openweb3.walletpay.internal.ApiException e) {
        return new ApiException(e.getMessage(), e, e.getCode(), e.getResponseHeaders(), e.getResponseBody());
    }
}
