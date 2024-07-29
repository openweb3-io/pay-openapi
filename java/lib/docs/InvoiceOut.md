

# InvoiceOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The invoice&#39;s ID | 
**uid** | **String** | The invoice&#39;s UID |  [optional]
**userId** | **String** | The invoice&#39;s creator |  [optional]
**channel** | **String** | Invoice channel | 
**currency** | **String** | Currency code | 
**amount** | **String** | Big decimal string representation. Note that the max precision (number of digits after decimal point) depends on the currencyCode. E.g. for all fiat currencies is 2 (0.01), for BTC is 8, for USDT is 6. There&#39;s also min invoice amount for creating an invoice. It&#39;s 0.000001 BTC / 0.01 USDT / 0.01 USD / 0.01 EUR / 0.1 RUB. | 
**credentials** | **Map&lt;String, Object&gt;** | Optional credentials |  [optional]
**metadata** | **Map&lt;String, Object&gt;** | Optional metadata | 
**extra** | **Map&lt;String, Object&gt;** | Optional metadata |  [optional]
**note** | **String** | invoice note |  [optional]
**expiration** | **Integer** | The expiration seconds |  [optional]
**status** | [**StatusEnum**](#StatusEnum) | The invoice&#39;s status | 
**failedMessage** | **String** | The message when invoice failed |  [optional]
**createdAt** | **OffsetDateTime** | The invoice&#39;s creation time | 
**paidAt** | **OffsetDateTime** | The invoice&#39;s paid time |  [optional]
**failedAt** | **OffsetDateTime** | The invoice&#39;s failure time |  [optional]
**canceledAt** | **OffsetDateTime** | The invoice&#39;s cancel time |  [optional]
**expiredAt** | **OffsetDateTime** | The invoice&#39;s expiration time |  [optional]



## Enum: StatusEnum

Name | Value
---- | -----
PENDING | &quot;PENDING&quot;
PAID | &quot;PAID&quot;
FAILED | &quot;FAILED&quot;
EXPIRED | &quot;EXPIRED&quot;
COMPLETED | &quot;COMPLETED&quot;



