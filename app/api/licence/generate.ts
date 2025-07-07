import { NextRequest, NextResponse } from 'next/server';
import { generateLicenseKey } from '@/lib/licenseValidator';

export async function POST(req: NextRequest) {
  const { product, email } = await req.json();
  
  if (!product || !email) {
    return NextResponse.json(
      { error: 'Недостају обавезни параметри' },
      { status: 400 }
    );
  }
  
  try {
    const license = generateLicenseKey(product, email);
    return NextResponse.json(license);
  } catch (error) {
    return NextResponse.json(
      { error: 'Грешка при генерисању лиценце' },
      { status: 500 }
    );
  }
}