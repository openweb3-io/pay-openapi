# ListResponseEndpointOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]EndpointOut**](EndpointOut.md) |  | 
**Total** | Pointer to **int32** |  | [optional] 
**HasNext** | Pointer to **bool** |  | [optional] 
**HasPrev** | Pointer to **bool** |  | [optional] 
**PreCursor** | Pointer to **string** |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewListResponseEndpointOut

`func NewListResponseEndpointOut(data []EndpointOut, ) *ListResponseEndpointOut`

NewListResponseEndpointOut instantiates a new ListResponseEndpointOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListResponseEndpointOutWithDefaults

`func NewListResponseEndpointOutWithDefaults() *ListResponseEndpointOut`

NewListResponseEndpointOutWithDefaults instantiates a new ListResponseEndpointOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ListResponseEndpointOut) GetData() []EndpointOut`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListResponseEndpointOut) GetDataOk() (*[]EndpointOut, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListResponseEndpointOut) SetData(v []EndpointOut)`

SetData sets Data field to given value.


### GetTotal

`func (o *ListResponseEndpointOut) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ListResponseEndpointOut) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ListResponseEndpointOut) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ListResponseEndpointOut) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetHasNext

`func (o *ListResponseEndpointOut) GetHasNext() bool`

GetHasNext returns the HasNext field if non-nil, zero value otherwise.

### GetHasNextOk

`func (o *ListResponseEndpointOut) GetHasNextOk() (*bool, bool)`

GetHasNextOk returns a tuple with the HasNext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNext

`func (o *ListResponseEndpointOut) SetHasNext(v bool)`

SetHasNext sets HasNext field to given value.

### HasHasNext

`func (o *ListResponseEndpointOut) HasHasNext() bool`

HasHasNext returns a boolean if a field has been set.

### GetHasPrev

`func (o *ListResponseEndpointOut) GetHasPrev() bool`

GetHasPrev returns the HasPrev field if non-nil, zero value otherwise.

### GetHasPrevOk

`func (o *ListResponseEndpointOut) GetHasPrevOk() (*bool, bool)`

GetHasPrevOk returns a tuple with the HasPrev field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPrev

`func (o *ListResponseEndpointOut) SetHasPrev(v bool)`

SetHasPrev sets HasPrev field to given value.

### HasHasPrev

`func (o *ListResponseEndpointOut) HasHasPrev() bool`

HasHasPrev returns a boolean if a field has been set.

### GetPreCursor

`func (o *ListResponseEndpointOut) GetPreCursor() string`

GetPreCursor returns the PreCursor field if non-nil, zero value otherwise.

### GetPreCursorOk

`func (o *ListResponseEndpointOut) GetPreCursorOk() (*string, bool)`

GetPreCursorOk returns a tuple with the PreCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreCursor

`func (o *ListResponseEndpointOut) SetPreCursor(v string)`

SetPreCursor sets PreCursor field to given value.

### HasPreCursor

`func (o *ListResponseEndpointOut) HasPreCursor() bool`

HasPreCursor returns a boolean if a field has been set.

### GetNextCursor

`func (o *ListResponseEndpointOut) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *ListResponseEndpointOut) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *ListResponseEndpointOut) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *ListResponseEndpointOut) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


