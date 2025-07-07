
import { useForm } from "react-hook-form";

const AssetsStep = ({ onNext, onPrevious, initialData = {} }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Assets</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Liquid Assets */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-green-600">Liquid Assets</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="savingsAccount" className="block text-sm font-medium text-gray-700">Savings Account Balance</label>
              <input
                id="savingsAccount"
                type="number"
                {...register("savingsAccount", { min: 0 })}
                placeholder="₹50,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="currentAccount" className="block text-sm font-medium text-gray-700">Current Account Balance</label>
              <input
                id="currentAccount"
                type="number"
                {...register("currentAccount", { min: 0 })}
                placeholder="₹25,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="cash" className="block text-sm font-medium text-gray-700">Cash in Hand</label>
              <input
                id="cash"
                type="number"
                {...register("cash", { min: 0 })}
                placeholder="₹10,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Fixed Deposits */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-600">Fixed Income</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="fixedDeposits" className="block text-sm font-medium text-gray-700">Fixed Deposits</label>
              <input
                id="fixedDeposits"
                type="number"
                {...register("fixedDeposits", { min: 0 })}
                placeholder="₹200,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="recurringDeposits" className="block text-sm font-medium text-gray-700">Recurring Deposits</label>
              <input
                id="recurringDeposits"
                type="number"
                {...register("recurringDeposits", { min: 0 })}
                placeholder="₹50,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="bonds" className="block text-sm font-medium text-gray-700">Bonds & Debt Funds</label>
              <input
                id="bonds"
                type="number"
                {...register("bonds", { min: 0 })}
                placeholder="₹100,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Investments */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-purple-600">Market Investments</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="mutualFunds" className="block text-sm font-medium text-gray-700">Mutual Funds</label>
              <input
                id="mutualFunds"
                type="number"
                {...register("mutualFunds", { min: 0 })}
                placeholder="₹300,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="stocks" className="block text-sm font-medium text-gray-700">Direct Stocks</label>
              <input
                id="stocks"
                type="number"
                {...register("stocks", { min: 0 })}
                placeholder="₹150,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="ppf" className="block text-sm font-medium text-gray-700">PPF Balance</label>
              <input
                id="ppf"
                type="number"
                {...register("ppf", { min: 0 })}
                placeholder="₹80,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="epf" className="block text-sm font-medium text-gray-700">EPF Balance</label>
              <input
                id="epf"
                type="number"
                {...register("epf", { min: 0 })}
                placeholder="₹500,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Physical Assets */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-orange-600">Physical Assets</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="realEstate" className="block text-sm font-medium text-gray-700">Real Estate Value</label>
              <input
                id="realEstate"
                type="number"
                {...register("realEstate", { min: 0 })}
                placeholder="₹5,000,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="gold" className="block text-sm font-medium text-gray-700">Gold/Jewelry</label>
              <input
                id="gold"
                type="number"
                {...register("gold", { min: 0 })}
                placeholder="₹200,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700">Vehicle Value</label>
              <input
                id="vehicle"
                type="number"
                {...register("vehicle", { min: 0 })}
                placeholder="₹800,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="otherAssets" className="block text-sm font-medium text-gray-700">Other Assets</label>
              <input
                id="otherAssets"
                type="number"
                {...register("otherAssets", { min: 0 })}
                placeholder="₹50,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              <strong>Asset Allocation:</strong> We'll analyze your current asset distribution 
              and suggest optimal allocation based on your age and risk profile.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button 
          type="button" 
          onClick={onPrevious}
          className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Previous
        </button>
        <button 
          type="submit" 
          className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default AssetsStep;
