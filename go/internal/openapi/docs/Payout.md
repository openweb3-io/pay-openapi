# Payout

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **string** | Amount (Integer) | [optional] 
**CompletedAt** | Pointer to **string** | Completed at | [optional] 
**CreatedAt** | Pointer to **string** | Created at | [optional] 
**Currency** | Pointer to **string** | Currency Code | [optional] 
**FailedAt** | Pointer to **string** | Failed at | [optional] 
**FailedReason** | Pointer to **string** | Failed reason | [optional] 
**FromAddress** | Pointer to **string** | From Address | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Network** | Pointer to **string** | Currency Network | [optional] 
**Note** | Pointer to **string** | Payout note | [optional] 
**Status** | Pointer to **string** | Payout status | [optional] 
**ToAddress** | Pointer to **string** | To Address | [optional] 
**UpdatedAt** | Pointer to **string** | Updated at | [optional] 
**UserId** | Pointer to **string** | User ID | [optional] 

## Methods

### NewPayout

`func NewPayout() *Payout`

NewPayout instantiates a new Payout object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPayoutWithDefaults

`func NewPayoutWithDefaults() *Payout`

NewPayoutWithDefaults instantiates a new Payout object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *Payout) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *Payout) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *Payout) SetAmount(v string)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *Payout) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCompletedAt

`func (o *Payout) GetCompletedAt() string`

GetCompletedAt returns the CompletedAt field if non-nil, zero value otherwise.

### GetCompletedAtOk

`func (o *Payout) GetCompletedAtOk() (*string, bool)`

GetCompletedAtOk returns a tuple with the CompletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompletedAt

`func (o *Payout) SetCompletedAt(v string)`

SetCompletedAt sets CompletedAt field to given value.

### HasCompletedAt

`func (o *Payout) HasCompletedAt() bool`

HasCompletedAt returns a boolean if a field has been set.

### GetCreatedAt

`func (o *Payout) GetCreatedAt() string`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *Payout) GetCreatedAtOk() (*string, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *Payout) SetCreatedAt(v string)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *Payout) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetCurrency

`func (o *Payout) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *Payout) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *Payout) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *Payout) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetFailedAt

`func (o *Payout) GetFailedAt() string`

GetFailedAt returns the FailedAt field if non-nil, zero value otherwise.

### GetFailedAtOk

`func (o *Payout) GetFailedAtOk() (*string, bool)`

GetFailedAtOk returns a tuple with the FailedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedAt

`func (o *Payout) SetFailedAt(v string)`

SetFailedAt sets FailedAt field to given value.

### HasFailedAt

`func (o *Payout) HasFailedAt() bool`

HasFailedAt returns a boolean if a field has been set.

### GetFailedReason

`func (o *Payout) GetFailedReason() string`

GetFailedReason returns the FailedReason field if non-nil, zero value otherwise.

### GetFailedReasonOk

`func (o *Payout) GetFailedReasonOk() (*string, bool)`

GetFailedReasonOk returns a tuple with the FailedReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedReason

`func (o *Payout) SetFailedReason(v string)`

SetFailedReason sets FailedReason field to given value.

### HasFailedReason

`func (o *Payout) HasFailedReason() bool`

HasFailedReason returns a boolean if a field has been set.

### GetFromAddress

`func (o *Payout) GetFromAddress() string`

GetFromAddress returns the FromAddress field if non-nil, zero value otherwise.

### GetFromAddressOk

`func (o *Payout) GetFromAddressOk() (*string, bool)`

GetFromAddressOk returns a tuple with the FromAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromAddress

`func (o *Payout) SetFromAddress(v string)`

SetFromAddress sets FromAddress field to given value.

### HasFromAddress

`func (o *Payout) HasFromAddress() bool`

HasFromAddress returns a boolean if a field has been set.

### GetId

`func (o *Payout) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Payout) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Payout) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Payout) HasId() bool`

HasId returns a boolean if a field has been set.

### GetNetwork

`func (o *Payout) GetNetwork() string`

GetNetwork returns the Network field if non-nil, zero value otherwise.

### GetNetworkOk

`func (o *Payout) GetNetworkOk() (*string, bool)`

GetNetworkOk returns a tuple with the Network field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNetwork

`func (o *Payout) SetNetwork(v string)`

SetNetwork sets Network field to given value.

### HasNetwork

`func (o *Payout) HasNetwork() bool`

HasNetwork returns a boolean if a field has been set.

### GetNote

`func (o *Payout) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *Payout) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *Payout) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *Payout) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetStatus

`func (o *Payout) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Payout) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Payout) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Payout) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetToAddress

`func (o *Payout) GetToAddress() string`

GetToAddress returns the ToAddress field if non-nil, zero value otherwise.

### GetToAddressOk

`func (o *Payout) GetToAddressOk() (*string, bool)`

GetToAddressOk returns a tuple with the ToAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAddress

`func (o *Payout) SetToAddress(v string)`

SetToAddress sets ToAddress field to given value.

### HasToAddress

`func (o *Payout) HasToAddress() bool`

HasToAddress returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *Payout) GetUpdatedAt() string`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *Payout) GetUpdatedAtOk() (*string, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *Payout) SetUpdatedAt(v string)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *Payout) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetUserId

`func (o *Payout) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *Payout) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *Payout) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *Payout) HasUserId() bool`

HasUserId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


