# \RefundApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1RefundsCreate**](RefundApi.md#V1RefundsCreate) | **Post** /api/v1/apps/{appId}/refunds | Refund invoice payment
[**V1RefundsList**](RefundApi.md#V1RefundsList) | **Get** /api/v1/apps/{appId}/refunds | List refunds
[**V1RefundsRetrieve**](RefundApi.md#V1RefundsRetrieve) | **Get** /api/v1/apps/{appId}/refunds/{refundId} | Retrieve a refund



## V1RefundsCreate

> Refund V1RefundsCreate(ctx, appId).CreateRefund(createRefund).Execute()

Refund invoice payment



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
    createRefund := *openapiclient.NewCreateRefund() // CreateRefund | Request body

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RefundApi.V1RefundsCreate(context.Background(), appId).CreateRefund(createRefund).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundApi.V1RefundsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RefundsCreate`: Refund
    fmt.Fprintf(os.Stdout, "Response from `RefundApi.V1RefundsCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1RefundsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createRefund** | [**CreateRefund**](CreateRefund.md) | Request body | 

### Return type

[**Refund**](Refund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1RefundsList

> CursorPageRefund V1RefundsList(ctx, appId).Cursor(cursor).Limit(limit).Execute()

List refunds



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
    cursor := "cursor_example" // string | Cursor (optional)
    limit := int32(56) // int32 | Limit (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RefundApi.V1RefundsList(context.Background(), appId).Cursor(cursor).Limit(limit).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundApi.V1RefundsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RefundsList`: CursorPageRefund
    fmt.Fprintf(os.Stdout, "Response from `RefundApi.V1RefundsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1RefundsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **string** | Cursor | 
 **limit** | **int32** | Limit | 

### Return type

[**CursorPageRefund**](CursorPageRefund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1RefundsRetrieve

> Refund V1RefundsRetrieve(ctx, appId, refundId).Execute()

Retrieve a refund



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
    refundId := "refundId_example" // string | Refund ID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.RefundApi.V1RefundsRetrieve(context.Background(), appId, refundId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RefundApi.V1RefundsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1RefundsRetrieve`: Refund
    fmt.Fprintf(os.Stdout, "Response from `RefundApi.V1RefundsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 
**refundId** | **string** | Refund ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1RefundsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Refund**](Refund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

