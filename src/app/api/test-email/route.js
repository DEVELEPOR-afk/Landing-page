import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    message: 'Test email endpoint is no longer available.',
    timestamp: new Date().toISOString()
  });
}

export async function POST() {
  return NextResponse.json({
    status: 'success',
    message: 'Test email endpoint is no longer available.',
    timestamp: new Date().toISOString()
  });
}
