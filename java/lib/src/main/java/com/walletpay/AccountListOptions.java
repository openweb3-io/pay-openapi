package com.walletpay;

public class AccountListOptions extends ListOptions {
	private boolean withContent;
	private boolean includeArchived;

	public AccountListOptions() {
		super();
	}

	public AccountListOptions withContent(final boolean withContent) {
		this.withContent = withContent;
		return this;
	}

	public void setWithContent(final boolean withContent) {
		this.withContent = withContent;
	}

	public boolean getWithContent() {
		return withContent;
	}

	public AccountListOptions includeArchived(final boolean includeArchived) {
		this.includeArchived = includeArchived;
		return this;
	}

	public void setIncludeArchived(final boolean includeArchived) {
		this.includeArchived = includeArchived;
	}

	public boolean getIncludeArchived() {
		return includeArchived;
	}
}
