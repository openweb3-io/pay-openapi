# CreateInvoiceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Amount (Integer) | 
**Channel** | **string** | Channel | 
**Currency** | **string** | Currency | 
**Expiration** | Pointer to **int32** | Expiration | [optional] 
**Extra** | **map[string]interface{}** | Extra | 
**Metadata** | **map[string]interface{}** | Metadata | 
**Note** | Pointer to **string** | Note | [optional] 
**Uid** | Pointer to **string** | Unique ID | [optional] 
**UserId** | Pointer to **string** | User ID | [optional] 

## Methods

### NewCreateInvoiceRequest

`func NewCreateInvoiceRequest(amount string, channel string, currency string, extra map[string]interface{}, metadata map[string]interface{}, ) *CreateInvoiceRequest`

NewCreateInvoiceRequest instantiates a new CreateInvoiceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateInvoiceRequestWithDefaults

`func NewCreateInvoiceRequestWithDefaults() *CreateInvoiceRequest`

NewCreateInvoiceRequestWithDefaults instantiates a new CreateInvoiceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CreateInvoiceRequest) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CreateInvoiceRequest) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CreateInvoiceRequest) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetChannel

`func (o *CreateInvoiceRequest) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *CreateInvoiceRequest) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *CreateInvoiceRequest) SetChannel(v string)`

SetChannel sets Channel field to given value.


### GetCurrency

`func (o *CreateInvoiceRequest) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CreateInvoiceRequest) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CreateInvoiceRequest) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetExpiration

`func (o *CreateInvoiceRequest) GetExpiration() int32`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *CreateInvoiceRequest) GetExpirationOk() (*int32, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *CreateInvoiceRequest) SetExpiration(v int32)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *CreateInvoiceRequest) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetExtra

`func (o *CreateInvoiceRequest) GetExtra() map[string]interface{}`

GetExtra returns the Extra field if non-nil, zero value otherwise.

### GetExtraOk

`func (o *CreateInvoiceRequest) GetExtraOk() (*map[string]interface{}, bool)`

GetExtraOk returns a tuple with the Extra field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtra

`func (o *CreateInvoiceRequest) SetExtra(v map[string]interface{})`

SetExtra sets Extra field to given value.


### GetMetadata

`func (o *CreateInvoiceRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CreateInvoiceRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CreateInvoiceRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### GetNote

`func (o *CreateInvoiceRequest) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *CreateInvoiceRequest) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *CreateInvoiceRequest) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *CreateInvoiceRequest) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetUid

`func (o *CreateInvoiceRequest) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *CreateInvoiceRequest) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *CreateInvoiceRequest) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *CreateInvoiceRequest) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetUserId

`func (o *CreateInvoiceRequest) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *CreateInvoiceRequest) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *CreateInvoiceRequest) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *CreateInvoiceRequest) HasUserId() bool`

HasUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


