'use client'
import { LDProvider } from '@launchdarkly/react-client-sdk';

export function Providers({ children }) {
  return (
    <LDProvider clientSideID="vaš-client-id">
      {children}
    </LDProvider>
  )
}