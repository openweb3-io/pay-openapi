import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { EndpointIn } from '../models/EndpointIn';
import { EndpointOut } from '../models/EndpointOut';
import { EndpointPatch } from '../models/EndpointPatch';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HttpErrorOut } from '../models/HttpErrorOut';
import { InvoiceIn } from '../models/InvoiceIn';
import { InvoiceOut } from '../models/InvoiceOut';
import { ListResponseEndpointOut } from '../models/ListResponseEndpointOut';
import { ListResponseInvoiceOut } from '../models/ListResponseInvoiceOut';
import { Ordering } from '../models/Ordering';
import { ValidationError } from '../models/ValidationError';
import { WebhookMessage } from '../models/WebhookMessage';

import { ObservableEndpointApi } from "./ObservableAPI";
import { EndpointApiRequestFactory, EndpointApiResponseProcessor} from "../apis/EndpointApi";

export interface EndpointApiV1EndpointCreateRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof EndpointApiv1EndpointCreate
     */
    appId: string
    /**
     * 
     * @type EndpointIn
     * @memberof EndpointApiv1EndpointCreate
     */
    endpointIn: EndpointIn
}

export interface EndpointApiV1EndpointDeleteRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof EndpointApiv1EndpointDelete
     */
    appId: string
    /**
     * Specified the endpoint id.
     * @type string
     * @memberof EndpointApiv1EndpointDelete
     */
    endpointId: string
}

export interface EndpointApiV1EndpointGetRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof EndpointApiv1EndpointGet
     */
    appId: string
    /**
     * Specified the webhook endpoint id.
     * @type string
     * @memberof EndpointApiv1EndpointGet
     */
    endpointId: string
}

export interface EndpointApiV1EndpointListRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof EndpointApiv1EndpointList
     */
    appId: string
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
    /**
     * The sorting order of the returned items
     * @type Ordering
     * @memberof EndpointApiv1EndpointList
     */
    ordering?: Ordering
}

export interface EndpointApiV1EndpointPatchRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof EndpointApiv1EndpointPatch
     */
    appId: string
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

export class ObjectEndpointApi {
    private api: ObservableEndpointApi

    public constructor(configuration: Configuration, requestFactory?: EndpointApiRequestFactory, responseProcessor?: EndpointApiResponseProcessor) {
        this.api = new ObservableEndpointApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a webhook endpoint.
     * Create endpoint
     * @param param the request object
     */
    public v1EndpointCreate(param: EndpointApiV1EndpointCreateRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointCreate(param.appId, param.endpointIn,  options).toPromise();
    }

    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param param the request object
     */
    public v1EndpointDelete(param: EndpointApiV1EndpointDeleteRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointDelete(param.appId, param.endpointId,  options).toPromise();
    }

    /**
     * retrieve a specified webhook endpoint.
     * Get endpoint
     * @param param the request object
     */
    public v1EndpointGet(param: EndpointApiV1EndpointGetRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointGet(param.appId, param.endpointId,  options).toPromise();
    }

    /**
     * List endpoints.
     * List endpoints
     * @param param the request object
     */
    public v1EndpointList(param: EndpointApiV1EndpointListRequest, options?: Configuration): Promise<ListResponseEndpointOut> {
        return this.api.v1EndpointList(param.appId, param.limit, param.cursor, param.ordering,  options).toPromise();
    }

    /**
     * update a specified webhook endpoint.
     * Patch endpoint
     * @param param the request object
     */
    public v1EndpointPatch(param: EndpointApiV1EndpointPatchRequest, options?: Configuration): Promise<EndpointOut> {
        return this.api.v1EndpointPatch(param.appId, param.endpointId, param.endpointPatch,  options).toPromise();
    }

}

import { ObservableInvoiceApi } from "./ObservableAPI";
import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";

export interface InvoiceApiV1InvoiceCreateRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof InvoiceApiv1InvoiceCreate
     */
    appId: string
    /**
     * 
     * @type InvoiceIn
     * @memberof InvoiceApiv1InvoiceCreate
     */
    invoiceIn: InvoiceIn
}

export interface InvoiceApiV1InvoiceGetRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof InvoiceApiv1InvoiceGet
     */
    appId: string
    /**
     * Specified the invoice id or invoice uid.
     * @type string
     * @memberof InvoiceApiv1InvoiceGet
     */
    idOrUid: string
}

export interface InvoiceApiV1InvoiceListRequest {
    /**
     * Specified the app id.
     * @type string
     * @memberof InvoiceApiv1InvoiceList
     */
    appId: string
    /**
     * Limit the number of returned items
     * @type number
     * @memberof InvoiceApiv1InvoiceList
     */
    limit?: number
    /**
     * Specifying the amount of excluded from a response the first N invoices
     * @type number
     * @memberof InvoiceApiv1InvoiceList
     */
    offset?: number
    /**
     * Optional invoice user id
     * @type string
     * @memberof InvoiceApiv1InvoiceList
     */
    userId?: string
    /**
     * Channel of the invoice
     * @type string
     * @memberof InvoiceApiv1InvoiceList
     */
    channel?: string
}

export class ObjectInvoiceApi {
    private api: ObservableInvoiceApi

    public constructor(configuration: Configuration, requestFactory?: InvoiceApiRequestFactory, responseProcessor?: InvoiceApiResponseProcessor) {
        this.api = new ObservableInvoiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new invoice.
     * Create invoice
     * @param param the request object
     */
    public v1InvoiceCreate(param: InvoiceApiV1InvoiceCreateRequest, options?: Configuration): Promise<InvoiceOut> {
        return this.api.v1InvoiceCreate(param.appId, param.invoiceIn,  options).toPromise();
    }

    /**
     * retrieve a specified webhook endpoint.
     * Get invoice
     * @param param the request object
     */
    public v1InvoiceGet(param: InvoiceApiV1InvoiceGetRequest, options?: Configuration): Promise<InvoiceOut> {
        return this.api.v1InvoiceGet(param.appId, param.idOrUid,  options).toPromise();
    }

    /**
     * List invoices.
     * List invoices
     * @param param the request object
     */
    public v1InvoiceList(param: InvoiceApiV1InvoiceListRequest, options?: Configuration): Promise<ListResponseInvoiceOut> {
        return this.api.v1InvoiceList(param.appId, param.limit, param.offset, param.userId, param.channel,  options).toPromise();
    }

}
