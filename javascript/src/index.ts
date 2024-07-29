import {
  ServerConfiguration,
  Configuration,
  createConfiguration,
  InvoiceApi,
  InvoiceIn,
  InvoiceOut,
  ListResponseInvoiceOut,
  Middleware,
  RequestContext,
  ResponseContext,
  Ordering,
  EndpointApi,
  EndpointIn,
  EndpointOut,
  EndpointPatch,
  ListResponseEndpointOut,
} from "./openapi/index";
export * from "./openapi/models/all";
export * from "./openapi/apis/exception";
import { createHash } from "crypto";
import { timingSafeEqual } from "./timing_safe_equal";
import * as base64 from "@stablelib/base64";
import * as sha256 from "fast-sha256";

const WEBHOOK_TOLERANCE_IN_SECONDS = 5 * 60; // 5 minutes
const VERSION = "0.2.0";

class UserAgentMiddleware implements Middleware {
  public pre(context: RequestContext): Promise<RequestContext> {
    context.setHeaderParam("User-Agent", `pay-libs/${VERSION}/javascript`);
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

export interface payOptions {
  debug?: boolean;
  serverUrl?: string;
}

export class pay {
  public readonly _configuration: Configuration;
  public readonly Invoice: Invoice;
  public readonly Endpoint: Endpoint;

  public constructor(apikey: string, privateKey: string, options: payOptions = {}) {
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
    this.Invoice = new Invoice(config);
    this.Endpoint = new Endpoint(config);
  }
}
export interface PostOptions {
  idempotencyKey?: string;
}

interface ListOptions {
  iterator?: string;
  limit?: number;
}

export interface InvoiceListOptions extends ListOptions {
  ordering?: Ordering;
}

export interface EndpointListOptions {
  ordering?: Ordering;
  cursor?: string;
  limit?: number;
}

class Invoice{
  private readonly api: InvoiceApi;

  public constructor(config: Configuration) {
    this.api = new InvoiceApi(config);
  }

  public list(appId:string, options?: InvoiceListOptions): Promise<ListResponseInvoiceOut> {
    return this.api.v1InvoiceList({ appId, ...options });
  }

  public create(appId: string, invoiceIn: InvoiceIn, options?: PostOptions): Promise<InvoiceOut> {
    return this.api.v1InvoiceCreate({ appId, invoiceIn, ...options });
  }

  public get(appId: string, idOrUid: string): Promise<InvoiceOut> {
    return this.api.v1InvoiceGet({ appId, idOrUid });
  }
}

class Endpoint {
  private readonly api: EndpointApi;

  public constructor(config: Configuration) {
    this.api = new EndpointApi(config);
  }

  public create(appId: string, endpointIn: EndpointIn, options?: PostOptions): Promise<EndpointOut> {
    return this.api.v1EndpointCreate({ appId, endpointIn, ...options });
  }

  public patch(
    appId: string,
    endpointId: string,
    endpointPatch: EndpointPatch,
    options?: PostOptions
  ): Promise<EndpointOut> {
    return this.api.v1EndpointPatch({ appId, endpointId, endpointPatch, ...options });
  }

  public delete(appId: string, endpointId: string): Promise<EndpointOut> {
    return this.api.v1EndpointDelete({ appId, endpointId });
  }

  public get(appId: string, endpointId: string): Promise<EndpointOut> {
    return this.api.v1EndpointGet({appId, endpointId });
  }
  public list(appId: string, options?: EndpointListOptions): Promise<ListResponseEndpointOut> {
    return this.api.v1EndpointList({ appId, ...options });
  }
}

class ExtendableError extends Error {
  constructor(message: any) {
    super(message);
    Object.setPrototypeOf(this, ExtendableError.prototype);
    this.name = "ExtendableError";
    this.stack = new Error(message).stack;
  }
}

export class WebhookVerificationError extends ExtendableError {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, WebhookVerificationError.prototype);
    this.name = "WebhookVerificationError";
  }
}

export interface WebhookRequiredHeaders {
  "x-id": string;
  "x-timestamp": string;
  "x-signature": string;
}

