// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { HTTPValidationError } from '../models/HTTPValidationError';
import { HttpErrorOut } from '../models/HttpErrorOut';
import { ListResponseWebhookOut } from '../models/ListResponseWebhookOut';
import { WebhookIn } from '../models/WebhookIn';
import { WebhookOut } from '../models/WebhookOut';
import { WebhookPatch } from '../models/WebhookPatch';

/**
 * no description
 */
export class WebhookApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a webhook.
     * Create webhook
     * @param webhookIn 
     */
    public async v1WebhookCreate(webhookIn: WebhookIn, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'webhookIn' is not null or undefined
        if (webhookIn === null || webhookIn === undefined) {
            throw new RequiredError('Required parameter webhookIn was null or undefined when calling v1WebhookCreate.');
        }


        // Path Params
        const localVarPath = '/api/v1/webhooks';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("walletpay-req-id", randomId.toString())

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(webhookIn, "WebhookIn", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * delete the specified webhook.
     * Delete webhook
     * @param webhookId Specified the webhook id.
     */
    public async v1WebhookDelete(webhookId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling v1WebhookDelete.');
        }


        // Path Params
        const localVarPath = '/api/v1/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("walletpay-req-id", randomId.toString())

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * List webhooks.
     * List webhooks
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     */
    public async v1WebhookList(limit?: number, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api/v1/webhooks';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("walletpay-req-id", randomId.toString())

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "uint64"));
        }
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * update a specified webhook.
     * update webhook
     * @param webhookId Specified the webhook id.
     * @param webhookPatch 
     */
    public async v1WebhookPatch(webhookId: string, webhookPatch: WebhookPatch, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling v1WebhookPatch.');
        }


        // verify required parameter 'webhookPatch' is not null or undefined
        if (webhookPatch === null || webhookPatch === undefined) {
            throw new RequiredError('Required parameter webhookPatch was null or undefined when calling v1WebhookPatch.');
        }


        // Path Params
        const localVarPath = '/api/v1/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("walletpay-req-id", randomId.toString())

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(webhookPatch, "WebhookPatch", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * retrieve the specified webhook.
     * Retrieve webhook
     * @param webhookId Specified the webhook id.
     */
    public async v1WebhookRetrieve(webhookId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling v1WebhookRetrieve.');
        }


        // Path Params
        const localVarPath = '/api/v1/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("walletpay-req-id", randomId.toString())

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class WebhookApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1WebhookCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1WebhookCreate(response: ResponseContext): Promise<WebhookOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(409, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1WebhookDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1WebhookDelete(response: ResponseContext): Promise<WebhookOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(409, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1WebhookList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1WebhookList(response: ResponseContext): Promise<ListResponseWebhookOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListResponseWebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponseWebhookOut", ""
            ) as ListResponseWebhookOut;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(409, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListResponseWebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponseWebhookOut", ""
            ) as ListResponseWebhookOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1WebhookPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1WebhookPatch(response: ResponseContext): Promise<WebhookOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(409, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1WebhookRetrieve
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1WebhookRetrieve(response: ResponseContext): Promise<WebhookOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(409, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, body);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookOut", ""
            ) as WebhookOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
