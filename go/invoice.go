package pay

import (
	"context"

	"github.com/openweb3-io/wallet-pay-openapi/go/internal/openapi"
)

type (
	ListResponseInvoiceOut = openapi.ListResponseInvoiceOut
	InvoiceIn              = openapi.InvoiceIn
	InvoiceOut             = openapi.InvoiceOut
)

type Invoice struct {
	api *openapi.APIClient
}

type InvoiceListOptions struct {
	Offset  *int32
	Limit   *int32
	UserId  *string
	Channel *string
}

func (e *Invoice) List(ctx context.Context, appId string, options *InvoiceListOptions) (*ListResponseInvoiceOut, error) {
	req := e.api.InvoiceApi.V1InvoiceList(ctx, appId)
	if options != nil {
		if options.Limit != nil {
			req = req.Limit(*options.Limit)
		}
		if options.Offset != nil {
			req = req.Offset(*options.Offset)
		}
		if options.UserId != nil {
			req = req.UserId(*options.UserId)
		}
		if options.Channel != nil {
			req = req.Channel(*options.Channel)
		}
	}
	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := ListResponseInvoiceOut(out)
	return &ret, nil
}

func (e *Invoice) Create(ctx context.Context, appId string, invoiceIn *InvoiceIn) (*InvoiceOut, error) {
	return e.CreateWithOptions(ctx, appId, invoiceIn, nil)
}

func (e *Invoice) CreateWithOptions(ctx context.Context, appId string, invoiceIn *InvoiceIn, options *PostOptions) (*InvoiceOut, error) {
	req := e.api.InvoiceApi.V1InvoiceCreate(ctx, appId)
	req = req.InvoiceIn(openapi.InvoiceIn(*invoiceIn))

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := InvoiceOut(out)
	return &ret, nil
}

func (e *Invoice) Get(ctx context.Context, appId string, invoiceId string) (*InvoiceOut, error) {
	req := e.api.InvoiceApi.V1InvoiceGet(ctx, appId, invoiceId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := InvoiceOut(out)

	return &ret, nil
}
