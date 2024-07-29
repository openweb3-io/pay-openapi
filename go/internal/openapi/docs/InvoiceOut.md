# InvoiceOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The invoice&#39;s ID | 
**Uid** | Pointer to **NullableString** | The invoice&#39;s UID | [optional] 
**UserId** | Pointer to **NullableString** | The invoice&#39;s creator | [optional] 
**Channel** | **string** | Invoice channel | 
**Currency** | **string** | Currency code | 
**Amount** | **string** | Big decimal string representation. Note that the max precision (number of digits after decimal point) depends on the currencyCode. E.g. for all fiat currencies is 2 (0.01), for BTC is 8, for USDT is 6. There&#39;s also min invoice amount for creating an invoice. It&#39;s 0.000001 BTC / 0.01 USDT / 0.01 USD / 0.01 EUR / 0.1 RUB. | 
**Credentials** | Pointer to **map[string]interface{}** | Optional credentials | [optional] 
**Metadata** | **map[string]interface{}** | Optional metadata | [default to {}]
**Extra** | Pointer to **map[string]interface{}** | Optional metadata | [optional] [default to {}]
**Note** | Pointer to **string** | invoice note | [optional] 
**Expiration** | Pointer to **int32** | The expiration seconds | [optional] 
**Status** | **string** | The invoice&#39;s status | 
**FailedMessage** | Pointer to **string** | The message when invoice failed | [optional] 
**CreatedAt** | **time.Time** | The invoice&#39;s creation time | 
**PaidAt** | Pointer to **time.Time** | The invoice&#39;s paid time | [optional] 
**FailedAt** | Pointer to **NullableTime** | The invoice&#39;s failure time | [optional] 
**CanceledAt** | Pointer to **NullableTime** | The invoice&#39;s cancel time | [optional] 
**ExpiredAt** | Pointer to **NullableTime** | The invoice&#39;s expiration time | [optional] 

## Methods

### NewInvoiceOut

`func NewInvoiceOut(id string, channel string, currency string, amount string, metadata map[string]interface{}, status string, createdAt time.Time, ) *InvoiceOut`

NewInvoiceOut instantiates a new InvoiceOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoiceOutWithDefaults

`func NewInvoiceOutWithDefaults() *InvoiceOut`

NewInvoiceOutWithDefaults instantiates a new InvoiceOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InvoiceOut) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InvoiceOut) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InvoiceOut) SetId(v string)`

SetId sets Id field to given value.


### GetUid

`func (o *InvoiceOut) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *InvoiceOut) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *InvoiceOut) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *InvoiceOut) HasUid() bool`

HasUid returns a boolean if a field has been set.

### SetUidNil

`func (o *InvoiceOut) SetUidNil(b bool)`

 SetUidNil sets the value for Uid to be an explicit nil

### UnsetUid
`func (o *InvoiceOut) UnsetUid()`

UnsetUid ensures that no value is present for Uid, not even an explicit nil
### GetUserId

`func (o *InvoiceOut) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *InvoiceOut) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *InvoiceOut) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *InvoiceOut) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### SetUserIdNil

`func (o *InvoiceOut) SetUserIdNil(b bool)`

 SetUserIdNil sets the value for UserId to be an explicit nil

### UnsetUserId
`func (o *InvoiceOut) UnsetUserId()`

UnsetUserId ensures that no value is present for UserId, not even an explicit nil
### GetChannel

`func (o *InvoiceOut) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *InvoiceOut) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *InvoiceOut) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *InvoiceOut) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *InvoiceOut) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *InvoiceOut) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetAmount

`func (o *InvoiceOut) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InvoiceOut) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InvoiceOut) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetCredentials

`func (o *InvoiceOut) GetCredentials() map[string]interface{}`

GetCredentials returns the Credentials field if non-nil, zero value otherwise.

### GetCredentialsOk

`func (o *InvoiceOut) GetCredentialsOk() (*map[string]interface{}, bool)`

GetCredentialsOk returns a tuple with the Credentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentials

`func (o *InvoiceOut) SetCredentials(v map[string]interface{})`

SetCredentials sets Credentials field to given value.

### HasCredentials

`func (o *InvoiceOut) HasCredentials() bool`

HasCredentials returns a boolean if a field has been set.

### SetCredentialsNil

`func (o *InvoiceOut) SetCredentialsNil(b bool)`

 SetCredentialsNil sets the value for Credentials to be an explicit nil

### UnsetCredentials
`func (o *InvoiceOut) UnsetCredentials()`

UnsetCredentials ensures that no value is present for Credentials, not even an explicit nil
### GetMetadata

`func (o *InvoiceOut) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *InvoiceOut) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *InvoiceOut) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### SetMetadataNil

`func (o *InvoiceOut) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *InvoiceOut) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetExtra

`func (o *InvoiceOut) GetExtra() map[string]interface{}`

GetExtra returns the Extra field if non-nil, zero value otherwise.

### GetExtraOk

`func (o *InvoiceOut) GetExtraOk() (*map[string]interface{}, bool)`

