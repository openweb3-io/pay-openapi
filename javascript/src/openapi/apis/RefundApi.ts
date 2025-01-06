// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CreateRefund } from '../models/CreateRefund';
import { CursorPageRefund } from '../models/CursorPageRefund';
import { Refund } from '../models/Refund';

/**
 * no description
 */
export class RefundApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Refund invoice payment
     * Refund invoice payment
     * @param appId App ID
     * @param createRefund Request body
     */
    public async v1RefundsCreate(appId: string, createRefund: CreateRefund, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1RefundsCreate.');
        }


        // verify required parameter 'createRefund' is not null or undefined
        if (createRefund === null || createRefund === undefined) {
            throw new RequiredError('Required parameter createRefund was null or undefined when calling v1RefundsCreate.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/refunds'
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
            ObjectSerializer.serialize(createRefund, "CreateRefund", ""),
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
     * List refunds
     * List refunds
     * @param appId App ID
     * @param cursor Cursor
     * @param limit Limit
     */
    public async v1RefundsList(appId: string, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1RefundsList.');
        }




        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/refunds'
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
     * Retrieve a refund
     * Retrieve a refund
     * @param appId App ID
     * @param refundId Refund ID
     */
    public async v1RefundsRetrieve(appId: string, refundId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1RefundsRetrieve.');
        }


        // verify required parameter 'refundId' is not null or undefined
        if (refundId === null || refundId === undefined) {
            throw new RequiredError('Required parameter refundId was null or undefined when calling v1RefundsRetrieve.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/refunds/{refundId}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'refundId' + '}', encodeURIComponent(String(refundId)));

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

export class RefundApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1RefundsCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1RefundsCreate(response: ResponseContext): Promise<Refund > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Refund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Refund", ""
            ) as Refund;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Refund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Refund", ""
            ) as Refund;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1RefundsList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1RefundsList(response: ResponseContext): Promise<CursorPageRefund > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CursorPageRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CursorPageRefund", ""
            ) as CursorPageRefund;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CursorPageRefund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CursorPageRefund", ""
            ) as CursorPageRefund;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1RefundsRetrieve
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1RefundsRetrieve(response: ResponseContext): Promise<Refund > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Refund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Refund", ""
            ) as Refund;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Refund = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Refund", ""
            ) as Refund;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
