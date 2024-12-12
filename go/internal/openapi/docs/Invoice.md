# Invoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **string** | Amount (Integer) | [optional] 
**BaseAmount** | Pointer to **string** | Base Currency Amount | [optional] 
**Channel** | Pointer to **string** |  | [optional] 
**CreatedAt** | Pointer to **string** |  | [optional] 
**Credentials** | Pointer to **map[string]interface{}** |  | [optional] 
**Currency** | Pointer to **string** |  | [optional] 
**Expiration** | Pointer to **int32** |  | [optional] 
**ExpiredAt** | Pointer to **string** |  | [optional] 
**Extra** | Pointer to **map[string]interface{}** |  | [optional] 
**FailedAt** | Pointer to **string** |  | [optional] 
**FailedReason** | Pointer to **string** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Metadata** | Pointer to **map[string]interface{}** |  | [optional] 
**Note** | Pointer to **string** |  | [optional] 
**PaidAt** | Pointer to **string** |  | [optional] 
**Status** | Pointer to [**InvoiceStatus**](InvoiceStatus.md) |  | [optional] 
**Uid** | Pointer to **string** |  | [optional] 
**UserId** | Pointer to **string** |  | [optional] 

## Methods

### NewInvoice

`func NewInvoice() *Invoice`

NewInvoice instantiates a new Invoice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInvoiceWithDefaults

`func NewInvoiceWithDefaults() *Invoice`

NewInvoiceWithDefaults instantiates a new Invoice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *Invoice) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *Invoice) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *Invoice) SetAmount(v string)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *Invoice) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetBaseAmount

`func (o *Invoice) GetBaseAmount() string`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *Invoice) GetBaseAmountOk() (*string, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *Invoice) SetBaseAmount(v string)`

SetBaseAmount sets BaseAmount field to given value.

### HasBaseAmount

`func (o *Invoice) HasBaseAmount() bool`

HasBaseAmount returns a boolean if a field has been set.

### GetChannel

`func (o *Invoice) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *Invoice) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *Invoice) SetChannel(v string)`

SetChannel sets Channel field to given value.

### HasChannel

`func (o *Invoice) HasChannel() bool`

HasChannel returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Invoice) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Invoice) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Invoice) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Invoice) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCredentials

`func (o *Invoice) GetCredentials() map[string]interface{}`

GetCredentials returns the Credentials field if non-nil, zero value otherwise.

### GetCredentialsOk

`func (o *Invoice) GetCredentialsOk() (*map[string]interface{}, bool)`

GetCredentialsOk returns a tuple with the Credentials field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredentials

`func (o *Invoice) SetCredentials(v map[string]interface{})`

SetCredentials sets Credentials field to given value.

### HasCredentials

`func (o *Invoice) HasCredentials() bool`

HasCredentials returns a boolean if a field has been set.

### GetCurrency

`func (o *Invoice) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Invoice) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Invoice) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *Invoice) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetExpiration

`func (o *Invoice) GetExpiration() int32`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Invoice) GetExpirationOk() (*int32, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Invoice) SetExpiration(v int32)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Invoice) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetExpiredAt

`func (o *Invoice) GetExpiredAt() string`

GetExpiredAt returns the ExpiredAt field if non-nil, zero value otherwise.

### GetExpiredAtOk

`func (o *Invoice) GetExpiredAtOk() (*string, bool)`

GetExpiredAtOk returns a tuple with the ExpiredAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiredAt

`func (o *Invoice) SetExpiredAt(v string)`

SetExpiredAt sets ExpiredAt field to given value.

### HasExpiredAt

`func (o *Invoice) HasExpiredAt() bool`

HasExpiredAt returns a boolean if a field has been set.

### GetExtra

`func (o *Invoice) GetExtra() map[string]interface{}`

GetExtra returns the Extra field if non-nil, zero value otherwise.

### GetExtraOk

`func (o *Invoice) GetExtraOk() (*map[string]interface{}, bool)`

GetExtraOk returns a tuple with the Extra field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtra

`func (o *Invoice) SetExtra(v map[string]interface{})`

SetExtra sets Extra field to given value.

### HasExtra

`func (o *Invoice) HasExtra() bool`

HasExtra returns a boolean if a field has been set.

### GetFailedAt

`func (o *Invoice) GetFailedAt() string`

GetFailedAt returns the FailedAt field if non-nil, zero value otherwise.

### GetFailedAtOk

`func (o *Invoice) GetFailedAtOk() (*string, bool)`

GetFailedAtOk returns a tuple with the FailedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedAt

`func (o *Invoice) SetFailedAt(v string)`

SetFailedAt sets FailedAt field to given value.

### HasFailedAt

`func (o *Invoice) HasFailedAt() bool`

HasFailedAt returns a boolean if a field has been set.

### GetFailedReason

`func (o *Invoice) GetFailedReason() string`

GetFailedReason returns the FailedReason field if non-nil, zero value otherwise.

### GetFailedReasonOk

`func (o *Invoice) GetFailedReasonOk() (*string, bool)`

GetFailedReasonOk returns a tuple with the FailedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedReason

`func (o *Invoice) SetFailedReason(v string)`

SetFailedReason sets FailedReason field to given value.

### HasFailedReason

`func (o *Invoice) HasFailedReason() bool`

HasFailedReason returns a boolean if a field has been set.

### GetId

`func (o *Invoice) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Invoice) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Invoice) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Invoice) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMetadata

`func (o *Invoice) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Invoice) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Invoice) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *Invoice) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetNote

`func (o *Invoice) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *Invoice) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *Invoice) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *Invoice) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetPaidAt

`func (o *Invoice) GetPaidAt() string`

GetPaidAt returns the PaidAt field if non-nil, zero value otherwise.

### GetPaidAtOk

`func (o *Invoice) GetPaidAtOk() (*string, bool)`

GetPaidAtOk returns a tuple with the PaidAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidAt

`func (o *Invoice) SetPaidAt(v string)`

SetPaidAt sets PaidAt field to given value.

### HasPaidAt

`func (o *Invoice) HasPaidAt() bool`

HasPaidAt returns a boolean if a field has been set.

### GetStatus

`func (o *Invoice) GetStatus() InvoiceStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Invoice) GetStatusOk() (*InvoiceStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Invoice) SetStatus(v InvoiceStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Invoice) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetUid

`func (o *Invoice) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *Invoice) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *Invoice) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *Invoice) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetUserId

`func (o *Invoice) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *Invoice) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *Invoice) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *Invoice) HasUserId() bool`

HasUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


