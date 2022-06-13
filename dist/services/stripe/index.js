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
const stripe_1 = __importDefault(require("stripe"));
class Stripe {
    // Customer methods
    /**
     * Create a customer
     * @param customerOptions - options for the customer
     */
    static createCustomer(customerOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.customers.create(customerOptions).then((result) => {
                    if (result.id) {
                        resolve(result);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * Retrive a customer
     * 	 @param customerId - the customer id to retrieve
     * @returns {Promise<any>} - the customer
     */
    static retrieveCustomer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.customers.retrieve(customerId).then((result) => {
                    if (result.id) {
                        resolve(result);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * Update a customer
     * @param customerId - the customer id to update
     * @param customerOptions - options for the customer
     */
    static updateCustomer(customerId, customerOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.customers.update(customerId, customerOptions).then((result) => {
                    if (result.id) {
                        resolve(result);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * Delete a customer
     *	@param customerId - the customer id to delete
     */
    static deleteCustomer(customerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.customers.del(customerId).then((result) => {
                    if (result.id) {
                        resolve(result);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * List all customers
     * @returns {Promise<any>} - the customers
     */
    static listCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.customers.list().then((result) => {
                    if (result.data) {
                        resolve(result.data);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * Search customers
     * @param searchOptions - options for the search
     * @returns {Promise<any>} - the customers
     */
    static searchCustomers(searchOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.customers.list(searchOptions).then((result) => {
                    if (result.data) {
                        resolve(result.data);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    // Charge methods
    /**
     * Create a charge
     * @param chargeOptions - options for the charge
     */
    static createCharge(chargeOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.charges.create(chargeOptions).then((result) => {
                    if (result.id) {
                        resolve(result);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * List charges
     */
    static listCharges() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.charges.list().then((result) => {
                    if (result.data) {
                        resolve(result.data);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * Retrieve a charge
     * @param chargeId - the charge id to retrieve
     *  @returns {Promise<any>} - the charge
     */
    static retrieveCharge(chargeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.charges.retrieve(chargeId).then((result) => {
                    if (result.id) {
                        resolve(result);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * Update a charge
     * @param chargeId - the charge id to update
     * @param chargeOptions - options for the charge
     * @returns {Promise<any>} - the charge
     */
    static updateCharge(chargeId, chargeOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.charges.update(chargeId, chargeOptions).then((result) => {
                    if (result.id) {
                        resolve(result);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * Create a payout
     * @param payoutOptions - options for the payout
     */
    static createPayout(payoutOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.payouts.create(payoutOptions).then((result) => {
                    if (result.id) {
                        resolve(result);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * List payouts
     */
    static listPayouts() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.payouts.list().then((result) => {
                    if (result.data) {
                        resolve(result.data);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * Retrieve balance
     *
     */
    static retrieveBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.balance.retrieve().then((result) => {
                    if (result.pending) {
                        resolve(result.pending);
                    }
                    else {
                        reject(result);
                    }
                });
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
    static createRefund(refundOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.refunds.create(refundOptions).then((result) => {
                    if (result.id) {
                        resolve(result);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
    /**
     * List refunds
     */
    static listRefunds() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                Stripe.stripe.refunds.list().then((result) => {
                    if (result.data) {
                        resolve(result.data);
                    }
                    else {
                        reject(result);
                    }
                });
            });
        });
    }
}
Stripe.sk_test = '';
Stripe.stripe = new stripe_1.default(Stripe.sk_test, { apiVersion: '2020-08-27' });
exports.default = Stripe;
