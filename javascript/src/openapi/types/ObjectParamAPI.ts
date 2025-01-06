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

import { ObservableCurrencyApi } from "./ObservableAPI";
import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor} from "../apis/CurrencyApi";

export interface CurrencyApiV1CurrenciesListCryptoRequest {
    /**
     * App ID
     * @type string
     * @memberof CurrencyApiv1CurrenciesListCrypto
     */
    appId: string
}

export interface CurrencyApiV1CurrenciesListFlatRequest {
    /**
     * App ID
     * @type string
     * @memberof CurrencyApiv1CurrenciesListFlat
     */
    appId: string
}

export interface CurrencyApiV1CurrenciesRetrieveRateRequest {
    /**
     * App ID
     * @type string
     * @memberof CurrencyApiv1CurrenciesRetrieveRate
     */
    appId: string
    /**
     * From currency
     * @type string
     * @memberof CurrencyApiv1CurrenciesRetrieveRate
     */
    fromCurrency: string
    /**
     * To currency
     * @type string
     * @memberof CurrencyApiv1CurrenciesRetrieveRate
     */
    toCurrency: string
}

export class ObjectCurrencyApi {
    private api: ObservableCurrencyApi

    public constructor(configuration: Configuration, requestFactory?: CurrencyApiRequestFactory, responseProcessor?: CurrencyApiResponseProcessor) {
        this.api = new ObservableCurrencyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List available cryptocurrencies
     * List available cryptocurrencies
     * @param param the request object
     */
    public v1CurrenciesListCrypto(param: CurrencyApiV1CurrenciesListCryptoRequest, options?: Configuration): Promise<Array<CryptoCurrency>> {
        return this.api.v1CurrenciesListCrypto(param.appId,  options).toPromise();
    }

    /**
     * List available fiat currencies
     * List available fiat currencies
     * @param param the request object
     */
    public v1CurrenciesListFlat(param: CurrencyApiV1CurrenciesListFlatRequest, options?: Configuration): Promise<Array<FiatCurrency>> {
        return this.api.v1CurrenciesListFlat(param.appId,  options).toPromise();
    }

    /**
     * Get exchange rate
     * Get exchange rate
     * @param param the request object
     */
    public v1CurrenciesRetrieveRate(param: CurrencyApiV1CurrenciesRetrieveRateRequest, options?: Configuration): Promise<Array<Rate>> {
        return this.api.v1CurrenciesRetrieveRate(param.appId, param.fromCurrency, param.toCurrency,  options).toPromise();
    }

}

import { ObservableInvoiceApi } from "./ObservableAPI";
import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";

export interface InvoiceApiV1InvoicesCreateRequest {
    /**
     * App ID
     * @type string
     * @memberof InvoiceApiv1InvoicesCreate
     */
    appId: string
    /**
     * Request body
     * @type CreateInvoiceRequest
     * @memberof InvoiceApiv1InvoicesCreate
     */
    createInvoiceRequest: CreateInvoiceRequest
}

export interface InvoiceApiV1InvoicesListRequest {
    /**
     * App ID
     * @type string
     * @memberof InvoiceApiv1InvoicesList
     */
    appId: string
    /**
     * 
     * @type number
     * @memberof InvoiceApiv1InvoicesList
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof InvoiceApiv1InvoicesList
     */
    channel?: string
    /**
     * 
     * @type string
     * @memberof InvoiceApiv1InvoicesList
     */
    userId?: string
    /**
     * 
     * @type number
     * @memberof InvoiceApiv1InvoicesList
     */
    offset?: number
}

export interface InvoiceApiV1InvoicesRetrieveRequest {
    /**
     * App ID
     * @type string
     * @memberof InvoiceApiv1InvoicesRetrieve
     */
    appId: string
    /**
     * Invoice ID / UID
     * @type string
     * @memberof InvoiceApiv1InvoicesRetrieve
     */
    invoiceId: string
}

export class ObjectInvoiceApi {
    private api: ObservableInvoiceApi

