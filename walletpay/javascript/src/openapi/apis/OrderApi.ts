// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { HttpErrorOut } from '../models/HttpErrorOut';
import { ListResponseOrderOut } from '../models/ListResponseOrderOut';
import { OrderIn } from '../models/OrderIn';
import { OrderOut } from '../models/OrderOut';

/**
 * no description
 */
export class OrderApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new order.
     * Create Order
     * @param appId Specified the app id.
     * @param orderIn 
     */
    public async v1OrderCreate(appId: string, orderIn: OrderIn, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1OrderCreate.');
        }


        // verify required parameter 'orderIn' is not null or undefined
        if (orderIn === null || orderIn === undefined) {
            throw new RequiredError('Required parameter orderIn was null or undefined when calling v1OrderCreate.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/orders'
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
            ObjectSerializer.serialize(orderIn, "OrderIn", ""),
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
     * List orders.
     * List Orders
     * @param appId Specified the app id.
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     * @param walletId Optional wallet id
     * @param accountId Optional account id
     */
    public async v1OrderList(appId: string, size?: number, page?: number, walletId?: string, accountId?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1OrderList.');
        }






        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/orders'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "uint64"));
        }
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }
        if (walletId !== undefined) {
            requestContext.setQueryParam("wallet_id", ObjectSerializer.serialize(walletId, "string", ""));
        }
        if (accountId !== undefined) {
            requestContext.setQueryParam("account_id", ObjectSerializer.serialize(accountId, "string", ""));
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

}

export class OrderApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrderCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrderCreate(response: ResponseContext): Promise<OrderOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderOut", ""
            ) as OrderOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: OrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderOut", ""
            ) as OrderOut;
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
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OrderOut", ""
            ) as OrderOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1OrderList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1OrderList(response: ResponseContext): Promise<ListResponseOrderOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListResponseOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponseOrderOut", ""
            ) as ListResponseOrderOut;
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
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: HttpErrorOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpErrorOut", ""
            ) as HttpErrorOut;
            throw new ApiException<HttpErrorOut>(429, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListResponseOrderOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponseOrderOut", ""
            ) as ListResponseOrderOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
