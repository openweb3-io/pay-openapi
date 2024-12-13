# Rate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FromCurrency** | **string** | From currency code | 
**Rate** | **string** | Exchange Rate | 
**ToCurrency** | **string** | To currency code | 

## Methods

### NewRate

`func NewRate(fromCurrency string, rate string, toCurrency string, ) *Rate`

NewRate instantiates a new Rate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateWithDefaults

`func NewRateWithDefaults() *Rate`

NewRateWithDefaults instantiates a new Rate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFromCurrency

`func (o *Rate) GetFromCurrency() string`

GetFromCurrency returns the FromCurrency field if non-nil, zero value otherwise.

### GetFromCurrencyOk

`func (o *Rate) GetFromCurrencyOk() (*string, bool)`

GetFromCurrencyOk returns a tuple with the FromCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromCurrency

`func (o *Rate) SetFromCurrency(v string)`

SetFromCurrency sets FromCurrency field to given value.


### GetRate

`func (o *Rate) GetRate() string`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *Rate) GetRateOk() (*string, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *Rate) SetRate(v string)`

SetRate sets Rate field to given value.


### GetToCurrency

`func (o *Rate) GetToCurrency() string`

GetToCurrency returns the ToCurrency field if non-nil, zero value otherwise.

### GetToCurrencyOk

`func (o *Rate) GetToCurrencyOk() (*string, bool)`

GetToCurrencyOk returns a tuple with the ToCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCurrency

`func (o *Rate) SetToCurrency(v string)`

SetToCurrency sets ToCurrency field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


