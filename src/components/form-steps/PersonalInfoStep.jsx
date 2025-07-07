
import { useForm } from "react-hook-form";

const PersonalInfoStep = ({ onNext, initialData = {} }) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: initialData || {}
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            id="fullName"
            {...register("fullName", { required: "Full name is required" })}
            placeholder="Enter your full name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age *</label>
          <input
            id="age"
            type="number"
            {...register("age", { 
              required: "Age is required",
              min: { value: 18, message: "Must be 18 or older" },
              max: { value: 100, message: "Invalid age" }
            })}
            placeholder="Enter your age"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="dependents" className="block text-sm font-medium text-gray-700">Number of Dependents</label>
          <input
            id="dependents"
            type="number"
            {...register("dependents", { min: 0 })}
            placeholder="0"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">City/Location *</label>
          <input
            id="location"
            {...register("location", { required: "Location is required" })}
            placeholder="Enter your city"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">Marital Status</label>
          <select
            id="maritalStatus"
            onChange={(e) => setValue("maritalStatus", e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">Occupation</label>
          <input
            id="occupation"
            {...register("occupation")}
            placeholder="Enter your occupation"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Why we need this:</strong> Personal information helps us create age-appropriate 
              financial strategies and consider your family responsibilities in our recommendations.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button 
          type="submit" 
          className="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoStep;
