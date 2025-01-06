# InvoiceApi

All URIs are relative to *https://api.pay.openweb3.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1InvoicesCreate**](InvoiceApi.md#v1InvoicesCreate) | **POST** /api/v1/apps/{appId}/invoices | Create an invoice
[**v1InvoicesList**](InvoiceApi.md#v1InvoicesList) | **GET** /api/v1/apps/{appId}/invoices | List invoices
[**v1InvoicesRetrieve**](InvoiceApi.md#v1InvoicesRetrieve) | **GET** /api/v1/apps/{appId}/invoices/{invoiceId} | Retrieve an invoice


<a name="v1InvoicesCreate"></a>
# **v1InvoicesCreate**
> Invoice v1InvoicesCreate(appId, createInvoiceRequest)

Create an invoice

Create an invoice

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
    String appId = "appId_example"; // String | App ID
    CreateInvoiceRequest createInvoiceRequest = new CreateInvoiceRequest(); // CreateInvoiceRequest | Request body
    try {
      Invoice result = apiInstance.v1InvoicesCreate(appId, createInvoiceRequest);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InvoiceApi#v1InvoicesCreate");
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
 **createInvoiceRequest** | [**CreateInvoiceRequest**](CreateInvoiceRequest.md)| Request body |

### Return type

[**Invoice**](Invoice.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="v1InvoicesList"></a>
# **v1InvoicesList**
> PageInvoice v1InvoicesList(appId, limit, channel, userId, offset)

List invoices

List invoices

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
    String appId = "appId_example"; // String | App ID
    Integer limit = 56; // Integer | 
    String channel = "channel_example"; // String | 
    String userId = "userId_example"; // String | 
    Integer offset = 56; // Integer | 
    try {
      PageInvoice result = apiInstance.v1InvoicesList(appId, limit, channel, userId, offset);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InvoiceApi#v1InvoicesList");
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
 **limit** | **Integer**|  | [optional]
 **channel** | **String**|  | [optional]
 **userId** | **String**|  | [optional]
 **offset** | **Integer**|  | [optional]

### Return type

[**PageInvoice**](PageInvoice.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

<a name="v1InvoicesRetrieve"></a>
# **v1InvoicesRetrieve**
> Invoice v1InvoicesRetrieve(appId, invoiceId)

Retrieve an invoice

Retrieve an invoice

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
    String appId = "appId_example"; // String | App ID
    String invoiceId = "invoiceId_example"; // String | Invoice ID / UID
    try {
      Invoice result = apiInstance.v1InvoicesRetrieve(appId, invoiceId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling InvoiceApi#v1InvoicesRetrieve");
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
 **invoiceId** | **String**| Invoice ID / UID |

### Return type

[**Invoice**](Invoice.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

