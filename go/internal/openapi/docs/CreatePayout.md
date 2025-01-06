# CreatePayout

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **string** | Amount (Integer) | [optional] 
**Currency** | Pointer to **string** | Currency Code | [optional] 
**Network** | Pointer to **string** | Currency Network | [optional] 
**Note** | Pointer to **string** | Payout notes | [optional] 
**ToAddress** | Pointer to **string** | To Address | [optional] 
**UserId** | Pointer to **string** | User ID | [optional] 

## Methods

### NewCreatePayout

`func NewCreatePayout() *CreatePayout`

NewCreatePayout instantiates a new CreatePayout object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePayoutWithDefaults

`func NewCreatePayoutWithDefaults() *CreatePayout`

NewCreatePayoutWithDefaults instantiates a new CreatePayout object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CreatePayout) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CreatePayout) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CreatePayout) SetAmount(v string)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CreatePayout) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *CreatePayout) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *CreatePayout) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *CreatePayout) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *CreatePayout) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetNetwork

`func (o *CreatePayout) GetNetwork() string`

GetNetwork returns the Network field if non-nil, zero value otherwise.

### GetNetworkOk

`func (o *CreatePayout) GetNetworkOk() (*string, bool)`

GetNetworkOk returns a tuple with the Network field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNetwork

`func (o *CreatePayout) SetNetwork(v string)`

SetNetwork sets Network field to given value.

### HasNetwork

`func (o *CreatePayout) HasNetwork() bool`

HasNetwork returns a boolean if a field has been set.

### GetNote

`func (o *CreatePayout) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *CreatePayout) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *CreatePayout) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *CreatePayout) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetToAddress

`func (o *CreatePayout) GetToAddress() string`

GetToAddress returns the ToAddress field if non-nil, zero value otherwise.

### GetToAddressOk

`func (o *CreatePayout) GetToAddressOk() (*string, bool)`

GetToAddressOk returns a tuple with the ToAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAddress

`func (o *CreatePayout) SetToAddress(v string)`

SetToAddress sets ToAddress field to given value.

### HasToAddress

`func (o *CreatePayout) HasToAddress() bool`

HasToAddress returns a boolean if a field has been set.

### GetUserId

`func (o *CreatePayout) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *CreatePayout) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *CreatePayout) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *CreatePayout) HasUserId() bool`

HasUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


