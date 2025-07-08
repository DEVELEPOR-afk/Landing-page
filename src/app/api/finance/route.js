import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import FormData from '@/models/form.model';

// Ensure connection helper (for Next.js/Mongoose best practice)
const MONGODB_URI = process.env.MONGODB_URI;
let conn = null;
async function dbConnect() {
  if (conn) return conn;
  conn = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return conn;
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const formData = await FormData.create(body);
    return NextResponse.json({ success: true, id: formData._id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
