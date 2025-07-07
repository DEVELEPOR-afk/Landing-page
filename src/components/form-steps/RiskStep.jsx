
import { useForm } from "react-hook-form";
import { useState } from "react";

const RiskStep = ({ onNext, onPrevious, initialData = {} }) => {
  const { handleSubmit } = useForm({
    defaultValues: initialData || {}
  });

  const [riskProfile, setRiskProfile] = useState(initialData?.riskProfile || "");
  const [investmentHorizon, setInvestmentHorizon] = useState(initialData?.investmentHorizon || "");
  const [volatilityComfort, setVolatilityComfort] = useState(initialData?.volatilityComfort || "");

  const onSubmit = () => {
    onNext({
      riskProfile,
      investmentHorizon,
      volatilityComfort
    });
  };

  const getRiskDescription = (risk) => {
    switch (risk) {
      case "conservative":
        return "Prefer stable returns with minimal risk of loss";
      case "moderate":
        return "Balanced approach with moderate risk for better returns";
      case "aggressive":
        return "Willing to take high risks for potentially high returns";
      default:
        return "";
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Risk Assessment</h2>
      
      <div className="space-y-6">
        {/* Risk Profile */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-blue-600">What is your risk appetite?</h3>
          </div>
          <div className="space-y-4">
            {[
              { id: 'conservative', label: 'Conservative', value: 'conservative' },
              { id: 'moderate', label: 'Moderate', value: 'moderate' },
              { id: 'aggressive', label: 'Aggressive', value: 'aggressive' }
            ].map((option) => (
              <div key={option.id} className="flex items-center p-4 border rounded-lg hover:bg-blue-50 cursor-pointer">
                <input
                  type="radio"
                  id={option.id}
                  name="riskProfile"
                  value={option.value}
                  checked={riskProfile === option.value}
                  onChange={() => setRiskProfile(option.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <div className="ml-3">
                  <label htmlFor={option.id} className="block text-sm font-medium text-black cursor-pointer">
                    {option.label}
                  </label>
                  <p className="text-sm text-black">{getRiskDescription(option.value)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Horizon */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-green-600">What is your investment horizon?</h3>
          </div>
          <div className="space-y-4">
            {[
              { 
                id: 'short', 
                label: 'Short-term (1-3 years)', 
                description: 'Focus on liquidity and capital preservation',
                value: 'short' 
              },
              { 
                id: 'medium', 
                label: 'Medium-term (3-7 years)', 
                description: 'Balanced growth with moderate volatility',
                value: 'medium' 
              },
              { 
                id: 'long', 
                label: 'Long-term (7+ years)', 
                description: 'Maximum growth potential with higher volatility',
                value: 'long' 
              }
            ].map((option) => (
              <div key={option.id} className="flex items-center p-4 border rounded-lg hover:bg-green-50 cursor-pointer">
                <input
                  type="radio"
                  id={option.id}
                  name="investmentHorizon"
                  value={option.value}
                  checked={investmentHorizon === option.value}
                  onChange={() => setInvestmentHorizon(option.value)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <div className="ml-3">
                  <label htmlFor={option.id} className="block text-sm font-medium text-black cursor-pointer">
                    {option.label}
                  </label>
                  <p className="text-sm text-black">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Volatility */}
        <div className="border rounded-lg p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-purple-600">How comfortable are you with market volatility?</h3>
          </div>
          <div className="space-y-4">
            {[
              { 
                id: 'low', 
                label: 'Low Tolerance', 
                description: 'I prefer steady, predictable returns',
                value: 'low' 
              },
              { 
                id: 'mediumVol', 
                label: 'Medium Tolerance', 
                description: 'I can handle some ups and downs',
                value: 'medium' 
              },
              { 
                id: 'high', 
                label: 'High Tolerance', 
                description: 'I\'m comfortable with significant fluctuations',
                value: 'high' 
              }
            ].map((option) => (
              <div key={option.id} className="flex items-center p-4 border rounded-lg hover:bg-purple-50 cursor-pointer">
                <input
                  type="radio"
                  id={option.id}
                  name="volatilityComfort"
                  value={option.value}
                  checked={volatilityComfort === option.value}
                  onChange={() => setVolatilityComfort(option.value)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                />
                <div className="ml-3">
                  <label htmlFor={option.id} className="block text-sm font-medium text-black cursor-pointer">
                    {option.label}
                  </label>
                  <p className="text-sm text-black">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Risk Assessment:</strong> Your risk profile will determine the asset allocation 
              and investment recommendations in your financial plan.
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
          className={`px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${!riskProfile || !investmentHorizon || !volatilityComfort ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!riskProfile || !investmentHorizon || !volatilityComfort}
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default RiskStep;
