package io.openweb3.pay;

import io.openweb3.pay.models.Ordering;

public class PaymentListOptions extends ListOptions {
    private Ordering ordering;
    private String userId;
    private String paymentMethod;

    public void setOrdering(final Ordering ordering) {
        this.ordering = ordering;
    }

    public Ordering getOrdering() {
        return this.ordering;
    }

    public void setUserId(final String userId) {
        this.userId = userId;
    }

    public String getUserId() {
        return userId;
    }

    public void setPaymentMethod(final String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    public String getPaymentMethod() {
        return paymentMethod;
    }
}
