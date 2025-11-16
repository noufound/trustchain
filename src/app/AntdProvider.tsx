'use client'

import React from 'react'
import { ConfigProvider, App as AntdApp } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'

interface AntdProviderProps {
  children: React.ReactNode
}

export function AntdProvider({ children }: AntdProviderProps) {
  // 临时解决React 19兼容性警告
  React.useEffect(() => {
    // 静默处理Antd React 19兼容性警告
    const originalWarn = console.warn
    console.warn = (...args) => {
      const message = args[0]?.toString() || ''
      
      // 过滤多种Antd兼容性警告
      const ignoredWarnings = [
        '[antd: compatible] antd v5 support React is 16 ~ 18',
        '[antd: message] Static function can not consume context like dynamic theme',
        'Warning: ReactDOM.render is no longer supported in React 18',
        'Warning: ReactDOM.hydrate is no longer supported in React 18'
      ]
      
      const shouldIgnore = ignoredWarnings.some(warning => 
        message.includes(warning)
      )
      
      if (shouldIgnore) {
        // 静默忽略这些特定的警告
        return
      }
      
      originalWarn.apply(console, args)
    }
    
    return () => {
      console.warn = originalWarn
    }
  }, [])

  return (
    <AntdRegistry>
      <ConfigProvider
        // 添加 React 19 兼容性配置
        getPopupContainer={(node) => {
          if (node) {
            return node.parentNode as HTMLElement
          }
          return document.body
        }}
      >
        <AntdApp>
          {children}
        </AntdApp>
      </ConfigProvider>
    </AntdRegistry>
  )
} 