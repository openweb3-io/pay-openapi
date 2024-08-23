package pay

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/openweb3-io/pay-openapi/go/internal/openapi"
	"github.com/openweb3-io/pay-openapi/go/internal/version"
)

type (
	PayOptions struct {
		Debug bool

		// Overrides the base URL (protocol + hostname) used for all requests sent by this walletpay client. (Useful for testing)
		ServerUrl  *url.URL
		HTTPClient *http.Client
	}
	Pay struct {
		Endpoint *Endpoint
		Invoice  *Invoice
	}
)

var defaultHTTPClient = &http.Client{
	Timeout: 60 * time.Second,
}

func New(apikey string, privateKey string, options *PayOptions) *Pay {
	conf := openapi.NewConfiguration()
	conf.Scheme = "https"
	conf.Host = "api.pay.openweb3.io"
	conf.HTTPClient = defaultHTTPClient
	conf.Middleware = func(req *http.Request) {
		requestTime := fmt.Sprintf("%d", time.Now().UnixMilli())
		req.Header.Set("X-Request-Time", requestTime)

		var dataToBeSignature string
		if strings.ToUpper(req.Method) == "POST" || strings.ToUpper(req.Method) == "PUT" {
			body, err := io.ReadAll(req.Body)
			if err != nil {
				log.Printf("Error reading body: %v", err)
			}
			saveBody := body
			savecl := req.ContentLength
			defer func() {
				// 在中间件处理结束后，需要主动重新把body设置回去
				req.Body = io.NopCloser(bytes.NewBuffer(saveBody))
				req.ContentLength = savecl
			}()

			dataToBeSignature = string(body)
		}
		dataToBeSignature = dataToBeSignature + req.URL.RequestURI() + requestTime

		signature, err := genSign([]byte(dataToBeSignature), []byte(privateKey))
		if err != nil {
			log.Printf("Error generating signature: %v", err)
		}

		req.Header.Set("X-Signature", signature)
	}

	if options != nil {
		conf.Debug = options.Debug
		if options.ServerUrl != nil {
			conf.Scheme = options.ServerUrl.Scheme
			conf.Host = options.ServerUrl.Host
		}
		if options.HTTPClient != nil {
			conf.HTTPClient = options.HTTPClient
		}
	}
	conf.AddDefaultHeader("x-api-key", apikey)
	conf.UserAgent = fmt.Sprintf("pay-libs/%s/go", version.Version)
	apiClient := openapi.NewAPIClient(conf)
	return &Pay{
		Endpoint: &Endpoint{
			api: apiClient,
		},
		Invoice: &Invoice{
			api: apiClient,
		},
	}
}
