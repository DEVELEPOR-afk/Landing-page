import { useForm } from "react-hook-form";
import { useState } from "react";

const LiabilitiesStep = ({ onNext, onPrevious, initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });

  // Format currency input
  const formatCurrency = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value) {
      value = parseInt(value, 10).toLocaleString('en-IN');
    }
    e.target.value = value;
  };

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Liabilities</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Home Loans */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-red-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Home Loans</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="homeLoanOutstanding" className="block text-sm font-medium text-gray-700">Outstanding Amount</label>
              <input
                id="homeLoanOutstanding"
                type="text"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("homeLoanOutstanding", { min: 0 })}
                placeholder="₹2,000,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="homeLoanEmi" className="block text-sm font-medium text-gray-700">Monthly EMI</label>
              <input
                id="homeLoanEmi"
                type="text"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("homeLoanEmi", { min: 0 })}
                placeholder="₹25,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="homeLoanTenure" className="block text-sm font-medium text-gray-700">Remaining Tenure (Years)</label>
              <input
                id="homeLoanTenure"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                {...register("homeLoanTenure", { min: 0 })}
                placeholder="15"
              />
            </div>
          </div>
        </div>

        {/* Other Loans */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-orange-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Other Loans</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="carLoan" className="block text-sm font-medium text-gray-700">Car Loan Outstanding</label>
              <input
                id="carLoan"
                type="text"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("carLoan", { min: 0 })}
                placeholder="₹300,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="personalLoan" className="block text-sm font-medium text-gray-700">Personal Loan Outstanding</label>
              <input
                id="personalLoan"
                type="text"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("personalLoan", { min: 0 })}
                placeholder="₹150,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="educationLoan" className="block text-sm font-medium text-gray-700">Education Loan Outstanding</label>
              <input
                id="educationLoan"
                type="text"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("educationLoan", { min: 0 })}
                placeholder="₹500,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="otherLoans" className="block text-sm font-medium text-gray-700">Other Loans</label>
              <input
                id="otherLoans"
                type="text"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("otherLoans", { min: 0 })}
                placeholder="₹100,000"
              />
            </div>
          </div>
        </div>

        {/* Credit Cards */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-purple-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Credit Card Debt</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="creditCardDebt" className="block text-sm font-medium text-gray-700">Outstanding Balance</label>
              <input
                id="creditCardDebt"
                type="text"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("creditCardDebt", { min: 0 })}
                placeholder="₹50,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="creditCardLimit" className="block text-sm font-medium text-gray-700">Total Credit Limit</label>
              <input
                id="creditCardLimit"
                type="text"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("creditCardLimit", { min: 0 })}
                placeholder="₹200,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="creditCards" className="block text-sm font-medium text-gray-700">Number of Credit Cards</label>
              <input
                id="creditCards"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                {...register("creditCards", { min: 0 })}
                placeholder="2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-100 rounded-xl p-5 shadow-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-red-100 rounded-lg">
            <svg className="h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-red-800">Debt Management Tips</h3>
            <div className="mt-1 text-sm text-red-700 space-y-1">
              <p>• Focus on high-interest debts first (like credit cards)</p>
              <p>• Consider debt consolidation if you have multiple loans</p>
              <p>• Aim to keep your total EMI below 40% of your monthly income</p>
              <p>• Build an emergency fund to avoid new debts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-gray-100">
        <button 
          type="button" 
          onClick={onPrevious}
          className="px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Previous
        </button>
        <button 
          type="submit" 
          className="px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          Next Step
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default LiabilitiesStep;
