"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const faker_1 = require("@faker-js/faker");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log('1');
const options = {
    braintreePrivateKey: process.env.BRAINTREE_PRIVATE_KEY,
    braintreeMerchantId: process.env.BRAINTREE_MERCHANT_ID,
    braintreeEnvironment: process.env.BRAINTREE_ENVIRONMENT,
    braintreePublicKey: process.env.BRAINTREE_PUBLIC_KEY,
};
const paymentService = new index_1.default(options);
// paymentService.braintree
describe('Braintree tests', () => {
    it('should create a client', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const client = yield paymentService.braintree.createPayment({
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
    }));
    it('should create a payment method', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const customerId = faker_1.faker.random.numeric(10);
        const paymentMethod = yield paymentService.braintree.createPaymentMethod(customerId, {
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
    }));
});
