# CreateRefund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **string** | Refund amount (Integer) | [optional] 
**Note** | Pointer to **string** | Refund note | [optional] 
**PaymentId** | Pointer to **string** | Payment ID | [optional] 
**ToAddress** | Pointer to **string** | To Address | [optional] 

## Methods

### NewCreateRefund

`func NewCreateRefund() *CreateRefund`

NewCreateRefund instantiates a new CreateRefund object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateRefundWithDefaults

`func NewCreateRefundWithDefaults() *CreateRefund`

NewCreateRefundWithDefaults instantiates a new CreateRefund object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *CreateRefund) GetAmount() string`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CreateRefund) GetAmountOk() (*string, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CreateRefund) SetAmount(v string)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CreateRefund) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetNote

`func (o *CreateRefund) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *CreateRefund) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *CreateRefund) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *CreateRefund) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetPaymentId

`func (o *CreateRefund) GetPaymentId() string`

GetPaymentId returns the PaymentId field if non-nil, zero value otherwise.

### GetPaymentIdOk

`func (o *CreateRefund) GetPaymentIdOk() (*string, bool)`

GetPaymentIdOk returns a tuple with the PaymentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentId

`func (o *CreateRefund) SetPaymentId(v string)`

SetPaymentId sets PaymentId field to given value.

### HasPaymentId

`func (o *CreateRefund) HasPaymentId() bool`

HasPaymentId returns a boolean if a field has been set.

### GetToAddress

`func (o *CreateRefund) GetToAddress() string`

GetToAddress returns the ToAddress field if non-nil, zero value otherwise.

### GetToAddressOk

`func (o *CreateRefund) GetToAddressOk() (*string, bool)`

GetToAddressOk returns a tuple with the ToAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToAddress

`func (o *CreateRefund) SetToAddress(v string)`

SetToAddress sets ToAddress field to given value.

### HasToAddress

`func (o *CreateRefund) HasToAddress() bool`

HasToAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


