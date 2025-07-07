 // lib/crypto/ton.js
   import { TonConnect } from '@tonconnect/ui-react';
   
   export const initTON = () => {
     return new TonConnect({
       manifestUrl: process.env.TON_CONNECT_MANIFEST_URL
     });
   };