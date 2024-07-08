package io.openweb3.pay;

import io.openweb3.pay.exceptions.ApiException;
import io.openweb3.pay.internal.api.WebhookApi;
import io.openweb3.pay.models.WebhookIn;
import io.openweb3.pay.models.WebhookOut;
import io.openweb3.pay.models.WebhookPatch;
import io.openweb3.pay.models.ListResponseWebhookOut;

public final class Webhook {
	private final WebhookApi api;

	Webhook() {
		api = new WebhookApi();
	}

	public ListResponseWebhookOut list(final WebhookListOptions options) throws ApiException {
		try {
			return api.v1WebhookList(options.getLimit(),  options.getCursor());
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public WebhookOut create(final WebhookIn WebhookIn) throws ApiException {
		return this.create(WebhookIn, new PostOptions());
	}

	public WebhookOut create(final WebhookIn WebhookIn, final PostOptions options) throws ApiException {
		try {
			return api.v1WebhookCreate(WebhookIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	public WebhookOut getOrCreate(final WebhookIn WebhookIn) throws ApiException {
		return this.getOrCreate(WebhookIn, new PostOptions());
	}

	public WebhookOut getOrCreate(final WebhookIn WebhookIn, final PostOptions options) throws ApiException {
		try {
			return api.v1WebhookCreate(WebhookIn);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// retrieve 
	public WebhookOut retrieve(final String webhookId) throws ApiException {
		try {
			return api.v1WebhookRetrieve(webhookId);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// update
	public WebhookOut patch(final String webhookId, final WebhookPatch webhookPatch) throws ApiException {
		try {
			return api.v1WebhookPatch(webhookId, webhookPatch);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

	// delete
	public WebhookOut delete(final String webhookId) throws ApiException {
		try {
			return api.v1WebhookDelete(webhookId);
		} catch (io.openweb3.pay.internal.ApiException e) {
			throw Utils.WrapInternalApiException(e);
		}
	}

}
