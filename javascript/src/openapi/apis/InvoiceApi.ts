// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { HTTPValidationError } from '../models/HTTPValidationError';
import { HttpErrorOut } from '../models/HttpErrorOut';
import { InvoiceIn } from '../models/InvoiceIn';
import { InvoiceOut } from '../models/InvoiceOut';
import { ListResponseInvoiceOut } from '../models/ListResponseInvoiceOut';

/**
 * no description
 */
export class InvoiceApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new invoice.
     * Create invoice
     * @param appId Specified the app id.
     * @param invoiceIn 
     */
    public async v1InvoiceCreate(appId: string, invoiceIn: InvoiceIn, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1InvoiceCreate.');
        }


        // verify required parameter 'invoiceIn' is not null or undefined
        if (invoiceIn === null || invoiceIn === undefined) {
            throw new RequiredError('Required parameter invoiceIn was null or undefined when calling v1InvoiceCreate.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/invoices'
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
            ObjectSerializer.serialize(invoiceIn, "InvoiceIn", ""),
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
     * retrieve a specified webhook endpoint.
     * Get invoice
     * @param appId Specified the app id.
     * @param idOrUid Specified the invoice id or invoice uid.
     */
    public async v1InvoiceGet(appId: string, idOrUid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1InvoiceGet.');
        }


        // verify required parameter 'idOrUid' is not null or undefined
        if (idOrUid === null || idOrUid === undefined) {
            throw new RequiredError('Required parameter idOrUid was null or undefined when calling v1InvoiceGet.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/invoices/{idOrUid}'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)))
            .replace('{' + 'idOrUid' + '}', encodeURIComponent(String(idOrUid)));

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
     * List invoices.
     * List invoices
     * @param appId Specified the app id.
     * @param limit Limit the number of returned items
     * @param offset Specifying the amount of excluded from a response the first N invoices
     * @param userId Optional invoice user id
     * @param channel Channel of the invoice
     */
    public async v1InvoiceList(appId: string, limit?: number, offset?: number, userId?: string, channel?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1InvoiceList.');
        }






        // Path Params
        const localVarPath = '/api/v1/apps/{appId}/invoices'
            .replace('{' + 'appId' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "uint64"));
        }
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }
        if (userId !== undefined) {
            requestContext.setQueryParam("userId", ObjectSerializer.serialize(userId, "string", ""));
        }
        if (channel !== undefined) {
            requestContext.setQueryParam("channel", ObjectSerializer.serialize(channel, "string", ""));
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

export class InvoiceApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1InvoiceCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1InvoiceCreate(response: ResponseContext): Promise<InvoiceOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InvoiceOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceOut", ""
            ) as InvoiceOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InvoiceOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceOut", ""
            ) as InvoiceOut;
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
            const body: InvoiceOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceOut", ""
            ) as InvoiceOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1InvoiceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1InvoiceGet(response: ResponseContext): Promise<InvoiceOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InvoiceOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceOut", ""
            ) as InvoiceOut;
            return body;
        }
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InvoiceOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceOut", ""
            ) as InvoiceOut;
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
            const body: InvoiceOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InvoiceOut", ""
            ) as InvoiceOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1InvoiceList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1InvoiceList(response: ResponseContext): Promise<ListResponseInvoiceOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListResponseInvoiceOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponseInvoiceOut", ""
            ) as ListResponseInvoiceOut;
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
            const body: ListResponseInvoiceOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponseInvoiceOut", ""
            ) as ListResponseInvoiceOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
