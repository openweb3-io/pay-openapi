// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CryptoCurrency } from '../models/CryptoCurrency';
import { FiatCurrency } from '../models/FiatCurrency';
import { Rate } from '../models/Rate';

/**
 * no description
 */
export class CurrencyApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List available cryptocurrencies
     * List available cryptocurrencies
     * @param appId App ID
     */
    public async v1CurrenciesListCrypto(appId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1CurrenciesListCrypto.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{app_id}/currencies/crypto'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

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
     * List available fiat currencies
     * List available fiat currencies
     * @param appId App ID
     */
    public async v1CurrenciesListFlat(appId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1CurrenciesListFlat.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{app_id}/currencies/fiat'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

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
     * Get exchange rate
     * Get exchange rate
     * @param appId App ID
     * @param fromCurrency From currency
     * @param toCurrency To currency
     */
    public async v1CurrenciesRetrieveRate(appId: string, fromCurrency: string, toCurrency: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'appId' is not null or undefined
        if (appId === null || appId === undefined) {
            throw new RequiredError('Required parameter appId was null or undefined when calling v1CurrenciesRetrieveRate.');
        }


        // verify required parameter 'fromCurrency' is not null or undefined
        if (fromCurrency === null || fromCurrency === undefined) {
            throw new RequiredError('Required parameter fromCurrency was null or undefined when calling v1CurrenciesRetrieveRate.');
        }


        // verify required parameter 'toCurrency' is not null or undefined
        if (toCurrency === null || toCurrency === undefined) {
            throw new RequiredError('Required parameter toCurrency was null or undefined when calling v1CurrenciesRetrieveRate.');
        }


        // Path Params
        const localVarPath = '/api/v1/apps/{app_id}/currencies/rate'
            .replace('{' + 'app_id' + '}', encodeURIComponent(String(appId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        const randomId = Math.floor(Math.random() * Math.pow(2, 32))
        requestContext.setHeaderParam("pay-req-id", randomId.toString())

        // Query Params
        if (fromCurrency !== undefined) {
            requestContext.setQueryParam("fromCurrency", ObjectSerializer.serialize(fromCurrency, "string", ""));
        }
        if (toCurrency !== undefined) {
            requestContext.setQueryParam("toCurrency", ObjectSerializer.serialize(toCurrency, "string", ""));
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

export class CurrencyApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CurrenciesListCrypto
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CurrenciesListCrypto(response: ResponseContext): Promise<Array<CryptoCurrency> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CryptoCurrency> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CryptoCurrency>", ""
            ) as Array<CryptoCurrency>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CryptoCurrency> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CryptoCurrency>", ""
            ) as Array<CryptoCurrency>;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CurrenciesListFlat
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CurrenciesListFlat(response: ResponseContext): Promise<Array<FiatCurrency> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<FiatCurrency> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FiatCurrency>", ""
            ) as Array<FiatCurrency>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<FiatCurrency> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FiatCurrency>", ""
            ) as Array<FiatCurrency>;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1CurrenciesRetrieveRate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1CurrenciesRetrieveRate(response: ResponseContext): Promise<Array<Rate> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Rate> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Rate>", ""
            ) as Array<Rate>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Rate> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Rate>", ""
            ) as Array<Rate>;
            return body;
        }

        let body = await response.body.text();
        throw new ApiException<string>(response.httpStatusCode, body);
    }

}
