export default function CompletePay() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f0fff0' }}>
      <h1 style={{ color: '#22bb33', fontSize: '2rem', marginBottom: '1rem' }}>Payment Successful!</h1>
      <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: 500, textAlign: 'center' }}>
        Thank you for your payment. Your transaction has been completed and a receipt has been sent to your email.
      </p>
      <p style={{ color: '#555', marginTop: '1rem' }}>
        You can now access your purchased services or return to the homepage.
      </p>
    </div>
  );
}
