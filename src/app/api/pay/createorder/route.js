import { NextResponse } from 'next/server';
import axios from 'axios';
import { getAccessToken } from '../getaccesstoken/route';

export async function POST(request) {
    try {
        const accessToken = await getAccessToken();
        // First get the access token
        // Build the order payload
        const orderPayload = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    items: [{
                        name: 'Item Name',
                        description: 'Item Description',
                        quantity: '1',
                        unit_amount: {
                            currency_code: 'USD',
                            value: '99.99'
                        }
                    }],
                    amount: {
                        currency_code: 'USD',
                        value: '99.99',
                        breakdown: {
                            item_total: {
                                currency_code: 'USD',
                                value: '99.99'
                            }
                        }
                    }
                }
            ],
            payment_source: {
                paypal: {
                    experience_context: {
                        payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
                        payment_method_selected: 'PAYPAL',
                        brand_name: 'EXAMPLE INC',
                        locale: 'en-US',
                        landing_page: 'NO_PREFERENCE',
                        shipping_preference: 'NO_SHIPPING',
                        user_action: 'PAY_NOW',
                        return_url: 'http://localhost:3000/completepay',
                        cancel_url: 'http://localhost:3000/cancelpay'
                    }
                }
            }
        };

        // Correct Axios usage
        const response = await axios.post(
            `${process.env.PAYPAL_BASEURL}/v2/checkout/orders`,
            orderPayload,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                }
            }
        );

        const orderId = response.data.id;
        return NextResponse.json({ orderId });

    } catch (err) {
        console.error(err);
        return new Response("Error getting access token", { status: 500 });
    }
}

