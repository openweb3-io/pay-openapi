import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class ObservableAccountApi {
    private requestFactory: AccountApiRequestFactory;
    private responseProcessor: AccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountApiResponseProcessor();
    }

    /**
     * List accounts.
     * List Accounts
     * @param limit Limit the number of returned items
     * @param offset Specifying the amount of excluded from a response the first N items
     */
    public v1AccountList(limit?: number, offset?: number, _options?: Configuration): Observable<ListResponseAccountOut> {
        const requestContextPromise = this.requestFactory.v1AccountList(limit, offset, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AccountList(rsp)));
            }));
    }
 
}

import { OrderApiRequestFactory, OrderApiResponseProcessor} from "../apis/OrderApi";
export class ObservableOrderApi {
    private requestFactory: OrderApiRequestFactory;
    private responseProcessor: OrderApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderApiRequestFactory,
        responseProcessor?: OrderApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrderApiResponseProcessor();
    }

    /**
     * Create a new order.
     * Create Order
     * @param orderIn 
     */
    public v1OrderCreate(orderIn: OrderIn, _options?: Configuration): Observable<OrderOut> {
        const requestContextPromise = this.requestFactory.v1OrderCreate(orderIn, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrderCreate(rsp)));
            }));
    }
 
    /**
     * List orders.
     * List Orders
     * @param limit Limit the number of returned items
     * @param offset Specifying the amount of excluded from a response the first N orders
     * @param chain Optional order blockchain code
     * @param channel Channel of the order
     */
    public v1OrderList(limit?: number, offset?: number, chain?: string, channel?: string, _options?: Configuration): Observable<ListResponseOrderOut> {
        const requestContextPromise = this.requestFactory.v1OrderList(limit, offset, chain, channel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1OrderList(rsp)));
            }));
    }
 
}

import { WebhookApiRequestFactory, WebhookApiResponseProcessor} from "../apis/WebhookApi";
export class ObservableWebhookApi {
    private requestFactory: WebhookApiRequestFactory;
    private responseProcessor: WebhookApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookApiRequestFactory,
        responseProcessor?: WebhookApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookApiResponseProcessor();
    }

    /**
     * Create a webhook.
     * Create webhook
     * @param webhookIn 
     */
    public v1WebhookCreate(webhookIn: WebhookIn, _options?: Configuration): Observable<WebhookOut> {
        const requestContextPromise = this.requestFactory.v1WebhookCreate(webhookIn, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhookCreate(rsp)));
            }));
    }
 
    /**
     * delete the specified webhook.
     * Delete webhook
     * @param webhookId Specified the webhook id.
     */
    public v1WebhookDelete(webhookId: string, _options?: Configuration): Observable<WebhookOut> {
        const requestContextPromise = this.requestFactory.v1WebhookDelete(webhookId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhookDelete(rsp)));
            }));
    }
 
    /**
     * List webhooks.
     * List webhooks
     * @param limit Limit the number of returned items
     * @param cursor Specifying the start cursor position
     */
    public v1WebhookList(limit?: number, cursor?: string, _options?: Configuration): Observable<ListResponseWebhookOut> {
        const requestContextPromise = this.requestFactory.v1WebhookList(limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhookList(rsp)));
            }));
    }
 
    /**
     * update a specified webhook.
     * update webhook
     * @param webhookId Specified the webhook id.
     * @param webhookPatch 
     */
    public v1WebhookPatch(webhookId: string, webhookPatch: WebhookPatch, _options?: Configuration): Observable<WebhookOut> {
        const requestContextPromise = this.requestFactory.v1WebhookPatch(webhookId, webhookPatch, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhookPatch(rsp)));
            }));
    }
 
    /**
     * retrieve the specified webhook.
     * Retrieve webhook
     * @param webhookId Specified the webhook id.
     */
    public v1WebhookRetrieve(webhookId: string, _options?: Configuration): Observable<WebhookOut> {
        const requestContextPromise = this.requestFactory.v1WebhookRetrieve(webhookId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1WebhookRetrieve(rsp)));
            }));
    }
 
}
