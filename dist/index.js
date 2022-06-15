"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const braintree_1 = __importDefault(require("./services/braintree"));
const proxyHandler = {
    get(target, name) {
        if (!target.hasOwnProperty(name)) {
            throw new Error(`${name} is not a vali methos no Baxipay`);
        }
        /**
         * if node is inspecting then stick to target properties
         */
        if (typeof name === 'symbol' || name === 'inspect') {
            return target[name];
        }
        return target[name];
    },
};
class PaymentService {
    // public stripe;
    /**
     * @param options - secret key, merchantId, environment and public key
     */
    constructor(options) {
        this.braintree = new braintree_1.default(options.braintreeEnvironment, options.braintreeMerchantId, options.braintreePublicKey, options.braintreePrivateKey);
        // this.stripe = new Stripe(options.stripeSecretKey);
        return new Proxy(this, proxyHandler);
    }
}
exports.default = PaymentService;
