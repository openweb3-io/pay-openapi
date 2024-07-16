package io.openweb3.pay;

import io.openweb3.pay.models.Ordering;

public class EndpointListOptions  {
    private Ordering order;
    private String cursor;
    private Integer limit;

    public void setOrder(final Ordering order) {
        this.order = order;
    }

    public Ordering getOrder() {
        return this.order;
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