GetExtraOk returns a tuple with the Extra field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtra

`func (o *InvoiceOut) SetExtra(v map[string]interface{})`

SetExtra sets Extra field to given value.

### HasExtra

`func (o *InvoiceOut) HasExtra() bool`

HasExtra returns a boolean if a field has been set.

### SetExtraNil

`func (o *InvoiceOut) SetExtraNil(b bool)`

 SetExtraNil sets the value for Extra to be an explicit nil

### UnsetExtra
`func (o *InvoiceOut) UnsetExtra()`

UnsetExtra ensures that no value is present for Extra, not even an explicit nil
### GetNote

`func (o *InvoiceOut) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *InvoiceOut) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *InvoiceOut) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *InvoiceOut) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetExpiration

`func (o *InvoiceOut) GetExpiration() int32`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *InvoiceOut) GetExpirationOk() (*int32, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *InvoiceOut) SetExpiration(v int32)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *InvoiceOut) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetStatus

`func (o *InvoiceOut) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InvoiceOut) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InvoiceOut) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetFailedMessage

`func (o *InvoiceOut) GetFailedMessage() string`

GetFailedMessage returns the FailedMessage field if non-nil, zero value otherwise.

### GetFailedMessageOk

`func (o *InvoiceOut) GetFailedMessageOk() (*string, bool)`

GetFailedMessageOk returns a tuple with the FailedMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedMessage

`func (o *InvoiceOut) SetFailedMessage(v string)`

SetFailedMessage sets FailedMessage field to given value.

### HasFailedMessage

`func (o *InvoiceOut) HasFailedMessage() bool`

HasFailedMessage returns a boolean if a field has been set.

### GetCreatedAt

`func (o *InvoiceOut) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *InvoiceOut) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *InvoiceOut) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetPaidAt

`func (o *InvoiceOut) GetPaidAt() time.Time`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *InvoiceOut) GetPaidAtOk() (*time.Time, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *InvoiceOut) SetPaidAt(v time.Time)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *InvoiceOut) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### GetFailedAt

`func (o *InvoiceOut) GetFailedAt() time.Time`

GetFailedAt returns the FailedAt field if non-nil, zero value otherwise.

### GetFailedAtOk

`func (o *InvoiceOut) GetFailedAtOk() (*time.Time, bool)`

GetFailedAtOk returns a tuple with the FailedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedAt

`func (o *InvoiceOut) SetFailedAt(v time.Time)`

SetFailedAt sets FailedAt field to given value.

### HasFailedAt

`func (o *InvoiceOut) HasFailedAt() bool`

HasFailedAt returns a boolean if a field has been set.

### SetFailedAtNil

`func (o *InvoiceOut) SetFailedAtNil(b bool)`

 SetFailedAtNil sets the value for FailedAt to be an explicit nil

### UnsetFailedAt
`func (o *InvoiceOut) UnsetFailedAt()`

UnsetFailedAt ensures that no value is present for FailedAt, not even an explicit nil
### GetCanceledAt

`func (o *InvoiceOut) GetCanceledAt() time.Time`

GetCanceledAt returns the CanceledAt field if non-nil, zero value otherwise.

### GetCanceledAtOk

`func (o *InvoiceOut) GetCanceledAtOk() (*time.Time, bool)`

GetCanceledAtOk returns a tuple with the CanceledAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanceledAt

`func (o *InvoiceOut) SetCanceledAt(v time.Time)`

SetCanceledAt sets CanceledAt field to given value.

### HasCanceledAt

`func (o *InvoiceOut) HasCanceledAt() bool`

HasCanceledAt returns a boolean if a field has been set.

### SetCanceledAtNil

`func (o *InvoiceOut) SetCanceledAtNil(b bool)`

 SetCanceledAtNil sets the value for CanceledAt to be an explicit nil

### UnsetCanceledAt
`func (o *InvoiceOut) UnsetCanceledAt()`

UnsetCanceledAt ensures that no value is present for CanceledAt, not even an explicit nil
### GetExpiredAt

`func (o *InvoiceOut) GetExpiredAt() time.Time`

GetExpiredAt returns the ExpiredAt field if non-nil, zero value otherwise.

### GetExpiredAtOk

`func (o *InvoiceOut) GetExpiredAtOk() (*time.Time, bool)`

GetExpiredAtOk returns a tuple with the ExpiredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiredAt

`func (o *InvoiceOut) SetExpiredAt(v time.Time)`

SetExpiredAt sets ExpiredAt field to given value.

### HasExpiredAt

`func (o *InvoiceOut) HasExpiredAt() bool`

HasExpiredAt returns a boolean if a field has been set.

### SetExpiredAtNil

`func (o *InvoiceOut) SetExpiredAtNil(b bool)`

 SetExpiredAtNil sets the value for ExpiredAt to be an explicit nil

### UnsetExpiredAt
`func (o *InvoiceOut) UnsetExpiredAt()`

UnsetExpiredAt ensures that no value is present for ExpiredAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


