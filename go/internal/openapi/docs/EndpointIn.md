# EndpointIn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uid** | Pointer to **NullableString** | The endpoint&#39;s UID | [optional] 
**Description** | Pointer to **NullableString** | The endpoint&#39;s description | [optional] 
**Url** | **string** | The webhook endpoint url | 
**EventTypes** | **[]string** | The webhook endpoint associated event types | 
**Disabled** | Pointer to **bool** | indicate whether to disable the webhook endpoint | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Optional metadata | [optional] [default to {}]
**Headers** | Pointer to **map[string]string** | Optional headers | [optional] [default to {}]

## Methods

### NewEndpointIn

`func NewEndpointIn(url string, eventTypes []string, ) *EndpointIn`

NewEndpointIn instantiates a new EndpointIn object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEndpointInWithDefaults

`func NewEndpointInWithDefaults() *EndpointIn`

NewEndpointInWithDefaults instantiates a new EndpointIn object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUid

`func (o *EndpointIn) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *EndpointIn) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *EndpointIn) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *EndpointIn) HasUid() bool`

HasUid returns a boolean if a field has been set.

### SetUidNil

`func (o *EndpointIn) SetUidNil(b bool)`

 SetUidNil sets the value for Uid to be an explicit nil

### UnsetUid
`func (o *EndpointIn) UnsetUid()`

UnsetUid ensures that no value is present for Uid, not even an explicit nil
### GetDescription

`func (o *EndpointIn) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EndpointIn) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EndpointIn) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EndpointIn) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *EndpointIn) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *EndpointIn) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetUrl

`func (o *EndpointIn) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *EndpointIn) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *EndpointIn) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetEventTypes

`func (o *EndpointIn) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *EndpointIn) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *EndpointIn) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.


### GetDisabled

`func (o *EndpointIn) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *EndpointIn) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *EndpointIn) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *EndpointIn) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetMetadata

`func (o *EndpointIn) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *EndpointIn) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *EndpointIn) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *EndpointIn) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *EndpointIn) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *EndpointIn) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetHeaders

`func (o *EndpointIn) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *EndpointIn) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *EndpointIn) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *EndpointIn) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### SetHeadersNil

`func (o *EndpointIn) SetHeadersNil(b bool)`

 SetHeadersNil sets the value for Headers to be an explicit nil

### UnsetHeaders
`func (o *EndpointIn) UnsetHeaders()`

UnsetHeaders ensures that no value is present for Headers, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


