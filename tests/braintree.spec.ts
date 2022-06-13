import PaymentService from '../index';
import { assert } from 'chai';
import { faker } from '@faker-js/faker';

const paymentService = new PaymentService({
	merchantId: process.env.MERCHANT_ID as string,
	privateKey: process.env.PRIVATE_KEY as string,
	publicKey: process.env.PUBLIC_KEY as string,
	environment: process.env.ENVIRONMENT as any,
});

const braintree = paymentService.braintree;

describe('Braintree tests', () => {
	it('should create a client', async () => {
		const client = await braintree.createPayment({
			amount: '10.00',
			payment_method_nonce: 'fake-valid-nonce',
			creditCard: {
				number: '4111111111111111',
				expirationDate: '12/20',
			},
		});

		assert.containsAllDeepKeys(client.transaction, {
			amount: '10.00',
			status: 'authorized',
			type: 'sale',
			paymentInstrumentType: 'credit_card',
		});
	});

	it('should create a payment method', async () => {
		const customerId = faker.random.numeric(10);
		const paymentMethod = await braintree.createPaymentMethod(customerId, {
			paymentMethodNonce: 'fake-valid-nonce',
			options: {
				makeDefault: true,
			},
		});

		assert.containsAllDeepKeys(paymentMethod, {
			customerId,
			default: true,
			type: 'credit_card',
			token: 'fake-valid-nonce',
		});
	});

	it('should create a customer', async () => {
		const customer = await braintree.createCustomer({
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
		});

		assert.containsAllDeepKeys(customer, {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
		});
	});
});
