# ListResponseInvoiceOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | [**[]InvoiceOut**](InvoiceOut.md) |  | 
**Total** | Pointer to **int32** |  | [optional] 

## Methods

### NewListResponseInvoiceOut

`func NewListResponseInvoiceOut(data []InvoiceOut, ) *ListResponseInvoiceOut`

NewListResponseInvoiceOut instantiates a new ListResponseInvoiceOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListResponseInvoiceOutWithDefaults

`func NewListResponseInvoiceOutWithDefaults() *ListResponseInvoiceOut`

NewListResponseInvoiceOutWithDefaults instantiates a new ListResponseInvoiceOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ListResponseInvoiceOut) GetData() []InvoiceOut`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ListResponseInvoiceOut) GetDataOk() (*[]InvoiceOut, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ListResponseInvoiceOut) SetData(v []InvoiceOut)`

SetData sets Data field to given value.


### GetTotal

`func (o *ListResponseInvoiceOut) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ListResponseInvoiceOut) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ListResponseInvoiceOut) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ListResponseInvoiceOut) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


