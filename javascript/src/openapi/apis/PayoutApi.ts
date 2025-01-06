// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CreatePayout } from '../models/CreatePayout';
import { CursorPagePayout } from '../models/CursorPagePayout';
import { Payout } from '../models/Payout';

/**
 * no description
 */
export class PayoutApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Payout to address
     * Payout to address
     * @param appId App ID
     * @param createPayout Request body
     */
    public async v1PayoutsCreate(appId: string, createPayout: CreatePayout, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1PayoutsCreate.');
        }


        // verify required parameter 'createPayout' is not null or undefined
        if (createPayout === null || createPayout === undefined) {
            throw new RequiredError('Required parameter createPayout was null or undefined when calling v1PayoutsCreate.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/payouts'
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
            ObjectSerializer.serialize(createPayout, "CreatePayout", ""),
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
     * List payouts
     * List payouts
     * @param appId App ID
     * @param cursor Cursor
     * @param limit Limit
     */
    public async v1PayoutsList(appId: string, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1PayoutsList.');
        }




        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/payouts'
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
     * Retrieve a payout
     * Retrieve a payout
     * @param appId App ID
     * @param payoutId Payout ID
     */
    public async v1PayoutsRetrieve(appId: string, payoutId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1PayoutsRetrieve.');
        }


        // verify required parameter 'payoutId' is not null or undefined
        if (payoutId === null || payoutId === undefined) {
            throw new RequiredError('Required parameter payoutId was null or undefined when calling v1PayoutsRetrieve.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/payouts/{payoutId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'payoutId' + '}', encodeURIComponent(String(payoutId)));

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

}

export class PayoutApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PayoutsCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PayoutsCreate(response: ResponseContext): Promise<Payout > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Payout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Payout", ""
            ) as Payout;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Payout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Payout", ""
            ) as Payout;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PayoutsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PayoutsList(response: ResponseContext): Promise<CursorPagePayout > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CursorPagePayout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CursorPagePayout", ""
            ) as CursorPagePayout;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CursorPagePayout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CursorPagePayout", ""
            ) as CursorPagePayout;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PayoutsRetrieve
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PayoutsRetrieve(response: ResponseContext): Promise<Payout > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Payout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Payout", ""
            ) as Payout;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Payout = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Payout", ""
            ) as Payout;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
