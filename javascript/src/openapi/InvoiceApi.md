# .InvoiceApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1InvoicesCreate**](InvoiceApi.md#v1InvoicesCreate) | **POST** /api/v1/apps/{appId}/invoices | Create an invoice
[**v1InvoicesList**](InvoiceApi.md#v1InvoicesList) | **GET** /api/v1/apps/{appId}/invoices | List invoices
[**v1InvoicesRetrieve**](InvoiceApi.md#v1InvoicesRetrieve) | **GET** /api/v1/apps/{appId}/invoices/{invoiceId} | Retrieve an invoice


# **v1InvoicesCreate**
> Invoice v1InvoicesCreate(createInvoiceRequest)

Create an invoice

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoiceApi(configuration);

let body:.InvoiceApiV1InvoicesCreateRequest = {
  // string | App ID
  appId: "appId_example",
  // CreateInvoiceRequest | Request body
  createInvoiceRequest: {
    amount: "amount_example",
    channel: "channel_example",
    currency: "currency_example",
    expiration: 1,
    extra: {
      "key": null,
    },
    metadata: {
      "key": null,
    },
    note: "note_example",
    provider: "provider_example",
    uid: "uid_example",
    userId: "userId_example",
  },
};

apiInstance.v1InvoicesCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInvoiceRequest** | **CreateInvoiceRequest**| Request body |
 **appId** | [**string**] | App ID | defaults to undefined


### Return type

**Invoice**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1InvoicesList**
> PageInvoice v1InvoicesList()

List invoices

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoiceApi(configuration);

let body:.InvoiceApiV1InvoicesListRequest = {
  // string | App ID
  appId: "appId_example",
  // string (optional)
  userId: "userId_example",
  // number (optional)
  offset: 1,
  // number (optional)
  limit: 1,
  // string (optional)
  channel: "channel_example",
};

apiInstance.v1InvoicesList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **channel** | [**string**] |  | (optional) defaults to undefined


### Return type

**PageInvoice**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v1InvoicesRetrieve**
> Invoice v1InvoicesRetrieve()

Retrieve an invoice

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoiceApi(configuration);

let body:.InvoiceApiV1InvoicesRetrieveRequest = {
  // string | App ID
  appId: "appId_example",
  // string | Invoice ID / UID
  invoiceId: "invoiceId_example",
};

apiInstance.v1InvoicesRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined
 **invoiceId** | [**string**] | Invoice ID / UID | defaults to undefined


### Return type

**Invoice**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


