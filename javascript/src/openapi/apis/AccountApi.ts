// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { HTTPValidationError } from '../models/HTTPValidationError';
import { HttpErrorOut } from '../models/HttpErrorOut';
import { ListResponseAccountOut } from '../models/ListResponseAccountOut';

/**
 * no description
 */
export class AccountApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List accounts.
     * List Accounts
     * @param limit Limit the number of returned items
     * @param offset Specifying the amount of excluded from a response the first N items
     */
    public async v1AccountList(limit?: number, offset?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api/v1/accounts';

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

export class AccountApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1AccountList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1AccountList(response: ResponseContext): Promise<ListResponseAccountOut > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListResponseAccountOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponseAccountOut", ""
            ) as ListResponseAccountOut;
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
            const body: ListResponseAccountOut = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListResponseAccountOut", ""
            ) as ListResponseAccountOut;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
