
import { useForm } from "react-hook-form";

const ExpensesStep = ({ onNext, onPrevious, initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  // Format currency input
  const formatCurrency = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value) {
      value = parseInt(value, 10).toLocaleString('en-IN');
    }
    e.target.value = value;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Monthly Expenses</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Fixed Expenses */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-blue-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Fixed Monthly Expenses</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="rent" className="block text-sm font-medium text-gray-700">
                Rent/EMI <span className="text-red-500">*</span>
              </label>
              <input
                id="rent"
                type="number"
                className={`w-full px-4 py-2.5 text-sm border ${errors.rent ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("rent", { 
                  required: "Rent/EMI is required",
                  min: { value: 0, message: "Amount cannot be negative" }
                })}
                placeholder="₹25,000"
              />
              {errors.rent && (
                <p className="text-red-500 text-sm mt-1">{errors.rent.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="utilities" className="block text-sm font-medium text-gray-700">
                Utilities (Electricity, Water, Gas)
              </label>
              <input
                id="utilities"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("utilities", { min: 0 })}
                placeholder="₹3,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="insurance" className="block text-sm font-medium text-gray-700">
                Insurance Premiums
              </label>
              <input
                id="insurance"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("insurance", { min: 0 })}
                placeholder="₹5,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="loans" className="block text-sm font-medium text-gray-700">
                Other Loan EMIs
              </label>
              <input
                id="loans"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("loans", { min: 0 })}
                placeholder="₹8,000"
              />
            </div>
          </div>
        </div>

        {/* Variable Expenses */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-purple-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.616 1.065 2.293 1.094V18a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 15.766 14 14.991 14 14c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 11.092V9.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.617-1.065-2.294-1.094V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Variable Monthly Expenses</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="groceries" className="block text-sm font-medium text-gray-700">
                Groceries & Food
              </label>
              <input
                id="groceries"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("groceries", { min: 0 })}
                placeholder="₹8,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="transportation" className="block text-sm font-medium text-gray-700">
                Transportation
              </label>
              <input
                id="transportation"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("transportation", { min: 0 })}
                placeholder="₹4,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="entertainment" className="block text-sm font-medium text-gray-700">
                Entertainment & Dining
              </label>
              <input
                id="entertainment"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("entertainment", { min: 0 })}
                placeholder="₹6,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="shopping" className="block text-sm font-medium text-gray-700">
                Shopping & Personal Care
              </label>
              <input
                id="shopping"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("shopping", { min: 0 })}
                placeholder="₹5,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="healthcare" className="block text-sm font-medium text-gray-700">
                Healthcare
              </label>
              <input
                id="healthcare"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("healthcare", { min: 0 })}
                placeholder="₹2,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="miscellaneous" className="block text-sm font-medium text-gray-700">
                Miscellaneous
              </label>
              <input
                id="miscellaneous"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("miscellaneous", { min: 0 })}
                placeholder="₹3,000"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 shadow-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
            <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-blue-800">Budgeting Tips</h3>
            <div className="mt-1 text-sm text-blue-700 space-y-1">
              <p>• Track expenses for a month for accurate numbers</p>
              <p>• Review and categorize every expense</p>
              <p>• Look for subscription services you don't use</p>
              <p>• Set realistic spending limits for variable expenses</p>
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

export default ExpensesStep;
