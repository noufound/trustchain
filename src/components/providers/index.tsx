'use client'

import React from 'react'
import { AntdProvider } from './AntdProvider'
import '@rainbow-me/rainbowkit/styles.css';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from './wagmiconfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AntdProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            {/* <Web3Provider> */}
            {children}
            {/* </Web3Provider> */}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </AntdProvider>
  )
}

// 为了兼容性，导出 ClientProviders 别名
export { Providers as ClientProviders }; 