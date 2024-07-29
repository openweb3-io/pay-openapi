package pay

type Webhook struct {
	publicKey string
}

func NewWebhook(publicKey string) (*Webhook, error) {
	return &Webhook{
		publicKey: publicKey,
	}, nil
}

// Verify validates the payload against the walletpay signature headers
// using the webhooks public key.
//
// Returns an error if the body or headers are missing/unreadable
// or if the signature doesn't match.
func (wh *Webhook) Verify(payload []byte, signature string) error {
	return verify([]byte(payload), []byte(wh.publicKey), signature)
}
