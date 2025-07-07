import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Bezbedan pristup manifest URL-u
  const getManifestUrl = () => {
    if (typeof window !== 'undefined') {
      // U produkciji koristi pravi URL
      if (process.env.NODE_ENV === 'production') {
        return 'https://melektron.com/tonconnect-manifest.json';
      }
      // Za razvoj koristi trenutni origin
      return `${window.location.origin}/tonconnect-manifest.json`;
    }
    // Fallback za server-side rendering
    return 'https://melektron.com/tonconnect-manifest.json';
  };

  return (
    <html lang="sr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <TonConnectUIProvider manifestUrl={getManifestUrl()}>
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}