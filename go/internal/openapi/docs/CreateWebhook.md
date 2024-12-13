# CreateWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | The description of the webhook | [optional] 
**Disabled** | **bool** | The disabled of the webhook | 
**EventTypes** | **[]string** | The event types of the webhook | 
**Headers** | **map[string]string** | The headers of the webhook | 
**Metadata** | **map[string]interface{}** | The metadata of the webhook | 
**Uid** | Pointer to **string** | The uid of the webhook | [optional] 
**Url** | **string** | The url of the webhook | 

## Methods

### NewCreateWebhook

`func NewCreateWebhook(disabled bool, eventTypes []string, headers map[string]string, metadata map[string]interface{}, url string, ) *CreateWebhook`

NewCreateWebhook instantiates a new CreateWebhook object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateWebhookWithDefaults

`func NewCreateWebhookWithDefaults() *CreateWebhook`

NewCreateWebhookWithDefaults instantiates a new CreateWebhook object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *CreateWebhook) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CreateWebhook) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CreateWebhook) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CreateWebhook) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisabled

`func (o *CreateWebhook) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *CreateWebhook) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *CreateWebhook) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.


### GetEventTypes

`func (o *CreateWebhook) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *CreateWebhook) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *CreateWebhook) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.


### GetHeaders

`func (o *CreateWebhook) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *CreateWebhook) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *CreateWebhook) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.


### GetMetadata

`func (o *CreateWebhook) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *CreateWebhook) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *CreateWebhook) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.


### GetUid

`func (o *CreateWebhook) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *CreateWebhook) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *CreateWebhook) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *CreateWebhook) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetUrl

`func (o *CreateWebhook) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CreateWebhook) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CreateWebhook) SetUrl(v string)`

SetUrl sets Url field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


