import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

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
import { ObservableCurrencyApi } from './ObservableAPI';

import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor} from "../apis/CurrencyApi";
export class PromiseCurrencyApi {
    private api: ObservableCurrencyApi

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
     */
    public v1CurrenciesListCrypto(appId: string, _options?: Configuration): Promise<Array<CryptoCurrency>> {
        const result = this.api.v1CurrenciesListCrypto(appId, _options);
        return result.toPromise();
    }

    /**
     * List available fiat currencies
     * List available fiat currencies
     * @param appId App ID
     */
    public v1CurrenciesListFlat(appId: string, _options?: Configuration): Promise<Array<FiatCurrency>> {
        const result = this.api.v1CurrenciesListFlat(appId, _options);
        return result.toPromise();
    }

    /**
     * Get exchange rate
     * Get exchange rate
     * @param appId App ID
     * @param fromCurrency From currency
     * @param toCurrency To currency
     */
    public v1CurrenciesRetrieveRate(appId: string, fromCurrency: string, toCurrency: string, _options?: Configuration): Promise<Array<Rate>> {
        const result = this.api.v1CurrenciesRetrieveRate(appId, fromCurrency, toCurrency, _options);
        return result.toPromise();
    }


}



import { ObservableInvoiceApi } from './ObservableAPI';

import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";
export class PromiseInvoiceApi {
    private api: ObservableInvoiceApi

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
     */
    public v1InvoicesCreate(appId: string, createInvoiceRequest: CreateInvoiceRequest, _options?: Configuration): Promise<Invoice> {
        const result = this.api.v1InvoicesCreate(appId, createInvoiceRequest, _options);
        return result.toPromise();
    }

    /**
     * List invoices
     * List invoices
     * @param appId App ID
     * @param limit 
     * @param offset 
     * @param channel 
     * @param userId 
     */
    public v1InvoicesList(appId: string, limit?: number, offset?: number, channel?: string, userId?: string, _options?: Configuration): Promise<PageInvoice> {
        const result = this.api.v1InvoicesList(appId, limit, offset, channel, userId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve an invoice
     * Retrieve an invoice
     * @param appId App ID
     * @param invoiceId Invoice ID / UID
     */
    public v1InvoicesRetrieve(appId: string, invoiceId: string, _options?: Configuration): Promise<Invoice> {
        const result = this.api.v1InvoicesRetrieve(appId, invoiceId, _options);
        return result.toPromise();
    }


}



import { ObservablePayoutApi } from './ObservableAPI';

import { PayoutApiRequestFactory, PayoutApiResponseProcessor} from "../apis/PayoutApi";
export class PromisePayoutApi {
    private api: ObservablePayoutApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PayoutApiRequestFactory,
        responseProcessor?: PayoutApiResponseProcessor
    ) {
        this.api = new ObservablePayoutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Payout to address
     * Payout to address
     * @param appId App ID
     * @param createPayout Request body
     */
    public v1PayoutsCreate(appId: string, createPayout: CreatePayout, _options?: Configuration): Promise<Payout> {
        const result = this.api.v1PayoutsCreate(appId, createPayout, _options);
        return result.toPromise();
    }

    /**
     * List payouts
     * List payouts
     * @param appId App ID
     * @param cursor Cursor
     * @param limit Limit
     */
    public v1PayoutsList(appId: string, cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPagePayout> {
        const result = this.api.v1PayoutsList(appId, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a payout
     * Retrieve a payout
     * @param appId App ID
     * @param payoutId Payout ID
     */
    public v1PayoutsRetrieve(appId: string, payoutId: string, _options?: Configuration): Promise<Payout> {
        const result = this.api.v1PayoutsRetrieve(appId, payoutId, _options);
        return result.toPromise();
    }


}



import { ObservableRefundApi } from './ObservableAPI';

import { RefundApiRequestFactory, RefundApiResponseProcessor} from "../apis/RefundApi";
export class PromiseRefundApi {
    private api: ObservableRefundApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RefundApiRequestFactory,
        responseProcessor?: RefundApiResponseProcessor
    ) {
        this.api = new ObservableRefundApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Refund invoice payment
     * Refund invoice payment
     * @param appId App ID
     * @param createRefund Request body
     */
    public v1RefundsCreate(appId: string, createRefund: CreateRefund, _options?: Configuration): Promise<Refund> {
        const result = this.api.v1RefundsCreate(appId, createRefund, _options);
        return result.toPromise();
    }

    /**
     * List refunds
     * List refunds
     * @param appId App ID
     * @param cursor Cursor
     * @param limit Limit
     */
    public v1RefundsList(appId: string, cursor?: string, limit?: number, _options?: Configuration): Promise<CursorPageRefund> {
        const result = this.api.v1RefundsList(appId, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a refund
     * Retrieve a refund
     * @param appId App ID
     * @param refundId Refund ID
     */
    public v1RefundsRetrieve(appId: string, refundId: string, _options?: Configuration): Promise<Refund> {
        const result = this.api.v1RefundsRetrieve(appId, refundId, _options);
        return result.toPromise();
    }


}



import { ObservableWebhookApi } from './ObservableAPI';

import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";
export class PromiseWebhookApi {
    private api: ObservableWebhookApi

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
     */
    public v1EndpointsDelete(appId: string, endpointId: string, _options?: Configuration): Promise<Webhook> {
        const result = this.api.v1EndpointsDelete(appId, endpointId, _options);
        return result.toPromise();
    }

    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param appId App ID
     * @param limit 
     * @param cursor 
     */
    public v1EndpointsList(appId: string, limit: number, cursor?: string, _options?: Configuration): Promise<CursorPageWebhook> {
        const result = this.api.v1EndpointsList(appId, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Retrieve a webhook endpoint
     * Retrieve a webhook endpoint
     * @param appId App ID
     * @param endpointId Endpoint ID
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
     */
    public v1EndpointsUpdate(appId: string, endpointId: string, updateWebhook: UpdateWebhook, _options?: Configuration): Promise<Webhook> {
        const result = this.api.v1EndpointsUpdate(appId, endpointId, updateWebhook, _options);
        return result.toPromise();
    }


}



