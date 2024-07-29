package io.openweb3.pay;

import io.openweb3.pay.models.Ordering;

public class EndpointListOptions  {
    private Ordering ordering;
    private String cursor;
    private Integer limit;

    public void setOrdering(final Ordering ordering) {
        this.ordering = ordering;
    }

    public Ordering getOrdering() {
        return this.ordering;
    }

    public void setCursor(final String cursor) {
        this.cursor = cursor;
    }

    public String getCursor() {
        return cursor;
    }

	public void setLimit(final Integer limit) {
		this.limit = limit;
	}
	public Integer getLimit() {
		return limit;
	}
}
