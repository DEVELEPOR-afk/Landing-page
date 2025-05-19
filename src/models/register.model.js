import mongoose from 'mongoose';

// Check if the model is already defined to prevent overwriting during hot reloads
const Registration = mongoose.models.Registration || mongoose.model('Registration', new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  experience: {
    type: String,
    required: [true, 'Experience level is required'],
    enum: ['beginner', 'intermediate', 'advanced', 'professional']
  },
  goals: {
    type: String,
    required: false,
    trim: true,
  },
  discord: {
    type: String,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}));

export default Registration;