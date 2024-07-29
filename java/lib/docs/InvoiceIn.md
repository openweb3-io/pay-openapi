

# InvoiceIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uid** | **String** | Optional unique identifier for the invoice |  [optional]
**userId** | **String** | Optional user id |  [optional]
**channel** | **String** | Invoice channel | 
**currency** | **String** | Currency code | 
**amount** | **String** | Big decimal string representation. Note that the max precision (number of digits after decimal point) depends on the currencyCode. E.g. for all fiat currencies is 2 (0.01), for BTC is 8, for USDT is 6. There&#39;s also min invoice amount for creating an invoice. It&#39;s 0.000001 BTC / 0.01 USDT / 0.01 USD / 0.01 EUR / 0.1 RUB. | 
**metadata** | **Map&lt;String, Object&gt;** | Optional metadata |  [optional]
**extra** | **Map&lt;String, Object&gt;** | Optional metadata |  [optional]
**note** | **String** | Optional order note |  [optional]
**expiration** | **Integer** | The expiration seconds |  [optional]



