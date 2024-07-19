# OrderApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1OrderCreate**](OrderApi.md#v1OrderCreate) | **POST** /api/v1/orders | Create Order
[**v1OrderList**](OrderApi.md#v1OrderList) | **GET** /api/v1/orders | List Orders


<a name="v1OrderCreate"></a>
# **v1OrderCreate**
> OrderOut v1OrderCreate(orderIn)

Create Order

Create a new order.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.OrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    OrderApi apiInstance = new OrderApi(defaultClient);
    OrderIn orderIn = new OrderIn(); // OrderIn | 
    try {
      OrderOut result = apiInstance.v1OrderCreate(orderIn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrderApi#v1OrderCreate");
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
 **orderIn** | [**OrderIn**](OrderIn.md)|  |

### Return type

[**OrderOut**](OrderOut.md)

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
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

<a name="v1OrderList"></a>
# **v1OrderList**
> ListResponseOrderOut v1OrderList(limit, offset, chain, channel)

List Orders

List orders.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.OrderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    OrderApi apiInstance = new OrderApi(defaultClient);
    Integer limit = 20; // Integer | Limit the number of returned items
    Integer offset = 0; // Integer | Specifying the amount of excluded from a response the first N orders
    String chain = "ton"; // String | Optional order blockchain code
    String channel = "ton-connect"; // String | Channel of the order
    try {
      ListResponseOrderOut result = apiInstance.v1OrderList(limit, offset, chain, channel);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrderApi#v1OrderList");
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
 **offset** | **Integer**| Specifying the amount of excluded from a response the first N orders | [optional] [default to 0]
 **chain** | **String**| Optional order blockchain code | [optional]
 **channel** | **String**| Channel of the order | [optional]

### Return type

[**ListResponseOrderOut**](ListResponseOrderOut.md)

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

