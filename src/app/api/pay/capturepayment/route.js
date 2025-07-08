import { NextResponse } from 'next/server';
import axios from 'axios';
import getAccessToken from '../getaccesstoken/route';

const capturePayment = async (req, res) => {
    try {
        const accessToken = await getAccessToken();
        const {paymentId} = req.params;
        const response = await axios.post(
            `${process.env.PAYPAL_BASEURL}/v1/checkout/orders/${paymentId}/capture`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
      const paymentData = response.data;

      if (paymentData.status !== "COMPLETED") {
        return NextResponse.json({ success: false, message: "Payment failed" }, { status: 400 });
      }

      const email = paymentData.payer.email_address;
      const days = 30;
      const currentDate = new Date();
      const tierExpiryDate = new Date(currentDate.setDate(currentDate.getDate() + days));
      

      return NextResponse.json({ success: true, message: "Payment successful", user: { email, tierExpiryDate } });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ success: false, message: "Payment failed" }, { status: 500 });
    }
}