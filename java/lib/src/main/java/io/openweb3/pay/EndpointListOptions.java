package io.openweb3.pay;


public class EndpointListOptions  {
    private String cursor;
    private Integer limit;

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
