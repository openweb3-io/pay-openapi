# PageInvoice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to [**[]Invoice**](Invoice.md) |  | [optional] 
**HasNext** | Pointer to **bool** |  | [optional] 
**HasPrev** | Pointer to **bool** |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 
**PrevCursor** | Pointer to **string** |  | [optional] 
**Total** | Pointer to **int32** |  | [optional] 

## Methods

### NewPageInvoice

`func NewPageInvoice() *PageInvoice`

NewPageInvoice instantiates a new PageInvoice object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPageInvoiceWithDefaults

`func NewPageInvoiceWithDefaults() *PageInvoice`

NewPageInvoiceWithDefaults instantiates a new PageInvoice object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *PageInvoice) GetData() []Invoice`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *PageInvoice) GetDataOk() (*[]Invoice, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *PageInvoice) SetData(v []Invoice)`

SetData sets Data field to given value.

### HasData

`func (o *PageInvoice) HasData() bool`

HasData returns a boolean if a field has been set.

### GetHasNext

`func (o *PageInvoice) GetHasNext() bool`

GetHasNext returns the HasNext field if non-nil, zero value otherwise.

### GetHasNextOk

`func (o *PageInvoice) GetHasNextOk() (*bool, bool)`

GetHasNextOk returns a tuple with the HasNext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNext

`func (o *PageInvoice) SetHasNext(v bool)`

SetHasNext sets HasNext field to given value.

### HasHasNext

`func (o *PageInvoice) HasHasNext() bool`

HasHasNext returns a boolean if a field has been set.

### GetHasPrev

`func (o *PageInvoice) GetHasPrev() bool`

GetHasPrev returns the HasPrev field if non-nil, zero value otherwise.

### GetHasPrevOk

`func (o *PageInvoice) GetHasPrevOk() (*bool, bool)`

GetHasPrevOk returns a tuple with the HasPrev field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPrev

`func (o *PageInvoice) SetHasPrev(v bool)`

SetHasPrev sets HasPrev field to given value.

### HasHasPrev

`func (o *PageInvoice) HasHasPrev() bool`

HasHasPrev returns a boolean if a field has been set.

### GetNextCursor

`func (o *PageInvoice) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *PageInvoice) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *PageInvoice) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *PageInvoice) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.

### GetPrevCursor

`func (o *PageInvoice) GetPrevCursor() string`

GetPrevCursor returns the PrevCursor field if non-nil, zero value otherwise.

### GetPrevCursorOk

`func (o *PageInvoice) GetPrevCursorOk() (*string, bool)`

GetPrevCursorOk returns a tuple with the PrevCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevCursor

`func (o *PageInvoice) SetPrevCursor(v string)`

SetPrevCursor sets PrevCursor field to given value.

### HasPrevCursor

`func (o *PageInvoice) HasPrevCursor() bool`

HasPrevCursor returns a boolean if a field has been set.

### GetTotal

`func (o *PageInvoice) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *PageInvoice) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *PageInvoice) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *PageInvoice) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


