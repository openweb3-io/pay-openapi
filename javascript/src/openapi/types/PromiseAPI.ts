import { Configuration } from "../configuration";

import { CreateInvoiceRequest } from "../models/CreateInvoiceRequest";
import { CreateWebhook } from "../models/CreateWebhook";
import { CryptoCurrency } from "../models/CryptoCurrency";
import { PageInvoice } from "../models/PageInvoice";
import { CursorPageWebhook } from "../models/CursorPageWebhook";
import { FiatCurrency } from "../models/FiatCurrency";
import { Invoice } from "../models/Invoice";
import { Rate } from "../models/Rate";
import { UpdateWebhook } from "../models/UpdateWebhook";
import { Webhook } from "../models/Webhook";
import { ObservableCurrencyApi, ObservableInvoiceApi, ObservableWebhookApi } from "./ObservableAPI";

import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor } from "../apis/CurrencyApi";

import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor } from "../apis/InvoiceApi";

import { WebhookApiRequestFactory, WebhookApiResponseProcessor } from "../apis/WebhookApi";

export class PromiseCurrencyApi {
  private api: ObservableCurrencyApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: CurrencyApiRequestFactory,
    responseProcessor?: CurrencyApiResponseProcessor
  ) {
    this.api = new ObservableCurrencyApi(configuration, requestFactory, responseProcessor);
  }

  /**
   * List available cryptocurrencies
   * List available cryptocurrencies
   * @param appId App ID
   * @param _options
   */
  public v1CurrenciesListCrypto(appId: string, _options?: Configuration): Promise<Array<CryptoCurrency>> {
    const result = this.api.v1CurrenciesListCrypto(appId, _options);
    return result.toPromise();
  }

  /**
   * List available fiat currencies
   * List available fiat currencies
   * @param appId App ID
   * @param _options
   */
  public v1CurrenciesListFlat(appId: string, _options?: Configuration): Promise<Array<FiatCurrency>> {
    const result = this.api.v1CurrenciesListFlat(appId, _options);
    return result.toPromise();
  }

  /**
   * Get exchange rate
   * Get exchange rate
   * @param appId App ID
   * @param from From currency
   * @param to To currency
   * @param _options
   */
  public v1CurrenciesRetrieveRate(appId: string, from: string, to: string, _options?: Configuration): Promise<Array<Rate>> {
    const result = this.api.v1CurrenciesRetrieveRate(appId, from, to, _options);
    return result.toPromise();
  }


}


export class PromiseInvoiceApi {
  private api: ObservableInvoiceApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: InvoiceApiRequestFactory,
    responseProcessor?: InvoiceApiResponseProcessor
  ) {
    this.api = new ObservableInvoiceApi(configuration, requestFactory, responseProcessor);
  }

  /**
   * Create an invoice
   * Create an invoice
   * @param appId App ID
   * @param createInvoiceRequest Request body
   * @param _options
   */
  public v1InvoicesCreate(appId: string, createInvoiceRequest: CreateInvoiceRequest, _options?: Configuration): Promise<Invoice> {
    const result = this.api.v1InvoicesCreate(appId, createInvoiceRequest, _options);
    return result.toPromise();
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
  public v1InvoicesList(appId: string, cursor?: string, limit?: number, ordering?: string, _options?: Configuration): Promise<PageInvoice> {
    const result = this.api.v1InvoicesList(appId, cursor, limit, ordering, _options);
    return result.toPromise();
  }

  /**
   * Retrieve an invoice
   * Retrieve an invoice
   * @param appId App ID
   * @param invoiceId Invoice ID / UID
   * @param _options
   */
  public v1InvoicesRetrieve(appId: string, invoiceId: string, _options?: Configuration): Promise<Invoice> {
    const result = this.api.v1InvoicesRetrieve(appId, invoiceId, _options);
    return result.toPromise();
  }


}


export class PromiseWebhookApi {
  private api: ObservableWebhookApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: WebhookApiRequestFactory,
    responseProcessor?: WebhookApiResponseProcessor
  ) {
    this.api = new ObservableWebhookApi(configuration, requestFactory, responseProcessor);
  }

  /**
   * Create a webhook endpoint
   * Create a webhook endpoint
   * @param appId App ID
   * @param createWebhook Request body
   * @param _options
   */
  public v1EndpointsCreate(appId: string, createWebhook: CreateWebhook, _options?: Configuration): Promise<Webhook> {
    const result = this.api.v1EndpointsCreate(appId, createWebhook, _options);
    return result.toPromise();
  }

  /**
   * Delete a webhook endpoint
   * Delete a webhook endpoint
   * @param appId App ID
   * @param endpointId Endpoint ID
   * @param _options
   */
  public v1EndpointsDelete(appId: string, endpointId: string, _options?: Configuration): Promise<Webhook> {
    const result = this.api.v1EndpointsDelete(appId, endpointId, _options);
    return result.toPromise();
  }

  /**
   * List webhook endpoints
   * List webhook endpoints
   * @param appId App ID
   * @param cursor Cursor
   * @param limit Limit
   * @param ordering Ordering
   * @param _options
   */
  public v1EndpointsList(appId: string, cursor?: string, limit?: number, ordering?: string, _options?: Configuration): Promise<CursorPageWebhook> {
    const result = this.api.v1EndpointsList(appId, cursor, limit, ordering, _options);
    return result.toPromise();
  }

  /**
   * Retrieve a webhook endpoint
   * Retrieve a webhook endpoint
   * @param appId App ID
   * @param endpointId Endpoint ID
   * @param _options
   */
  public v1EndpointsRetrieve(appId: string, endpointId: string, _options?: Configuration): Promise<Webhook> {
    const result = this.api.v1EndpointsRetrieve(appId, endpointId, _options);
    return result.toPromise();
  }

  /**
   * Update a webhook endpoint
   * Update a webhook endpoint
   * @param appId App ID
   * @param endpointId Endpoint ID
   * @param updateWebhook Request body
   * @param _options
   */
  public v1EndpointsUpdate(appId: string, endpointId: string, updateWebhook: UpdateWebhook, _options?: Configuration): Promise<Webhook> {
    const result = this.api.v1EndpointsUpdate(appId, endpointId, updateWebhook, _options);
    return result.toPromise();
  }


}



