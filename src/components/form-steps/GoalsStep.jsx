
import { useForm } from "react-hook-form";
import { useState } from "react";

const GoalsStep = ({ onNext, onPrevious, initialData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });

  const [selectedGoals, setSelectedGoals] = useState(initialData?.selectedGoals || []);

  // Format currency input
  const formatCurrency = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value) {
      value = parseInt(value, 10).toLocaleString('en-IN');
    }
    e.target.value = value;
  };

  const goals = [
    { id: "retirement", label: "Retirement Planning", icon: "🏖️" },
    { id: "house", label: "Buy a House", icon: "🏠" },
    { id: "car", label: "Buy a Car", icon: "🚗" },
    { id: "education", label: "Child's Education", icon: "🎓" },
    { id: "marriage", label: "Child's Marriage", icon: "💒" },
    { id: "travel", label: "Travel & Vacation", icon: "✈️" },
    { id: "business", label: "Start a Business", icon: "💼" },
    { id: "emergency", label: "Emergency Fund", icon: "🛡️" }
  ];

  const handleGoalChange = (goalId, checked) => {
    if (checked) {
      setSelectedGoals([...selectedGoals, goalId]);
    } else {
      setSelectedGoals(selectedGoals.filter(id => id !== goalId));
    }
  };

  const onSubmit = (data) => {
    onNext({ ...data, selectedGoals });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Your Financial Goals</h1>
      
      <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-center mb-6">
          <div className="p-2 rounded-full bg-blue-100 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-black">Select Your Financial Goals</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {goals.map((goal) => (
            <div key={goal.id} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
              <input
                id={goal.id}
                type="checkbox"
                checked={selectedGoals.includes(goal.id)}
                onChange={(e) => handleGoalChange(goal.id, e.target.checked)}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors cursor-pointer"
              />
              <div className="flex items-center space-x-2">
                <span className="text-xl">{goal.icon}</span>
                <label htmlFor={goal.id} className="text-sm font-medium text-black cursor-pointer hover:text-blue-600 transition-colors">
                  {goal.label}
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Short-term Goals */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-green-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-black">Short-term Goals (1-3 years)</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="emergencyFundTarget" className="block text-sm font-medium text-gray-700">
                Emergency Fund Target
              </label>
              <input
                id="emergencyFundTarget"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("emergencyFundTarget", { min: 0 })}
                placeholder="₹300,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="vacationBudget" className="block text-sm font-medium text-gray-700">
                Vacation Budget
              </label>
              <input
                id="vacationBudget"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("vacationBudget", { min: 0 })}
                placeholder="₹200,000"
              />
            </div>
          </div>
        </div>

        {/* Medium-term Goals */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-blue-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-black">Medium-term Goals (3-10 years)</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="houseDownPayment" className="block text-sm font-medium text-gray-700">
                House Down Payment
              </label>
              <input
                id="houseDownPayment"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("houseDownPayment", { min: 0 })}
                placeholder="₹1,000,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="carPurchase" className="block text-sm font-medium text-gray-700">
                Car Purchase
              </label>
              <input
                id="carPurchase"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("carPurchase", { min: 0 })}
                placeholder="₹800,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="childEducation" className="block text-sm font-medium text-gray-700">
                Child's Education Fund
              </label>
              <input
                id="childEducation"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("childEducation", { min: 0 })}
                placeholder="₹2,000,000"
              />
            </div>
          </div>
        </div>

        {/* Long-term Goals */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-purple-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-black">Long-term Goals (10+ years)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="retirementCorpus" className="block text-sm font-medium text-gray-700">
                Retirement Corpus Target
              </label>
              <input
                id="retirementCorpus"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("retirementCorpus", { min: 0 })}
                placeholder="₹50,000,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="retirementAge" className="block text-sm font-medium text-gray-700">
                Desired Retirement Age
              </label>
              <input
                id="retirementAge"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("retirementAge", { min: 45, max: 75 })}
                placeholder="60"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="childMarriage" className="block text-sm font-medium text-gray-700">
                Child's Marriage Fund
              </label>
              <input
                id="childMarriage"
                type="number"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onFocus={(e) => e.target.select()}
                onBlur={formatCurrency}
                {...register("childMarriage", { min: 0 })}
                placeholder="₹1,500,000"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-5 shadow-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
            <svg className="h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-blue-800">Goal Planning Tips</h3>
            <div className="mt-1 text-sm text-blue-700 space-y-1">
              <p>• Be specific about each financial goal and its timeline</p>
              <p>• Consider inflation when setting long-term targets</p>
              <p>• Prioritize goals based on importance and urgency</p>
              <p>• Review and adjust your goals annually</p>
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

export default GoalsStep;
