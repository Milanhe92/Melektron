// app/layout.tsx
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './globals.css'; // Obavezno uključi globalne stilove

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TonConnectUIProvider manifestUrl="https://melektron.com/tonconnect-manifest.json">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}