    public constructor(configuration: Configuration, requestFactory?: InvoiceApiRequestFactory, responseProcessor?: InvoiceApiResponseProcessor) {
        this.api = new ObservableInvoiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an invoice
     * Create an invoice
     * @param param the request object
     */
    public v1InvoicesCreate(param: InvoiceApiV1InvoicesCreateRequest, options?: Configuration): Promise<Invoice> {
        return this.api.v1InvoicesCreate(param.appId, param.createInvoiceRequest,  options).toPromise();
    }

    /**
     * List invoices
     * List invoices
     * @param param the request object
     */
    public v1InvoicesList(param: InvoiceApiV1InvoicesListRequest, options?: Configuration): Promise<PageInvoice> {
        return this.api.v1InvoicesList(param.appId, param.limit, param.channel, param.userId, param.offset,  options).toPromise();
    }

    /**
     * Retrieve an invoice
     * Retrieve an invoice
     * @param param the request object
     */
    public v1InvoicesRetrieve(param: InvoiceApiV1InvoicesRetrieveRequest, options?: Configuration): Promise<Invoice> {
        return this.api.v1InvoicesRetrieve(param.appId, param.invoiceId,  options).toPromise();
    }

}

import { ObservablePayoutApi } from "./ObservableAPI";
import { PayoutApiRequestFactory, PayoutApiResponseProcessor} from "../apis/PayoutApi";

export interface PayoutApiV1PayoutsCreateRequest {
    /**
     * App ID
     * @type string
     * @memberof PayoutApiv1PayoutsCreate
     */
    appId: string
    /**
     * Request body
     * @type CreatePayout
     * @memberof PayoutApiv1PayoutsCreate
     */
    createPayout: CreatePayout
}

export interface PayoutApiV1PayoutsListRequest {
    /**
     * App ID
     * @type string
     * @memberof PayoutApiv1PayoutsList
     */
    appId: string
    /**
     * Cursor
     * @type string
     * @memberof PayoutApiv1PayoutsList
     */
    cursor?: string
    /**
     * Limit
     * @type number
     * @memberof PayoutApiv1PayoutsList
     */
    limit?: number
}

export interface PayoutApiV1PayoutsRetrieveRequest {
    /**
     * App ID
     * @type string
     * @memberof PayoutApiv1PayoutsRetrieve
     */
    appId: string
    /**
     * Payout ID
     * @type string
     * @memberof PayoutApiv1PayoutsRetrieve
     */
    payoutId: string
}

export class ObjectPayoutApi {
    private api: ObservablePayoutApi

