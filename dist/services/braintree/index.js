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
const braintree_1 = __importDefault(require("braintree"));
class Braintree {
    // Transaction methods
    /**
     * Create a transaction
     * @param transactionOptions - options for the transaction
     */
    static createPayment(transactionOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.transaction.sale(transactionOptions).then((result) => {
                    if (result.success) {
                        resolve(result.transaction);
                    }
                    else {
                        reject(result.errors);
                    }
                });
            });
        });
    }
    /**
     * Submit for settlement
     * @param transactionId - id of the transaction
     * @returns {Promise<Transaction>}
     */
    static submitForSettlement(transactionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.transaction.submitForSettlement(transactionId).then((result) => {
                    if (result.success) {
                        resolve(result.transaction);
                    }
                    else {
                        reject(result.errors);
                    }
                });
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
    static createPaymentMethod(customerId, paymentMethodOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.paymentMethod
                    .create(Object.assign({ customerId }, paymentMethodOptions))
                    .then((result) => {
                    if (result.success) {
                        resolve(result.paymentMethod);
                    }
                    else {
                        reject(result.errors);
                    }
                });
            });
        });
    }
    /**
     * Update a payment method
     * @param paymentMethodToken - token of the payment method
     * @param paymentMethodOptions - options for the payment method
     * @returns {Promise<PaymentMethod>}
     */
    static updatePaymentMethod(paymentMethodToken, paymentMethodOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.paymentMethod.update(paymentMethodToken, paymentMethodOptions).then((result) => {
                    if (result.success) {
                        resolve(result.paymentMethod);
                    }
                    else {
                        reject(result.errors);
                    }
                });
            });
        });
    }
    /**
     * Find a payment method
     * @param paymentMethodToken - token of the payment method
     * @returns {Promise<PaymentMethod>}
     */
    static findPaymentMethod(paymentMethodToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.paymentMethod.find(paymentMethodToken).then((result) => {
                    if (result.success) {
                        resolve(result.paymentMethod);
                    }
                    else {
                        reject(result.errors);
                    }
                });
            });
        });
    }
    /**
     * Delete a payment method
     * @param paymentMethodToken - token of the payment method
     * @returns {Promise<PaymentMethod>}
     */
    static deletePaymentMethod(paymentMethodToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.paymentMethod.delete(paymentMethodToken).then((result) => {
                    if (result.success) {
                        resolve(result.paymentMethod);
                    }
                    else {
                        reject(result.errors);
                    }
                });
            });
        });
    }
    // Customer methods
    /**
     * Create a customer
     * @param customerOptions - options for the customer
     * @returns {Promise<Customer>}
     */
    static createCustomer(customerOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.customer.create(customerOptions).then((result) => {
                    if (result.success) {
                        resolve(result.customer);
                    }
                    else {
                        reject(result.errors);
                    }
                });
            });
        });
    }
    /**
     * Update a customer
     * @param customerId - id of the customer
     * @param customerOptions - options for the customer
     * @returns {Promise<Customer>}
     */
    static updateCustomer(customerId, customerOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.customer.update(customerId, customerOptions).then((result) => {
                    if (result.success) {
                        resolve(result.customer);
                    }
                    else {
                        reject(result.errors);
                    }
                });
            });
        });
    }
    /**
     * Find a customer
     * @param customerId - id of the customer
     * @returns {Promise<Customer>}
     */
    static findCustomer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.customer.find(customerId).then((result) => {
                    if (result.success) {
                        resolve(result.customer);
                    }
                    else {
                        reject(result.errors);
                    }
                });
            });
        });
    }
    /**
     * Delete a customer
     * @param customerId - id of the customer
     * @returns {Promise<Customer>}
     */
    static deleteCustomer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Braintree.gateway.customer.delete(customerId).then((result) => {
                    if (result.success) {
                        resolve(result.customer);
                    }
                    else {
                        reject(result.errors);
                    }
                });
            });
        });
    }
}
Braintree.merchantId = '';
Braintree.publicKey = '';
Braintree.privateKey = '';
Braintree.gateway = braintree_1.default.connect({
    environment: Braintree.environment,
    merchantId: Braintree.merchantId,
    publicKey: Braintree.publicKey,
    privateKey: Braintree.privateKey,
});
exports.default = Braintree;
