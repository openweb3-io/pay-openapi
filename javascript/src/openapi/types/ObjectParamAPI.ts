import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccountOut } from '../models/AccountOut';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HttpErrorOut } from '../models/HttpErrorOut';
import { ListResponseAccountOut } from '../models/ListResponseAccountOut';
import { ListResponseOrderOut } from '../models/ListResponseOrderOut';
import { ListResponseWebhookOut } from '../models/ListResponseWebhookOut';
import { OrderIn } from '../models/OrderIn';
import { OrderOut } from '../models/OrderOut';
import { Ordering } from '../models/Ordering';
import { ValidationError } from '../models/ValidationError';
import { WebhookIn } from '../models/WebhookIn';
import { WebhookOut } from '../models/WebhookOut';
import { WebhookPatch } from '../models/WebhookPatch';

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiV1AccountListRequest {
    /**
     * Limit the number of returned items
     * @type number
     * @memberof AccountApiv1AccountList
     */
    limit?: number
    /**
     * Specifying the amount of excluded from a response the first N items
     * @type number
     * @memberof AccountApiv1AccountList
     */
    offset?: number
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List accounts.
     * List Accounts
     * @param param the request object
     */
    public v1AccountList(param: AccountApiV1AccountListRequest, options?: Configuration): Promise<ListResponseAccountOut> {
        return this.api.v1AccountList(param.limit, param.offset,  options).toPromise();
    }

}

import { ObservableOrderApi } from "./ObservableAPI";
import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";

export interface OrderApiV1OrderCreateRequest {
    /**
     * 
     * @type OrderIn
     * @memberof OrderApiv1OrderCreate
     */
    orderIn: OrderIn
}

export interface OrderApiV1OrderListRequest {
    /**
     * Limit the number of returned items
     * @type number
     * @memberof OrderApiv1OrderList
     */
    limit?: number
    /**
     * Specifying the amount of excluded from a response the first N orders
     * @type number
     * @memberof OrderApiv1OrderList
     */
    offset?: number
    /**
     * Optional order blockchain code
     * @type string
     * @memberof OrderApiv1OrderList
     */
    chain?: string
    /**
     * Channel of the order
     * @type string
     * @memberof OrderApiv1OrderList
     */
    channel?: string
}

export class ObjectOrderApi {
    private api: ObservableOrderApi

    public constructor(configuration: Configuration, requestFactory?: OrderApiRequestFactory, responseProcessor?: OrderApiResponseProcessor) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new order.
     * Create Order
     * @param param the request object
     */
    public v1OrderCreate(param: OrderApiV1OrderCreateRequest, options?: Configuration): Promise<OrderOut> {
        return this.api.v1OrderCreate(param.orderIn,  options).toPromise();
    }

    /**
     * List orders.
     * List Orders
     * @param param the request object
     */
    public v1OrderList(param: OrderApiV1OrderListRequest, options?: Configuration): Promise<ListResponseOrderOut> {
        return this.api.v1OrderList(param.limit, param.offset, param.chain, param.channel,  options).toPromise();
    }

}

import { ObservableWebhookApi } from "./ObservableAPI";
import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";

export interface WebhookApiV1WebhookCreateRequest {
    /**
     * 
     * @type WebhookIn
     * @memberof WebhookApiv1WebhookCreate
     */
    webhookIn: WebhookIn
}

export interface WebhookApiV1WebhookDeleteRequest {
    /**
     * Specified the webhook id.
     * @type string
     * @memberof WebhookApiv1WebhookDelete
     */
    webhookId: string
}

export interface WebhookApiV1WebhookListRequest {
    /**
     * Limit the number of returned items
     * @type number
     * @memberof WebhookApiv1WebhookList
     */
    limit?: number
    /**
     * Specifying the start cursor position
     * @type string
     * @memberof WebhookApiv1WebhookList
     */
    cursor?: string
}

export interface WebhookApiV1WebhookPatchRequest {
    /**
     * Specified the webhook id.
     * @type string
     * @memberof WebhookApiv1WebhookPatch
     */
    webhookId: string
    /**
     * 
     * @type WebhookPatch
     * @memberof WebhookApiv1WebhookPatch
     */
    webhookPatch: WebhookPatch
}

export interface WebhookApiV1WebhookRetrieveRequest {
    /**
     * Specified the webhook id.
     * @type string
     * @memberof WebhookApiv1WebhookRetrieve
     */
    webhookId: string
}

export class ObjectWebhookApi {
    private api: ObservableWebhookApi

    public constructor(configuration: Configuration, requestFactory?: WebhookApiRequestFactory, responseProcessor?: WebhookApiResponseProcessor) {
        this.api = new ObservableWebhookApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a webhook.
     * Create webhook
     * @param param the request object
     */
    public v1WebhookCreate(param: WebhookApiV1WebhookCreateRequest, options?: Configuration): Promise<WebhookOut> {
        return this.api.v1WebhookCreate(param.webhookIn,  options).toPromise();
    }

    /**
     * delete the specified webhook.
     * Delete webhook
     * @param param the request object
     */
    public v1WebhookDelete(param: WebhookApiV1WebhookDeleteRequest, options?: Configuration): Promise<WebhookOut> {
        return this.api.v1WebhookDelete(param.webhookId,  options).toPromise();
    }

    /**
     * List webhooks.
     * List webhooks
     * @param param the request object
     */
    public v1WebhookList(param: WebhookApiV1WebhookListRequest, options?: Configuration): Promise<ListResponseWebhookOut> {
        return this.api.v1WebhookList(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * update a specified webhook.
     * update webhook
     * @param param the request object
     */
    public v1WebhookPatch(param: WebhookApiV1WebhookPatchRequest, options?: Configuration): Promise<WebhookOut> {
        return this.api.v1WebhookPatch(param.webhookId, param.webhookPatch,  options).toPromise();
    }

    /**
     * retrieve the specified webhook.
     * Retrieve webhook
     * @param param the request object
     */
    public v1WebhookRetrieve(param: WebhookApiV1WebhookRetrieveRequest, options?: Configuration): Promise<WebhookOut> {
        return this.api.v1WebhookRetrieve(param.webhookId,  options).toPromise();
    }

}
