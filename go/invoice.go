package pay

import (
	"context"

	"github.com/openweb3-io/pay-openapi/go/internal/openapi"
)

type (
	ListResponseInvoiceOut = openapi.PageInvoice
	InvoiceIn              = openapi.CreateInvoiceRequest
	InvoiceOut             = openapi.Invoice
)

type Invoice struct {
	api *openapi.APIClient
}

type InvoiceListOptions struct {
	Offset *int32
	Limit  *int32
	UserId *string
}

func (e *Invoice) List(ctx context.Context, appId string, options *InvoiceListOptions) (*ListResponseInvoiceOut, error) {
	req := e.api.InvoiceApi.V1InvoicesList(ctx, appId)
	if options != nil {
		if options.Limit != nil {
			req = req.Limit(*options.Limit)
		}
		if options.Offset != nil {
			req = req.Offset(*options.Offset)
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
	req := e.api.InvoiceApi.V1InvoicesCreate(ctx, appId)
	req = req.CreateInvoiceRequest(*invoiceIn)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := InvoiceOut(out)
	return &ret, nil
}

func (e *Invoice) Get(ctx context.Context, appId string, invoiceId string) (*InvoiceOut, error) {
	req := e.api.InvoiceApi.V1InvoicesRetrieve(ctx, appId, invoiceId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := InvoiceOut(out)

	return &ret, nil
}
