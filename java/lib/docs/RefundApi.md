# RefundApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1RefundsCreate**](RefundApi.md#v1RefundsCreate) | **POST** /api/v1/apps/{app_id}/refunds | Refund payment
[**v1RefundsList**](RefundApi.md#v1RefundsList) | **GET** /api/v1/apps/{app_id}/refunds | List refunds
[**v1RefundsRetrieve**](RefundApi.md#v1RefundsRetrieve) | **GET** /api/v1/apps/{app_id}/refunds/{refund_id} | Retrieve a refund


<a name="v1RefundsCreate"></a>
# **v1RefundsCreate**
> Refund v1RefundsCreate(appId, createRefund)

Refund payment

Refund payment

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.RefundApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RefundApi apiInstance = new RefundApi(defaultClient);
    String appId = "appId_example"; // String | App ID
    CreateRefund createRefund = new CreateRefund(); // CreateRefund | Request body
    try {
      Refund result = apiInstance.v1RefundsCreate(appId, createRefund);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RefundApi#v1RefundsCreate");
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
 **appId** | **String**| App ID |
 **createRefund** | [**CreateRefund**](CreateRefund.md)| Request body |

### Return type

[**Refund**](Refund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="v1RefundsList"></a>
# **v1RefundsList**
> CursorPageRefund v1RefundsList(appId, cursor, limit)

List refunds

List refunds

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.RefundApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RefundApi apiInstance = new RefundApi(defaultClient);
    String appId = "appId_example"; // String | App ID
    String cursor = "cursor_example"; // String | Cursor
    Integer limit = 56; // Integer | Limit
    try {
      CursorPageRefund result = apiInstance.v1RefundsList(appId, cursor, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RefundApi#v1RefundsList");
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
 **appId** | **String**| App ID |
 **cursor** | **String**| Cursor | [optional]
 **limit** | **Integer**| Limit | [optional]

### Return type

[**CursorPageRefund**](CursorPageRefund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="v1RefundsRetrieve"></a>
# **v1RefundsRetrieve**
> Refund v1RefundsRetrieve(appId, refundId)

Retrieve a refund

Retrieve a refund

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.RefundApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    RefundApi apiInstance = new RefundApi(defaultClient);
    String appId = "appId_example"; // String | App ID
    String refundId = "refundId_example"; // String | Refund ID
    try {
      Refund result = apiInstance.v1RefundsRetrieve(appId, refundId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling RefundApi#v1RefundsRetrieve");
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
 **appId** | **String**| App ID |
 **refundId** | **String**| Refund ID |

### Return type

[**Refund**](Refund.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

