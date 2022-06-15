import Braintree from './services/braintree';
import Stripe from './services/stripe';

const proxyHandler = {
	get(target: any, name: any) {
		if (!target.hasOwnProperty(name)) {
			throw new Error(`${name} is not a vali methos no Baxipay`);
		}
		/**
		 * if node is inspecting then stick to target properties
		 */
		if (typeof name === 'symbol' || name === 'inspect') {
			return target[name];
		}

		return target[name];
	},
};
class PaymentService {
	public braintree;
	// public stripe;

	/**
	 * @param options - secret key, merchantId, environment and public key
	 */
	constructor(options: { braintreePrivateKey?: any; braintreePublicKey: any; braintreeMerchantId?: any; braintreeEnvironment?: any; stripeSecretKey?: any }) {
		this.braintree = new Braintree(options.braintreeEnvironment, options.braintreeMerchantId, options.braintreePublicKey, options.braintreePrivateKey);
		// this.stripe = new Stripe(options.stripeSecretKey);
		return new Proxy(this, proxyHandler);
	}
}

export default PaymentService;
