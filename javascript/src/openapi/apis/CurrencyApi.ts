// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration } from "../configuration";
import { HttpMethod, RequestContext, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { CryptoCurrency } from "../models/CryptoCurrency";
import { FiatCurrency } from "../models/FiatCurrency";
import { Rate } from "../models/Rate";

/**
 * no description
 */
export class CurrencyApiRequestFactory extends BaseAPIRequestFactory {

  /**
   * List available cryptocurrencies
   * List available cryptocurrencies
   * @param appId App ID
   * @param _options
   */
  public async v1CurrenciesListCrypto(appId: string, _options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("Required parameter appId was null or undefined when calling v1CurrenciesListCrypto.");
    }


    // Path Params
    const localVarPath = "/api/v1/apps/{appId}/currencies/crypto"
      .replace("{" + "appId" + "}", encodeURIComponent(String(appId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    const randomId = Math.floor(Math.random() * Math.pow(2, 32));
    requestContext.setHeaderParam("pay-req-id", randomId.toString());

    // Query Params

    // Header Params

    // Form Params


    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["ApiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = _config.authMethods["SignatureAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * List available fiat currencies
   * List available fiat currencies
   * @param appId App ID
   * @param _options
   */
  public async v1CurrenciesListFlat(appId: string, _options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("Required parameter appId was null or undefined when calling v1CurrenciesListFlat.");
    }


    // Path Params
    const localVarPath = "/api/v1/apps/{appId}/currencies/fiat"
      .replace("{" + "appId" + "}", encodeURIComponent(String(appId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    const randomId = Math.floor(Math.random() * Math.pow(2, 32));
    requestContext.setHeaderParam("pay-req-id", randomId.toString());

    // Query Params

    // Header Params

    // Form Params


    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["ApiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = _config.authMethods["SignatureAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Get exchange rate
   * Get exchange rate
   * @param appId App ID
   * @param from From currency
   * @param to To currency
   * @param _options
   */
  public async v1CurrenciesRetrieveRate(appId: string, from: string, to: string, _options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("Required parameter appId was null or undefined when calling v1CurrenciesRetrieveRate.");
    }


    // verify required parameter 'from' is not null or undefined
    if (from === null || from === undefined) {
      throw new RequiredError("Required parameter from was null or undefined when calling v1CurrenciesRetrieveRate.");
    }


    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new RequiredError("Required parameter to was null or undefined when calling v1CurrenciesRetrieveRate.");
    }


    // Path Params
    const localVarPath = "/api/v1/apps/{appId}/currencies/rate"
      .replace("{" + "appId" + "}", encodeURIComponent(String(appId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    const randomId = Math.floor(Math.random() * Math.pow(2, 32));
    requestContext.setHeaderParam("pay-req-id", randomId.toString());

    // Query Params
    if (from !== undefined) {
      requestContext.setQueryParam("from", ObjectSerializer.serialize(from, "string", ""));
    }
    if (to !== undefined) {
      requestContext.setQueryParam("to", ObjectSerializer.serialize(to, "string", ""));
    }

    // Header Params

    // Form Params


    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["ApiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    authMethod = _config.authMethods["SignatureAuth"];
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
  public async v1CurrenciesListCrypto(response: ResponseContext): Promise<Array<CryptoCurrency>> {
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

    const body = await response.body.text();
    throw new ApiException<string>(response.httpStatusCode, body);
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to v1CurrenciesListFlat
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async v1CurrenciesListFlat(response: ResponseContext): Promise<Array<FiatCurrency>> {
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

    const body = await response.body.text();
    throw new ApiException<string>(response.httpStatusCode, body);
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to v1CurrenciesRetrieveRate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async v1CurrenciesRetrieveRate(response: ResponseContext): Promise<Array<Rate>> {
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

    const body = await response.body.text();
    throw new ApiException<string>(response.httpStatusCode, body);
  }

}
