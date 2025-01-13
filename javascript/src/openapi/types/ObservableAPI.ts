import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CreateInvoiceRequest } from '../models/CreateInvoiceRequest';
import { CreatePayout } from '../models/CreatePayout';
import { CreateRefund } from '../models/CreateRefund';
import { CreateWebhook } from '../models/CreateWebhook';
import { CryptoCurrency } from '../models/CryptoCurrency';
import { CryptoCurrencyNetwork } from '../models/CryptoCurrencyNetwork';
import { CursorPagePayout } from '../models/CursorPagePayout';
import { CursorPageRefund } from '../models/CursorPageRefund';
import { CursorPageWebhook } from '../models/CursorPageWebhook';
import { FiatCurrency } from '../models/FiatCurrency';
import { Invoice } from '../models/Invoice';
import { PageInvoice } from '../models/PageInvoice';
import { Payout } from '../models/Payout';
import { Rate } from '../models/Rate';
import { Refund } from '../models/Refund';
import { UpdateWebhook } from '../models/UpdateWebhook';
import { Webhook } from '../models/Webhook';

import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor} from "../apis/CurrencyApi";
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
     */
    public v1CurrenciesListCrypto(appId: string, _options?: Configuration): Observable<Array<CryptoCurrency>> {
        const requestContextPromise = this.requestFactory.v1CurrenciesListCrypto(appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrenciesListCrypto(rsp)));
            }));
    }
 
    /**
     * List available fiat currencies
     * List available fiat currencies
     * @param appId App ID
     */
    public v1CurrenciesListFlat(appId: string, _options?: Configuration): Observable<Array<FiatCurrency>> {
        const requestContextPromise = this.requestFactory.v1CurrenciesListFlat(appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrenciesListFlat(rsp)));
            }));
    }
 
    /**
     * Get exchange rate
     * Get exchange rate
     * @param appId App ID
     * @param fromCurrency From currency
     * @param toCurrency To currency
     */
    public v1CurrenciesRetrieveRate(appId: string, fromCurrency: string, toCurrency: string, _options?: Configuration): Observable<Array<Rate>> {
        const requestContextPromise = this.requestFactory.v1CurrenciesRetrieveRate(appId, fromCurrency, toCurrency, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CurrenciesRetrieveRate(rsp)));
            }));
    }
 
}

import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";
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
     */
    public v1InvoicesCreate(appId: string, createInvoiceRequest: CreateInvoiceRequest, _options?: Configuration): Observable<Invoice> {
        const requestContextPromise = this.requestFactory.v1InvoicesCreate(appId, createInvoiceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InvoicesCreate(rsp)));
            }));
    }
 
    /**
     * List invoices
     * List invoices
     * @param appId App ID
     * @param channel 
     * @param userId 
     * @param offset 
     * @param limit 
     */
    public v1InvoicesList(appId: string, channel?: string, userId?: string, offset?: number, limit?: number, _options?: Configuration): Observable<PageInvoice> {
        const requestContextPromise = this.requestFactory.v1InvoicesList(appId, channel, userId, offset, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     */
    public v1InvoicesRetrieve(appId: string, invoiceId: string, _options?: Configuration): Observable<Invoice> {
        const requestContextPromise = this.requestFactory.v1InvoicesRetrieve(appId, invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InvoicesRetrieve(rsp)));
            }));
    }
 
}

