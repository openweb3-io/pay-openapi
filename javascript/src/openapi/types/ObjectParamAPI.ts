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

export interface CurrencyApiV1CurrenciesListCryptoRequest {
  /**
   * App ID
   * @type string
   * @memberof CurrencyApiv1CurrenciesListCrypto
   */
  appId: string;
}

export interface CurrencyApiV1CurrenciesListFlatRequest {
  /**
   * App ID
   * @type string
   * @memberof CurrencyApiv1CurrenciesListFlat
   */
  appId: string;
}

export interface CurrencyApiV1CurrenciesRetrieveRateRequest {
  /**
   * App ID
   * @type string
   * @memberof CurrencyApiv1CurrenciesRetrieveRate
   */
  appId: string;
  /**
   * From currency
   * @type string
   * @memberof CurrencyApiv1CurrenciesRetrieveRate
   */
  from: string;
  /**
   * To currency
   * @type string
   * @memberof CurrencyApiv1CurrenciesRetrieveRate
   */
  to: string;
}

export class ObjectCurrencyApi {
  private api: ObservableCurrencyApi;

  public constructor(configuration: Configuration, requestFactory?: CurrencyApiRequestFactory, responseProcessor?: CurrencyApiResponseProcessor) {
    this.api = new ObservableCurrencyApi(configuration, requestFactory, responseProcessor);
  }

  /**
   * List available cryptocurrencies
   * List available cryptocurrencies
   * @param param the request object
   * @param options
   */
  public v1CurrenciesListCrypto(param: CurrencyApiV1CurrenciesListCryptoRequest, options?: Configuration): Promise<Array<CryptoCurrency>> {
    return this.api.v1CurrenciesListCrypto(param.appId, options).toPromise();
  }

  /**
   * List available fiat currencies
   * List available fiat currencies
   * @param param the request object
   * @param options
   */
  public v1CurrenciesListFlat(param: CurrencyApiV1CurrenciesListFlatRequest, options?: Configuration): Promise<Array<FiatCurrency>> {
    return this.api.v1CurrenciesListFlat(param.appId, options).toPromise();
  }

  /**
   * Get exchange rate
   * Get exchange rate
   * @param param the request object
   * @param options
   */
  public v1CurrenciesRetrieveRate(param: CurrencyApiV1CurrenciesRetrieveRateRequest, options?: Configuration): Promise<Array<Rate>> {
    return this.api.v1CurrenciesRetrieveRate(param.appId, param.from, param.to, options).toPromise();
  }

}

export interface InvoiceApiV1InvoicesCreateRequest {
  /**
   * App ID
   * @type string
   * @memberof InvoiceApiv1InvoicesCreate
   */
  appId: string;
  /**
   * Request body
   * @type CreateInvoiceRequest
   * @memberof InvoiceApiv1InvoicesCreate
   */
  createInvoiceRequest: CreateInvoiceRequest;
}

export interface InvoiceApiV1InvoicesListRequest {
  /**
   * App ID
   * @type string
   * @memberof InvoiceApiv1InvoicesList
   */
  appId: string;
  /**
   * Cursor
   * @type string
   * @memberof InvoiceApiv1InvoicesList
   */
  cursor?: string;
  /**
   * Limit
   * @type number
   * @memberof InvoiceApiv1InvoicesList
   */
  limit?: number;
  /**
   * Ordering
   * @type string
   * @memberof InvoiceApiv1InvoicesList
   */
  ordering?: string;
}

export interface InvoiceApiV1InvoicesRetrieveRequest {
  /**
   * App ID
   * @type string
   * @memberof InvoiceApiv1InvoicesRetrieve
   */
  appId: string;
  /**
   * Invoice ID / UID
   * @type string
   * @memberof InvoiceApiv1InvoicesRetrieve
   */
  invoiceId: string;
}

export class ObjectInvoiceApi {
  private api: ObservableInvoiceApi;

  public constructor(configuration: Configuration, requestFactory?: InvoiceApiRequestFactory, responseProcessor?: InvoiceApiResponseProcessor) {
    this.api = new ObservableInvoiceApi(configuration, requestFactory, responseProcessor);
  }

  /**
   * Create an invoice
   * Create an invoice
   * @param param the request object
   * @param options
   */
  public v1InvoicesCreate(param: InvoiceApiV1InvoicesCreateRequest, options?: Configuration): Promise<Invoice> {
    return this.api.v1InvoicesCreate(param.appId, param.createInvoiceRequest, options).toPromise();
  }

  /**
   * List invoices
   * List invoices
   * @param param the request object
   * @param options
   */
  public v1InvoicesList(param: InvoiceApiV1InvoicesListRequest, options?: Configuration): Promise<PageInvoice> {
    return this.api.v1InvoicesList(param.appId, param.cursor, param.limit, param.ordering, options).toPromise();
  }

