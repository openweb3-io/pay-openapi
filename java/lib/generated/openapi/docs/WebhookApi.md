# WebhookApi

All URIs are relative to *https://api.wallet-pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebhookCreate**](WebhookApi.md#v1WebhookCreate) | **POST** /api/v1/webhooks | Create webhook
[**v1WebhookDelete**](WebhookApi.md#v1WebhookDelete) | **DELETE** /api/v1/webhooks/{webhookId} | Delete webhook
[**v1WebhookList**](WebhookApi.md#v1WebhookList) | **GET** /api/v1/webhooks | List webhooks
[**v1WebhookPatch**](WebhookApi.md#v1WebhookPatch) | **PATCH** /api/v1/webhooks/{webhookId} | update webhook
[**v1WebhookRetrieve**](WebhookApi.md#v1WebhookRetrieve) | **GET** /api/v1/webhooks/{webhookId} | Retrieve webhook


<a name="v1WebhookCreate"></a>
# **v1WebhookCreate**
> WebhookOut v1WebhookCreate(webhookIn)

Create webhook

Create a webhook.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.WebhookApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookApi apiInstance = new WebhookApi(defaultClient);
    WebhookIn webhookIn = new WebhookIn(); // WebhookIn | 
    try {
      WebhookOut result = apiInstance.v1WebhookCreate(webhookIn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookApi#v1WebhookCreate");
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
 **webhookIn** | [**WebhookIn**](WebhookIn.md)|  |

### Return type

[**WebhookOut**](WebhookOut.md)

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

<a name="v1WebhookDelete"></a>
# **v1WebhookDelete**
> WebhookOut v1WebhookDelete(webhookId)

Delete webhook

delete the specified webhook.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.WebhookApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookApi apiInstance = new WebhookApi(defaultClient);
    String webhookId = "wb_12345xsfei"; // String | Specified the webhook id.
    try {
      WebhookOut result = apiInstance.v1WebhookDelete(webhookId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookApi#v1WebhookDelete");
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
 **webhookId** | **String**| Specified the webhook id. |

### Return type

[**WebhookOut**](WebhookOut.md)

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
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

<a name="v1WebhookList"></a>
# **v1WebhookList**
> ListResponseWebhookOut v1WebhookList(limit, cursor)

List webhooks

List webhooks.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.WebhookApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookApi apiInstance = new WebhookApi(defaultClient);
    Integer limit = 20; // Integer | Limit the number of returned items
    String cursor = "cursor_example"; // String | Specifying the start cursor position
    try {
      ListResponseWebhookOut result = apiInstance.v1WebhookList(limit, cursor);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookApi#v1WebhookList");
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

### Return type

[**ListResponseWebhookOut**](ListResponseWebhookOut.md)

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

<a name="v1WebhookPatch"></a>
# **v1WebhookPatch**
> WebhookOut v1WebhookPatch(webhookId, webhookPatch)

update webhook

update a specified webhook.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.WebhookApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookApi apiInstance = new WebhookApi(defaultClient);
    String webhookId = "wb_12345xsfei"; // String | Specified the webhook id.
    WebhookPatch webhookPatch = new WebhookPatch(); // WebhookPatch | 
    try {
      WebhookOut result = apiInstance.v1WebhookPatch(webhookId, webhookPatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookApi#v1WebhookPatch");
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
 **webhookId** | **String**| Specified the webhook id. |
 **webhookPatch** | [**WebhookPatch**](WebhookPatch.md)|  |

### Return type

[**WebhookOut**](WebhookOut.md)

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
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

<a name="v1WebhookRetrieve"></a>
# **v1WebhookRetrieve**
> WebhookOut v1WebhookRetrieve(webhookId)

Retrieve webhook

retrieve the specified webhook.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.WebhookApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.wallet-pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    WebhookApi apiInstance = new WebhookApi(defaultClient);
    String webhookId = "wb_12345xsfei"; // String | Specified the webhook id.
    try {
      WebhookOut result = apiInstance.v1WebhookRetrieve(webhookId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhookApi#v1WebhookRetrieve");
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
 **webhookId** | **String**| Specified the webhook id. |

### Return type

[**WebhookOut**](WebhookOut.md)

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
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

