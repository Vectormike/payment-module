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
const chai_1 = require("chai");
const faker_1 = require("@faker-js/faker");
const paymentService = new index_1.default({
    merchantId: process.env.MERCHANT_ID,
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY,
    environment: process.env.ENVIRONMENT,
});
const braintree = paymentService.braintree;
describe('Braintree tests', () => {
    it('should create a client', () => __awaiter(void 0, void 0, void 0, function* () {
        const client = yield braintree.createPayment({
            amount: '10.00',
            payment_method_nonce: 'fake-valid-nonce',
            creditCard: {
                number: '4111111111111111',
                expirationDate: '12/20',
            },
        });
        chai_1.assert.containsAllDeepKeys(client.transaction, {
            amount: '10.00',
            status: 'authorized',
            type: 'sale',
            paymentInstrumentType: 'credit_card',
        });
    }));
    it('should create a payment method', () => __awaiter(void 0, void 0, void 0, function* () {
        const customerId = faker_1.faker.random.numeric(10);
        const paymentMethod = yield braintree.createPaymentMethod(customerId, {
            paymentMethodNonce: 'fake-valid-nonce',
            options: {
                makeDefault: true,
            },
        });
        chai_1.assert.containsAllDeepKeys(paymentMethod, {
            customerId,
            default: true,
            type: 'credit_card',
            token: 'fake-valid-nonce',
        });
    }));
    it('should create a customer', () => __awaiter(void 0, void 0, void 0, function* () {
        const customer = yield braintree.createCustomer({
            firstName: faker_1.faker.name.firstName(),
            lastName: faker_1.faker.name.lastName(),
        });
        chai_1.assert.containsAllDeepKeys(customer, {
            firstName: faker_1.faker.name.firstName(),
            lastName: faker_1.faker.name.lastName(),
        });
    }));
});
