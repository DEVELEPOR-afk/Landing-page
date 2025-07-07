import { useForm } from "react-hook-form";
import { useState } from "react";

const InsuranceStep = ({ onNext, onPrevious, initialData }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
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
      <h2 className="text-2xl font-bold text-black mb-6">Your Insurance Coverage</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Life Insurance */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-blue-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-black">Life Insurance</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="lifeInsuranceStatus" className="block text-sm font-medium text-black">Do you have Life Insurance?</label>
              <select
                id="lifeInsuranceStatus"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onChange={(e) => setValue("lifeInsuranceStatus", e.target.value)}
              >
                <option value="">Select status</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="planning">Planning to buy</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="lifeInsuranceCover" className="block text-sm font-medium text-black">Coverage Amount</label>
              <div className="relative">
                <input
                  id="lifeInsuranceCover"
                  type="text"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={(e) => e.target.select()}
                  onBlur={formatCurrency}
                  {...register("lifeInsuranceCover", { min: 0 })}
                  placeholder="₹5,000,000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="lifeInsurancePremium" className="block text-sm font-medium text-black">Annual Premium</label>
              <div className="relative">
                <input
                  id="lifeInsurancePremium"
                  type="text"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={(e) => e.target.select()}
                  onBlur={formatCurrency}
                  {...register("lifeInsurancePremium", { min: 0 })}
                  placeholder="₹50,000"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-black sm:text-sm">/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health Insurance */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-green-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-black">Health Insurance</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="healthInsuranceStatus" className="block text-sm font-medium text-black">Health Insurance Type</label>
              <select
                id="healthInsuranceStatus"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onChange={(e) => setValue("healthInsuranceStatus", e.target.value)}
              >
                <option value="">Select type</option>
                <option value="individual">Individual Policy</option>
                <option value="family">Family Floater</option>
                <option value="employer">Employer Provided</option>
                <option value="no">No Coverage</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="healthInsuranceCover" className="block text-sm font-medium text-black">Coverage Amount</label>
              <div className="relative">
                <input
                  id="healthInsuranceCover"
                  type="text"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={(e) => e.target.select()}
                  onBlur={formatCurrency}
                  {...register("healthInsuranceCover", { min: 0 })}
                  placeholder="₹1,000,000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="healthInsurancePremium" className="block text-sm font-medium text-black">Annual Premium</label>
              <div className="relative">
                <input
                  id="healthInsurancePremium"
                  type="text"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={(e) => e.target.select()}
                  onBlur={formatCurrency}
                  {...register("healthInsurancePremium", { min: 0 })}
                  placeholder="₹25,000"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-black sm:text-sm">/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Insurance */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-orange-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-black">Vehicle Insurance</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="vehicleInsurance" className="block text-sm font-medium text-black">Vehicle Insurance Type</label>
              <select
                id="vehicleInsurance"
                className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                onChange={(e) => setValue("vehicleInsurance", e.target.value)}
              >
                <option value="">Select type</option>
                <option value="comprehensive">Comprehensive</option>
                <option value="thirdParty">Third Party Only</option>
                <option value="none">No Vehicle</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="vehicleInsurancePremium" className="block text-sm font-medium text-black">Annual Premium</label>
              <div className="relative">
                <input
                  id="vehicleInsurancePremium"
                  type="text"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={(e) => e.target.select()}
                  onBlur={formatCurrency}
                  {...register("vehicleInsurancePremium", { min: 0 })}
                  placeholder="₹15,000"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-black sm:text-sm">/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Insurance */}
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-full bg-purple-100 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-black">Other Insurance</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="criticalIllness" className="block text-sm font-medium text-black">Critical Illness Insurance</label>
              <div className="relative">
                <input
                  id="criticalIllness"
                  type="text"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={(e) => e.target.select()}
                  onBlur={formatCurrency}
                  {...register("criticalIllness", { min: 0 })}
                  placeholder="₹2,000,000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="disabilityInsurance" className="block text-sm font-medium text-black">Disability Insurance</label>
              <div className="relative">
                <input
                  id="disabilityInsurance"
                  type="text"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={(e) => e.target.select()}
                  onBlur={formatCurrency}
                  {...register("disabilityInsurance", { min: 0 })}
                  placeholder="₹1,000,000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="homeInsurance" className="block text-sm font-medium text-black">Home Insurance</label>
              <div className="relative">
                <input
                  id="homeInsurance"
                  type="text"
                  className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  onFocus={(e) => e.target.select()}
                  onBlur={formatCurrency}
                  {...register("homeInsurance", { min: 0 })}
                  placeholder="₹500,000"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-black sm:text-sm">/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-5 shadow-sm">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
            <svg className="h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-green-800">Insurance Planning Tips</h3>
            <div className="mt-1 text-sm text-green-700 space-y-1">
              <p>• Aim for life insurance coverage of 10-15x your annual income</p>
              <p>• Health insurance should cover at least ₹5-10 lakhs per family member</p>
              <p>• Consider critical illness coverage for major diseases</p>
              <p>• Review and update your policies annually</p>
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

export default InsuranceStep;