    public constructor(configuration: Configuration, requestFactory?: PayoutApiRequestFactory, responseProcessor?: PayoutApiResponseProcessor) {
        this.api = new ObservablePayoutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Payout to address
     * Payout to address
     * @param param the request object
     */
    public v1PayoutsCreate(param: PayoutApiV1PayoutsCreateRequest, options?: Configuration): Promise<Payout> {
        return this.api.v1PayoutsCreate(param.appId, param.createPayout,  options).toPromise();
    }

    /**
     * List payouts
     * List payouts
     * @param param the request object
     */
    public v1PayoutsList(param: PayoutApiV1PayoutsListRequest, options?: Configuration): Promise<CursorPagePayout> {
        return this.api.v1PayoutsList(param.appId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Retrieve a payout
     * Retrieve a payout
     * @param param the request object
     */
    public v1PayoutsRetrieve(param: PayoutApiV1PayoutsRetrieveRequest, options?: Configuration): Promise<Payout> {
        return this.api.v1PayoutsRetrieve(param.appId, param.payoutId,  options).toPromise();
    }

}

import { ObservableRefundApi } from "./ObservableAPI";
import { RefundApiRequestFactory, RefundApiResponseProcessor} from "../apis/RefundApi";

export interface RefundApiV1RefundsCreateRequest {
    /**
     * App ID
     * @type string
     * @memberof RefundApiv1RefundsCreate
     */
    appId: string
    /**
     * Request body
     * @type CreateRefund
     * @memberof RefundApiv1RefundsCreate
     */
    createRefund: CreateRefund
}

export interface RefundApiV1RefundsListRequest {
    /**
     * App ID
     * @type string
     * @memberof RefundApiv1RefundsList
     */
    appId: string
    /**
     * Cursor
     * @type string
     * @memberof RefundApiv1RefundsList
     */
    cursor?: string
    /**
     * Limit
     * @type number
     * @memberof RefundApiv1RefundsList
     */
    limit?: number
}

export interface RefundApiV1RefundsRetrieveRequest {
    /**
     * App ID
     * @type string
     * @memberof RefundApiv1RefundsRetrieve
     */
    appId: string
    /**
     * Refund ID
     * @type string
     * @memberof RefundApiv1RefundsRetrieve
     */
    refundId: string
}

export class ObjectRefundApi {
    private api: ObservableRefundApi

    public constructor(configuration: Configuration, requestFactory?: RefundApiRequestFactory, responseProcessor?: RefundApiResponseProcessor) {
        this.api = new ObservableRefundApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Refund invoice payment
     * Refund invoice payment
     * @param param the request object
     */
    public v1RefundsCreate(param: RefundApiV1RefundsCreateRequest, options?: Configuration): Promise<Refund> {
        return this.api.v1RefundsCreate(param.appId, param.createRefund,  options).toPromise();
    }

    /**
     * List refunds
     * List refunds
     * @param param the request object
     */
    public v1RefundsList(param: RefundApiV1RefundsListRequest, options?: Configuration): Promise<CursorPageRefund> {
        return this.api.v1RefundsList(param.appId, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Retrieve a refund
     * Retrieve a refund
     * @param param the request object
     */
    public v1RefundsRetrieve(param: RefundApiV1RefundsRetrieveRequest, options?: Configuration): Promise<Refund> {
        return this.api.v1RefundsRetrieve(param.appId, param.refundId,  options).toPromise();
    }

}

import { ObservableWebhookApi } from "./ObservableAPI";
import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";

export interface WebhookApiV1EndpointsCreateRequest {
    /**
     * App ID
     * @type string
     * @memberof WebhookApiv1EndpointsCreate
     */
    appId: string
    /**
     * Request body
     * @type CreateWebhook
     * @memberof WebhookApiv1EndpointsCreate
     */
    createWebhook: CreateWebhook
}

export interface WebhookApiV1EndpointsDeleteRequest {
    /**
     * App ID
     * @type string
     * @memberof WebhookApiv1EndpointsDelete
     */
    appId: string
    /**
     * Endpoint ID
     * @type string
     * @memberof WebhookApiv1EndpointsDelete
     */
    endpointId: string
}

export interface WebhookApiV1EndpointsListRequest {
    /**
     * App ID
     * @type string
     * @memberof WebhookApiv1EndpointsList
     */
    appId: string
    /**
     * 
     * @type number
     * @memberof WebhookApiv1EndpointsList
     */
    limit: number
    /**
     * 
     * @type string
     * @memberof WebhookApiv1EndpointsList
     */
    cursor?: string
}

export interface WebhookApiV1EndpointsRetrieveRequest {
    /**
     * App ID
     * @type string
     * @memberof WebhookApiv1EndpointsRetrieve
     */
    appId: string
    /**
     * Endpoint ID
     * @type string
     * @memberof WebhookApiv1EndpointsRetrieve
     */
    endpointId: string
}

export interface WebhookApiV1EndpointsUpdateRequest {
    /**
     * App ID
     * @type string
     * @memberof WebhookApiv1EndpointsUpdate
     */
    appId: string
    /**
     * Endpoint ID
     * @type string
     * @memberof WebhookApiv1EndpointsUpdate
     */
    endpointId: string
    /**
     * Request body
     * @type UpdateWebhook
     * @memberof WebhookApiv1EndpointsUpdate
     */
    updateWebhook: UpdateWebhook
}

export class ObjectWebhookApi {
    private api: ObservableWebhookApi

    public constructor(configuration: Configuration, requestFactory?: WebhookApiRequestFactory, responseProcessor?: WebhookApiResponseProcessor) {
        this.api = new ObservableWebhookApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a webhook endpoint
     * Create a webhook endpoint
     * @param param the request object
     */
    public v1EndpointsCreate(param: WebhookApiV1EndpointsCreateRequest, options?: Configuration): Promise<Webhook> {
        return this.api.v1EndpointsCreate(param.appId, param.createWebhook,  options).toPromise();
    }

    /**
     * Delete a webhook endpoint
     * Delete a webhook endpoint
     * @param param the request object
     */
    public v1EndpointsDelete(param: WebhookApiV1EndpointsDeleteRequest, options?: Configuration): Promise<Webhook> {
        return this.api.v1EndpointsDelete(param.appId, param.endpointId,  options).toPromise();
    }

    /**
     * List webhook endpoints
     * List webhook endpoints
     * @param param the request object
     */
    public v1EndpointsList(param: WebhookApiV1EndpointsListRequest, options?: Configuration): Promise<CursorPageWebhook> {
        return this.api.v1EndpointsList(param.appId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Retrieve a webhook endpoint
     * Retrieve a webhook endpoint
     * @param param the request object
     */
    public v1EndpointsRetrieve(param: WebhookApiV1EndpointsRetrieveRequest, options?: Configuration): Promise<Webhook> {
        return this.api.v1EndpointsRetrieve(param.appId, param.endpointId,  options).toPromise();
    }

    /**
     * Update a webhook endpoint
     * Update a webhook endpoint
     * @param param the request object
     */
    public v1EndpointsUpdate(param: WebhookApiV1EndpointsUpdateRequest, options?: Configuration): Promise<Webhook> {
        return this.api.v1EndpointsUpdate(param.appId, param.endpointId, param.updateWebhook,  options).toPromise();
    }

}
