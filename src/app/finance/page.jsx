"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PersonalInfoStep from "@/components/form-steps/PersonalInfoStep";
import IncomeStep from "@/components/form-steps/IncomeStep";
import ExpensesStep from "@/components/form-steps/ExpensesStep";
import AssetsStep from "@/components/form-steps/AssetsStep";
import LiabilitiesStep from "@/components/form-steps/LiabilitiesStep";
import GoalsStep from "@/components/form-steps/GoalsStep";
import InsuranceStep from "@/components/form-steps/InsuranceStep";
import RiskStep from "@/components/form-steps/RiskStep";
import ContactStep from "@/components/form-steps/ContactStep";

const FinancialForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  
  const totalSteps = 9;
  
  useEffect(() => {
    // Update progress when currentStep changes
    setProgress((currentStep / totalSteps) * 100);
  }, [currentStep, totalSteps]);

  const stepTitles = [
    "Personal Information",
    "Income Details", 
    "Monthly Expenses",
    "Assets & Investments",
    "Liabilities & Debts",
    "Financial Goals",
    "Insurance Coverage",
    "Risk Assessment",
    "Contact & Consent"
  ];

  const handleNext = (stepData) => {
    setFormData(prev => ({ ...prev, ...stepData }));
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit({ ...formData, ...stepData });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (finalData) => {
    console.log("Final form data:", finalData);
    // Here we would generate PDF and send email
    // For now, navigate to success page
    router.push("/success");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep onNext={handleNext} initialData={formData} />;
      case 2:
        return <IncomeStep onNext={handleNext} onPrevious={handlePrevious} initialData={formData} />;
      case 3:
        return <ExpensesStep onNext={handleNext} onPrevious={handlePrevious} initialData={formData} />;
      case 4:
        return <AssetsStep onNext={handleNext} onPrevious={handlePrevious} initialData={formData} />;
      case 5:
        return <LiabilitiesStep onNext={handleNext} onPrevious={handlePrevious} initialData={formData} />;
      case 6:
        return <GoalsStep onNext={handleNext} onPrevious={handlePrevious} initialData={formData} />;
      case 7:
        return <InsuranceStep onNext={handleNext} onPrevious={handlePrevious} initialData={formData} />;
      case 8:
        return <RiskStep onNext={handleNext} onPrevious={handlePrevious} initialData={formData} />;
      case 9:
        return <ContactStep onNext={handleNext} onPrevious={handlePrevious} initialData={formData} />;
      default:
        return <PersonalInfoStep onNext={handleNext} initialData={formData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl border-0 overflow-hidden">
          {/* Header */}
          <div className="text-center p-6 border-b border-gray-100">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Financial Planning Assessment
            </h1>
            
            {/* Progress Section */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              
              {/* Custom Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              <p className="text-lg font-semibold text-gray-800 mt-3">
                {stepTitles[currentStep - 1]}
              </p>
              
              {/* Step Indicators */}
              <div className="hidden md:flex justify-between mt-6 px-4">
                {stepTitles.map((title, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center ${index < currentStep - 1 ? 'text-blue-600' : index === currentStep - 1 ? 'text-purple-600 font-medium' : 'text-gray-400'}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${index < currentStep - 1 ? 'bg-blue-100' : index === currentStep - 1 ? 'bg-purple-100' : 'bg-gray-100'}`}>
                      {index < currentStep - 1 ? (
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className={index === currentStep - 1 ? 'font-bold' : ''}>
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-center mt-1">{title.split(' ')[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Form Content */}
          <div className="p-6 md:p-8">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialForm;