import { PayoutApiRequestFactory, PayoutApiResponseProcessor} from "../apis/PayoutApi";
export class ObservablePayoutApi {
    private requestFactory: PayoutApiRequestFactory;
    private responseProcessor: PayoutApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PayoutApiRequestFactory,
        responseProcessor?: PayoutApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PayoutApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PayoutApiResponseProcessor();
    }

    /**
     * Payout to address
     * Payout to address
     * @param appId App ID
     * @param createPayout Request body
     */
    public v1PayoutsCreate(appId: string, createPayout: CreatePayout, _options?: Configuration): Observable<Payout> {
        const requestContextPromise = this.requestFactory.v1PayoutsCreate(appId, createPayout, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PayoutsCreate(rsp)));
            }));
    }
 
    /**
     * List payouts
     * List payouts
     * @param appId App ID
     * @param cursor Cursor
     * @param limit Limit
     */
    public v1PayoutsList(appId: string, cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPagePayout> {
        const requestContextPromise = this.requestFactory.v1PayoutsList(appId, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PayoutsList(rsp)));
            }));
    }
 
    /**
     * Retrieve a payout
     * Retrieve a payout
     * @param appId App ID
     * @param payoutId Payout ID
     */
    public v1PayoutsRetrieve(appId: string, payoutId: string, _options?: Configuration): Observable<Payout> {
        const requestContextPromise = this.requestFactory.v1PayoutsRetrieve(appId, payoutId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PayoutsRetrieve(rsp)));
            }));
    }
 
}

import { RefundApiRequestFactory, RefundApiResponseProcessor} from "../apis/RefundApi";
export class ObservableRefundApi {
    private requestFactory: RefundApiRequestFactory;
    private responseProcessor: RefundApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RefundApiRequestFactory,
        responseProcessor?: RefundApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RefundApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RefundApiResponseProcessor();
    }

    /**
     * Refund invoice payment
     * Refund invoice payment
     * @param appId App ID
     * @param createRefund Request body
     */
    public v1RefundsCreate(appId: string, createRefund: CreateRefund, _options?: Configuration): Observable<Refund> {
        const requestContextPromise = this.requestFactory.v1RefundsCreate(appId, createRefund, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RefundsCreate(rsp)));
            }));
    }
 
    /**
     * List refunds
     * List refunds
     * @param appId App ID
     * @param cursor Cursor
     * @param limit Limit
     */
    public v1RefundsList(appId: string, cursor?: string, limit?: number, _options?: Configuration): Observable<CursorPageRefund> {
        const requestContextPromise = this.requestFactory.v1RefundsList(appId, cursor, limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RefundsList(rsp)));
            }));
    }
 
    /**
     * Retrieve a refund
     * Retrieve a refund
     * @param appId App ID
     * @param refundId Refund ID
     */
    public v1RefundsRetrieve(appId: string, refundId: string, _options?: Configuration): Observable<Refund> {
        const requestContextPromise = this.requestFactory.v1RefundsRetrieve(appId, refundId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1RefundsRetrieve(rsp)));
            }));
    }
 
}

import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";
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
     */
    public v1EndpointsCreate(appId: string, createWebhook: CreateWebhook, _options?: Configuration): Observable<Webhook> {
        const requestContextPromise = this.requestFactory.v1EndpointsCreate(appId, createWebhook, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     */
    public v1EndpointsDelete(appId: string, endpointId: string, _options?: Configuration): Observable<Webhook> {
        const requestContextPromise = this.requestFactory.v1EndpointsDelete(appId, endpointId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointsDelete(rsp)));
            }));
    }
 
    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param appId App ID
     * @param limit 
     * @param cursor 
     */
    public v1EndpointsList(appId: string, limit: number, cursor?: string, _options?: Configuration): Observable<CursorPageWebhook> {
        const requestContextPromise = this.requestFactory.v1EndpointsList(appId, limit, cursor, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     */
    public v1EndpointsRetrieve(appId: string, endpointId: string, _options?: Configuration): Observable<Webhook> {
        const requestContextPromise = this.requestFactory.v1EndpointsRetrieve(appId, endpointId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     */
    public v1EndpointsUpdate(appId: string, endpointId: string, updateWebhook: UpdateWebhook, _options?: Configuration): Observable<Webhook> {
        const requestContextPromise = this.requestFactory.v1EndpointsUpdate(appId, endpointId, updateWebhook, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointsUpdate(rsp)));
            }));
    }
 
}
