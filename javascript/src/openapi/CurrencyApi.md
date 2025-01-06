# .CurrencyApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CurrenciesListCrypto**](CurrencyApi.md#v1CurrenciesListCrypto) | **GET** /api/v1/apps/{appId}/currencies/crypto | List available cryptocurrencies
[**v1CurrenciesListFlat**](CurrencyApi.md#v1CurrenciesListFlat) | **GET** /api/v1/apps/{appId}/currencies/fiat | List available fiat currencies
[**v1CurrenciesRetrieveRate**](CurrencyApi.md#v1CurrenciesRetrieveRate) | **GET** /api/v1/apps/{appId}/currencies/rate | Get exchange rate


# **v1CurrenciesListCrypto**
> Array<CryptoCurrency> v1CurrenciesListCrypto()

List available cryptocurrencies

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CurrencyApi(configuration);

let body:.CurrencyApiV1CurrenciesListCryptoRequest = {
  // string | App ID
  appId: "appId_example",
};

apiInstance.v1CurrenciesListCrypto(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined


### Return type

**Array<CryptoCurrency>**

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

# **v1CurrenciesListFlat**
> Array<FiatCurrency> v1CurrenciesListFlat()

List available fiat currencies

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CurrencyApi(configuration);

let body:.CurrencyApiV1CurrenciesListFlatRequest = {
  // string | App ID
  appId: "appId_example",
};

apiInstance.v1CurrenciesListFlat(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined


### Return type

**Array<FiatCurrency>**

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

# **v1CurrenciesRetrieveRate**
> Array<Rate> v1CurrenciesRetrieveRate()

Get exchange rate

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CurrencyApi(configuration);

let body:.CurrencyApiV1CurrenciesRetrieveRateRequest = {
  // string | App ID
  appId: "appId_example",
  // string | From currency
  _from: "from_example",
  // string | To currency
  to: "to_example",
};

apiInstance.v1CurrenciesRetrieveRate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | [**string**] | App ID | defaults to undefined
 **_from** | [**string**] | From currency | defaults to undefined
 **to** | [**string**] | To currency | defaults to undefined


### Return type

**Array<Rate>**

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


