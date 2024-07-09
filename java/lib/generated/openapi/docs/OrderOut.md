

# OrderOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The order&#39;s ID | 
**metadata** | **Map&lt;String, String&gt;** |  | 
**userId** | **String** | The order&#39;s creator |  [optional]
**uid** | **String** | The order&#39;s UID |  [optional]
**channel** | **String** | Order channel | 
**chain** | **String** | Blockchain code | 
**currency** | **String** | Currency code | 
**amount** | **String** | Big decimal string representation. Note that the max precision (number of digits after decimal point) depends on the currencyCode. E.g. for all fiat currencies is 2 (0.01), for BTC is 8, for USDT is 6. There&#39;s also min order amount for creating an order. It&#39;s 0.000001 BTC / 0.01 USDT / 0.01 USD / 0.01 EUR / 0.1 RUB. | 
**credentials** | **String** | The payment token from payment channel |  [optional]
**createdAt** | **OffsetDateTime** | The order&#39;s creation time | 
**paidAt** | **OffsetDateTime** | The order&#39;s paid time |  [optional]
**status** | **Integer** | The order&#39;s status 0 - processing 1 - paid 2 - failed 3 - canceled | 
**failedMessage** | **String** | The message when order failed |  [optional]
**canceledAt** | **OffsetDateTime** | The order&#39;s cancel time |  [optional]
**failedAt** | **OffsetDateTime** | The order&#39;s failure time |  [optional]



