# .RefundApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1RefundsCreate**](RefundApi.md#v1RefundsCreate) | **POST** /api/v1/apps/{appId}/refunds | Refund invoice payment
[**v1RefundsList**](RefundApi.md#v1RefundsList) | **GET** /api/v1/apps/{appId}/refunds | List refunds
[**v1RefundsRetrieve**](RefundApi.md#v1RefundsRetrieve) | **GET** /api/v1/apps/{appId}/refunds/{refundId} | Retrieve a refund


# **v1RefundsCreate**
> Refund v1RefundsCreate(createRefund)

Refund invoice payment

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RefundApi(configuration);

let body:.RefundApiV1RefundsCreateRequest = {
  // string | App ID
  appId: "appId_example",
  // CreateRefund | Request body
  createRefund: {
    amount: 3.14,
    invoiceId: "invoiceId_example",
    note: "note_example",
    toAddress: "toAddress_example",
  },
};

apiInstance.v1RefundsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRefund** | **CreateRefund**| Request body |
 **appId** | [**string**] | App ID | defaults to undefined


### Return type

**Refund**

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

# **v1RefundsList**
> CursorPageRefund v1RefundsList()

List refunds

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RefundApi(configuration);

let body:.RefundApiV1RefundsListRequest = {
  // string | App ID
  appId: "appId_example",
  // string | Cursor (optional)
  cursor: "cursor_example",
  // number | Limit (optional)
  limit: 1,
};

apiInstance.v1RefundsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined
 **cursor** | [**string**] | Cursor | (optional) defaults to undefined
 **limit** | [**number**] | Limit | (optional) defaults to undefined


### Return type

**CursorPageRefund**

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

# **v1RefundsRetrieve**
> Refund v1RefundsRetrieve()

Retrieve a refund

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RefundApi(configuration);

let body:.RefundApiV1RefundsRetrieveRequest = {
  // string | App ID
  appId: "appId_example",
  // string | Refund ID
  refundId: "refundId_example",
};

apiInstance.v1RefundsRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined
 **refundId** | [**string**] | Refund ID | defaults to undefined


### Return type

**Refund**

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


