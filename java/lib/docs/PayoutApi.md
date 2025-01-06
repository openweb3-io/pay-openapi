# PayoutApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PayoutsCreate**](PayoutApi.md#v1PayoutsCreate) | **POST** /api/v1/apps/{appId}/payouts | Payout to address
[**v1PayoutsList**](PayoutApi.md#v1PayoutsList) | **GET** /api/v1/apps/{appId}/payouts | List payouts
[**v1PayoutsRetrieve**](PayoutApi.md#v1PayoutsRetrieve) | **GET** /api/v1/apps/{appId}/payouts/{payoutId} | Retrieve a payout


<a name="v1PayoutsCreate"></a>
# **v1PayoutsCreate**
> Payout v1PayoutsCreate(appId, createPayout)

Payout to address

Payout to address

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.PayoutApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PayoutApi apiInstance = new PayoutApi(defaultClient);
    String appId = "appId_example"; // String | App ID
    CreatePayout createPayout = new CreatePayout(); // CreatePayout | Request body
    try {
      Payout result = apiInstance.v1PayoutsCreate(appId, createPayout);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PayoutApi#v1PayoutsCreate");
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
 **createPayout** | [**CreatePayout**](CreatePayout.md)| Request body |

### Return type

[**Payout**](Payout.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="v1PayoutsList"></a>
# **v1PayoutsList**
> CursorPagePayout v1PayoutsList(appId, cursor, limit)

List payouts

List payouts

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.PayoutApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PayoutApi apiInstance = new PayoutApi(defaultClient);
    String appId = "appId_example"; // String | App ID
    String cursor = "cursor_example"; // String | Cursor
    Integer limit = 56; // Integer | Limit
    try {
      CursorPagePayout result = apiInstance.v1PayoutsList(appId, cursor, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PayoutApi#v1PayoutsList");
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

[**CursorPagePayout**](CursorPagePayout.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="v1PayoutsRetrieve"></a>
# **v1PayoutsRetrieve**
> Payout v1PayoutsRetrieve(appId, payoutId)

Retrieve a payout

Retrieve a payout

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.PayoutApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    PayoutApi apiInstance = new PayoutApi(defaultClient);
    String appId = "appId_example"; // String | App ID
    String payoutId = "payoutId_example"; // String | Payout ID
    try {
      Payout result = apiInstance.v1PayoutsRetrieve(appId, payoutId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PayoutApi#v1PayoutsRetrieve");
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
 **payoutId** | **String**| Payout ID |

### Return type

[**Payout**](Payout.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

