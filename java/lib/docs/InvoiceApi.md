# InvoiceApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1InvoiceCreate**](InvoiceApi.md#v1InvoiceCreate) | **POST** /api/v1/apps/{appId}/invoices | Create invoice
[**v1InvoiceGet**](InvoiceApi.md#v1InvoiceGet) | **GET** /api/v1/apps/{appId}/invoices/{idOrUid} | Get invoice
[**v1InvoiceList**](InvoiceApi.md#v1InvoiceList) | **GET** /api/v1/apps/{appId}/invoices | List invoices


<a name="v1InvoiceCreate"></a>
# **v1InvoiceCreate**
> InvoiceOut v1InvoiceCreate(appId, invoiceIn)

Create invoice

Create a new invoice.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.InvoiceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    InvoiceApi apiInstance = new InvoiceApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    InvoiceIn invoiceIn = new InvoiceIn(); // InvoiceIn | 
    try {
      InvoiceOut result = apiInstance.v1InvoiceCreate(appId, invoiceIn);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InvoiceApi#v1InvoiceCreate");
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
 **invoiceIn** | [**InvoiceIn**](InvoiceIn.md)|  |

### Return type

[**InvoiceOut**](InvoiceOut.md)

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

<a name="v1InvoiceGet"></a>
# **v1InvoiceGet**
> InvoiceOut v1InvoiceGet(appId, idOrUid)

Get invoice

retrieve a specified webhook endpoint.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.InvoiceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    InvoiceApi apiInstance = new InvoiceApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    String idOrUid = "7e5c7e13-0573-472e-9e34-fe779c618faf"; // String | Specified the invoice id or invoice uid.
    try {
      InvoiceOut result = apiInstance.v1InvoiceGet(appId, idOrUid);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InvoiceApi#v1InvoiceGet");
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
 **idOrUid** | **String**| Specified the invoice id or invoice uid. |

### Return type

[**InvoiceOut**](InvoiceOut.md)

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
**400** | Bad request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**422** | Validation Error |  -  |
**429** | Too Many Requests |  -  |

<a name="v1InvoiceList"></a>
# **v1InvoiceList**
> ListResponseInvoiceOut v1InvoiceList(appId, limit, offset, userId, channel)

List invoices

List invoices.

### Example
```java
// Import classes:
import io.openweb3.pay.internal.ApiClient;
import io.openweb3.pay.internal.ApiException;
import io.openweb3.pay.internal.Configuration;
import io.openweb3.pay.internal.auth.*;
import io.openweb3.pay.internal.models.*;
import io.openweb3.pay.internal.api.InvoiceApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pay.openweb3.io");
    
    // Configure API key authorization: ApiKeyAuth
    ApiKeyAuth ApiKeyAuth = (ApiKeyAuth) defaultClient.getAuthentication("ApiKeyAuth");
    ApiKeyAuth.setApiKey("YOUR API KEY");
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //ApiKeyAuth.setApiKeyPrefix("Token");

    InvoiceApi apiInstance = new InvoiceApi(defaultClient);
    String appId = "app_12345xsfei"; // String | Specified the app id.
    Integer limit = 20; // Integer | Limit the number of returned items
    Integer offset = 0; // Integer | Specifying the amount of excluded from a response the first N invoices
    String userId = "userid"; // String | Optional invoice user id
    String channel = "ton.0.mainnet"; // String | Channel of the invoice
    try {
      ListResponseInvoiceOut result = apiInstance.v1InvoiceList(appId, limit, offset, userId, channel);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InvoiceApi#v1InvoiceList");
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
 **offset** | **Integer**| Specifying the amount of excluded from a response the first N invoices | [optional] [default to 0]
 **userId** | **String**| Optional invoice user id | [optional]
 **channel** | **String**| Channel of the invoice | [optional]

### Return type

[**ListResponseInvoiceOut**](ListResponseInvoiceOut.md)

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

