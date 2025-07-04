import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    message: 'Email diagnostics endpoint is no longer available.',
    timestamp: new Date().toISOString()
  });
}
