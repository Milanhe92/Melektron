import crypto from 'crypto';

// Генеришите лиценцни кључ
export const generateLicenseKey = (product: string, email: string) => {
  const secret = process.env.LICENSE_SECRET!;
  const data = `${product}:${email}:${Date.now()}`;
  
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(data);
  
  return {
    key: hmac.digest('hex').toUpperCase().match(/.{1,4}/g)?.join('-'),
    issueDate: new Date().toISOString(),
    product,
    email
  };
};

// Валидирај лиценцни кључ
export const validateLicenseKey = (key: string, product: string, email: string) => {
  const cleanKey = key.replace(/-/g, '').toLowerCase();
  const secret = process.env.LICENSE_SECRET!;
  
  // Провери времест трајања (2 године)
  const timestamp = parseInt(cleanKey.slice(0, 8), 16);
  const issueDate = new Date(timestamp);
  
  if (Date.now() - issueDate.getTime() > 2 * 365 * 24 * 60 * 60 * 1000) {
    return { valid: false, reason: 'Лиценца је истекла' };
  }
  
  // Провери хеш
  const data = `${product}:${email}:${timestamp}`;
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(data);
  
  const expectedHash = hmac.digest('hex');
  const providedHash = cleanKey.slice(8);
  
  return {
    valid: expectedHash === providedHash,
    reason: expectedHash === providedHash ? '' : 'Неисправан лиценцни кључ'
  };
};