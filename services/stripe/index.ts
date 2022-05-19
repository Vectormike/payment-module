import stripe from 'stripe';

class Stripe {
	static sk_test: string = '';

	static stripe = new stripe(Stripe.sk_test, { apiVersion: '2020-08-27' });

	/**
	 * Create a customer
	 * @param customerOptions - options for the customer
	 */
	static async createCustomer(customerOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.customers.create(customerOptions).then((result: any) => {
				if (result.id) {
					resolve(result);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * Create a charge
	 * @param chargeOptions - options for the charge
	 */
	static async createCharge(chargeOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.charges.create(chargeOptions).then((result: any) => {
				if (result.id) {
					resolve(result);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * List charges
	 */
	static async listCharges(): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.charges.list().then((result: any) => {
				if (result.data) {
					resolve(result.data);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * Create a payout
	 * @param payoutOptions - options for the payout
	 */
	static async createPayout(payoutOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.payouts.create(payoutOptions).then((result: any) => {
				if (result.id) {
					resolve(result);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * List payouts
	 */
	static async listPayouts(): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.payouts.list().then((result: any) => {
				if (result.data) {
					resolve(result.data);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * Retrieve balance
	 *
	 */
	static async retrieveBalance(): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.balance.retrieve().then((result: any) => {
				if (result.pending) {
					resolve(result.pending);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * Create a refund
	 * @param refundOptions - options for the refund
	 * @param chargeId - the charge id to refund
	 * @param amount - the amount to refund
	 * @param reason - the reason for the refund
	 */
	static async createRefund(refundOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.refunds.create(refundOptions).then((result: any) => {
				if (result.id) {
					resolve(result);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * List refunds
	 */
	static async listRefunds(): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.refunds.list().then((result: any) => {
				if (result.data) {
					resolve(result.data);
				} else {
					reject(result);
				}
			});
		});
	}
}

export default Stripe;
