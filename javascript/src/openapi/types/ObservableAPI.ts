import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { EndpointApiRequestFactory, EndpointApiResponseProcessor} from "../apis/EndpointApi";
export class ObservableEndpointApi {
    private requestFactory: EndpointApiRequestFactory;
    private responseProcessor: EndpointApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EndpointApiRequestFactory,
        responseProcessor?: EndpointApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EndpointApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EndpointApiResponseProcessor();
    }

    /**
     * Create a webhook endpoint.
     * Create endpoint
     * @param appId Specified the app id.
     * @param endpointIn 
     */
    public v1EndpointCreate(appId: string, endpointIn: EndpointIn, _options?: Configuration): Observable<EndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointCreate(appId, endpointIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointCreate(rsp)));
            }));
    }
 
    /**
     * delete the specified webhook endpoint.
     * Delete endpoint
     * @param appId Specified the app id.
     * @param endpointId Specified the endpoint id.
     */
    public v1EndpointDelete(appId: string, endpointId: string, _options?: Configuration): Observable<EndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointDelete(appId, endpointId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointDelete(rsp)));
            }));
    }
 
    /**
     * retrieve a specified webhook endpoint.
     * Get endpoint
     * @param appId Specified the app id.
     * @param endpointId Specified the webhook endpoint id.
     */
    public v1EndpointGet(appId: string, endpointId: string, _options?: Configuration): Observable<EndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointGet(appId, endpointId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointGet(rsp)));
            }));
    }
 
    /**
     * List endpoints.
     * List endpoints
     * @param appId Specified the app id.
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     * @param ordering The sorting order of the returned items
     */
    public v1EndpointList(appId: string, limit?: number, cursor?: string, ordering?: Ordering, _options?: Configuration): Observable<ListResponseEndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointList(appId, limit, cursor, ordering, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointList(rsp)));
            }));
    }
 
    /**
     * update a specified webhook endpoint.
     * Patch endpoint
     * @param appId Specified the app id.
     * @param endpointId Specified the endpoint id.
     * @param endpointPatch 
     */
    public v1EndpointPatch(appId: string, endpointId: string, endpointPatch: EndpointPatch, _options?: Configuration): Observable<EndpointOut> {
        const requestContextPromise = this.requestFactory.v1EndpointPatch(appId, endpointId, endpointPatch, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1EndpointPatch(rsp)));
            }));
    }
 
}

import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";
export class ObservableInvoiceApi {
    private requestFactory: InvoiceApiRequestFactory;
    private responseProcessor: InvoiceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoiceApiRequestFactory,
        responseProcessor?: InvoiceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvoiceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvoiceApiResponseProcessor();
    }

    /**
     * Create a new invoice.
     * Create invoice
     * @param appId Specified the app id.
     * @param invoiceIn 
     */
    public v1InvoiceCreate(appId: string, invoiceIn: InvoiceIn, _options?: Configuration): Observable<InvoiceOut> {
        const requestContextPromise = this.requestFactory.v1InvoiceCreate(appId, invoiceIn, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InvoiceCreate(rsp)));
            }));
    }
 
    /**
     * retrieve a specified webhook endpoint.
     * Get invoice
     * @param appId Specified the app id.
     * @param idOrUid Specified the invoice id or invoice uid.
     */
    public v1InvoiceGet(appId: string, idOrUid: string, _options?: Configuration): Observable<InvoiceOut> {
        const requestContextPromise = this.requestFactory.v1InvoiceGet(appId, idOrUid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InvoiceGet(rsp)));
            }));
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
    public v1InvoiceList(appId: string, limit?: number, offset?: number, userId?: string, channel?: string, _options?: Configuration): Observable<ListResponseInvoiceOut> {
        const requestContextPromise = this.requestFactory.v1InvoiceList(appId, limit, offset, userId, channel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1InvoiceList(rsp)));
            }));
    }
 
}
