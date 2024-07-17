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
     * @param size Limit the number of returned items
     * @param page Specifying the page index
     * @param walletId Optional wallet id
     * @param accountId Optional account id
     */
    public v1OrderList(size?: number, page?: number, walletId?: string, accountId?: string, _options?: Configuration): Promise<ListResponseOrderOut> {
        const result = this.api.v1OrderList(size, page, walletId, accountId, _options);
        return result.toPromise();
    }


}



import { ObservableWebhookEndpointApi } from './ObservableAPI';

import { WebhookEndpointApiRequestFactory, WebhookEndpointApiResponseProcessor} from "../apis/WebhookEndpointApi";
export class PromiseWebhookEndpointApi {
    private api: ObservableWebhookEndpointApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookEndpointApiRequestFactory,
        responseProcessor?: WebhookEndpointApiResponseProcessor
    ) {
        this.api = new ObservableWebhookEndpointApi(configuration, requestFactory, responseProcessor);
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
     * @param order The sorting order of the returned items
     */
    public v1EndpointList(limit?: number, cursor?: string, order?: Ordering, _options?: Configuration): Promise<ListResponseEndpointOut> {
        const result = this.api.v1EndpointList(limit, cursor, order, _options);
        return result.toPromise();
    }


}



