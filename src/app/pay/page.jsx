"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaypalPayment = () => {
  const inputOptions = {
    "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
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
        const response = await fetch(`/api/pay/capturepayment?paymentId=${data.orderID}`, {
          method: 'POST',
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
      width: '98.9vw',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        boxShadow: '0 32px 64px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        // maxWidth: '420px',
        width: '50vw',
        height: '90vh',
        padding: '3rem 2.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        animation: 'slideUp 0.6s ease-out',
      }}>
        {/* Subtle gradient overlay */}
        /* Import professional fonts */
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=SF+Pro+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #667eea, #764ba2)',
          borderRadius: '24px 24px 0 0',
        }} />
        
        <div style={{
          textAlign: 'center',
          marginBottom: '0.5rem',
        }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            margin: 0,
            color: '#1a202c',
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}>
            Financial Planning Consultation
          </h2>
          <p style={{
            fontSize: '1rem',
            color: '#718096',
            margin: 0,
            fontWeight: 500,
          }}>
            Expert guidance for your financial future
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          width: '100%',
        }}>
          <span style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: '#2d3748',
            letterSpacing: '-0.05em',
          }}>
            $10
          </span>
          <span style={{
            fontSize: '0.95rem',
            color: '#718096',
            fontWeight: 500,
          }}>
            One-time payment
          </span>
        </div>

        <div style={{
          width: '100%',
          transform: 'scale(1)',
          transition: 'transform 0.2s ease',
        }}>
          <PayPalScriptProvider options={inputOptions}>
            <PayPalButtons
              style={style}
              createOrder={onCreateOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </PayPalScriptProvider>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1.25rem 1.5rem',
          background: 'rgba(16, 185, 129, 0.08)',
          borderRadius: '14px',
          border: '1px solid rgba(16, 185, 129, 0.15)',
          width: '100%',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <circle cx="12" cy="16" r="1"></circle>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span style={{
            fontSize: '1rem',
            color: '#047857',
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}>
            256-bit SSL encryption & PCI compliant
          </span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingTop: '1.25rem',
          borderTop: '1px solid #e2e8f0',
          gap: '1.5rem',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22,4 12,14.01 9,11.01"></polyline>
            </svg>
            <span style={{
              fontSize: '0.9rem',
              color: '#047857',
              fontWeight: 600,
            }}>
              Safe Payments
            </span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M9 12l2 2 4-4"></path>
            </svg>
            <span style={{
              fontSize: '0.9rem',
              color: '#047857',
              fontWeight: 600,
            }}>
              Bank-grade security
            </span>
          </div>
        </div>

        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          div:hover {
            transition: all 0.3s ease;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PaypalPayment;