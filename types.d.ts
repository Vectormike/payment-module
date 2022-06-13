declare interface TransactionOptions {
	amount: string;
	payment_method_nonce: string;
	creditCard?: {
		number: string;
		expirationDate: string;
	};
	deviceData?: string;
	options?: {
		submitForSettlement: boolean;
	};
	billing?: {
		streetAddress: string;
		extendedAddress: string;
		locality: string;
		region: string;
		postalCode: string;
		phoneNumber: string;
		countryName: string;
	};
	shipping?: {
		streetAddress: string;
		extendedAddress: string;
		locality: string;
		region: string;
		phoneNumber: string;
		postalCode: string;
		countryName: string;
		shippingMethod: string;
	};
}

declare interface CustomerOptions {
	firstName: string;
	lastName: string;
}

declare interface PaymentMethodOptions {
	options?: {
		makeDefault: boolean;
	};
	billingAddress: {
		streetAddress: string;
		options?: {
			updateExisting: boolean;
		};
	};
}

declare interface StripeCustomerOptions {
	address?: {
		city: string;
		country: string;
		line1: string;
		line2: string;
		postal_code: string;
		state: string;
	};
	description: string;
	email: string;
	name: string;
	phone: string;
	payment_method: string;
}

declare interface StripePaymentMethodOptions {
	billingAddress?: {
		city: string;
		country: string;
		line1: string;
		line2: string;
		postal_code: string;
		state: string;
	};
	billingDetails?: {
		name: string;
		phone: string;
	};
	card?: {
		exp_month: number;
		exp_year: number;
		number: string;
		cvc?: string;
		address_city?: string;
		address_country?: string;
		address_line1?: string;
		address_line2?: string;
		address_state?: string;
		address_zip?: string;
		address_zip_check?: string;
	};
	metadata?: {
		[key: string]: string;
	};
	type: string;
}

declare interface StripePaymentMethod {
	id: string;
	object: string;
	customer: string;
	card?: {
		id: string;
		object: string;
		brand: string;
		country: string;
		exp_month: number;
		exp_year: number;
		last4: string;
		fingerprint: string;
		funding: string;
		customer: string;
		currency: string;
		default_for_currency: boolean;
		dynamic_last4: string;
		metadata: {
			[key: string]: string;
		};
		name: string;
		tokenization_method: string;
		type: string;
	};
	secure_element?: {
		id: string;
		object: string;
		type: string;
		card?: {
			id: string;
			object: string;
			brand: string;
			country: string;
			exp_month: number;
			exp_year: number;
			last4: string;
			fingerprint: string;
			funding: string;
			customer: string;
		};
	};
}

declare interface StripeSearchOptions {
	query: string;
	limit: number;
	page: number;
}

declare interface StripeChargeOptions {}

declare interface StripePayoutOptions {}

declare interface StripeRefundOptions {}

declare interface PayPalOrderOptions {
	intent: string;
	purchase_units: Array<{
		reference_id: string;
		amount: {
			currency_code: string;
			value: string;
		};
		payee: {
			email_address: string;
		};
		payment_instruction: {
			platform_fees: Array<{
				amount: {
					currency_code: string;
					value: string;
				};
				payee: {
					email_address: string;
				};
			}>;
		};
	}>;
	disbursement_mode: string;
	payee_pricing_tier_id: string;
}
