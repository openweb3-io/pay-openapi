package pay

import (
	"context"

	"github.com/openweb3-io/pay-openapi/go/internal/openapi"
)

type (
	ListResponsePaymentOut = openapi.PagePayment
	PaymentIn              = openapi.CreatePaymentRequest
	PaymentOut             = openapi.Payment
)

type Payment struct {
	api *openapi.APIClient
}

type PaymentListOptions struct {
	Offset *int32
	Limit  *int32
	UserId *string
}

func (e *Payment) List(ctx context.Context, appId string, options *PaymentListOptions) (*ListResponsePaymentOut, error) {
	req := e.api.PaymentApi.V1PaymentsList(ctx, appId)
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
	ret := ListResponsePaymentOut(out)
	return &ret, nil
}

func (e *Payment) Create(ctx context.Context, appId string, PaymentIn *PaymentIn) (*PaymentOut, error) {
	return e.CreateWithOptions(ctx, appId, PaymentIn, nil)
}

func (e *Payment) CreateWithOptions(ctx context.Context, appId string, PaymentIn *PaymentIn, options *PostOptions) (*PaymentOut, error) {
	req := e.api.PaymentApi.V1PaymentsCreate(ctx, appId)
	req = req.CreatePaymentRequest(*PaymentIn)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := PaymentOut(out)
	return &ret, nil
}

func (e *Payment) Get(ctx context.Context, appId string, PaymentId string) (*PaymentOut, error) {
	req := e.api.PaymentApi.V1PaymentsRetrieve(ctx, appId, PaymentId)

	out, res, err := req.Execute()
	if err != nil {
		return nil, wrapError(err, res)
	}
	ret := PaymentOut(out)

	return &ret, nil
}
