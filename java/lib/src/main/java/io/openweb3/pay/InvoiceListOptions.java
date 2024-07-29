package io.openweb3.pay;

import io.openweb3.pay.models.Ordering;

public class InvoiceListOptions extends ListOptions {
    private Ordering ordering;
    private String channel;
    private String userId;

    public void setOrdering(final Ordering ordering) {
        this.ordering = ordering;
    }

    public Ordering getOrdering() {
        return this.ordering;
    }

    public void setChannel(final String channel) {
        this.channel = channel;
    }

    public String getChannel() {
        return channel;
    }

    public void setUserId(final String userId) {
        this.userId = userId;
    }
    public String getUserId() {
        return userId;
    }
}
