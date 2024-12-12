export * from "./CreateInvoiceRequest";
export * from "./CreateWebhook";
export * from "./CryptoCurrency";
export * from "./CryptoCurrencyNetwork";
export * from "./CursorPageInvoice";
export * from "./CursorPageWebhook";
export * from "./FiatCurrency";
export * from "./Invoice";
export * from "./InvoiceStatus";
export * from "./Rate";
export * from "./UpdateWebhook";
export * from "./Webhook";

import { CreateInvoiceRequest } from "./CreateInvoiceRequest";
import { CreateWebhook } from "./CreateWebhook";
import { CryptoCurrency } from "./CryptoCurrency";
import { CryptoCurrencyNetwork } from "./CryptoCurrencyNetwork";
import { CursorPageInvoice } from "./CursorPageInvoice";
import { CursorPageWebhook } from "./CursorPageWebhook";
import { FiatCurrency } from "./FiatCurrency";
import { Invoice } from "./Invoice";
import { Rate } from "./Rate";
import { UpdateWebhook } from "./UpdateWebhook";
import { Webhook } from "./Webhook";

/* tslint:disable:no-unused-variable */
const primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any",
];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
};


const enumsMap: Set<string> = new Set<string>([
  "InvoiceStatus",
]);

const typeMap: { [index: string]: any } = {
  "CreateInvoiceRequest": CreateInvoiceRequest,
  "CreateWebhook": CreateWebhook,
  "CryptoCurrency": CryptoCurrency,
  "CryptoCurrencyNetwork": CryptoCurrencyNetwork,
  "CursorPageInvoice": CursorPageInvoice,
  "CursorPageWebhook": CursorPageWebhook,
  "FiatCurrency": FiatCurrency,
  "Invoice": Invoice,
  "Rate": Rate,
  "UpdateWebhook": UpdateWebhook,
  "Webhook": Webhook,
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data === undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap.has(expectedType)) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      const discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          const discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string, format: string) {
    if (data === undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(ObjectSerializer.serialize(date, subType, format));
      }
      return transformedData;
    } else if (type === "Date") {
      if (format === "date") {
        let month = data.getMonth() + 1;
        month = month < 10 ? "0" + month.toString() : month.toString();
        let day = data.getDate();
        day = day < 10 ? "0" + day.toString() : day.toString();

        return data.getFullYear() + "-" + month + "-" + day;
      } else {
        return data.toISOString();
      }
    } else {
      if (enumsMap.has(type)) {
        return data;
      }
      if (!typeMap[type]) { // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      const attributeTypes = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};
      for (const index in attributeTypes) {
        const attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data === undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(ObjectSerializer.deserialize(date, subType, format));
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else {
      if (enumsMap.has(type)) {// is Enum
        return data;
      }

      if (!typeMap[type]) { // dont know the type
        return data;
      }
      const instance = new typeMap[type]();
      const attributeTypes = typeMap[type].getAttributeTypeMap();
      for (const index in attributeTypes) {
        const attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
      }
      return instance;
    }
  }


  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(mediaType: string | undefined): string | undefined {
    if (mediaType === undefined) {
      return undefined;
    }
    return mediaType.split(";")[0].trim().toLowerCase();
  }

  /**
   * From a list of possible media types, choose the one we can handle best.
   *
   * The order of the given media types does not have any impact on the choice
   * made.
   */
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (!mediaTypes) {
      return "application/json";
    }

    const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank = -Infinity;
    for (const mediaType of normalMediaTypes) {
      if (supportedMediaTypes[mediaType!] > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supportedMediaTypes[mediaType!];
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    return selectedMediaType!;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === "application/json") {
      return JSON.stringify(data);
    }

    throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(rawData: string, mediaType: string | undefined) {
    if (mediaType === undefined) {
      throw new Error("Cannot parse content. No Content-Type defined.");
    }

    if (mediaType === "application/json") {
      return JSON.parse(rawData);
    }

    throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
  }
}
