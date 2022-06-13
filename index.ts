import Braintree from './services/braintree/index';
import Stripe from './services/stripe/index';

class PaymentService {
	public braintree = Braintree;
	public stripe = Stripe;

	/**
	 * @param options - secret key, merchantId, environment and public key
	 */
	constructor(options: { braintreePrivateKey: string; braintreePublicKey: string; braintreeMerchantId: string; braintreeEnvironment: any; stripeSecretKey: string }) {
		this.braintree.braintreeEnvironment = options.braintreeEnvironment;
		this.braintree.braintreeMerchantId = options.braintreeMerchantId;
		this.braintree.braintreePublicKey = options.braintreePublicKey;
		this.braintree.braintreePrivateKey = options.braintreePrivateKey;
		this.stripe.stripeSecretKey = options.stripeSecretKey;
	}
}

export default PaymentService;
