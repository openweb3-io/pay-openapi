# EndpointOut

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The endpoint&#39;s ID | [optional] 
**Uid** | Pointer to **NullableString** | The endpoint&#39;s UID | [optional] 
**Description** | Pointer to **string** | The endpoint&#39;s description | [optional] 
**Url** | **string** | The webhook endpoint url | 
**Filter** | Pointer to **string** | The webhook endpoint url | [optional] 
**EventTypes** | Pointer to **[]string** | The webhook endpoint eventTypes | [optional] 
**Disabled** | Pointer to **bool** | indicate whether to disable the webhook endpoint | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Optional metadata | [optional] [default to {}]
**Headers** | Pointer to **map[string]string** | Optional metadata | [optional] [default to {}]
**CreatedAt** | Pointer to **time.Time** | The endpoint&#39;s creation time | [optional] 

## Methods

### NewEndpointOut

`func NewEndpointOut(url string, ) *EndpointOut`

NewEndpointOut instantiates a new EndpointOut object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEndpointOutWithDefaults

`func NewEndpointOutWithDefaults() *EndpointOut`

NewEndpointOutWithDefaults instantiates a new EndpointOut object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *EndpointOut) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EndpointOut) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EndpointOut) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EndpointOut) HasId() bool`

HasId returns a boolean if a field has been set.

### GetUid

`func (o *EndpointOut) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *EndpointOut) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *EndpointOut) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *EndpointOut) HasUid() bool`

HasUid returns a boolean if a field has been set.

### SetUidNil

`func (o *EndpointOut) SetUidNil(b bool)`

 SetUidNil sets the value for Uid to be an explicit nil

### UnsetUid
`func (o *EndpointOut) UnsetUid()`

UnsetUid ensures that no value is present for Uid, not even an explicit nil
### GetDescription

`func (o *EndpointOut) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EndpointOut) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EndpointOut) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EndpointOut) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUrl

`func (o *EndpointOut) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *EndpointOut) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *EndpointOut) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetFilter

`func (o *EndpointOut) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *EndpointOut) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *EndpointOut) SetFilter(v string)`

SetFilter sets Filter field to given value.

### HasFilter

`func (o *EndpointOut) HasFilter() bool`

HasFilter returns a boolean if a field has been set.

### GetEventTypes

`func (o *EndpointOut) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *EndpointOut) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *EndpointOut) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *EndpointOut) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetDisabled

`func (o *EndpointOut) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *EndpointOut) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *EndpointOut) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *EndpointOut) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetMetadata

`func (o *EndpointOut) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *EndpointOut) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *EndpointOut) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *EndpointOut) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *EndpointOut) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *EndpointOut) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetHeaders

`func (o *EndpointOut) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *EndpointOut) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *EndpointOut) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *EndpointOut) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### SetHeadersNil

`func (o *EndpointOut) SetHeadersNil(b bool)`

 SetHeadersNil sets the value for Headers to be an explicit nil

### UnsetHeaders
`func (o *EndpointOut) UnsetHeaders()`

UnsetHeaders ensures that no value is present for Headers, not even an explicit nil
### GetCreatedAt

`func (o *EndpointOut) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *EndpointOut) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *EndpointOut) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *EndpointOut) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


