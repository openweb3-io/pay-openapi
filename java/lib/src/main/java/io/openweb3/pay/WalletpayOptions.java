package io.openweb3.pay;

public final class WalletpayOptions {
	private static final String DEFAULT_URL = "https://api.walletpay.openweb3.io";

	private boolean debug = false;
	private String serverUrl = DEFAULT_URL;

	public WalletpayOptions() {
	}

	public WalletpayOptions debug(final boolean debug) {
		this.debug = debug;
		return this;
	}

	public WalletpayOptions serverUrl(final String serverUrl) {
		this.serverUrl = serverUrl;
		return this;
	}

	public void setDebug(final boolean debug) {
		this.debug = debug;
	}

	public void setServerUrl(final String serverUrl) {
		this.serverUrl = serverUrl;
	}

	public boolean getDebug() {
		return debug;
	}

	public String getServerUrl() {
		return serverUrl;
	}
}
