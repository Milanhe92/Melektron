// utils/gdpr.js
export const anonymizeUserData = (data) => {
  return {
    ...data,
    email: data.email.replace(/(?<=.).(?=.*@)/g, '*'),
    ip: data.ip.replace(/\d+$/, 'xxx')
  };
};

export const encryptData = (data, key) => {
  // Коришћење Web Crypto API за енкрипцију
  const encoder = new TextEncoder();
  const encoded = encoder.encode(data);
  return crypto.subtle.encrypt({ name: 'AES-GCM', iv: new Uint8Array(12) }, key, encoded);
};