# AccountApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountList**](AccountApi.md#v1AccountList) | **GET** /api/v1/accounts | List Accounts


<a name="v1AccountList"></a>
# **v1AccountList**
> ListResponseAccountOut v1AccountList(limit, offset)

List Accounts

List accounts.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.AccountApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    AccountApi apiInstance = new AccountApi(defaultClient);
    Integer limit = 20; // Integer | Limit the number of returned items
    Integer offset = 0; // Integer | Specifying the amount of excluded from a response the first N items
    try {
      ListResponseAccountOut result = apiInstance.v1AccountList(limit, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AccountApi#v1AccountList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Integer**| Limit the number of returned items | [optional] [default to 20]
 **offset** | **Integer**| Specifying the amount of excluded from a response the first N items | [optional] [default to 0]

### Return type

[**ListResponseAccountOut**](ListResponseAccountOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

