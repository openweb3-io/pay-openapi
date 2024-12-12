// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration } from "../configuration";
import { HttpMethod, RequestContext, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { CreateInvoiceRequest } from "../models/CreateInvoiceRequest";
import { PageInvoice } from "../models/PageInvoice";
import { Invoice } from "../models/Invoice";

/**
 * no description
 */
export class InvoiceApiRequestFactory extends BaseAPIRequestFactory {

  /**
   * Create an invoice
   * Create an invoice
   * @param appId App ID
   * @param createInvoiceRequest Request body
   * @param _options
   */
  public async v1InvoicesCreate(appId: string, createInvoiceRequest: CreateInvoiceRequest, _options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("Required parameter appId was null or undefined when calling v1InvoicesCreate.");
    }


    // verify required parameter 'createInvoiceRequest' is not null or undefined
    if (createInvoiceRequest === null || createInvoiceRequest === undefined) {
      throw new RequiredError("Required parameter createInvoiceRequest was null or undefined when calling v1InvoicesCreate.");
    }


    // Path Params
    const localVarPath = "/api/v1/apps/{appId}/invoices"
      .replace("{" + "appId" + "}", encodeURIComponent(String(appId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    const randomId = Math.floor(Math.random() * Math.pow(2, 32));
    requestContext.setHeaderParam("pay-req-id", randomId.toString());

    // Query Params

    // Header Params

    // Form Params


    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createInvoiceRequest, "CreateInvoiceRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

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
   * List invoices
   * List invoices
   * @param appId App ID
   * @param cursor Cursor
   * @param limit Limit
   * @param ordering Ordering
   * @param _options
   */
  public async v1InvoicesList(appId: string, cursor?: string, limit?: number, ordering?: string, _options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("Required parameter appId was null or undefined when calling v1InvoicesList.");
    }


    // Path Params
    const localVarPath = "/api/v1/apps/{appId}/invoices"
      .replace("{" + "appId" + "}", encodeURIComponent(String(appId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    const randomId = Math.floor(Math.random() * Math.pow(2, 32));
    requestContext.setHeaderParam("pay-req-id", randomId.toString());

    // Query Params
    if (cursor !== undefined) {
      requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
    }
    if (limit !== undefined) {
      requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
    }
    if (ordering !== undefined) {
      requestContext.setQueryParam("ordering", ObjectSerializer.serialize(ordering, "string", ""));
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

  /**
   * Retrieve an invoice
   * Retrieve an invoice
   * @param appId App ID
   * @param invoiceId Invoice ID / UID
   * @param _options
   */
  public async v1InvoicesRetrieve(appId: string, invoiceId: string, _options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'appId' is not null or undefined
    if (appId === null || appId === undefined) {
      throw new RequiredError("Required parameter appId was null or undefined when calling v1InvoicesRetrieve.");
    }


    // verify required parameter 'invoiceId' is not null or undefined
    if (invoiceId === null || invoiceId === undefined) {
      throw new RequiredError("Required parameter invoiceId was null or undefined when calling v1InvoicesRetrieve.");
    }


    // Path Params
    const localVarPath = "/api/v1/apps/{appId}/invoices/{invoiceId}"
      .replace("{" + "appId" + "}", encodeURIComponent(String(appId)))
      .replace("{" + "invoiceId" + "}", encodeURIComponent(String(invoiceId)));

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

}

export class InvoiceApiResponseProcessor {

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to v1InvoicesCreate
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async v1InvoicesCreate(response: ResponseContext): Promise<Invoice> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Invoice = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Invoice", ""
      ) as Invoice;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Invoice = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Invoice", ""
      ) as Invoice;
      return body;
    }

    const body = await response.body.text();
    throw new ApiException<string>(response.httpStatusCode, body);
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to v1InvoicesList
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async v1InvoicesList(response: ResponseContext): Promise<PageInvoice> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: PageInvoice = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CursorPageInvoice", ""
      ) as PageInvoice;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: PageInvoice = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CursorPageInvoice", ""
      ) as PageInvoice;
      return body;
    }

    const body = await response.body.text();
    throw new ApiException<string>(response.httpStatusCode, body);
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to v1InvoicesRetrieve
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async v1InvoicesRetrieve(response: ResponseContext): Promise<Invoice> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);

    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: Invoice = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Invoice", ""
      ) as Invoice;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Invoice = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Invoice", ""
      ) as Invoice;
      return body;
    }

    const body = await response.body.text();
    throw new ApiException<string>(response.httpStatusCode, body);
  }

}
