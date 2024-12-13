# CryptoCurrency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** | Currency code | 
**Decimals** | **int32** | Decimals | 
**MaxWithdrawAmount** | **string** | Max Withdraw Amount (Integer) | 
**MinDepositAmount** | **string** | Min Deposit Amount (Integer) | 
**MinWithdrawAmount** | **string** | Min Withdraw Amount (Integer) | 
**Name** | **string** | Currency name | 
**Networks** | [**[]CryptoCurrencyNetwork**](CryptoCurrencyNetwork.md) | Networks | 
**Precision** | **int32** | Precision | 

## Methods

### NewCryptoCurrency

`func NewCryptoCurrency(code string, decimals int32, maxWithdrawAmount string, minDepositAmount string, minWithdrawAmount string, name string, networks []CryptoCurrencyNetwork, precision int32, ) *CryptoCurrency`

NewCryptoCurrency instantiates a new CryptoCurrency object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCryptoCurrencyWithDefaults

`func NewCryptoCurrencyWithDefaults() *CryptoCurrency`

NewCryptoCurrencyWithDefaults instantiates a new CryptoCurrency object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *CryptoCurrency) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CryptoCurrency) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CryptoCurrency) SetCode(v string)`

SetCode sets Code field to given value.


### GetDecimals

`func (o *CryptoCurrency) GetDecimals() int32`

GetDecimals returns the Decimals field if non-nil, zero value otherwise.

### GetDecimalsOk

`func (o *CryptoCurrency) GetDecimalsOk() (*int32, bool)`

GetDecimalsOk returns a tuple with the Decimals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimals

`func (o *CryptoCurrency) SetDecimals(v int32)`

SetDecimals sets Decimals field to given value.


### GetMaxWithdrawAmount

`func (o *CryptoCurrency) GetMaxWithdrawAmount() string`

GetMaxWithdrawAmount returns the MaxWithdrawAmount field if non-nil, zero value otherwise.

### GetMaxWithdrawAmountOk

`func (o *CryptoCurrency) GetMaxWithdrawAmountOk() (*string, bool)`

GetMaxWithdrawAmountOk returns a tuple with the MaxWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxWithdrawAmount

`func (o *CryptoCurrency) SetMaxWithdrawAmount(v string)`

SetMaxWithdrawAmount sets MaxWithdrawAmount field to given value.


### GetMinDepositAmount

`func (o *CryptoCurrency) GetMinDepositAmount() string`

GetMinDepositAmount returns the MinDepositAmount field if non-nil, zero value otherwise.

### GetMinDepositAmountOk

`func (o *CryptoCurrency) GetMinDepositAmountOk() (*string, bool)`

GetMinDepositAmountOk returns a tuple with the MinDepositAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinDepositAmount

`func (o *CryptoCurrency) SetMinDepositAmount(v string)`

SetMinDepositAmount sets MinDepositAmount field to given value.


### GetMinWithdrawAmount

`func (o *CryptoCurrency) GetMinWithdrawAmount() string`

GetMinWithdrawAmount returns the MinWithdrawAmount field if non-nil, zero value otherwise.

### GetMinWithdrawAmountOk

`func (o *CryptoCurrency) GetMinWithdrawAmountOk() (*string, bool)`

GetMinWithdrawAmountOk returns a tuple with the MinWithdrawAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinWithdrawAmount

`func (o *CryptoCurrency) SetMinWithdrawAmount(v string)`

SetMinWithdrawAmount sets MinWithdrawAmount field to given value.


### GetName

`func (o *CryptoCurrency) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CryptoCurrency) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CryptoCurrency) SetName(v string)`

SetName sets Name field to given value.


### GetNetworks

`func (o *CryptoCurrency) GetNetworks() []CryptoCurrencyNetwork`

GetNetworks returns the Networks field if non-nil, zero value otherwise.

### GetNetworksOk

`func (o *CryptoCurrency) GetNetworksOk() (*[]CryptoCurrencyNetwork, bool)`

GetNetworksOk returns a tuple with the Networks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNetworks

`func (o *CryptoCurrency) SetNetworks(v []CryptoCurrencyNetwork)`

SetNetworks sets Networks field to given value.


### GetPrecision

`func (o *CryptoCurrency) GetPrecision() int32`

GetPrecision returns the Precision field if non-nil, zero value otherwise.

### GetPrecisionOk

`func (o *CryptoCurrency) GetPrecisionOk() (*int32, bool)`

GetPrecisionOk returns a tuple with the Precision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrecision

`func (o *CryptoCurrency) SetPrecision(v int32)`

SetPrecision sets Precision field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


