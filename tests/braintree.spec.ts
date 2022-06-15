import PaymentService from '../index';
import { assert } from 'chai';
import { faker } from '@faker-js/faker';
import dotenv from 'dotenv';

dotenv.config();

console.log('1');

const options = {
	braintreePrivateKey: process.env.BRAINTREE_PRIVATE_KEY,
	braintreeMerchantId: process.env.BRAINTREE_MERCHANT_ID,
	braintreeEnvironment: process.env.BRAINTREE_ENVIRONMENT,
	braintreePublicKey: process.env.BRAINTREE_PUBLIC_KEY,
};

const paymentService = new PaymentService(options);
// paymentService.braintree

describe('Braintree tests', () => {
	it('should create a client', async (done) => {
		const client = await paymentService.braintree.createPayment({
			amount: '10.00',
			payment_method_nonce: 'fake-valid-nonce',
			creditCard: {
				number: '4111111111111111',
				expirationDate: '12/20',
			},
		});

		console.log(client);

		// assert.containsAllDeepKeys(client.transaction, {
		// 	amount: '10.00',
		// 	status: 'authorized',
		// 	type: 'sale',
		// 	paymentInstrumentType: 'credit_card',
		// });
		// done();
	});

	it('should create a payment method', async (done) => {
		const customerId = faker.random.numeric(10);
		const paymentMethod = await paymentService.braintree.createPaymentMethod(customerId, {
			paymentMethodNonce: 'fake-valid-nonce',
			options: {
				makeDefault: true,
			},
		});

		console.log(paymentMethod);

		// 	assert.containsAllDeepKeys(paymentMethod, {
		// 		customerId,
		// 		default: true,
		// 		type: 'credit_card',
		// 		token: 'fake-valid-nonce',
		// 	});
		// });

		// it('should create a customer', async () => {
		// 	const customer = await paymentService.braintree.createCustomer({
		// 		firstName: faker.name.firstName(),
		// 		lastName: faker.name.lastName(),
		// 	});

		// 	assert.containsAllDeepKeys(customer, {
		// 		firstName: faker.name.firstName(),
		// 		lastName: faker.name.lastName(),
		// 	});
	});
});
