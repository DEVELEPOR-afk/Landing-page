export default function CancelPay() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff0f0' }}>
      <h1 style={{ color: '#bb2222', fontSize: '2rem', marginBottom: '1rem' }}>Payment Cancelled</h1>
      <p style={{ fontSize: '1.1rem', color: '#333', maxWidth: 500, textAlign: 'center' }}>
        Your payment was not completed. If this was a mistake, you can try again at any time.
      </p>
      <p style={{ color: '#555', marginTop: '1rem' }}>
        If you have any questions or need help, please contact our support team.
      </p>
    </div>
  );
}
