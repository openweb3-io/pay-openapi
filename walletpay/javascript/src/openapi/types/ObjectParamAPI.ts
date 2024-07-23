import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { EndpointIn } from '../models/EndpointIn';
import { EndpointOut } from '../models/EndpointOut';
import { HttpErrorOut } from '../models/HttpErrorOut';
import { ListResponseEndpointOut } from '../models/ListResponseEndpointOut';
import { ListResponseOrderOut } from '../models/ListResponseOrderOut';
import { OrderIn } from '../models/OrderIn';
import { OrderOut } from '../models/OrderOut';
import { Ordering } from '../models/Ordering';

import { ObservableOrderApi } from "./ObservableAPI";
import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";

export interface OrderApiV1OrderCreateRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof OrderApiv1OrderCreate
     */
    appId: string
    /**
     * 
     * @type OrderIn
     * @memberof OrderApiv1OrderCreate
     */
    orderIn: OrderIn
}

export interface OrderApiV1OrderListRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof OrderApiv1OrderList
     */
    appId: string
    /**
     * Limit the number of returned items
     * @type number
     * @memberof OrderApiv1OrderList
     */
    size?: number
    /**
     * Specifying the page index
     * @type number
     * @memberof OrderApiv1OrderList
     */
    page?: number
    /**
     * Optional wallet id
     * @type string
     * @memberof OrderApiv1OrderList
     */
    walletId?: string
    /**
     * Optional account id
     * @type string
     * @memberof OrderApiv1OrderList
     */
    accountId?: string
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
        return this.api.v1OrderCreate(param.appId, param.orderIn,  options).toPromise();
    }

    /**
     * List orders.
     * List Orders
     * @param param the request object
     */
    public v1OrderList(param: OrderApiV1OrderListRequest, options?: Configuration): Promise<ListResponseOrderOut> {
        return this.api.v1OrderList(param.appId, param.size, param.page, param.walletId, param.accountId,  options).toPromise();
    }

}

import { ObservableWebhookEndpointApi } from "./ObservableAPI";
import { WebhookEndpointApiRequestFactory, WebhookEndpointApiResponseProcessor} from "../apis/WebhookEndpointApi";

export interface WebhookEndpointApiV1EndpointCreateRequest {
    /**
     * 
     * @type EndpointIn
     * @memberof WebhookEndpointApiv1EndpointCreate
     */
    endpointIn: EndpointIn
}

export interface WebhookEndpointApiV1EndpointDeleteRequest {
    /**
     * Specified the endpoint id.
     * @type string
     * @memberof WebhookEndpointApiv1EndpointDelete
     */
    endpointId: string
}

export interface WebhookEndpointApiV1EndpointListRequest {
    /**
     * Limit the number of returned items
     * @type number
     * @memberof WebhookEndpointApiv1EndpointList
     */
    limit?: number
    /**
     * Specifying the start cursor position
     * @type string
     * @memberof WebhookEndpointApiv1EndpointList
     */
    cursor?: string
    /**
     * The sorting order of the returned items
     * @type Ordering
     * @memberof WebhookEndpointApiv1EndpointList
     */
    order?: Ordering
}

export class ObjectWebhookEndpointApi {
    private api: ObservableWebhookEndpointApi

    public constructor(configuration: Configuration, requestFactory?: WebhookEndpointApiRequestFactory, responseProcessor?: WebhookEndpointApiResponseProcessor) {
        this.api = new ObservableWebhookEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a webhook endpoint.
     * Create endpoint
     * @param param the request object
     */
    public v1EndpointCreate(param: WebhookEndpointApiV1EndpointCreateRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointCreate(param.endpointIn,  options).toPromise();
    }

    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param param the request object
     */
    public v1EndpointDelete(param: WebhookEndpointApiV1EndpointDeleteRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointDelete(param.endpointId,  options).toPromise();
    }

    /**
     * List endpoints.
     * List endpoints
     * @param param the request object
     */
    public v1EndpointList(param: WebhookEndpointApiV1EndpointListRequest, options?: Configuration): Promise<ListResponseEndpointOut> {
        return this.api.v1EndpointList(param.limit, param.cursor, param.order,  options).toPromise();
    }

}
