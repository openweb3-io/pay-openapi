// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CreateWebhook } from '../models/CreateWebhook';
import { CursorPageWebhook } from '../models/CursorPageWebhook';
import { UpdateWebhook } from '../models/UpdateWebhook';
import { Webhook } from '../models/Webhook';

/**
 * no description
 */
export class WebhookApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a webhook endpoint
     * Create a webhook endpoint
     * @param appId App ID
     * @param createWebhook Request body
     */
    public async v1EndpointsCreate(appId: string, createWebhook: CreateWebhook, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1EndpointsCreate.');
        }


        // verify required parameter 'createWebhook' is not null or undefined
        if (createWebhook === null || createWebhook === undefined) {
            throw new RequiredError('Required parameter createWebhook was null or undefined when calling v1EndpointsCreate.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/endpoints'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createWebhook, "CreateWebhook", ""),
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
     * Delete a webhook endpoint
     * Delete a webhook endpoint
     * @param appId App ID
     * @param endpointId Endpoint ID
     */
    public async v1EndpointsDelete(appId: string, endpointId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1EndpointsDelete.');
        }


        // verify required parameter 'endpointId' is not null or undefined
        if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('Required parameter endpointId was null or undefined when calling v1EndpointsDelete.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/endpoints/{endpointId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'endpointId' + '}', encodeURIComponent(String(endpointId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

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
     * List webhook endpoints
     * List webhook endpoints
     * @param appId App ID
     * @param limit 
     * @param cursor 
     */
    public async v1EndpointsList(appId: string, limit: number, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1EndpointsList.');
        }


        // verify required parameter 'limit' is not null or undefined
        if (limit === null || limit === undefined) {
            throw new RequiredError('Required parameter limit was null or undefined when calling v1EndpointsList.');
        }



        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/endpoints'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
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
     * Retrieve a webhook endpoint
     * Retrieve a webhook endpoint
     * @param appId App ID
     * @param endpointId Endpoint ID
     */
    public async v1EndpointsRetrieve(appId: string, endpointId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1EndpointsRetrieve.');
        }


        // verify required parameter 'endpointId' is not null or undefined
        if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('Required parameter endpointId was null or undefined when calling v1EndpointsRetrieve.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/endpoints/{endpointId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'endpointId' + '}', encodeURIComponent(String(endpointId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

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
     * Update a webhook endpoint
     * Update a webhook endpoint
     * @param appId App ID
     * @param endpointId Endpoint ID
     * @param updateWebhook Request body
     */
    public async v1EndpointsUpdate(appId: string, endpointId: string, updateWebhook: UpdateWebhook, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1EndpointsUpdate.');
        }


        // verify required parameter 'endpointId' is not null or undefined
        if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('Required parameter endpointId was null or undefined when calling v1EndpointsUpdate.');
        }


        // verify required parameter 'updateWebhook' is not null or undefined
        if (updateWebhook === null || updateWebhook === undefined) {
            throw new RequiredError('Required parameter updateWebhook was null or undefined when calling v1EndpointsUpdate.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/endpoints/{endpointId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'endpointId' + '}', encodeURIComponent(String(endpointId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateWebhook, "UpdateWebhook", ""),
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

}

export class WebhookApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1EndpointsCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1EndpointsCreate(response: ResponseContext): Promise<Webhook > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Webhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Webhook", ""
            ) as Webhook;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Webhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Webhook", ""
            ) as Webhook;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1EndpointsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1EndpointsDelete(response: ResponseContext): Promise<Webhook > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Webhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Webhook", ""
            ) as Webhook;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Webhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Webhook", ""
            ) as Webhook;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1EndpointsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1EndpointsList(response: ResponseContext): Promise<CursorPageWebhook > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CursorPageWebhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CursorPageWebhook", ""
            ) as CursorPageWebhook;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CursorPageWebhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CursorPageWebhook", ""
            ) as CursorPageWebhook;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1EndpointsRetrieve
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1EndpointsRetrieve(response: ResponseContext): Promise<Webhook > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Webhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Webhook", ""
            ) as Webhook;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Webhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Webhook", ""
            ) as Webhook;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1EndpointsUpdate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1EndpointsUpdate(response: ResponseContext): Promise<Webhook > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Webhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Webhook", ""
            ) as Webhook;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Webhook = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Webhook", ""
            ) as Webhook;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
