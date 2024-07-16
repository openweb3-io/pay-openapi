package io.openweb3.walletpay;

public class OrderListOptions extends ListOptions {
    private String channel;
    private String chain;

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
