import { RequestContext, ResponseContext } from "../http/http";
import { Configuration } from "../configuration";
import { from, map, mergeMap, Observable, of } from "../rxjsStub";
import { CreateInvoiceRequest } from "../models/CreateInvoiceRequest";
import { CreateWebhook } from "../models/CreateWebhook";
import { CryptoCurrency } from "../models/CryptoCurrency";
import { CursorPageInvoice } from "../models/CursorPageInvoice";
import { CursorPageWebhook } from "../models/CursorPageWebhook";
import { FiatCurrency } from "../models/FiatCurrency";
import { Invoice } from "../models/Invoice";
import { Rate } from "../models/Rate";
import { UpdateWebhook } from "../models/UpdateWebhook";
import { Webhook } from "../models/Webhook";

import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor } from "../apis/CurrencyApi";
import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor } from "../apis/InvoiceApi";
import { WebhookApiRequestFactory, WebhookApiResponseProcessor } from "../apis/WebhookApi";

export class ObservableCurrencyApi {
  private requestFactory: CurrencyApiRequestFactory;
  private responseProcessor: CurrencyApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: CurrencyApiRequestFactory,
    responseProcessor?: CurrencyApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new CurrencyApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new CurrencyApiResponseProcessor();
  }

  /**
   * List available cryptocurrencies
   * List available cryptocurrencies
   * @param appId App ID
   * @param _options
   */
  public v1CurrenciesListCrypto(appId: string, _options?: Configuration): Observable<Array<CryptoCurrency>> {
    const requestContextPromise = this.requestFactory.v1CurrenciesListCrypto(appId, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrenciesListCrypto(rsp)));
    }));
  }

  /**
   * List available fiat currencies
   * List available fiat currencies
   * @param appId App ID
   * @param _options
   */
  public v1CurrenciesListFlat(appId: string, _options?: Configuration): Observable<Array<FiatCurrency>> {
    const requestContextPromise = this.requestFactory.v1CurrenciesListFlat(appId, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrenciesListFlat(rsp)));
    }));
  }

  /**
   * Get exchange rate
   * Get exchange rate
   * @param appId App ID
   * @param fromCurrency
   * @param toCurrency
   * @param _options
   */
  public v1CurrenciesRetrieveRate(appId: string, fromCurrency: string, toCurrency: string, _options?: Configuration): Observable<Array<Rate>> {
    const requestContextPromise = this.requestFactory.v1CurrenciesRetrieveRate(appId, fromCurrency, toCurrency, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrenciesRetrieveRate(rsp)));
    }));
  }

}

export class ObservableInvoiceApi {
  private requestFactory: InvoiceApiRequestFactory;
  private responseProcessor: InvoiceApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: InvoiceApiRequestFactory,
    responseProcessor?: InvoiceApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new InvoiceApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new InvoiceApiResponseProcessor();
  }

  /**
   * Create an invoice
   * Create an invoice
   * @param appId App ID
   * @param createInvoiceRequest Request body
   * @param _options
   */
  public v1InvoicesCreate(appId: string, createInvoiceRequest: CreateInvoiceRequest, _options?: Configuration): Observable<Invoice> {
    const requestContextPromise = this.requestFactory.v1InvoicesCreate(appId, createInvoiceRequest, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InvoicesCreate(rsp)));
    }));
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
  public v1InvoicesList(appId: string, cursor?: string, limit?: number, ordering?: string, _options?: Configuration): Observable<CursorPageInvoice> {
    const requestContextPromise = this.requestFactory.v1InvoicesList(appId, cursor, limit, ordering, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InvoicesList(rsp)));
    }));
  }

  /**
   * Retrieve an invoice
   * Retrieve an invoice
   * @param appId App ID
   * @param invoiceId Invoice ID / UID
   * @param _options
   */
  public v1InvoicesRetrieve(appId: string, invoiceId: string, _options?: Configuration): Observable<Invoice> {
    const requestContextPromise = this.requestFactory.v1InvoicesRetrieve(appId, invoiceId, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InvoicesRetrieve(rsp)));
    }));
  }

}

export class ObservableWebhookApi {
  private requestFactory: WebhookApiRequestFactory;
  private responseProcessor: WebhookApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: WebhookApiRequestFactory,
    responseProcessor?: WebhookApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory = requestFactory || new WebhookApiRequestFactory(configuration);
    this.responseProcessor = responseProcessor || new WebhookApiResponseProcessor();
  }

  /**
   * Create a webhook endpoint
   * Create a webhook endpoint
   * @param appId App ID
   * @param createWebhook Request body
   * @param _options
   */
  public v1EndpointsCreate(appId: string, createWebhook: CreateWebhook, _options?: Configuration): Observable<Webhook> {
    const requestContextPromise = this.requestFactory.v1EndpointsCreate(appId, createWebhook, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointsCreate(rsp)));
    }));
  }

  /**
   * Delete a webhook endpoint
   * Delete a webhook endpoint
   * @param appId App ID
   * @param endpointId Endpoint ID
   * @param _options
   */
  public v1EndpointsDelete(appId: string, endpointId: string, _options?: Configuration): Observable<Webhook> {
    const requestContextPromise = this.requestFactory.v1EndpointsDelete(appId, endpointId, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointsDelete(rsp)));
    }));
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
  public v1EndpointsList(appId: string, cursor?: string, limit?: number, ordering?: string, _options?: Configuration): Observable<CursorPageWebhook> {
    const requestContextPromise = this.requestFactory.v1EndpointsList(appId, cursor, limit, ordering, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointsList(rsp)));
    }));
  }

  /**
   * Retrieve a webhook endpoint
   * Retrieve a webhook endpoint
   * @param appId App ID
   * @param endpointId Endpoint ID
   * @param _options
   */
  public v1EndpointsRetrieve(appId: string, endpointId: string, _options?: Configuration): Observable<Webhook> {
    const requestContextPromise = this.requestFactory.v1EndpointsRetrieve(appId, endpointId, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointsRetrieve(rsp)));
    }));
  }

  /**
   * Update a webhook endpoint
   * Update a webhook endpoint
   * @param appId App ID
   * @param endpointId Endpoint ID
   * @param updateWebhook Request body
   * @param _options
   */
  public v1EndpointsUpdate(appId: string, endpointId: string, updateWebhook: UpdateWebhook, _options?: Configuration): Observable<Webhook> {
    const requestContextPromise = this.requestFactory.v1EndpointsUpdate(appId, endpointId, updateWebhook, _options);

    // build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    }

    return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).pipe(mergeMap((response: ResponseContext) => {
      let middlewarePostObservable = of(response);
      for (const middleware of this.configuration.middleware) {
        middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
      }
      return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointsUpdate(rsp)));
    }));
  }

}
