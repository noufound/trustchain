'use client'

import React from 'react'
// import { ConfigProvider } from 'antd'
// import { getClientTheme } from '@/config/theme'
import { MainLayout } from '@/components/layout'

interface ClientProvidersProps {
  children: React.ReactNode
}

export function ClientProviders({ children }: ClientProvidersProps) {
  // const theme = getClientTheme()

  return (
    // <ConfigProvider theme={theme}>
    <div id="__next">
      <MainLayout>
        {children}
      </MainLayout>
    </div>
    // </ConfigProvider >
  )
} 