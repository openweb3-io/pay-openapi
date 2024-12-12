# FiatCurrency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Currency Code | [optional] 
**Name** | Pointer to **string** | Currency Name | [optional] 

## Methods

### NewFiatCurrency

`func NewFiatCurrency() *FiatCurrency`

NewFiatCurrency instantiates a new FiatCurrency object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiatCurrencyWithDefaults

`func NewFiatCurrencyWithDefaults() *FiatCurrency`

NewFiatCurrencyWithDefaults instantiates a new FiatCurrency object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *FiatCurrency) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *FiatCurrency) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *FiatCurrency) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *FiatCurrency) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetName

`func (o *FiatCurrency) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FiatCurrency) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FiatCurrency) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *FiatCurrency) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


