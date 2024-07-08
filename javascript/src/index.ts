import {
  ServerConfiguration,
  Configuration,
  createConfiguration,
  OrderApi,
  OrderIn,
  OrderOut,
  ListResponseOrderOut,
  AccountApi,
  ListResponseAccountOut,
  Middleware,
  RequestContext,
  ResponseContext,
  Ordering,
  WebhookApi,
  WebhookIn,
  WebhookOut,
  WebhookPatch,
  ListResponseWebhookOut,
} from "./openapi/index";
export * from "./openapi/models/all";
export * from "./openapi/apis/exception";
import { createHash } from "crypto";

const VERSION = "0.1.0";

class UserAgentMiddleware implements Middleware {
  public pre(context: RequestContext): Promise<RequestContext> {
    context.setHeaderParam("User-Agent", `walletpay-libs/${VERSION}/javascript`);
    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

function hmacSha256(data: string, secret: string): string {
  const hmac = createHash("sha256").update(data).update(secret).digest("hex");
  return hmac;
}

class SignatureMiddleware implements Middleware {
  public constructor(private privateKey: string) {}

  public pre(context: RequestContext): Promise<RequestContext> {
    const timestamp = new Date().toString();
    context.setHeaderParam("x-request-time", timestamp);

    // TODO: 计算签名
    let source = "";
    const method = context.getHttpMethod();
    if (method === "POST" || method === "PUT") {
      source += context.getBody()?.toString();
    }
    const url = new URL(context.getUrl());
    source += url.pathname;
    source += timestamp;

    const sign = hmacSha256(source, this.privateKey);
    context.setHeaderParam("x-signature", sign);

    return Promise.resolve(context);
  }

  public post(context: ResponseContext): Promise<ResponseContext> {
    return Promise.resolve(context);
  }
}

export interface walletpayOptions {
  debug?: boolean;
  serverUrl?: string;
}

export class walletpay {
  public readonly _configuration: Configuration;
  public readonly Order: Order;
  public readonly Account: Account;
  public readonly Webhook: Webhook;

  public constructor(apikey: string, privateKey: string, options: walletpayOptions = {}) {
    const baseUrl: string = options.serverUrl ?? "https://api.pay.openweb3.io";

    const baseServer = new ServerConfiguration<any>(baseUrl, {});

    const config = createConfiguration({
      baseServer,
      promiseMiddleware: [new UserAgentMiddleware(), new SignatureMiddleware(privateKey)],
      authMethods: {
        ApiKeyAuth: apikey,
      },
    });

    this._configuration = config;
    this.Order = new Order(config);
    this.Account = new Account(config);
    this.Webhook = new Webhook(config);
  }
}
export interface PostOptions {
  idempotencyKey?: string;
}

interface ListOptions {
  iterator?: string;
  limit?: number;
}

export interface OrderListOptions extends ListOptions {
  order?: Ordering;
}

export interface AccountListOptions extends ListOptions {
  order?: Ordering;
}

export interface WebhookListOptions {
  order?: Ordering;
  cursor?: string;
  limit?: number;
}

class Order {
  private readonly api: OrderApi;

  public constructor(config: Configuration) {
    this.api = new OrderApi(config);
  }

  public list(options?: OrderListOptions): Promise<ListResponseOrderOut> {
    return this.api.v1OrderList({ ...options });
  }

  public create(orderIn: OrderIn, options?: PostOptions): Promise<OrderOut> {
    return this.api.v1OrderCreate({ orderIn, ...options });
  }
}

class Account {
  private readonly api: AccountApi;

  public constructor(config: Configuration) {
    this.api = new AccountApi(config);
  }

  public list(options?: AccountListOptions): Promise<ListResponseAccountOut> {
    return this.api.v1AccountList({ ...options });
  }
}

class Webhook {
  private readonly api: WebhookApi;

  public constructor(config: Configuration) {
    this.api = new WebhookApi(config);
  }

  public create(webhookIn: WebhookIn, options?: PostOptions): Promise<WebhookOut> {
    return this.api.v1WebhookCreate({ webhookIn, ...options });
  }

  public update(
    webhookId: string,
    webhookPatch: WebhookPatch,
    options?: PostOptions
  ): Promise<WebhookOut> {
    return this.api.v1WebhookPatch({ webhookId, webhookPatch, ...options });
  }

  public delete(webhookId: string): Promise<WebhookOut> {
    return this.api.v1WebhookDelete({ webhookId });
  }

  public retrieve(webhookId: string): Promise<WebhookOut> {
    return this.api.v1WebhookRetrieve({ webhookId });
  }
  public list(options?: WebhookListOptions): Promise<ListResponseWebhookOut> {
    return this.api.v1WebhookList({ ...options });
  }
}
