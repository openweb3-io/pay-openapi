# CursorPageRefund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]Refund**](Refund.md) |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 
**PrevCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewCursorPageRefund

`func NewCursorPageRefund() *CursorPageRefund`

NewCursorPageRefund instantiates a new CursorPageRefund object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCursorPageRefundWithDefaults

`func NewCursorPageRefundWithDefaults() *CursorPageRefund`

NewCursorPageRefundWithDefaults instantiates a new CursorPageRefund object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *CursorPageRefund) GetItems() []Refund`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *CursorPageRefund) GetItemsOk() (*[]Refund, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *CursorPageRefund) SetItems(v []Refund)`

SetItems sets Items field to given value.

### HasItems

`func (o *CursorPageRefund) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetNextCursor

`func (o *CursorPageRefund) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *CursorPageRefund) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *CursorPageRefund) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *CursorPageRefund) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.

### GetPrevCursor

`func (o *CursorPageRefund) GetPrevCursor() string`

GetPrevCursor returns the PrevCursor field if non-nil, zero value otherwise.

### GetPrevCursorOk

`func (o *CursorPageRefund) GetPrevCursorOk() (*string, bool)`

GetPrevCursorOk returns a tuple with the PrevCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevCursor

`func (o *CursorPageRefund) SetPrevCursor(v string)`

SetPrevCursor sets PrevCursor field to given value.

### HasPrevCursor

`func (o *CursorPageRefund) HasPrevCursor() bool`

HasPrevCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


