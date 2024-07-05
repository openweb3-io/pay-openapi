import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccountOut } from '../models/AccountOut';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HttpErrorOut } from '../models/HttpErrorOut';
import { ListResponseAccountOut } from '../models/ListResponseAccountOut';
import { ListResponseOrderOut } from '../models/ListResponseOrderOut';
import { OrderIn } from '../models/OrderIn';
import { OrderOut } from '../models/OrderOut';
import { Ordering } from '../models/Ordering';
import { ValidationError } from '../models/ValidationError';

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
