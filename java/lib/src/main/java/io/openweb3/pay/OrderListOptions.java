package io.openweb3.pay;

import io.openweb3.pay.models.Ordering;

public class OrderListOptions extends ListOptions {
    private Ordering order;
    private String channel;
    private String chain;

    public void setOrder(final Ordering order) {
        this.order = order;
    }

    public Ordering getOrder() {
        return this.order;
    }

    public void setChannel(final String channel) {
        this.channel = channel;
    }

    public String getChannel() {
        return channel;
    }

    public void setChain(final String chain) {
        this.chain = chain;
    }
    public String getChain() {
        return chain;
    }
}
