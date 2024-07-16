package io.openweb3.walletpay;

public final class PayOptions {
	private static final String DEFAULT_URL = "https://api.wallet-pay.openweb3.io";

	private boolean debug = false;
	private String serverUrl = DEFAULT_URL;

	public PayOptions() {
	}

	public PayOptions debug(final boolean debug) {
		this.debug = debug;
		return this;
	}

	public PayOptions serverUrl(final String serverUrl) {
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
