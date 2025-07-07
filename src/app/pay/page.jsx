"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCreditCard, 
  faShieldAlt, 
  faLock, 
  faCheckCircle,
  faRupeeSign,
  faGooglePay,
  faPaypal,
  faApplePay,
  faCcVisa,
  faCcMastercard,
  faCcAmex
} from '@fortawesome/free-brands-svg-icons';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const paymentMethods = [
    { id: 'credit', icon: faCreditCard, label: 'Credit/Debit Card' },
    { id: 'gpay', icon: faGooglePay, label: 'Google Pay' },
    { id: 'paypal', icon: faPaypal, label: 'PayPal' },
    { id: 'apple', icon: faApplePay, label: 'Apple Pay' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setCardNumber('');
        setExpiry('');
        setCvv('');
        setName('');
        setIsSuccess(false);
      }, 3000);
    }, 2000);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <div className="text-green-500 text-6xl mb-4">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">Your transaction has been completed successfully.</p>
          <p className="text-sm text-gray-500">A receipt has been sent to your email.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Complete Your Payment</h1>
            <p className="text-gray-600">Secure payment with end-to-end encryption</p>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <h2 className="text-sm font-medium text-gray-700 mb-3">PAYMENT METHOD</h2>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelectedMethod(method.id)}
                  className={`flex items-center justify-center p-3 rounded-lg border-2 transition-colors ${
                    selectedMethod === method.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <FontAwesomeIcon 
                    icon={method.icon} 
                    className={`text-xl ${
                      selectedMethod === method.id ? 'text-blue-600' : 'text-gray-600'
                    }`} 
                  />
                  <span className="ml-2 text-sm font-medium">{method.label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
              <span>Secure payment with 256-bit SSL encryption</span>
            </div>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit}>
            {selectedMethod === 'credit' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faCreditCard} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="cardNumber"
                      value={formatCardNumber(cardNumber)}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      maxLength={19}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-1">
                      <FontAwesomeIcon icon={faCcVisa} className="text-blue-900" />
                      <FontAwesomeIcon icon={faCcMastercard} className="text-red-500" />
                      <FontAwesomeIcon icon={faCcAmex} className="text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      value={formatExpiry(expiry)}
                      onChange={(e) => setExpiry(e.target.value)}
                      placeholder="MM/YY"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      maxLength={5}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
                        placeholder="123"
                        className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        maxLength={4}
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name on card"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}

            {/* Other payment methods would go here */}
            {selectedMethod !== 'credit' && (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  You will be redirected to {paymentMethods.find(m => m.id === selectedMethod)?.label} to complete your payment securely.
                </p>
              </div>
            )}

            {/* Order Summary */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹4,999.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">₹899.82</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-3">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold">₹5,898.82</span>
                </div>
              </div>

              {/* Pay Now Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className={`mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                  isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faLock} className="mr-2" />
                    Pay ₹5,898.82
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
                <FontAwesomeIcon icon={faShieldAlt} className="mr-1 text-green-500" />
                <span>Your payment is secured with 256-bit encryption</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;  