  /**
   * Retrieve an invoice
   * Retrieve an invoice
   * @param param the request object
   * @param options
   */
  public v1InvoicesRetrieve(param: InvoiceApiV1InvoicesRetrieveRequest, options?: Configuration): Promise<Invoice> {
    return this.api.v1InvoicesRetrieve(param.appId, param.invoiceId, options).toPromise();
  }

}

export interface WebhookApiV1EndpointsCreateRequest {
  /**
   * App ID
   * @type string
   * @memberof WebhookApiv1EndpointsCreate
   */
  appId: string;
  /**
   * Request body
   * @type CreateWebhook
   * @memberof WebhookApiv1EndpointsCreate
   */
  createWebhook: CreateWebhook;
}

export interface WebhookApiV1EndpointsDeleteRequest {
  /**
   * App ID
   * @type string
   * @memberof WebhookApiv1EndpointsDelete
   */
  appId: string;
  /**
   * Endpoint ID
   * @type string
   * @memberof WebhookApiv1EndpointsDelete
   */
  endpointId: string;
}

export interface WebhookApiV1EndpointsListRequest {
  /**
   * App ID
   * @type string
   * @memberof WebhookApiv1EndpointsList
   */
  appId: string;
  /**
   * Cursor
   * @type string
   * @memberof WebhookApiv1EndpointsList
   */
  cursor?: string;
  /**
   * Limit
   * @type number
   * @memberof WebhookApiv1EndpointsList
   */
  limit?: number;
  /**
   * Ordering
   * @type string
   * @memberof WebhookApiv1EndpointsList
   */
  ordering?: string;
}

export interface WebhookApiV1EndpointsRetrieveRequest {
  /**
   * App ID
   * @type string
   * @memberof WebhookApiv1EndpointsRetrieve
   */
  appId: string;
  /**
   * Endpoint ID
   * @type string
   * @memberof WebhookApiv1EndpointsRetrieve
   */
  endpointId: string;
}

export interface WebhookApiV1EndpointsUpdateRequest {
  /**
   * App ID
   * @type string
   * @memberof WebhookApiv1EndpointsUpdate
   */
  appId: string;
  /**
   * Endpoint ID
   * @type string
   * @memberof WebhookApiv1EndpointsUpdate
   */
  endpointId: string;
  /**
   * Request body
   * @type UpdateWebhook
   * @memberof WebhookApiv1EndpointsUpdate
   */
  updateWebhook: UpdateWebhook;
}

export class ObjectWebhookApi {
  private api: ObservableWebhookApi;

  public constructor(configuration: Configuration, requestFactory?: WebhookApiRequestFactory, responseProcessor?: WebhookApiResponseProcessor) {
    this.api = new ObservableWebhookApi(configuration, requestFactory, responseProcessor);
  }

  /**
   * Create a webhook endpoint
   * Create a webhook endpoint
   * @param param the request object
   * @param options
   */
  public v1EndpointsCreate(param: WebhookApiV1EndpointsCreateRequest, options?: Configuration): Promise<Webhook> {
    return this.api.v1EndpointsCreate(param.appId, param.createWebhook, options).toPromise();
  }

  /**
   * Delete a webhook endpoint
   * Delete a webhook endpoint
   * @param param the request object
   * @param options
   */
  public v1EndpointsDelete(param: WebhookApiV1EndpointsDeleteRequest, options?: Configuration): Promise<Webhook> {
    return this.api.v1EndpointsDelete(param.appId, param.endpointId, options).toPromise();
  }

  /**
   * List webhook endpoints
   * List webhook endpoints
   * @param param the request object
   * @param options
   */
  public v1EndpointsList(param: WebhookApiV1EndpointsListRequest, options?: Configuration): Promise<CursorPageWebhook> {
    return this.api.v1EndpointsList(param.appId, param.cursor, param.limit, param.ordering, options).toPromise();
  }

  /**
   * Retrieve a webhook endpoint
   * Retrieve a webhook endpoint
   * @param param the request object
   * @param options
   */
  public v1EndpointsRetrieve(param: WebhookApiV1EndpointsRetrieveRequest, options?: Configuration): Promise<Webhook> {
    return this.api.v1EndpointsRetrieve(param.appId, param.endpointId, options).toPromise();
  }

  /**
   * Update a webhook endpoint
   * Update a webhook endpoint
   * @param param the request object
   * @param options
   */
  public v1EndpointsUpdate(param: WebhookApiV1EndpointsUpdateRequest, options?: Configuration): Promise<Webhook> {
    return this.api.v1EndpointsUpdate(param.appId, param.endpointId, param.updateWebhook, options).toPromise();
  }

}
