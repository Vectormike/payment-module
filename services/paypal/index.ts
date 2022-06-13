import fetch from 'node-fetch';
class PayPal {
	static paypalMode: string = '';
	static paypalClientId: string = '';
	static paypalSecret: string = '';
	static base: string = '';

	// Order Methods

	/**
	 * Create an order
	 * @param orderDetails
	 * @returns {Promise<any>}
	 */
	static async createOrder(orderDetails: any): Promise<any> {
		const access_token = await this.generateAccessToken();
		const response = await fetch(`${this.base}/v2/checkout/orders`, {
			method: 'post',
			headers: {
				Authorization: `Bearer ${access_token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				intent: orderDetails.intent,
				purchase_units: [
					{
						amount: {
							currency_code: orderDetails.purchase_units[0].amount.currency_code,
							value: orderDetails.purchase_units[0].amount.value,
						},
					},
				],
			}),
		});
		const data: any = await response.json();
		return data;
	}

	/**
	 * Update an order
	 * @param orderId
	 * @param orderDetails
	 * @returns {Promise<any>}
	 */
	static async updateOrder(orderId: string, orderDetails: any): Promise<any> {
		const access_token = await this.generateAccessToken();
		const response = await fetch(`${this.base}/v2/checkout/orders/${orderId}`, {
			method: 'patch',
			headers: {
				Authorization: `Bearer ${access_token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				intent: orderDetails.intent,
				purchase_units: [
					{
						amount: {
							currency_code: orderDetails.purchase_units[0].amount.currency_code,
							value: orderDetails.purchase_units[0].amount.value,
						},
					},
				],
			}),
		});
		const data: any = await response.json();
		return data;
	}

	/**
	 * Show order details
	 * @param orderId
	 * @returns {Promise<any>}
	 */
	static async showOrder(orderId: string): Promise<any> {
		const access_token = await this.generateAccessToken();
		const response = await fetch(`${this.base}/v2/checkout/orders/${orderId}`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${access_token}`,
				'Content-Type': 'application/json',
			},
		});
		const data: any = await response.json();
		return data;
	}

	static async capturePayment(orderId: string) {
		const access_token = await this.generateAccessToken();
		const response = await fetch(`${this.base}/v2/checkout/orders/${orderId}/capture`, {
			method: 'post',
			headers: {
				Authorization: `Bearer ${access_token}`,
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		return data;
	}

	// Payout Methods

	/**
	 * Create a batch payout
	 * @param batchPayoutDetails
	 * @returns {Promise<any>}
	 */
	static async createBatchPayout(batchPayoutDetails: any): Promise<any> {
		const access_token = await this.generateAccessToken();
		const response = await fetch(`${this.base}/v2/payments/payouts`, {
			method: 'post',
			headers: {
				Authorization: `Bearer ${access_token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				sender_batch_header: {
					sender_batch_id: batchPayoutDetails.sender_batch_id,
					email_subject: batchPayoutDetails.email_subject,
					email_message: batchPayoutDetails.email_message,
				},
				items: [
					{
						recipient_type: batchPayoutDetails.items[0].recipient_type,
						amount: {
							value: batchPayoutDetails.items[0].amount.value,
							currency: batchPayoutDetails.items[0].amount.currency,
						},
						note: batchPayoutDetails.items[0].note,
						sender_item_id: batchPayoutDetails.items[0].sender_item_id,
						receiver: batchPayoutDetails.items[0].receiver,
						alternate_notification_method: {
							phone: {
								country_code: batchPayoutDetails.items[0].alternate_notification_method.phone.country_code,
								national_number: batchPayoutDetails.items[0].alternate_notification_method.phone.national_number,
							},
						},
						notification_language: batchPayoutDetails.items[0].notification_language,
					},
				],
			}),
		});
		const data: any = await response.json();
		return data;
	}

	private static async generateAccessToken() {
		const auth = Buffer.from(this.paypalClientId + ':' + this.paypalSecret).toString('base64');
		const response = await fetch(`${this.base}/v1/oauth2/token`, {
			method: 'post',
			body: 'grant_type=client_credentials',
			headers: {
				Authorization: `Basic ${auth}`,
			},
		});
		const data: any = await response.json();
		return data.access_token;
	}
}
