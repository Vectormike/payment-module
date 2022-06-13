import braintree, { Environment } from 'braintree';

class Braintree {
	static braintreeEnvironment: Environment;
	static braintreeMerchantId: string = '';
	static braintreePublicKey: string = '';
	static braintreePrivateKey: string = '';

	static gateway = braintree.connect({
		environment: Braintree.braintreeEnvironment,
		merchantId: Braintree.braintreeMerchantId,
		publicKey: Braintree.braintreePublicKey,
		privateKey: Braintree.braintreePrivateKey,
	});

	// Transaction methods

	/**
	 * Create a transaction
	 * @param transactionOptions - options for the transaction
	 */
	static async createPayment(transactionOptions: TransactionOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.transaction.sale(transactionOptions).then((result) => {
				if (result.success) {
					resolve(result.transaction);
				} else {
					reject(result.errors);
				}
			});
		});
	}

	/**
	 * Submit for settlement
	 * @param transactionId - id of the transaction
	 * @returns {Promise<Transaction>}
	 */
	static async submitForSettlement(transactionId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.transaction.submitForSettlement(transactionId).then((result: any) => {
				if (result.success) {
					resolve(result.transaction);
				} else {
					reject(result.errors);
				}
			});
		});
	}

	// Payment methods

	/**
	 * Create a payment method
	 * @param customerId - id of the customer
	 * @param paymentMethodOptions - options for the payment method
	 * @returns {Promise<PaymentMethod>}
	 */
	static async createPaymentMethod(customerId: string, paymentMethodOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.paymentMethod
				.create({
					customerId,
					...paymentMethodOptions,
				})
				.then((result: any) => {
					if (result.success) {
						resolve(result.paymentMethod);
					} else {
						reject(result.errors);
					}
				});
		});
	}

	/**
	 * Update a payment method
	 * @param paymentMethodToken - token of the payment method
	 * @param paymentMethodOptions - options for the payment method
	 * @returns {Promise<PaymentMethod>}
	 */
	static async updatePaymentMethod(paymentMethodToken: string, paymentMethodOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.paymentMethod.update(paymentMethodToken, paymentMethodOptions).then((result: any) => {
				if (result.success) {
					resolve(result.paymentMethod);
				} else {
					reject(result.errors);
				}
			});
		});
	}

	/**
	 * Find a payment method
	 * @param paymentMethodToken - token of the payment method
	 * @returns {Promise<PaymentMethod>}
	 */
	static async findPaymentMethod(paymentMethodToken: string): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.paymentMethod.find(paymentMethodToken).then((result: any) => {
				if (result.success) {
					resolve(result.paymentMethod);
				} else {
					reject(result.errors);
				}
			});
		});
	}

	/**
	 * Delete a payment method
	 * @param paymentMethodToken - token of the payment method
	 * @returns {Promise<PaymentMethod>}
	 */
	static async deletePaymentMethod(paymentMethodToken: string): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.paymentMethod.delete(paymentMethodToken).then((result: any) => {
				if (result.success) {
					resolve(result.paymentMethod);
				} else {
					reject(result.errors);
				}
			});
		});
	}

	// Customer methods

	/**
	 * Create a customer
	 * @param customerOptions - options for the customer
	 * @returns {Promise<Customer>}
	 */
	static async createCustomer(customerOptions: CustomerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.customer.create(customerOptions).then((result: { success: any; customer: unknown; errors: any }) => {
				if (result.success) {
					resolve(result.customer);
				} else {
					reject(result.errors);
				}
			});
		});
	}

	/**
	 * Update a customer
	 * @param customerId - id of the customer
	 * @param customerOptions - options for the customer
	 * @returns {Promise<Customer>}
	 */
	static async updateCustomer(customerId: string, customerOptions: CustomerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.customer.update(customerId, customerOptions).then((result: { success: any; customer: unknown; errors: any }) => {
				if (result.success) {
					resolve(result.customer);
				} else {
					reject(result.errors);
				}
			});
		});
	}

	/**
	 * Find a customer
	 * @param customerId - id of the customer
	 * @returns {Promise<Customer>}
	 */
	static async findCustomer(customerId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.customer.find(customerId).then((result: any) => {
				if (result.success) {
					resolve(result.customer);
				} else {
					reject(result.errors);
				}
			});
		});
	}

	/**
	 * Delete a customer
	 * @param customerId - id of the customer
	 * @returns {Promise<Customer>}
	 */
	static async deleteCustomer(customerId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			Braintree.gateway.customer.delete(customerId).then((result: any) => {
				if (result.success) {
					resolve(result.customer);
				} else {
					reject(result.errors);
				}
			});
		});
	}
}

export default Braintree;
