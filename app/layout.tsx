import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './globals.css';
import dynamic from 'next/dynamic';

const QuantumCanvas = dynamic(() => import('@/components/QuantumCanvas'), { 
  ssr: false 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Melektron - Квантна електроника и блокчејн технологије" />
        <link rel="icon" href="/favicon.ico" />
        <title>Melektron</title>
      </head>
      <body className="bg-black text-white">
        <TonConnectUIProvider
          manifestUrl={process.env.NEXT_PUBLIC_TON_CONNECT_MANIFEST_URL!}
          actionsConfiguration={{
            twaReturnUrl: 'https://t.me/melektron_bot'
          }}
        >
          <QuantumCanvas />
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}