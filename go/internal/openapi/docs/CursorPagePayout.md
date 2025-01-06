# CursorPagePayout

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]Payout**](Payout.md) |  | [optional] 
**NextCursor** | Pointer to **string** |  | [optional] 
**PrevCursor** | Pointer to **string** |  | [optional] 

## Methods

### NewCursorPagePayout

`func NewCursorPagePayout() *CursorPagePayout`

NewCursorPagePayout instantiates a new CursorPagePayout object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCursorPagePayoutWithDefaults

`func NewCursorPagePayoutWithDefaults() *CursorPagePayout`

NewCursorPagePayoutWithDefaults instantiates a new CursorPagePayout object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *CursorPagePayout) GetItems() []Payout`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *CursorPagePayout) GetItemsOk() (*[]Payout, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *CursorPagePayout) SetItems(v []Payout)`

SetItems sets Items field to given value.

### HasItems

`func (o *CursorPagePayout) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetNextCursor

`func (o *CursorPagePayout) GetNextCursor() string`

GetNextCursor returns the NextCursor field if non-nil, zero value otherwise.

### GetNextCursorOk

`func (o *CursorPagePayout) GetNextCursorOk() (*string, bool)`

GetNextCursorOk returns a tuple with the NextCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextCursor

`func (o *CursorPagePayout) SetNextCursor(v string)`

SetNextCursor sets NextCursor field to given value.

### HasNextCursor

`func (o *CursorPagePayout) HasNextCursor() bool`

HasNextCursor returns a boolean if a field has been set.

### GetPrevCursor

`func (o *CursorPagePayout) GetPrevCursor() string`

GetPrevCursor returns the PrevCursor field if non-nil, zero value otherwise.

### GetPrevCursorOk

`func (o *CursorPagePayout) GetPrevCursorOk() (*string, bool)`

GetPrevCursorOk returns a tuple with the PrevCursor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevCursor

`func (o *CursorPagePayout) SetPrevCursor(v string)`

SetPrevCursor sets PrevCursor field to given value.

### HasPrevCursor

`func (o *CursorPagePayout) HasPrevCursor() bool`

HasPrevCursor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


