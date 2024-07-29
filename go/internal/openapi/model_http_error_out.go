/*
 * Pay API Documentations
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// HttpErrorOut struct for HttpErrorOut
type HttpErrorOut struct {
	Code string `json:"code"`
	Detail string `json:"detail"`
}

// NewHttpErrorOut instantiates a new HttpErrorOut object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHttpErrorOut(code string, detail string) *HttpErrorOut {
	this := HttpErrorOut{}
	this.Code = code
	this.Detail = detail
	return &this
}

// NewHttpErrorOutWithDefaults instantiates a new HttpErrorOut object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHttpErrorOutWithDefaults() *HttpErrorOut {
	this := HttpErrorOut{}
	return &this
}

// GetCode returns the Code field value
func (o *HttpErrorOut) GetCode() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Code
}

// GetCodeOk returns a tuple with the Code field value
// and a boolean to check if the value has been set.
func (o *HttpErrorOut) GetCodeOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Code, true
}

// SetCode sets field value
func (o *HttpErrorOut) SetCode(v string) {
	o.Code = v
}

// GetDetail returns the Detail field value
func (o *HttpErrorOut) GetDetail() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Detail
}

// GetDetailOk returns a tuple with the Detail field value
// and a boolean to check if the value has been set.
func (o *HttpErrorOut) GetDetailOk() (*string, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.Detail, true
}

// SetDetail sets field value
func (o *HttpErrorOut) SetDetail(v string) {
	o.Detail = v
}

func (o HttpErrorOut) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["code"] = o.Code
	}
	if true {
		toSerialize["detail"] = o.Detail
	}
	return json.Marshal(toSerialize)
}

type NullableHttpErrorOut struct {
	value *HttpErrorOut
	isSet bool
}

func (v NullableHttpErrorOut) Get() *HttpErrorOut {
	return v.value
}

func (v *NullableHttpErrorOut) Set(val *HttpErrorOut) {
	v.value = val
	v.isSet = true
}

func (v NullableHttpErrorOut) IsSet() bool {
	return v.isSet
}

func (v *NullableHttpErrorOut) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHttpErrorOut(val *HttpErrorOut) *NullableHttpErrorOut {
	return &NullableHttpErrorOut{value: val, isSet: true}
}

func (v NullableHttpErrorOut) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHttpErrorOut) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


