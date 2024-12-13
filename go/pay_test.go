package pay

import (
	"context"
	"fmt"
	"github.com/openweb3-io/pay-openapi/go/internal/openapi"
	"testing"
)

var (
	userId     = "testuser"
	appId      = "app_2jgyzxZEGTbJYky5vM8Xg4qs1yu"
	apikey     = "ak_faa1196ffd88494caee47f7808564b3e1a95"
	privateKey = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEAymSKC0pb5+14Ge3IXeNDhvz1cOqFDwdGbx2F/huT/GnTTxQv\ncoCc5UL9pg8MhwsuXwgc+jIw7dosZzwNSmq00da6Hu0lHzdE+sJNVEzY9xP7PsVL\n1a6Xe+4zChTaKLvEe76Zw76B+IsU7K1a+5VLNp4sV1QncM+wBl1HiyxVV9KAJC1t\nRBSc+9qWEK1gOX7CY3uAEnNpoTmDG8x0PZNfgxSmigSgPgwz7S4ckYgMGldPzCGc\nGEbp0iXHX07+9pV3LBiaK2Yr2t0NbYKpAdwfusHCvm4rvIuWV+m/Fm49FkDpnfnG\n1+CfHC0687eVxyFhJ9eyyzoX2uEsViu0q/4EhwIDAQABAoIBABaq4/sXvOtg4U6m\nHwbE6U85DZQz7+sa+XyAZf1rwUtH3u7AZ//+/5N9yULL9K87RVpHYldzP5+kC80U\nILjw8od98SJ9lObGHeen01lZsgMaLc1981xfTYAH0ZeTdkuRnBPv6PDPaWcYzKMl\nV0dOFTpsxLKTLkeoOyK7V8PylyxaqBfREyIt/hbALmmfSRqXDJtcvUUVojqCBQAi\nLYtOjLcQc91iGFXW9gX8RtIYhhe1WaIfqWGnzWnkLML1AFyzExkwdBU50ksR/sUz\nvfShXyxFSR/V/reB6wYp8lk3j0xXxWM9kHGix5W7jU+tR46KuAxXSGUC++EnxBlU\nTqs8H0ECgYEA6F+BEIVCGMARSd+IbSXNNXALVGV49zdfZwswE1IuPrHxRIQH6VAx\nuujnA3e3sDqC6i5H4mdINUb/2f8/EEy9APhrTYbEx0N4xWRsO+bR99qBSXSgtDyd\n2AGmkyQVbiSyd/NIvclzITVrFhlXryl30fiBkA8vFpxGvB90UX+mPo8CgYEA3vir\nbB4RbQyNjAZBdDKFEzbp8L0zHJw0ztdNFCMyESK157++2hZ5qGq8rS1eO8dvWGGt\nPTPz/tfSr+G+nzkkOPKuXv/xWUKPU10fzX5k2ATtRwaW+BM6hmQKO+FCm78510Oh\na9tk8Gu9toci9j9GRxddOZqVFpWrai03LZ4V1okCgYEAyMf0qgSqlt4mUhFePQkj\npd+5OmQvQFTNDykgkiE5KhzwnkYC2/rZ7WleaqWfxxrXkWcJ37tkLfy6B2+/2uKj\nkNoVRTiEgLRw/wYFa0DG/gUEHycx0Gpr7H+IoazVA4Wb238PxETzQKd6bu7Yz9Xh\n3UB/Gq2z/zJrABOhmuXUDEsCgYEAhiLO7ZIBJbtBhBVXVxH1YKPOhNctYm7OjgiU\nBCNQQWLCUBLYO9b9hUYBD6WVZR0LbP4F/CW/CXbI9qo1xQ/ZLLFCGUCb7vjNxHbn\nZPY+sH32SJ48QC1BLgwM5A0VxyB5KXk0KPCpfsEyNhaB/+X831O876SBQD72Cj/9\nS+IofRECgYEAkVOijdiZYFHWg9+hW0qkzprjwHYKgMMMmeyTwnFzCdPCNHiGLl/x\noKFGEG8HnKt5sRSEA7Xk4OZK1UjPq1lJThSGSi1U4vXmdYw/01ryRqN8TKmVeYRn\nOhy7ew99E2m+1K38fXlWFnynZTsfslycej1/jZony6wvMs1WMfyvNs8=\n-----END RSA PRIVATE KEY-----"
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
