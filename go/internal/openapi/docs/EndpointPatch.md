# EndpointPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uid** | Pointer to **NullableString** | The endpoint&#39;s UID | [optional] 
**Description** | Pointer to **NullableString** | The endpoint&#39;s description | [optional] 
**Url** | Pointer to **NullableString** | The webhook endpoint url | [optional] 
**EventTypes** | Pointer to **[]string** | The webhook endpoint associated event types | [optional] 
**Disabled** | Pointer to **bool** | indicate whether to disable the webhook endpoint | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Optional metadata | [optional] [default to {}]
**Headers** | Pointer to **map[string]string** | Optional headers | [optional] [default to {}]

## Methods

### NewEndpointPatch

`func NewEndpointPatch() *EndpointPatch`

NewEndpointPatch instantiates a new EndpointPatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEndpointPatchWithDefaults

`func NewEndpointPatchWithDefaults() *EndpointPatch`

NewEndpointPatchWithDefaults instantiates a new EndpointPatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUid

`func (o *EndpointPatch) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *EndpointPatch) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *EndpointPatch) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *EndpointPatch) HasUid() bool`

HasUid returns a boolean if a field has been set.

### SetUidNil

`func (o *EndpointPatch) SetUidNil(b bool)`

 SetUidNil sets the value for Uid to be an explicit nil

### UnsetUid
`func (o *EndpointPatch) UnsetUid()`

UnsetUid ensures that no value is present for Uid, not even an explicit nil
### GetDescription

`func (o *EndpointPatch) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EndpointPatch) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EndpointPatch) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EndpointPatch) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *EndpointPatch) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *EndpointPatch) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetUrl

`func (o *EndpointPatch) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *EndpointPatch) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *EndpointPatch) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *EndpointPatch) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### SetUrlNil

`func (o *EndpointPatch) SetUrlNil(b bool)`

 SetUrlNil sets the value for Url to be an explicit nil

### UnsetUrl
`func (o *EndpointPatch) UnsetUrl()`

UnsetUrl ensures that no value is present for Url, not even an explicit nil
### GetEventTypes

`func (o *EndpointPatch) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *EndpointPatch) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *EndpointPatch) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *EndpointPatch) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetDisabled

`func (o *EndpointPatch) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *EndpointPatch) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *EndpointPatch) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *EndpointPatch) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetMetadata

`func (o *EndpointPatch) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *EndpointPatch) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *EndpointPatch) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *EndpointPatch) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### SetMetadataNil

`func (o *EndpointPatch) SetMetadataNil(b bool)`

 SetMetadataNil sets the value for Metadata to be an explicit nil

### UnsetMetadata
`func (o *EndpointPatch) UnsetMetadata()`

UnsetMetadata ensures that no value is present for Metadata, not even an explicit nil
### GetHeaders

`func (o *EndpointPatch) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *EndpointPatch) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *EndpointPatch) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *EndpointPatch) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### SetHeadersNil

`func (o *EndpointPatch) SetHeadersNil(b bool)`

 SetHeadersNil sets the value for Headers to be an explicit nil

### UnsetHeaders
`func (o *EndpointPatch) UnsetHeaders()`

UnsetHeaders ensures that no value is present for Headers, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


