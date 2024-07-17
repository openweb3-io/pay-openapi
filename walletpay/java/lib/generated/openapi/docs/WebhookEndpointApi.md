# WebhookEndpointApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1EndpointCreate**](WebhookEndpointApi.md#v1EndpointCreate) | **POST** /api/v1/webhooks/endpoints | Create endpoint
[**v1EndpointDelete**](WebhookEndpointApi.md#v1EndpointDelete) | **DELETE** /api/v1/webhooks/endpoints/{endpointId} | Delete endpoint
[**v1EndpointList**](WebhookEndpointApi.md#v1EndpointList) | **GET** /api/v1/webhooks/endpoints | List endpoints


<a name="v1EndpointCreate"></a>
# **v1EndpointCreate**
> EndpointOut v1EndpointCreate(endpointIn)

Create endpoint

Create a webhook endpoint.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.WebhookEndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookEndpointApi apiInstance = new WebhookEndpointApi(defaultClient);
    EndpointIn endpointIn = new EndpointIn(); // EndpointIn | 
    try {
      EndpointOut result = apiInstance.v1EndpointCreate(endpointIn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookEndpointApi#v1EndpointCreate");
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
 **endpointIn** | [**EndpointIn**](EndpointIn.md)|  |

### Return type

[**EndpointOut**](EndpointOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

<a name="v1EndpointDelete"></a>
# **v1EndpointDelete**
> EndpointOut v1EndpointDelete(endpointId)

Delete endpoint

delete the specified webhook endpoint.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.WebhookEndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookEndpointApi apiInstance = new WebhookEndpointApi(defaultClient);
    String endpointId = "wb_12345xsfei"; // String | Specified the endpoint id.
    try {
      EndpointOut result = apiInstance.v1EndpointDelete(endpointId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookEndpointApi#v1EndpointDelete");
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
 **endpointId** | **String**| Specified the endpoint id. |

### Return type

[**EndpointOut**](EndpointOut.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**201** |  |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**429** | Too Many Requests |  -  |

<a name="v1EndpointList"></a>
# **v1EndpointList**
> ListResponseEndpointOut v1EndpointList(limit, cursor, order)

List endpoints

List endpoints.

### Example
```java
// Import classes:
import io.openweb3.walletpay.internal.ApiClient;
import io.openweb3.walletpay.internal.ApiException;
import io.openweb3.walletpay.internal.Configuration;
import io.openweb3.walletpay.internal.auth.*;
import io.openweb3.walletpay.internal.models.*;
import io.openweb3.walletpay.internal.api.WebhookEndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookEndpointApi apiInstance = new WebhookEndpointApi(defaultClient);
    Integer limit = 20; // Integer | Limit the number of returned items
    String cursor = "cursor_example"; // String | Specifying the start cursor position
    Ordering order = Ordering.fromValue("asc"); // Ordering | The sorting order of the returned items
    try {
      ListResponseEndpointOut result = apiInstance.v1EndpointList(limit, cursor, order);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookEndpointApi#v1EndpointList");
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
 **cursor** | **String**| Specifying the start cursor position | [optional]
 **order** | [**Ordering**](.md)| The sorting order of the returned items | [optional] [enum: asc, desc]

### Return type

[**ListResponseEndpointOut**](ListResponseEndpointOut.md)

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
**429** | Too Many Requests |  -  |

