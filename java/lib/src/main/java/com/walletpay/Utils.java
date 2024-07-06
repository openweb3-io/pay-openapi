package com.walletpay;

import com.walletpay.exceptions.ApiException;

final class Utils {
    private Utils() {
    }

    public static ApiException WrapInternalApiException(final com.walletpay.internal.ApiException e) {
        return new ApiException(e.getMessage(), e, e.getCode(), e.getResponseHeaders(), e.getResponseBody());
    }
}
