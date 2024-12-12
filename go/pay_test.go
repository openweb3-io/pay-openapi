package pay

import (
	"context"
	"fmt"
	"github.com/openweb3-io/pay-openapi/go/internal/openapi"
	"testing"
)

var (
	userId     = ""
	appId      = ""
	apikey     = ""
	privateKey = ""
)

func TestInvoice_List(t *testing.T) {
	context := context.Background()
	client := New(apikey, privateKey, nil)
	response, err := client.Invoice.List(context, appId, &InvoiceListOptions{
		UserId: &userId,
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(fmt.Sprintf("%+v", response))
}

func TestInvoice_Create(t *testing.T) {
	context := context.Background()
	client := New(apikey, privateKey, nil)
	response, err := client.Invoice.Create(context, appId, &openapi.CreateInvoiceRequest{
		Amount:   "1",
		Channel:  "ton_connect",
		Currency: "USDT",
		UserId:   &userId,
	})
	if err != nil {
		t.Error(err)
	}
	t.Log(fmt.Sprintf("%+v", response))
}
