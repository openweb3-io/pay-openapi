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
import { ObservableAccountApi } from './ObservableAPI';

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class PromiseAccountApi {
    private api: ObservableAccountApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List accounts.
     * List Accounts
     * @param limit Limit the number of returned items
     * @param offset Specifying the amount of excluded from a response the first N items
     */
    public v1AccountList(limit?: number, offset?: number, _options?: Configuration): Promise<ListResponseAccountOut> {
        const result = this.api.v1AccountList(limit, offset, _options);
        return result.toPromise();
    }


}



import { ObservableEndpointApi } from './ObservableAPI';

import { EndpointApiRequestFactory, EndpointApiResponseProcessor} from "../apis/EndpointApi";
export class PromiseEndpointApi {
    private api: ObservableEndpointApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EndpointApiRequestFactory,
        responseProcessor?: EndpointApiResponseProcessor
    ) {
        this.api = new ObservableEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a webhook endpoint.
     * Create endpoint
     * @param endpointIn 
     */
    public v1EndpointCreate(endpointIn: EndpointIn, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointCreate(endpointIn, _options);
        return result.toPromise();
    }

    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param endpointId Specified the endpoint id.
     */
    public v1EndpointDelete(endpointId: string, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointDelete(endpointId, _options);
        return result.toPromise();
    }

    /**
     * List endpoints.
     * List endpoints
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     */
    public v1EndpointList(limit?: number, cursor?: string, _options?: Configuration): Promise<ListResponseEndpointOut> {
        const result = this.api.v1EndpointList(limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * update a specified webhook endpoint.
     * update endpoint
     * @param endpointId Specified the endpoint id.
     * @param endpointPatch 
     */
    public v1EndpointPatch(endpointId: string, endpointPatch: EndpointPatch, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointPatch(endpointId, endpointPatch, _options);
        return result.toPromise();
    }

    /**
     * retrieve a specified webhook endpoint.
     * Retrieve endpoint
     * @param endpointId Specified the webhook endpoint id.
     */
    public v1EndpointRetrieve(endpointId: string, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointRetrieve(endpointId, _options);
        return result.toPromise();
    }


}



import { ObservableOrderApi } from './ObservableAPI';

import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";
export class PromiseOrderApi {
    private api: ObservableOrderApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderApiRequestFactory,
        responseProcessor?: OrderApiResponseProcessor
    ) {
        this.api = new ObservableOrderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new order.
     * Create Order
     * @param orderIn 
     */
    public v1OrderCreate(orderIn: OrderIn, _options?: Configuration): Promise<OrderOut> {
        const result = this.api.v1OrderCreate(orderIn, _options);
        return result.toPromise();
    }

    /**
     * List orders.
     * List Orders
     * @param limit Limit the number of returned items
     * @param offset Specifying the amount of excluded from a response the first N orders
     * @param chain Optional order blockchain code
     * @param channel Channel of the order
     */
    public v1OrderList(limit?: number, offset?: number, chain?: string, channel?: string, _options?: Configuration): Promise<ListResponseOrderOut> {
        const result = this.api.v1OrderList(limit, offset, chain, channel, _options);
        return result.toPromise();
    }


}



