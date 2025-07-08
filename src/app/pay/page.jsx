"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalPayment = () => {
  const inputOptions = {
    "client-id": process.env.PAYPAL_CLIENTID,
    "currency": "USD",
    "intent": "capture"
  };

  const style = {
    color: "blue",
    shape: "rect",
    layout: "vertical",
    label: "checkout",
    tagline: false
  };

  const onCreateOrder = async () => {
    try {
    const response = await fetch("/api/pay/createorder", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data.orderId;
  } catch (error) {
    console.error(error);
    return error;
  }
  };

  const onApprove = async (data, actions) => {
    try {
      if (!data?.orderID) throw new Error("Order ID not found");
        const response = await fetch(`/api/pay/capturepayment/${data.orderID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        window.location.href = "/completepay";
        
    } catch (error) {
    console.error(error);
    return error;
  }
  };

  const onError = (err) => {
    console.error(err);
    window.location.href = "/cancelpay";
  };


  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: '#f7f8fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 4px 24px 0 rgba(44,52,86,0.09)',
        maxWidth: '390px',
        width: '100%',
        padding: '2.3rem 2rem 2rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.8rem',
        border: '1.5px solid #f0f1f6',
        fontFamily: 'Inter, Arial, sans-serif',
      }}>
        <h2 style={{
          fontSize: '1.45rem',
          fontWeight: 700,
          margin: 0,
          color: '#232951',
          letterSpacing: '0.01em',
          textAlign: 'center',
        }}>
          Financial Planning Consultation
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
        }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#333',
          }}>
            $99.99
          </span>
          <span style={{
            fontSize: '1.1rem',
            color: '#6c757d',
          }}>
            (one-time payment)
          </span>
        </div>
        <PayPalScriptProvider options={inputOptions}>
          <PayPalButtons
            style={style}
            createOrder={onCreateOrder}
            onApprove={onApprove}
            onError={onError}
          />
        </PayPalScriptProvider>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            <path d="M18 12l-4-4v3H8v2h3v3l4-4z" />
          </svg>
          <span style={{
            fontSize: '1.1rem',
            color: '#333',
          }}>
            Secure payment processing
          </span>
        </div>
      </div>
    </div>
  );

};

export default PaypalPayment;