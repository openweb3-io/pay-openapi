import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccountOut } from '../models/AccountOut';
import { EndpointIn } from '../models/EndpointIn';
import { EndpointOut } from '../models/EndpointOut';
import { EndpointPatch } from '../models/EndpointPatch';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HttpErrorOut } from '../models/HttpErrorOut';
import { ListResponseAccountOut } from '../models/ListResponseAccountOut';
import { ListResponseEndpointOut } from '../models/ListResponseEndpointOut';
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

import { ObservableEndpointApi } from "./ObservableAPI";
import { EndpointApiRequestFactory, EndpointApiResponseProcessor} from "../apis/EndpointApi";

export interface EndpointApiV1EndpointCreateRequest {
    /**
     * 
     * @type EndpointIn
     * @memberof EndpointApiv1EndpointCreate
     */
    endpointIn: EndpointIn
}

export interface EndpointApiV1EndpointDeleteRequest {
    /**
     * Specified the endpoint id.
     * @type string
     * @memberof EndpointApiv1EndpointDelete
     */
    endpointId: string
}

export interface EndpointApiV1EndpointListRequest {
    /**
     * Limit the number of returned items
     * @type number
     * @memberof EndpointApiv1EndpointList
     */
    limit?: number
    /**
     * Specifying the start cursor position
     * @type string
     * @memberof EndpointApiv1EndpointList
     */
    cursor?: string
}

export interface EndpointApiV1EndpointPatchRequest {
    /**
     * Specified the endpoint id.
     * @type string
     * @memberof EndpointApiv1EndpointPatch
     */
    endpointId: string
    /**
     * 
     * @type EndpointPatch
     * @memberof EndpointApiv1EndpointPatch
     */
    endpointPatch: EndpointPatch
}

export interface EndpointApiV1EndpointRetrieveRequest {
    /**
     * Specified the endpoint id.
     * @type string
     * @memberof EndpointApiv1EndpointRetrieve
     */
    endpointId: string
}

export class ObjectEndpointApi {
    private api: ObservableEndpointApi

    public constructor(configuration: Configuration, requestFactory?: EndpointApiRequestFactory, responseProcessor?: EndpointApiResponseProcessor) {
        this.api = new ObservableEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a endpoint.
     * Create endpoint
     * @param param the request object
     */
    public v1EndpointCreate(param: EndpointApiV1EndpointCreateRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointCreate(param.endpointIn,  options).toPromise();
    }

    /**
     * delete the specified endpoint.
     * Delete endpoint
     * @param param the request object
     */
    public v1EndpointDelete(param: EndpointApiV1EndpointDeleteRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointDelete(param.endpointId,  options).toPromise();
    }

    /**
     * List endpoints.
     * List endpoints
     * @param param the request object
     */
    public v1EndpointList(param: EndpointApiV1EndpointListRequest, options?: Configuration): Promise<ListResponseEndpointOut> {
        return this.api.v1EndpointList(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * update a specified endpoint.
     * update endpoint
     * @param param the request object
     */
    public v1EndpointPatch(param: EndpointApiV1EndpointPatchRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointPatch(param.endpointId, param.endpointPatch,  options).toPromise();
    }

    /**
     * retrieve the specified endpoint.
     * Retrieve endpoint
     * @param param the request object
     */
    public v1EndpointRetrieve(param: EndpointApiV1EndpointRetrieveRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointRetrieve(param.endpointId,  options).toPromise();
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
