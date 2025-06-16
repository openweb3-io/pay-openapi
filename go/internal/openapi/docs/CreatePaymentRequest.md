# CreatePaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **string** | Amount (Integer) | 
**Currency** | **string** | Currency | 
**Expiration** | Pointer to **int32** | Expiration | [optional] 
**Extra** | Pointer to **map[string]interface{}** | Extra | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Metadata | [optional] 
**Note** | Pointer to **string** | Note | [optional] 
**PaymentMethod** | **string** | PaymentMethod | 
**PaymentProvider** | **string** | PaymentProvider | 
**Provider** | **string** | Provider | 
**Uid** | Pointer to **string** | Unique ID | [optional] 
**UserId** | Pointer to **string** | User ID | [optional] 

## Methods

### NewCreatePaymentRequest

`func NewCreatePaymentRequest(amount string, currency string, paymentMethod string, paymentProvider string, provider string, ) *CreatePaymentRequest`

NewCreatePaymentRequest instantiates a new CreatePaymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePaymentRequestWithDefaults

`func NewCreatePaymentRequestWithDefaults() *CreatePaymentRequest`

NewCreatePaymentRequestWithDefaults instantiates a new CreatePaymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CreatePaymentRequest) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CreatePaymentRequest) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CreatePaymentRequest) SetAmount(v string)`

SetAmount sets Amount field to given value.


### GetCurrency

`func (o *CreatePaymentRequest) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CreatePaymentRequest) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CreatePaymentRequest) SetCurrency(v string)`

SetCurrency sets Currency field to given value.


### GetExpiration

`func (o *CreatePaymentRequest) GetExpiration() int32`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *CreatePaymentRequest) GetExpirationOk() (*int32, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *CreatePaymentRequest) SetExpiration(v int32)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *CreatePaymentRequest) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetExtra

`func (o *CreatePaymentRequest) GetExtra() map[string]interface{}`

GetExtra returns the Extra field if non-nil, zero value otherwise.

### GetExtraOk

`func (o *CreatePaymentRequest) GetExtraOk() (*map[string]interface{}, bool)`

GetExtraOk returns a tuple with the Extra field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtra

`func (o *CreatePaymentRequest) SetExtra(v map[string]interface{})`

SetExtra sets Extra field to given value.

### HasExtra

`func (o *CreatePaymentRequest) HasExtra() bool`

HasExtra returns a boolean if a field has been set.

### SetExtraNil

`func (o *CreatePaymentRequest) SetExtraNil(b bool)`

 SetExtraNil sets the value for Extra to be an explicit nil

### UnsetExtra
`func (o *CreatePaymentRequest) UnsetExtra()`

UnsetExtra ensures that no value is present for Extra, not even an explicit nil
### GetMetadata

`func (o *CreatePaymentRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CreatePaymentRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CreatePaymentRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *CreatePaymentRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *CreatePaymentRequest) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *CreatePaymentRequest) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetNote

`func (o *CreatePaymentRequest) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *CreatePaymentRequest) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *CreatePaymentRequest) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *CreatePaymentRequest) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *CreatePaymentRequest) GetPaymentMethod() string`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *CreatePaymentRequest) GetPaymentMethodOk() (*string, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *CreatePaymentRequest) SetPaymentMethod(v string)`

SetPaymentMethod sets PaymentMethod field to given value.


### GetPaymentProvider

`func (o *CreatePaymentRequest) GetPaymentProvider() string`

GetPaymentProvider returns the PaymentProvider field if non-nil, zero value otherwise.

### GetPaymentProviderOk

`func (o *CreatePaymentRequest) GetPaymentProviderOk() (*string, bool)`

GetPaymentProviderOk returns a tuple with the PaymentProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentProvider

`func (o *CreatePaymentRequest) SetPaymentProvider(v string)`

SetPaymentProvider sets PaymentProvider field to given value.


### GetProvider

`func (o *CreatePaymentRequest) GetProvider() string`

GetProvider returns the Provider field if non-nil, zero value otherwise.

### GetProviderOk

`func (o *CreatePaymentRequest) GetProviderOk() (*string, bool)`

GetProviderOk returns a tuple with the Provider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvider

`func (o *CreatePaymentRequest) SetProvider(v string)`

SetProvider sets Provider field to given value.


### GetUid

`func (o *CreatePaymentRequest) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *CreatePaymentRequest) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *CreatePaymentRequest) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *CreatePaymentRequest) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetUserId

`func (o *CreatePaymentRequest) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *CreatePaymentRequest) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *CreatePaymentRequest) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *CreatePaymentRequest) HasUserId() bool`

HasUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


