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
	"fmt"
)

// Invoiceing Defines the ordering in a listing of results.
type Invoiceing string

// List of Invoiceing
const (
	INVOICEING_ASC Invoiceing = "asc"
	INVOICEING_DESC Invoiceing = "desc"
)

var allowedInvoiceingEnumValues = []Invoiceing{
	"asc",
	"desc",
}

func (v *Invoiceing) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := Invoiceing(value)
	for _, existing := range allowedInvoiceingEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid Invoiceing", value)
}

// NewInvoiceingFromValue returns a pointer to a valid Invoiceing
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewInvoiceingFromValue(v string) (*Invoiceing, error) {
	ev := Invoiceing(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for Invoiceing: valid values are %v", v, allowedInvoiceingEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v Invoiceing) IsValid() bool {
	for _, existing := range allowedInvoiceingEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to Invoiceing value
func (v Invoiceing) Ptr() *Invoiceing {
	return &v
}

type NullableInvoiceing struct {
	value *Invoiceing
	isSet bool
}

func (v NullableInvoiceing) Get() *Invoiceing {
	return v.value
}

func (v *NullableInvoiceing) Set(val *Invoiceing) {
	v.value = val
	v.isSet = true
}

func (v NullableInvoiceing) IsSet() bool {
	return v.isSet
}

func (v *NullableInvoiceing) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInvoiceing(val *Invoiceing) *NullableInvoiceing {
	return &NullableInvoiceing{value: val, isSet: true}
}

func (v NullableInvoiceing) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInvoiceing) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

