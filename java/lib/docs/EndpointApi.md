# EndpointApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1EndpointCreate**](EndpointApi.md#v1EndpointCreate) | **POST** /api/v1/apps/{appId}/endpoints | Create endpoint
[**v1EndpointDelete**](EndpointApi.md#v1EndpointDelete) | **DELETE** /api/v1/apps/{appId}/endpoints/{endpointId} | Delete endpoint
[**v1EndpointGet**](EndpointApi.md#v1EndpointGet) | **GET** /api/v1/apps/{appId}/endpoints/{endpointId} | Get endpoint
[**v1EndpointList**](EndpointApi.md#v1EndpointList) | **GET** /api/v1/apps/{appId}/endpoints | List endpoints
[**v1EndpointPatch**](EndpointApi.md#v1EndpointPatch) | **PATCH** /api/v1/apps/{appId}/endpoints/{endpointId} | Patch endpoint


<a name="v1EndpointCreate"></a>
# **v1EndpointCreate**
> EndpointOut v1EndpointCreate(appId, endpointIn)

Create endpoint

Create a webhook endpoint.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.EndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    EndpointApi apiInstance = new EndpointApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    EndpointIn endpointIn = new EndpointIn(); // EndpointIn | 
    try {
      EndpointOut result = apiInstance.v1EndpointCreate(appId, endpointIn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EndpointApi#v1EndpointCreate");
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
 **appId** | **String**| Specified the app id. |
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
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

<a name="v1EndpointDelete"></a>
# **v1EndpointDelete**
> EndpointOut v1EndpointDelete(appId, endpointId)

Delete endpoint

delete the specified webhook endpoint.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.EndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    EndpointApi apiInstance = new EndpointApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    String endpointId = "wb_12345xsfei"; // String | Specified the endpoint id.
    try {
      EndpointOut result = apiInstance.v1EndpointDelete(appId, endpointId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EndpointApi#v1EndpointDelete");
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
 **appId** | **String**| Specified the app id. |
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
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

<a name="v1EndpointGet"></a>
# **v1EndpointGet**
> EndpointOut v1EndpointGet(appId, endpointId)

Get endpoint

retrieve a specified webhook endpoint.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.EndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    EndpointApi apiInstance = new EndpointApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    String endpointId = "wb_12345xsfei"; // String | Specified the webhook endpoint id.
    try {
      EndpointOut result = apiInstance.v1EndpointGet(appId, endpointId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EndpointApi#v1EndpointGet");
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
 **appId** | **String**| Specified the app id. |
 **endpointId** | **String**| Specified the webhook endpoint id. |

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
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

<a name="v1EndpointList"></a>
# **v1EndpointList**
> ListResponseEndpointOut v1EndpointList(appId, limit, cursor, ordering)

List endpoints

List endpoints.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.EndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    EndpointApi apiInstance = new EndpointApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    Integer limit = 20; // Integer | Limit the number of returned items
    String cursor = "cursor_example"; // String | Specifying the start cursor position
    Ordering ordering = Ordering.fromValue("asc"); // Ordering | The sorting order of the returned items
    try {
      ListResponseEndpointOut result = apiInstance.v1EndpointList(appId, limit, cursor, ordering);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EndpointApi#v1EndpointList");
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
 **appId** | **String**| Specified the app id. |
 **limit** | **Integer**| Limit the number of returned items | [optional] [default to 20]
 **cursor** | **String**| Specifying the start cursor position | [optional]
 **ordering** | [**Ordering**](.md)| The sorting order of the returned items | [optional] [enum: asc, desc]

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
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

<a name="v1EndpointPatch"></a>
# **v1EndpointPatch**
> EndpointOut v1EndpointPatch(appId, endpointId, endpointPatch)

Patch endpoint

update a specified webhook endpoint.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.EndpointApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    EndpointApi apiInstance = new EndpointApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    String endpointId = "wb_12345xsfei"; // String | Specified the endpoint id.
    EndpointPatch endpointPatch = new EndpointPatch(); // EndpointPatch | 
    try {
      EndpointOut result = apiInstance.v1EndpointPatch(appId, endpointId, endpointPatch);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling EndpointApi#v1EndpointPatch");
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
 **appId** | **String**| Specified the app id. |
 **endpointId** | **String**| Specified the endpoint id. |
 **endpointPatch** | [**EndpointPatch**](EndpointPatch.md)|  |

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
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

