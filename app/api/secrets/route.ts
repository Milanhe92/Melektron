// app/api/secrets/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Овде можете додати логику ауторизације!
  return NextResponse.json({
    cloudflareKey: process.env.CLOUDFLARE_API_KEY,
    sanityId: process.env.SANITY_PROJECT_ID
    // Не враћајте све тајне!
  });
}