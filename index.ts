import Braintree from './services/braintree/index';
import Stripe from './services/stripe/index';

class PaymentService {
	public braintree = Braintree;
	public stripe = Stripe;

	/**
	 * @param options - secret key, merchantId, environment and public key
	 */
	constructor(options: { privateKey: string; publicKey: string; merchantId: string; environment: any }) {
		this.braintree.environment = options.environment;
		this.braintree.merchantId = options.merchantId;
		this.braintree.publicKey = options.publicKey;
		this.braintree.privateKey = options.privateKey;
		this.stripe.sk_test = options.privateKey;
	}
}

export default PaymentService;
