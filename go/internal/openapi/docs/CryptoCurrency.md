# CryptoCurrency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Currency code | [optional] 
**Decimals** | Pointer to **int32** | Decimals | [optional] 
**MaxWithdrawAmount** | Pointer to **string** | Max Withdraw Amount (Integer) | [optional] 
**MinDepositAmount** | Pointer to **string** | Min Deposit Amount (Integer) | [optional] 
**MinWithdrawAmount** | Pointer to **string** | Min Withdraw Amount (Integer) | [optional] 
**Name** | Pointer to **string** | Currency name | [optional] 
**Networks** | Pointer to [**[]CryptoCurrencyNetwork**](CryptoCurrencyNetwork.md) | Networks | [optional] 
**Precision** | Pointer to **int32** | Precision | [optional] 

## Methods

### NewCryptoCurrency

`func NewCryptoCurrency() *CryptoCurrency`

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

### HasCode

`func (o *CryptoCurrency) HasCode() bool`

HasCode returns a boolean if a field has been set.

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

### HasDecimals

`func (o *CryptoCurrency) HasDecimals() bool`

HasDecimals returns a boolean if a field has been set.

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

### HasMaxWithdrawAmount

`func (o *CryptoCurrency) HasMaxWithdrawAmount() bool`

HasMaxWithdrawAmount returns a boolean if a field has been set.

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

### HasMinDepositAmount

`func (o *CryptoCurrency) HasMinDepositAmount() bool`

HasMinDepositAmount returns a boolean if a field has been set.

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

### HasMinWithdrawAmount

`func (o *CryptoCurrency) HasMinWithdrawAmount() bool`

HasMinWithdrawAmount returns a boolean if a field has been set.

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

### HasName

`func (o *CryptoCurrency) HasName() bool`

HasName returns a boolean if a field has been set.

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

### HasNetworks

`func (o *CryptoCurrency) HasNetworks() bool`

HasNetworks returns a boolean if a field has been set.

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

### HasPrecision

`func (o *CryptoCurrency) HasPrecision() bool`

HasPrecision returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


