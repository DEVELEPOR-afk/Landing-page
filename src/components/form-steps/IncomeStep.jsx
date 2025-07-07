
import { useForm } from "react-hook-form";
import { useState } from "react";

const IncomeStep = ({ onNext, onPrevious, initialData }) => {
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
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Income Details</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="primaryIncome" className="block text-sm font-medium text-gray-700">
            Primary Monthly Income <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              id="primaryIncome"
              type="text"
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              onFocus={(e) => e.target.select()}
              onBlur={formatCurrency}
              {...register("primaryIncome", { 
                required: "Primary income is required",
                min: { value: 0, message: "Income cannot be negative" }
              })}
              placeholder="₹50,000"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">/month</span>
            </div>
          </div>
          {errors.primaryIncome && (
            <p className="mt-1 text-sm text-red-600">{errors.primaryIncome.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="secondaryIncome" className="block text-sm font-medium text-gray-700">
            Secondary Income (if any)
          </label>
          <div className="relative">
            <input
              id="secondaryIncome"
              type="text"
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              onFocus={(e) => e.target.select()}
              onBlur={formatCurrency}
              {...register("secondaryIncome", { min: 0 })}
              placeholder="₹10,000"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">/month</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="bonusIncome" className="block text-sm font-medium text-gray-700">
            Annual Bonus/Variable Pay
          </label>
          <div className="relative">
            <input
              id="bonusIncome"
              type="text"
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              onFocus={(e) => e.target.select()}
              onBlur={formatCurrency}
              {...register("bonusIncome", { min: 0 })}
              placeholder="₹100,000"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">/year</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="rentalIncome" className="block text-sm font-medium text-gray-700">
            Rental Income
          </label>
          <div className="relative">
            <input
              id="rentalIncome"
              type="text"
              className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              onFocus={(e) => e.target.select()}
              onBlur={formatCurrency}
              {...register("rentalIncome", { min: 0 })}
              placeholder="₹15,000"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">/month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="otherIncome" className="block text-sm font-medium text-gray-700">
          Other Income Sources
        </label>
        <textarea
          id="otherIncome"
          className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          {...register("otherIncome")}
          placeholder="Describe any other sources of income (dividends, freelancing, business, etc.)"
          rows={3}
        />
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-5 shadow-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
            <svg className="h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-green-800">Income Planning Tips</h3>
            <div className="mt-1 text-sm text-green-700 space-y-1">
              <p>• Include all sources of income for accurate planning</p>
              <p>• Consider after-tax income for more precise calculations</p>
              <p>• Account for seasonal or irregular income patterns</p>
              <p>• We'll help optimize tax efficiency across income streams</p>
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

export default IncomeStep;
