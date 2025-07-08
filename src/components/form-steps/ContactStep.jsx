"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { handleSendFinancialReport } from "@/utils/mockApi";
import useToast from "@/hooks/use-toast";

const ContactStep = ({ onNext, onPrevious, initialData = {}, formData = {} }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });

  const [consentGiven, setConsentGiven] = useState(initialData?.consentGiven || false);
  const [marketingConsent, setMarketingConsent] = useState(initialData?.marketingConsent || false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data) => {
    if (!consentGiven) {
      toast({
        title: "Consent Required",
        description: "Please provide consent to process your data and generate the financial report.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Build nested data object for backend schema
      const finalData = {
        personalInfo: formData.personalInfo,
        contact: {
          ...(formData.contact || {}),
          ...data,
          consentGiven,
          marketingConsent
        },
        income: formData.income,
        expenses: formData.expenses,
        assets: formData.assets,
        liabilities: formData.liabilities,
        insurance: formData.insurance,
        goals: formData.goals,
        risk: formData.risk,
      };

      // Save all form data to the database
      try {
        const dbRes = await fetch('/api/finance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalData),
        });
        const dbJson = await dbRes.json();
        if (!dbJson.success) {
          throw new Error(dbJson.error || 'Failed to save data');
        }
      } catch (dbErr) {
        toast({
          title: "Database Error",
          description: `Could not save your data: ${dbErr instanceof Error ? dbErr.message : 'Unknown error'}`,
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Send the financial report email
      const emailResult = await handleSendFinancialReport(finalData, data.email);
      
      if (emailResult.success) {
        console.log('Financial report email sent successfully:', emailResult.data);
        console.log('SUCCESS: Data saved to DB and email sent:', {
          dbId: dbJson?.id,
          emailResult
        });
        toast({
          title: "Success!",
          description: "Your financial report has been generated and sent to your email.",
        });
        
        // Proceed to success page
        onNext(finalData);
      } else {
        throw new Error(emailResult.error || 'Failed to send financial report');
      }
    } catch (error) {
      console.error('Error sending financial report:', error);
      toast({
        title: "Error",
        description: `Failed to send your financial report: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Contact Information</h1>
      
      <div className="border rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
            <p className="text-sm text-gray-600 mt-1">
              Your comprehensive financial report will be sent to this email address
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number (Optional)
            </label>
            <input
              id="phone"
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              {...register("phone")}
              placeholder="+91 9876543210"
            />
            <p className="text-sm text-gray-600 mt-1">
              For any clarifications regarding your financial plan
            </p>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-green-600 mb-4">Consent & Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
            <input
              id="consent"
              type="checkbox"
              checked={consentGiven}
              onChange={(e) => setConsentGiven(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
            />
            <div className="space-y-1">
              <label htmlFor="consent" className="block text-sm font-medium text-gray-700 cursor-pointer">
                I consent to data processing and report generation <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-600">
                I agree to the processing of my financial data for the purpose of generating 
                a personalized financial report. The data will be used solely for this purpose 
                and will be handled securely.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50">
            <input
              id="marketing"
              type="checkbox"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
            />
            <div className="space-y-1">
              <label htmlFor="marketing" className="block text-sm font-medium text-gray-700 cursor-pointer">
                I agree to receive financial tips and updates
              </label>
              <p className="text-xs text-gray-600">
                Receive occasional emails with financial tips, market updates, and new features. 
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 p-6 rounded-lg">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">🎉 You're Almost Done!</h3>
          <p className="text-gray-700">
            Click "Generate My Financial Plan" to create your personalized report. 
            It will be generated instantly and sent to your email.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <span className="text-green-500">✓</span>
              <span>Comprehensive Analysis</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-green-500">✓</span>
              <span>Personalized Recommendations</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-green-500">✓</span>
              <span>PDF Report</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
        <button 
          type="button" 
          onClick={onPrevious}
          disabled={isSubmitting}
          className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button 
          type="submit" 
          disabled={!consentGiven || isSubmitting}
          className={`px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${!consentGiven || isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Generating Report...
            </div>
          ) : (
            "Generate My Financial Plan"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactStep;
