package com.walletpay;

public class ListOptions {
    private static final int DEFAULT_LIMIT = 50;

    private Integer offset;
    private Integer limit = DEFAULT_LIMIT;

	public ListOptions() {
	}

	public <T extends ListOptions> T offset(final Integer offset) {
		this.offset = offset;
		return (T) this;
	}

	public <T extends ListOptions> T  limit(final Integer limit) {
		this.limit = limit;
		return (T) this;
	}

	public void setOffset(final Integer offset) {
		this.offset = offset;
	}

	public void setLimit(final Integer limit) {
		this.limit = limit;
	}

	public Integer getOffset() {
		return offset;
	}

	public Integer getLimit() {
		return limit;
	}
}
