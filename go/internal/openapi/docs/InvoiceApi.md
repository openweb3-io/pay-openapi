# \InvoiceApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1InvoiceCreate**](InvoiceApi.md#V1InvoiceCreate) | **Post** /api/v1/apps/{appId}/invoices | Create invoice
[**V1InvoiceGet**](InvoiceApi.md#V1InvoiceGet) | **Get** /api/v1/apps/{appId}/invoices/{idOrUid} | Get invoice
[**V1InvoiceList**](InvoiceApi.md#V1InvoiceList) | **Get** /api/v1/apps/{appId}/invoices | List invoices



## V1InvoiceCreate

> InvoiceOut V1InvoiceCreate(ctx, appId).InvoiceIn(invoiceIn).Execute()

Create invoice



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
    appId := "app_12345xsfei" // string | Specified the app id.
    invoiceIn := *openapiclient.NewInvoiceIn("ton-connect", "USDT", "0.0012345") // InvoiceIn | 

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.InvoiceApi.V1InvoiceCreate(context.Background(), appId).InvoiceIn(invoiceIn).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InvoiceApi.V1InvoiceCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1InvoiceCreate`: InvoiceOut
    fmt.Fprintf(os.Stdout, "Response from `InvoiceApi.V1InvoiceCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | Specified the app id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1InvoiceCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **invoiceIn** | [**InvoiceIn**](InvoiceIn.md) |  | 

### Return type

[**InvoiceOut**](InvoiceOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1InvoiceGet

> InvoiceOut V1InvoiceGet(ctx, appId, idOrUid).Execute()

Get invoice



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
    appId := "app_12345xsfei" // string | Specified the app id.
    idOrUid := "7e5c7e13-0573-472e-9e34-fe779c618faf" // string | Specified the invoice id or invoice uid.

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.InvoiceApi.V1InvoiceGet(context.Background(), appId, idOrUid).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InvoiceApi.V1InvoiceGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1InvoiceGet`: InvoiceOut
    fmt.Fprintf(os.Stdout, "Response from `InvoiceApi.V1InvoiceGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | Specified the app id. | 
**idOrUid** | **string** | Specified the invoice id or invoice uid. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1InvoiceGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**InvoiceOut**](InvoiceOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1InvoiceList

> ListResponseInvoiceOut V1InvoiceList(ctx, appId).Limit(limit).Offset(offset).UserId(userId).Channel(channel).Execute()

List invoices



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
    appId := "app_12345xsfei" // string | Specified the app id.
    limit := int32(100) // int32 | Limit the number of returned items (optional) (default to 20)
    offset := int32(0) // int32 | Specifying the amount of excluded from a response the first N invoices (optional) (default to 0)
    userId := "userid" // string | Optional invoice user id (optional)
    channel := "ton.0.mainnet" // string | Channel of the invoice (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.InvoiceApi.V1InvoiceList(context.Background(), appId).Limit(limit).Offset(offset).UserId(userId).Channel(channel).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InvoiceApi.V1InvoiceList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1InvoiceList`: ListResponseInvoiceOut
    fmt.Fprintf(os.Stdout, "Response from `InvoiceApi.V1InvoiceList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | Specified the app id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1InvoiceListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Limit the number of returned items | [default to 20]
 **offset** | **int32** | Specifying the amount of excluded from a response the first N invoices | [default to 0]
 **userId** | **string** | Optional invoice user id | 
 **channel** | **string** | Channel of the invoice | 

### Return type

[**ListResponseInvoiceOut**](ListResponseInvoiceOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

