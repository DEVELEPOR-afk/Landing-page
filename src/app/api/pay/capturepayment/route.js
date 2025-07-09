import { NextResponse } from 'next/server';
import axios from 'axios';
import { getAccessToken } from '../getaccesstoken/route';

export async function POST(request) {
    try {
        const { searchParams } = new URL(request.url);
        const paymentId = searchParams.get('paymentId');
        
        if (!paymentId) {
            return NextResponse.json(
                { success: false, message: 'Payment ID is required' },
                { status: 400 }
            );
        }
        
        const accessToken = await getAccessToken();
        const response = await axios.post(
            `${process.env.PAYPAL_BASEURL}/v1/checkout/orders/${paymentId}/capture`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            }
        );
        
        const paymentData = response.data;
      console.log("[CapturePayment] Payment data received:", paymentData);

      if (paymentData.status !== "COMPLETED") {
        console.log(`[CapturePayment] Payment NOT completed. Status: ${paymentData.status}`);
        return NextResponse.json({ success: false, message: "Payment failed" }, { status: 400 });
      }

      const email = paymentData.payer.email_address;
      const days = 30;
      const currentDate = new Date();
      const tierExpiryDate = new Date(currentDate.setDate(currentDate.getDate() + days));
      

      console.log(`[CapturePayment] Payment completed successfully for ${email}. Tier expires at ${tierExpiryDate}`);
      return NextResponse.json({ success: true, message: "Payment successful", user: { email, tierExpiryDate } });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: "Payment failed" }, { status: 500 });
    }
}