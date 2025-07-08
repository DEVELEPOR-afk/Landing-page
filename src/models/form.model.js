const mongoose = require('mongoose');

const PersonalInfoSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true, min: 18, max: 100 },
  dependents: { type: Number, default: 0 },
  location: { type: String, required: true },
  maritalStatus: { type: String, enum: ['single', 'married', 'divorced', 'widowed', ''], default: '' },
  occupation: { type: String, default: '' },
}, { _id: false });

const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  consentGiven: { type: Boolean, required: true },
  marketingConsent: { type: Boolean, default: false },
}, { _id: false });

const IncomeSchema = new mongoose.Schema({
  primaryIncome: { type: String, required: true }, // stored as formatted string
  secondaryIncome: { type: String, default: '' },
  bonusIncome: { type: String, default: '' },
  rentalIncome: { type: String, default: '' },
  otherIncome: { type: String, default: '' },
}, { _id: false });

const ExpensesSchema = new mongoose.Schema({
  rent: { type: Number, required: true },
  utilities: { type: Number, default: 0 },
  insurance: { type: Number, default: 0 },
  groceries: { type: Number, default: 0 },
  education: { type: Number, default: 0 },
  transport: { type: Number, default: 0 },
  entertainment: { type: Number, default: 0 },
  healthcare: { type: Number, default: 0 },
  miscellaneous: { type: Number, default: 0 },
}, { _id: false });

const AssetsSchema = new mongoose.Schema({
  savingsAccount: { type: Number, default: 0 },
  currentAccount: { type: Number, default: 0 },
  cash: { type: Number, default: 0 },
  fixedDeposits: { type: Number, default: 0 },
  recurringDeposits: { type: Number, default: 0 },
  ppf: { type: Number, default: 0 },
  epf: { type: Number, default: 0 },
  nps: { type: Number, default: 0 },
  stocks: { type: Number, default: 0 },
  mutualFunds: { type: Number, default: 0 },
  bonds: { type: Number, default: 0 },
  realEstate: { type: Number, default: 0 },
  gold: { type: Number, default: 0 },
  vehicle: { type: Number, default: 0 },
  otherAssets: { type: Number, default: 0 }
}, { _id: false });

const LiabilitiesSchema = new mongoose.Schema({
  homeLoanOutstanding: { type: String, default: '' },
  homeLoanEmi: { type: String, default: '' },
  homeLoanTenure: { type: Number, default: 0 },
  personalLoanOutstanding: { type: String, default: '' },
  personalLoanEmi: { type: String, default: '' },
  personalLoanTenure: { type: Number, default: 0 },
  vehicleLoanOutstanding: { type: String, default: '' },
  vehicleLoanEmi: { type: String, default: '' },
  vehicleLoanTenure: { type: Number, default: 0 },
  educationLoanOutstanding: { type: String, default: '' },
  educationLoanEmi: { type: String, default: '' },
  educationLoanTenure: { type: Number, default: 0 },
  creditCardOutstanding: { type: String, default: '' },
  creditCardLimit: { type: String, default: '' },
  creditCards: { type: Number, default: 0 },
}, { _id: false });

const InsuranceSchema = new mongoose.Schema({
  lifeInsuranceStatus: { type: String, enum: ['yes', 'no', 'planning', ''], default: '' },
  lifeInsuranceCover: { type: String, default: '' },
  lifeInsurancePremium: { type: String, default: '' },
  healthInsuranceStatus: { type: String, enum: ['yes', 'no', 'planning', ''], default: '' },
  healthInsuranceCover: { type: String, default: '' },
  healthInsurancePremium: { type: String, default: '' },
  criticalIllness: { type: String, default: '' },
  accidentInsurance: { type: String, default: '' },
  disabilityInsurance: { type: String, default: '' },
  homeInsurance: { type: String, default: '' },
}, { _id: false });

const GoalsSchema = new mongoose.Schema({
  selectedGoals: [{ type: String }],
  shortTermGoals: { type: String, default: '' },
  mediumTermGoals: { type: String, default: '' },
  longTermGoals: { type: String, default: '' },
  retirementAge: { type: Number, default: 60 },
  childMarriage: { type: Number, default: 0 },
}, { _id: false });

const RiskSchema = new mongoose.Schema({
  riskProfile: { type: String, enum: ['conservative', 'moderate', 'aggressive', ''], default: '' },
  investmentHorizon: { type: String, enum: ['short', 'medium', 'long', ''], default: '' },
  volatilityComfort: { type: String, enum: ['low', 'medium', 'high', ''], default: '' },
}, { _id: false });

const FormDataSchema = new mongoose.Schema({
  personalInfo: PersonalInfoSchema,
  contact: ContactSchema,
  income: IncomeSchema,
  expenses: ExpensesSchema,
  assets: AssetsSchema,
  liabilities: LiabilitiesSchema,
  insurance: { type: Number, default: 0 },
  goals: GoalsSchema,
  risk: RiskSchema,
}, { timestamps: true });

module.exports = mongoose.models.FormData || mongoose.model('FormData', FormDataSchema);
