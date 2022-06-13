"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./services/braintree/index"));
const index_2 = __importDefault(require("./services/stripe/index"));
class PaymentService {
    /**
     * @param options - secret key, merchantId, environment and public key
     */
    constructor(options) {
        this.braintree = index_1.default;
        this.stripe = index_2.default;
        this.braintree.environment = options.environment;
        this.braintree.merchantId = options.merchantId;
        this.braintree.publicKey = options.publicKey;
        this.braintree.privateKey = options.privateKey;
        this.stripe.sk_test = options.privateKey;
    }
}
exports.default = PaymentService;
