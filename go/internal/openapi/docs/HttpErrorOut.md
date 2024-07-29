# HttpErrorOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | **string** |  | 
**Detail** | **string** |  | 

## Methods

### NewHttpErrorOut

`func NewHttpErrorOut(code string, detail string, ) *HttpErrorOut`

NewHttpErrorOut instantiates a new HttpErrorOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHttpErrorOutWithDefaults

`func NewHttpErrorOutWithDefaults() *HttpErrorOut`

NewHttpErrorOutWithDefaults instantiates a new HttpErrorOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *HttpErrorOut) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HttpErrorOut) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HttpErrorOut) SetCode(v string)`

SetCode sets Code field to given value.


### GetDetail

`func (o *HttpErrorOut) GetDetail() string`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *HttpErrorOut) GetDetailOk() (*string, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *HttpErrorOut) SetDetail(v string)`

SetDetail sets Detail field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


