# .WebhookApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1EndpointsCreate**](WebhookApi.md#v1EndpointsCreate) | **POST** /api/v1/apps/{appId}/endpoints | Create a webhook endpoint
[**v1EndpointsDelete**](WebhookApi.md#v1EndpointsDelete) | **DELETE** /api/v1/apps/{appId}/endpoints/{endpointId} | Delete a webhook endpoint
[**v1EndpointsList**](WebhookApi.md#v1EndpointsList) | **GET** /api/v1/apps/{appId}/endpoints | List webhook endpoints
[**v1EndpointsRetrieve**](WebhookApi.md#v1EndpointsRetrieve) | **GET** /api/v1/apps/{appId}/endpoints/{endpointId} | Retrieve a webhook endpoint
[**v1EndpointsUpdate**](WebhookApi.md#v1EndpointsUpdate) | **PATCH** /api/v1/apps/{appId}/endpoints/{endpointId} | Update a webhook endpoint


# **v1EndpointsCreate**
> Webhook v1EndpointsCreate(createWebhook)

Create a webhook endpoint

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiV1EndpointsCreateRequest = {
  // string | App ID
  appId: "appId_example",
  // CreateWebhook | Request body
  createWebhook: {
    description: "description_example",
    disabled: true,
    eventTypes: [
      "eventTypes_example",
    ],
    headers: {
      "key": "key_example",
    },
    metadata: {
      "key": null,
    },
    uid: "uid_example",
    url: "url_example",
  },
};

apiInstance.v1EndpointsCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhook** | **CreateWebhook**| Request body |
 **appId** | [**string**] | App ID | defaults to undefined


### Return type

**Webhook**

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

# **v1EndpointsDelete**
> Webhook v1EndpointsDelete()

Delete a webhook endpoint

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiV1EndpointsDeleteRequest = {
  // string | App ID
  appId: "appId_example",
  // string | Endpoint ID
  endpointId: "endpointId_example",
};

apiInstance.v1EndpointsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined
 **endpointId** | [**string**] | Endpoint ID | defaults to undefined


### Return type

**Webhook**

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

# **v1EndpointsList**
> CursorPageWebhook v1EndpointsList()

List webhook endpoints

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiV1EndpointsListRequest = {
  // string | App ID
  appId: "appId_example",
  // number
  limit: 1,
  // string (optional)
  cursor: "cursor_example",
};

apiInstance.v1EndpointsList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**CursorPageWebhook**

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

# **v1EndpointsRetrieve**
> Webhook v1EndpointsRetrieve()

Retrieve a webhook endpoint

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiV1EndpointsRetrieveRequest = {
  // string | App ID
  appId: "appId_example",
  // string | Endpoint ID
  endpointId: "endpointId_example",
};

apiInstance.v1EndpointsRetrieve(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined
 **endpointId** | [**string**] | Endpoint ID | defaults to undefined


### Return type

**Webhook**

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

# **v1EndpointsUpdate**
> Webhook v1EndpointsUpdate(updateWebhook)

Update a webhook endpoint

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhookApi(configuration);

let body:.WebhookApiV1EndpointsUpdateRequest = {
  // string | App ID
  appId: "appId_example",
  // string | Endpoint ID
  endpointId: "endpointId_example",
  // UpdateWebhook | Request body
  updateWebhook: {
    description: "description_example",
    disabled: true,
    eventTypes: [
      "eventTypes_example",
    ],
    headers: {
      "key": "key_example",
    },
    metadata: {
      "key": null,
    },
    uid: "uid_example",
    url: "url_example",
  },
};

apiInstance.v1EndpointsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWebhook** | **UpdateWebhook**| Request body |
 **appId** | [**string**] | App ID | defaults to undefined
 **endpointId** | [**string**] | Endpoint ID | defaults to undefined


### Return type

**Webhook**

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


