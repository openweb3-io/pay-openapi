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
import { Invoiceing } from '../models/Invoiceing';
import { ListResponseEndpointOut } from '../models/ListResponseEndpointOut';
import { ListResponseInvoiceOut } from '../models/ListResponseInvoiceOut';
import { Ordering } from '../models/Ordering';
import { ValidationError } from '../models/ValidationError';
import { WebhookMessage } from '../models/WebhookMessage';
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
     * @param appId Specified the app id.
     * @param endpointIn 
     */
    public v1EndpointCreate(appId: string, endpointIn: EndpointIn, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointCreate(appId, endpointIn, _options);
        return result.toPromise();
    }

    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param appId Specified the app id.
     * @param endpointId Specified the endpoint id.
     */
    public v1EndpointDelete(appId: string, endpointId: string, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointDelete(appId, endpointId, _options);
        return result.toPromise();
    }

    /**
     * retrieve a specified webhook endpoint.
     * Get endpoint
     * @param appId Specified the app id.
     * @param endpointId Specified the webhook endpoint id.
     */
    public v1EndpointGet(appId: string, endpointId: string, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointGet(appId, endpointId, _options);
        return result.toPromise();
    }

    /**
     * List endpoints.
     * List endpoints
     * @param appId Specified the app id.
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param ordering The sorting order of the returned items
     */
    public v1EndpointList(appId: string, limit?: number, cursor?: string, ordering?: Ordering, _options?: Configuration): Promise<ListResponseEndpointOut> {
        const result = this.api.v1EndpointList(appId, limit, cursor, ordering, _options);
        return result.toPromise();
    }

    /**
     * update a specified webhook endpoint.
     * Patch endpoint
     * @param appId Specified the app id.
     * @param endpointId Specified the endpoint id.
     * @param endpointPatch 
     */
    public v1EndpointPatch(appId: string, endpointId: string, endpointPatch: EndpointPatch, _options?: Configuration): Promise<EndpointOut> {
        const result = this.api.v1EndpointPatch(appId, endpointId, endpointPatch, _options);
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
     * Create a new invoice.
     * Create invoice
     * @param appId Specified the app id.
     * @param invoiceIn 
     */
    public v1InvoiceCreate(appId: string, invoiceIn: InvoiceIn, _options?: Configuration): Promise<InvoiceOut> {
        const result = this.api.v1InvoiceCreate(appId, invoiceIn, _options);
        return result.toPromise();
    }

    /**
     * retrieve a specified webhook endpoint.
     * Get invoice
     * @param appId Specified the app id.
     * @param idOrUid Specified the invoice id or invoice uid.
     */
    public v1InvoiceGet(appId: string, idOrUid: string, _options?: Configuration): Promise<InvoiceOut> {
        const result = this.api.v1InvoiceGet(appId, idOrUid, _options);
        return result.toPromise();
    }

    /**
     * List invoices.
     * List invoices
     * @param appId Specified the app id.
     * @param limit Limit the number of returned items
     * @param offset Specifying the amount of excluded from a response the first N invoices
     * @param userId Optional invoice user id
     * @param channel Channel of the invoice
     */
    public v1InvoiceList(appId: string, limit?: number, offset?: number, userId?: string, channel?: string, _options?: Configuration): Promise<ListResponseInvoiceOut> {
        const result = this.api.v1InvoiceList(appId, limit, offset, userId, channel, _options);
        return result.toPromise();
    }


}



