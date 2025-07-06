// app/layout.tsx
   import { TonConnectUIProvider } from '@tonconnect/ui-react';
   
   export default function RootLayout({ children }) {
     return (
       <TonConnectUIProvider manifestUrl="https://melektron.com/tonconnect-manifest.json">
         {children}
       </TonConnectUIProvider>
     )
   }