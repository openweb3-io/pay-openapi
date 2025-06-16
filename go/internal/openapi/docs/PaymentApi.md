# \PaymentApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1PaymentsCreate**](PaymentApi.md#V1PaymentsCreate) | **Post** /api/v1/apps/{app_id}/payments | Create an Payment
[**V1PaymentsList**](PaymentApi.md#V1PaymentsList) | **Get** /api/v1/apps/{app_id}/payments | List Payments
[**V1PaymentsRetrieve**](PaymentApi.md#V1PaymentsRetrieve) | **Get** /api/v1/apps/{app_id}/payments/{payment_id} | Retrieve an Payment



## V1PaymentsCreate

> Payment V1PaymentsCreate(ctx, appId).CreatePaymentRequest(createPaymentRequest).Execute()

Create an Payment



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
    createPaymentRequest := *openapiclient.NewCreatePaymentRequest("Amount_example", "Currency_example", "PaymentMethod_example", "PaymentProvider_example", "Provider_example") // CreatePaymentRequest | Request body

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.PaymentApi.V1PaymentsCreate(context.Background(), appId).CreatePaymentRequest(createPaymentRequest).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentApi.V1PaymentsCreate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1PaymentsCreate`: Payment
    fmt.Fprintf(os.Stdout, "Response from `PaymentApi.V1PaymentsCreate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1PaymentsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md) | Request body | 

### Return type

[**Payment**](Payment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1PaymentsList

> PagePayment V1PaymentsList(ctx, appId).Limit(limit).Offset(offset).PaymentMethod(paymentMethod).UserId(userId).Execute()

List Payments



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
    paymentMethod := "paymentMethod_example" // string |  (optional)
    userId := "userId_example" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.PaymentApi.V1PaymentsList(context.Background(), appId).Limit(limit).Offset(offset).PaymentMethod(paymentMethod).UserId(userId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentApi.V1PaymentsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1PaymentsList`: PagePayment
    fmt.Fprintf(os.Stdout, "Response from `PaymentApi.V1PaymentsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1PaymentsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** |  | 
 **offset** | **int32** |  | 
 **paymentMethod** | **string** |  | 
 **userId** | **string** |  | 

### Return type

[**PagePayment**](PagePayment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1PaymentsRetrieve

> Payment V1PaymentsRetrieve(ctx, appId, paymentId).Execute()

Retrieve an Payment



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
    paymentId := "paymentId_example" // string | Payment ID / UID

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.PaymentApi.V1PaymentsRetrieve(context.Background(), appId, paymentId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `PaymentApi.V1PaymentsRetrieve``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1PaymentsRetrieve`: Payment
    fmt.Fprintf(os.Stdout, "Response from `PaymentApi.V1PaymentsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 
**paymentId** | **string** | Payment ID / UID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1PaymentsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Payment**](Payment.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

