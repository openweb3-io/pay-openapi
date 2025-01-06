# .PayoutApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PayoutsCreate**](PayoutApi.md#v1PayoutsCreate) | **POST** /api/v1/apps/{appId}/payouts | Payout to address
[**v1PayoutsList**](PayoutApi.md#v1PayoutsList) | **GET** /api/v1/apps/{appId}/payouts | List payouts
[**v1PayoutsRetrieve**](PayoutApi.md#v1PayoutsRetrieve) | **GET** /api/v1/apps/{appId}/payouts/{payoutId} | Retrieve a payout


# **v1PayoutsCreate**
> Payout v1PayoutsCreate(createPayout)

Payout to address

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiV1PayoutsCreateRequest = {
  // string | App ID
  appId: "appId_example",
  // CreatePayout | Request body
  createPayout: {
    amount: "amount_example",
    currency: "currency_example",
    network: "network_example",
    note: "note_example",
    toAddress: "toAddress_example",
    userId: "userId_example",
  },
};

apiInstance.v1PayoutsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPayout** | **CreatePayout**| Request body |
 **appId** | [**string**] | App ID | defaults to undefined


### Return type

**Payout**

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

# **v1PayoutsList**
> CursorPagePayout v1PayoutsList()

List payouts

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiV1PayoutsListRequest = {
  // string | App ID
  appId: "appId_example",
  // string | Cursor (optional)
  cursor: "cursor_example",
  // number | Limit (optional)
  limit: 1,
};

apiInstance.v1PayoutsList(body).then((data:any) => {
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

**CursorPagePayout**

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

# **v1PayoutsRetrieve**
> Payout v1PayoutsRetrieve()

Retrieve a payout

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PayoutApi(configuration);

let body:.PayoutApiV1PayoutsRetrieveRequest = {
  // string | App ID
  appId: "appId_example",
  // string | Payout ID
  payoutId: "payoutId_example",
};

apiInstance.v1PayoutsRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined
 **payoutId** | [**string**] | Payout ID | defaults to undefined


### Return type

**Payout**

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


