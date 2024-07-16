package io.openweb3.pay;

import io.openweb3.pay.exceptions.ApiException;

final class Utils {
    private Utils() {
    }

    public static ApiException WrapInternalApiException(final io.openweb3.pay.internal.ApiException e) {
        return new ApiException(e.getMessage(), e, e.getCode(), e.getResponseHeaders(), e.getResponseBody());
    }
}
