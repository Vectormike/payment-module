declare interface TransactionOptions {
	amount: string;
	payment_method_nonce: string;
	creditCard?: {
		number: string;
		expirationDate: string;
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
