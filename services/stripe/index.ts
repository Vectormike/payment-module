import stripe from 'stripe';

class Stripe {
	static stripeSecretKey: string = '';

	static stripe = new stripe(Stripe.stripeSecretKey, { apiVersion: '2020-08-27' });

	// Customer methods

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
	 * Retrive a customer
	 * 	 @param customerId - the customer id to retrieve
	 * @returns {Promise<any>} - the customer
	 */
	static async retrieveCustomer(customerId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.customers.retrieve(customerId).then((result: any) => {
				if (result.id) {
					resolve(result);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * Update a customer
	 * @param customerId - the customer id to update
	 * @param customerOptions - options for the customer
	 */
	static async updateCustomer(customerId: string, customerOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.customers.update(customerId, customerOptions).then((result: any) => {
				if (result.id) {
					resolve(result);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * Delete a customer
	 *	@param customerId - the customer id to delete
	 */
	static async deleteCustomer(customerId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.customers.del(customerId).then((result: any) => {
				if (result.id) {
					resolve(result);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * List all customers
	 * @returns {Promise<any>} - the customers
	 */
	static async listCustomers(): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.customers.list().then((result: any) => {
				if (result.data) {
					resolve(result.data);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * Search customers
	 * @param searchOptions - options for the search
	 * @returns {Promise<any>} - the customers
	 */
	static async searchCustomers(searchOptions: StripeSearchOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.customers.list(searchOptions).then((result: any) => {
				if (result.data) {
					resolve(result.data);
				} else {
					reject(result);
				}
			});
		});
	}

	// Charge methods

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
	 * Retrieve a charge
	 * @param chargeId - the charge id to retrieve
	 *  @returns {Promise<any>} - the charge
	 */
	static async retrieveCharge(chargeId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.charges.retrieve(chargeId).then((result: any) => {
				if (result.id) {
					resolve(result);
				} else {
					reject(result);
				}
			});
		});
	}

	/**
	 * Update a charge
	 * @param chargeId - the charge id to update
	 * @param chargeOptions - options for the charge
	 * @returns {Promise<any>} - the charge
	 */
	static async updateCharge(chargeId: string, chargeOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Stripe.stripe.charges.update(chargeId, chargeOptions).then((result: any) => {
				if (result.id) {
					resolve(result);
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
