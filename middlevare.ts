// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const validTokens = [process.env.API_ACCESS_TOKEN];

export function middleware(request: NextRequest) {
  const token = request.headers.get('Authorization')?.split(' ')[1];
  
  if (!token || !validTokens.includes(token)) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/(.*)',
};