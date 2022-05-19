import braintree, { Environment } from 'braintree';

class Braintree {
	static environment: Environment;
	static merchantId: string = '';
	static publicKey: string = '';
	static privateKey: string = '';

	static gateway = braintree.connect({
		environment: Braintree.environment,
		merchantId: Braintree.merchantId,
		publicKey: Braintree.publicKey,
		privateKey: Braintree.privateKey,
	});

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
}

export default Braintree;
