import braintree, { Environment } from 'braintree';

class Braintree {
	private braintreeEnvironment: Environment;
	private braintreeMerchantId: any;
	private braintreePublicKey: any;
	private braintreePrivateKey: any;
	private gateway: any;

	constructor(braintreeEnvironment: any, braintreeMerchantId: any, braintreePublicKey: any, braintreePrivateKey: any) {
		this.braintreeEnvironment = braintreeEnvironment;
		this.braintreeMerchantId = braintreeMerchantId;
		this.braintreePublicKey = braintreePublicKey;
		this.braintreePrivateKey = braintreePrivateKey;

		this.gateway = new braintree.BraintreeGateway({
			environment: this.braintreeEnvironment,
			merchantId: this.braintreeMerchantId,
			publicKey: this.braintreePublicKey,
			privateKey: this.braintreePrivateKey,
		});
	}

	// Transaction methods

	/**
	 * Create a transaction
	 * @param transactionOptions - options for the transaction
	 */
	public async createPayment(transactionOptions: TransactionOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.transaction.sale(transactionOptions).then((result: { success: any; transaction: unknown; errors: any }) => {
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
	public async submitForSettlement(transactionId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.transaction.submitForSettlement(transactionId).then((result: any) => {
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
	public async createPaymentMethod(customerId: string, paymentMethodOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.paymentMethod
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
	public async updatePaymentMethod(paymentMethodToken: string, paymentMethodOptions: any): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.paymentMethod.update(paymentMethodToken, paymentMethodOptions).then((result: any) => {
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
	public async findPaymentMethod(paymentMethodToken: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.paymentMethod.find(paymentMethodToken).then((result: any) => {
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
	public async deletePaymentMethod(paymentMethodToken: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.paymentMethod.delete(paymentMethodToken).then((result: any) => {
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
	public async createCustomer(customerOptions: CustomerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.customer.create(customerOptions).then((result: { success: any; customer: unknown; errors: any }) => {
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
	public async updateCustomer(customerId: string, customerOptions: CustomerOptions): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.customer.update(customerId, customerOptions).then((result: { success: any; customer: unknown; errors: any }) => {
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
	public async findCustomer(customerId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.customer.find(customerId).then((result: any) => {
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
	public async deleteCustomer(customerId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.gateway.customer.delete(customerId).then((result: any) => {
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
