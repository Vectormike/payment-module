### Usage

```js
const PaymentServices = require('47-billion-payments');

const paymentServices = new PaymentServices({
	secretKey: process.env.SECRET_KEY,
	publicKey: process.env.PUBLIC_KEY,
	sandbox: true, // For sandbox mode defaults to false
});

try {
	const res = await paymentServices.braintree.createPayment({ amount: '500', creditCard: { expirationDate: '', number: '' } });
	if (res.status === 200) {
		// Successful
	}
} catch (err) {
	if (!err.response) {
		// No response from the server
		// Bad network
	} else {
		//  Response was returned from the server
		// ...
	}
}
```
