# \CurrencyApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V1CurrenciesListCrypto**](CurrencyApi.md#V1CurrenciesListCrypto) | **Get** /api/v1/apps/{appId}/currencies/crypto | List available cryptocurrencies
[**V1CurrenciesListFlat**](CurrencyApi.md#V1CurrenciesListFlat) | **Get** /api/v1/apps/{appId}/currencies/fiat | List available fiat currencies
[**V1CurrenciesRetrieveRate**](CurrencyApi.md#V1CurrenciesRetrieveRate) | **Get** /api/v1/apps/{appId}/currencies/rate | Get exchange rate



## V1CurrenciesListCrypto

> []CryptoCurrency V1CurrenciesListCrypto(ctx, appId).Execute()

List available cryptocurrencies



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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CurrencyApi.V1CurrenciesListCrypto(context.Background(), appId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CurrencyApi.V1CurrenciesListCrypto``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CurrenciesListCrypto`: []CryptoCurrency
    fmt.Fprintf(os.Stdout, "Response from `CurrencyApi.V1CurrenciesListCrypto`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CurrenciesListCryptoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]CryptoCurrency**](CryptoCurrency.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CurrenciesListFlat

> []FiatCurrency V1CurrenciesListFlat(ctx, appId).Execute()

List available fiat currencies



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

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CurrencyApi.V1CurrenciesListFlat(context.Background(), appId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CurrencyApi.V1CurrenciesListFlat``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CurrenciesListFlat`: []FiatCurrency
    fmt.Fprintf(os.Stdout, "Response from `CurrencyApi.V1CurrenciesListFlat`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CurrenciesListFlatRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]FiatCurrency**](FiatCurrency.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V1CurrenciesRetrieveRate

> []Rate V1CurrenciesRetrieveRate(ctx, appId).FromCurrency(fromCurrency).ToCurrency(toCurrency).Execute()

Get exchange rate



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
    fromCurrency := "fromCurrency_example" // string | From currency
    toCurrency := "toCurrency_example" // string | To currency

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.CurrencyApi.V1CurrenciesRetrieveRate(context.Background(), appId).FromCurrency(fromCurrency).ToCurrency(toCurrency).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CurrencyApi.V1CurrenciesRetrieveRate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `V1CurrenciesRetrieveRate`: []Rate
    fmt.Fprintf(os.Stdout, "Response from `CurrencyApi.V1CurrenciesRetrieveRate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**appId** | **string** | App ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiV1CurrenciesRetrieveRateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fromCurrency** | **string** | From currency | 
 **toCurrency** | **string** | To currency | 

### Return type

[**[]Rate**](Rate.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

