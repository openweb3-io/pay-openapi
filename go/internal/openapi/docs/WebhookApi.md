# \WebhookApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1EndpointsCreate**](WebhookApi.md#V1EndpointsCreate) | **Post** /api/v1/apps/{appId}/endpoints | Create a webhook endpoint
[**V1EndpointsDelete**](WebhookApi.md#V1EndpointsDelete) | **Delete** /api/v1/apps/{appId}/endpoints/{endpointId} | Delete a webhook endpoint
[**V1EndpointsList**](WebhookApi.md#V1EndpointsList) | **Get** /api/v1/apps/{appId}/endpoints | List webhook endpoints
[**V1EndpointsRetrieve**](WebhookApi.md#V1EndpointsRetrieve) | **Get** /api/v1/apps/{appId}/endpoints/{endpointId} | Retrieve a webhook endpoint
[**V1EndpointsUpdate**](WebhookApi.md#V1EndpointsUpdate) | **Patch** /api/v1/apps/{appId}/endpoints/{endpointId} | Update a webhook endpoint



## V1EndpointsCreate

> Webhook V1EndpointsCreate(ctx, appId).CreateWebhook(createWebhook).Execute()

Create a webhook endpoint



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    appId := "appId_example" // string | App ID
    createWebhook := *openapiclient.NewCreateWebhook(false, []string{"EventTypes_example"}, map[string]string{"key": "Inner_example"}, map[string]interface{}{"key": interface{}(123)}, "Url_example") // CreateWebhook | Request body

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookApi.V1EndpointsCreate(context.Background(), appId).CreateWebhook(createWebhook).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookApi.V1EndpointsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EndpointsCreate`: Webhook
    fmt.Fprintf(os.Stdout, "Response from `WebhookApi.V1EndpointsCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EndpointsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createWebhook** | [**CreateWebhook**](CreateWebhook.md) | Request body | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EndpointsDelete

> Webhook V1EndpointsDelete(ctx, appId, endpointId).Execute()

Delete a webhook endpoint



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    appId := "appId_example" // string | App ID
    endpointId := "endpointId_example" // string | Endpoint ID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookApi.V1EndpointsDelete(context.Background(), appId, endpointId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookApi.V1EndpointsDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EndpointsDelete`: Webhook
    fmt.Fprintf(os.Stdout, "Response from `WebhookApi.V1EndpointsDelete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 
**endpointId** | **string** | Endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EndpointsDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Webhook**](Webhook.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EndpointsList

> CursorPageWebhook V1EndpointsList(ctx, appId).Cursor(cursor).Limit(limit).Ordering(ordering).Execute()

List webhook endpoints



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    appId := "appId_example" // string | App ID
    cursor := "cursor_example" // string |  (optional)
    limit := int32(56) // int32 |  (optional)
    ordering := "ordering_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookApi.V1EndpointsList(context.Background(), appId).Cursor(cursor).Limit(limit).Ordering(ordering).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookApi.V1EndpointsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EndpointsList`: CursorPageWebhook
    fmt.Fprintf(os.Stdout, "Response from `WebhookApi.V1EndpointsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EndpointsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **string** |  | 
 **limit** | **int32** |  | 
 **ordering** | **string** |  | 

### Return type

[**CursorPageWebhook**](CursorPageWebhook.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EndpointsRetrieve

> Webhook V1EndpointsRetrieve(ctx, appId, endpointId).Execute()

Retrieve a webhook endpoint



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    appId := "appId_example" // string | App ID
    endpointId := "endpointId_example" // string | Endpoint ID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookApi.V1EndpointsRetrieve(context.Background(), appId, endpointId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookApi.V1EndpointsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EndpointsRetrieve`: Webhook
    fmt.Fprintf(os.Stdout, "Response from `WebhookApi.V1EndpointsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 
**endpointId** | **string** | Endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EndpointsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Webhook**](Webhook.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1EndpointsUpdate

> Webhook V1EndpointsUpdate(ctx, appId, endpointId).UpdateWebhook(updateWebhook).Execute()

Update a webhook endpoint



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    appId := "appId_example" // string | App ID
    endpointId := "endpointId_example" // string | Endpoint ID
    updateWebhook := *openapiclient.NewUpdateWebhook([]string{"EventTypes_example"}, map[string]string{"key": "Inner_example"}, map[string]interface{}{"key": interface{}(123)}) // UpdateWebhook | Request body

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.WebhookApi.V1EndpointsUpdate(context.Background(), appId, endpointId).UpdateWebhook(updateWebhook).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhookApi.V1EndpointsUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1EndpointsUpdate`: Webhook
    fmt.Fprintf(os.Stdout, "Response from `WebhookApi.V1EndpointsUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 
**endpointId** | **string** | Endpoint ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1EndpointsUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **updateWebhook** | [**UpdateWebhook**](UpdateWebhook.md) | Request body | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth), [SignatureAuth](../README.md#SignatureAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

