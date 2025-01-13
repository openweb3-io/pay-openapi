# \InvoiceApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1InvoicesCreate**](InvoiceApi.md#V1InvoicesCreate) | **Post** /api/v1/apps/{appId}/invoices | Create an invoice
[**V1InvoicesList**](InvoiceApi.md#V1InvoicesList) | **Get** /api/v1/apps/{appId}/invoices | List invoices
[**V1InvoicesRetrieve**](InvoiceApi.md#V1InvoicesRetrieve) | **Get** /api/v1/apps/{appId}/invoices/{invoiceId} | Retrieve an invoice



## V1InvoicesCreate

> Invoice V1InvoicesCreate(ctx, appId).CreateInvoiceRequest(createInvoiceRequest).Execute()

Create an invoice



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
    createInvoiceRequest := *openapiclient.NewCreateInvoiceRequest("Amount_example", "Channel_example", "Currency_example", "Provider_example") // CreateInvoiceRequest | Request body

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.InvoiceApi.V1InvoicesCreate(context.Background(), appId).CreateInvoiceRequest(createInvoiceRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InvoiceApi.V1InvoicesCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1InvoicesCreate`: Invoice
    fmt.Fprintf(os.Stdout, "Response from `InvoiceApi.V1InvoicesCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1InvoicesCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createInvoiceRequest** | [**CreateInvoiceRequest**](CreateInvoiceRequest.md) | Request body | 

### Return type

[**Invoice**](Invoice.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1InvoicesList

> PageInvoice V1InvoicesList(ctx, appId).Limit(limit).Offset(offset).Channel(channel).UserId(userId).Execute()

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
    appId := "appId_example" // string | App ID
    limit := int32(56) // int32 |  (optional)
    offset := int32(56) // int32 |  (optional)
    channel := "channel_example" // string |  (optional)
    userId := "userId_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.InvoiceApi.V1InvoicesList(context.Background(), appId).Limit(limit).Offset(offset).Channel(channel).UserId(userId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InvoiceApi.V1InvoicesList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1InvoicesList`: PageInvoice
    fmt.Fprintf(os.Stdout, "Response from `InvoiceApi.V1InvoicesList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1InvoicesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** |  | 
 **offset** | **int32** |  | 
 **channel** | **string** |  | 
 **userId** | **string** |  | 

### Return type

[**PageInvoice**](PageInvoice.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1InvoicesRetrieve

> Invoice V1InvoicesRetrieve(ctx, appId, invoiceId).Execute()

Retrieve an invoice



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
    invoiceId := "invoiceId_example" // string | Invoice ID / UID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.InvoiceApi.V1InvoicesRetrieve(context.Background(), appId, invoiceId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InvoiceApi.V1InvoicesRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1InvoicesRetrieve`: Invoice
    fmt.Fprintf(os.Stdout, "Response from `InvoiceApi.V1InvoicesRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 
**invoiceId** | **string** | Invoice ID / UID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1InvoicesRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Invoice**](Invoice.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

