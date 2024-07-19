

# OrderOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The order&#39;s ID | 
**uid** | **String** | The order&#39;s UID |  [optional]
**currency** | **String** | Currency code | 
**amount** | **String** | Big decimal string representation. Note that the max precision (number of digits after decimal point) depends on the currencyCode. E.g. for all fiat currencies is 2 (0.01), for BTC is 8, for USDT is 6. There&#39;s also min order amount for creating an order. It&#39;s 0.000001 BTC / 0.01 USDT / 0.01 USD / 0.01 EUR / 0.1 RUB. | 
**userId** | **String** | The order&#39;s creator |  [optional]
**walletId** | **String** | wallet id |  [optional]
**note** | **String** | Optional order notes |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**expiration** | **Integer** | The expiration seconds |  [optional]
**status** | [**StatusEnum**](#StatusEnum) | The order&#39;s status | 
**failedMessage** | **String** | The message when order failed |  [optional]
**createdAt** | **OffsetDateTime** | The order&#39;s creation time |  [optional]
**payedAt** | **OffsetDateTime** | The order&#39;s paid time |  [optional]
**expiredAt** | **OffsetDateTime** | The order&#39;s expiration time |  [optional]
**failedAt** | **OffsetDateTime** | The order&#39;s failure time |  [optional]



## Enum: StatusEnum

Name | Value
---- | -----
PENDING | &quot;PENDING&quot;
PAID | &quot;PAID&quot;
FAILED | &quot;FAILED&quot;
EXPIRED | &quot;EXPIRED&quot;
COMPLETED | &quot;COMPLETED&quot;



