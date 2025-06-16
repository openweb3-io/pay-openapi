# \PayoutApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1PayoutsCreate**](PayoutApi.md#V1PayoutsCreate) | **Post** /api/v1/apps/{app_id}/payouts | Payout to address
[**V1PayoutsList**](PayoutApi.md#V1PayoutsList) | **Get** /api/v1/apps/{app_id}/payouts | List payouts
[**V1PayoutsRetrieve**](PayoutApi.md#V1PayoutsRetrieve) | **Get** /api/v1/apps/{app_id}/payouts/{payout_id} | Retrieve a payout



## V1PayoutsCreate

> Payout V1PayoutsCreate(ctx, appId).CreatePayout(createPayout).Execute()

Payout to address



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
    createPayout := *openapiclient.NewCreatePayout() // CreatePayout | Request body

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.PayoutApi.V1PayoutsCreate(context.Background(), appId).CreatePayout(createPayout).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PayoutApi.V1PayoutsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1PayoutsCreate`: Payout
    fmt.Fprintf(os.Stdout, "Response from `PayoutApi.V1PayoutsCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1PayoutsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createPayout** | [**CreatePayout**](CreatePayout.md) | Request body | 

### Return type

[**Payout**](Payout.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1PayoutsList

> CursorPagePayout V1PayoutsList(ctx, appId).Cursor(cursor).Limit(limit).Execute()

List payouts



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
    resp, r, err := api_client.PayoutApi.V1PayoutsList(context.Background(), appId).Cursor(cursor).Limit(limit).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PayoutApi.V1PayoutsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1PayoutsList`: CursorPagePayout
    fmt.Fprintf(os.Stdout, "Response from `PayoutApi.V1PayoutsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1PayoutsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cursor** | **string** | Cursor | 
 **limit** | **int32** | Limit | 

### Return type

[**CursorPagePayout**](CursorPagePayout.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1PayoutsRetrieve

> Payout V1PayoutsRetrieve(ctx, appId, payoutId).Execute()

Retrieve a payout



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
    payoutId := "payoutId_example" // string | Payout ID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.PayoutApi.V1PayoutsRetrieve(context.Background(), appId, payoutId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PayoutApi.V1PayoutsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1PayoutsRetrieve`: Payout
    fmt.Fprintf(os.Stdout, "Response from `PayoutApi.V1PayoutsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 
**payoutId** | **string** | Payout ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1PayoutsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Payout**](Payout.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