export interface WebhookUnbrandedRequiredHeaders {
  "webhook-id": string;
  "webhook-timestamp": string;
  "webhook-signature": string;
}

export interface WebhookOptions {
  format?: "raw";
}

export class Webhook {
  private static prefix = "whsec_";
  private readonly key: Uint8Array;

  constructor(secret: string | Uint8Array, options?: WebhookOptions) {
    if (!secret) {
      throw new Error("Secret can't be empty.");
    }
    if (options?.format === "raw") {
      if (secret instanceof Uint8Array) {
        this.key = secret;
      } else {
        this.key = Uint8Array.from(secret, (c) => c.charCodeAt(0));
      }
    } else {
      if (typeof secret !== "string") {
        throw new Error("Expected secret to be of type string");
      }
      if (secret.startsWith(Webhook.prefix)) {
        secret = secret.substring(Webhook.prefix.length);
      }
      this.key = base64.decode(secret);
    }
  }

  public verify(
    payload: string | Buffer,
    headers_:
      | WebhookRequiredHeaders
      | WebhookUnbrandedRequiredHeaders
      | Record<string, string>
  ): unknown {
    const headers: Record<string, string> = {};
    for (const key of Object.keys(headers_)) {
      headers[key.toLowerCase()] = (headers_ as Record<string, string>)[key];
    }

    let msgId = headers["x-id"];
    let msgSignature = headers["x-signature"];
    let msgTimestamp = headers["x-timestamp"];

    if (!msgSignature || !msgId || !msgTimestamp) {
      msgId = headers["webhook-id"];
      msgSignature = headers["webhook-signature"];
      msgTimestamp = headers["webhook-timestamp"];

      if (!msgSignature || !msgId || !msgTimestamp) {
        throw new WebhookVerificationError("Missing required headers");
      }
    }

    const timestamp = this.verifyTimestamp(msgTimestamp);

    const computedSignature = this.sign(msgId, timestamp, payload);
    const expectedSignature = computedSignature.split(",")[1];

    const passedSignatures = msgSignature.split(" ");

    const encoder = new globalThis.TextEncoder();
    for (const versionedSignature of passedSignatures) {
      const [version, signature] = versionedSignature.split(",");
      if (version !== "v1") {
        continue;
      }

      if (timingSafeEqual(encoder.encode(signature), encoder.encode(expectedSignature))) {
        return JSON.parse(payload.toString());
      }
    }
    throw new WebhookVerificationError("No matching signature found");
  }

  public sign(msgId: string, timestamp: Date, payload: string | Buffer): string {
    if (typeof payload === "string") {
      // Do nothing, already a string
    } else if (payload.constructor.name === "Buffer") {
      payload = payload.toString();
    } else {
      throw new Error(
        "Expected payload to be of type string or Buffer. Please refer to https://docs.x.com/receiving/verifying-payloads/how for more information."
      );
    }

    const encoder = new TextEncoder();
    const timestampNumber = Math.floor(timestamp.getTime() / 1000);
    const toSign = encoder.encode(`${msgId}.${timestampNumber}.${payload}`);
    const expectedSignature = base64.encode(sha256.hmac(this.key, toSign));
    return `v1,${expectedSignature}`;
  }

  private verifyTimestamp(timestampHeader: string): Date {
    const now = Math.floor(Date.now() / 1000);
    const timestamp = parseInt(timestampHeader, 10);
    if (isNaN(timestamp)) {
      throw new WebhookVerificationError("Invalid Signature Headers");
    }

    if (now - timestamp > WEBHOOK_TOLERANCE_IN_SECONDS) {
      throw new WebhookVerificationError("Message timestamp too old");
    }
    if (timestamp > now + WEBHOOK_TOLERANCE_IN_SECONDS) {
      throw new WebhookVerificationError("Message timestamp too new");
    }
    return new Date(timestamp * 1000);
  }
}

export interface WebhookMessage {
  event_type: string;
  payload: InvoiceOut;
}
