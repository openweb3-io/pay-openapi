# InvoiceIn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uid** | Pointer to **NullableString** | Optional unique identifier for the invoice | [optional] 
**UserId** | Pointer to **NullableString** | Optional user id | [optional] 
**Channel** | **string** | Invoice channel | 
**Currency** | **string** | Currency code | 
**Amount** | **string** | Big decimal string representation. Note that the max precision (number of digits after decimal point) depends on the currencyCode. E.g. for all fiat currencies is 2 (0.01), for BTC is 8, for USDT is 6. There&#39;s also min invoice amount for creating an invoice. It&#39;s 0.000001 BTC / 0.01 USDT / 0.01 USD / 0.01 EUR / 0.1 RUB. | 
**Metadata** | Pointer to **map[string]interface{}** | Optional metadata | [optional] [default to {}]
**Extra** | Pointer to **map[string]interface{}** | Optional metadata | [optional] [default to {}]
**Note** | Pointer to **NullableString** | Optional order note | [optional] 
**Expiration** | Pointer to **int32** | The expiration seconds | [optional] 

## Methods

### NewInvoiceIn

`func NewInvoiceIn(channel string, currency string, amount string, ) *InvoiceIn`

NewInvoiceIn instantiates a new InvoiceIn object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoiceInWithDefaults

`func NewInvoiceInWithDefaults() *InvoiceIn`

NewInvoiceInWithDefaults instantiates a new InvoiceIn object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUid

`func (o *InvoiceIn) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *InvoiceIn) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *InvoiceIn) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *InvoiceIn) HasUid() bool`

HasUid returns a boolean if a field has been set.

### SetUidNil

`func (o *InvoiceIn) SetUidNil(b bool)`

 SetUidNil sets the value for Uid to be an explicit nil

### UnsetUid
`func (o *InvoiceIn) UnsetUid()`

UnsetUid ensures that no value is present for Uid, not even an explicit nil
### GetUserId

`func (o *InvoiceIn) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *InvoiceIn) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *InvoiceIn) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *InvoiceIn) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### SetUserIdNil

`func (o *InvoiceIn) SetUserIdNil(b bool)`

 SetUserIdNil sets the value for UserId to be an explicit nil

### UnsetUserId
`func (o *InvoiceIn) UnsetUserId()`

UnsetUserId ensures that no value is present for UserId, not even an explicit nil
### GetChannel

`func (o *InvoiceIn) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *InvoiceIn) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *InvoiceIn) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *InvoiceIn) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *InvoiceIn) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *InvoiceIn) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *InvoiceIn) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InvoiceIn) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InvoiceIn) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetMetadata

`func (o *InvoiceIn) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *InvoiceIn) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *InvoiceIn) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *InvoiceIn) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *InvoiceIn) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *InvoiceIn) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetExtra

`func (o *InvoiceIn) GetExtra() map[string]interface{}`

GetExtra returns the Extra field if non-nil, zero value otherwise.

### GetExtraOk

`func (o *InvoiceIn) GetExtraOk() (*map[string]interface{}, bool)`

GetExtraOk returns a tuple with the Extra field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtra

`func (o *InvoiceIn) SetExtra(v map[string]interface{})`

SetExtra sets Extra field to given value.

### HasExtra

`func (o *InvoiceIn) HasExtra() bool`

HasExtra returns a boolean if a field has been set.

### SetExtraNil

`func (o *InvoiceIn) SetExtraNil(b bool)`

 SetExtraNil sets the value for Extra to be an explicit nil

### UnsetExtra
`func (o *InvoiceIn) UnsetExtra()`

UnsetExtra ensures that no value is present for Extra, not even an explicit nil
### GetNote

`func (o *InvoiceIn) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *InvoiceIn) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *InvoiceIn) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *InvoiceIn) HasNote() bool`

HasNote returns a boolean if a field has been set.

### SetNoteNil

`func (o *InvoiceIn) SetNoteNil(b bool)`

 SetNoteNil sets the value for Note to be an explicit nil

### UnsetNote
`func (o *InvoiceIn) UnsetNote()`

UnsetNote ensures that no value is present for Note, not even an explicit nil
### GetExpiration

`func (o *InvoiceIn) GetExpiration() int32`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *InvoiceIn) GetExpirationOk() (*int32, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *InvoiceIn) SetExpiration(v int32)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *InvoiceIn) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


