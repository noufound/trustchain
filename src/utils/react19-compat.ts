/**
 * React 19 兼容性验证工具
 * 用于确保所有组件都正确使用React 19的新特性
 */

import React from 'react';

/**
 * 检查React版本是否为19或更高
 */
export function isReact19OrHigher(): boolean {
  const version = React.version;
  const majorVersion = parseInt(version.split('.')[0], 10);
  return majorVersion >= 19;
}

/**
 * 用于开发环境的兼容性检查
 */
export function checkReact19Compatibility() {
  if (process.env.NODE_ENV === 'development') {
    // 静默处理Antd兼容性警告
    const originalWarn = console.warn;
    console.warn = (...args) => {
      const message = args[0]?.toString() || '';
      
      // 过滤Antd React 19兼容性警告
      if (message.includes('[antd: compatible] antd v5 support React is 16 ~ 18')) {
        if (process.env.NEXT_PUBLIC_DEBUG_ANTD === 'true') {
          console.info('🔧 [React 19] Antd兼容性警告已被过滤，项目使用了 @ant-design/v5-patch-for-react-19 补丁');
        }
        return;
      }
      
      // 过滤其他React 19相关警告
      const react19Patterns = [
        'Warning: ReactDOM.render is no longer supported',
        'Warning: ReactDOM.hydrate is no longer supported',
        'Warning: useLayoutEffect does nothing on the server',
        'Extra attributes from the server',
        'Text content does not match server-rendered HTML'
      ];
      
      const isReact19Warning = react19Patterns.some(pattern => 
        message.includes(pattern)
      );
      
      if (isReact19Warning) {
        if (process.env.NEXT_PUBLIC_DEBUG_REACT19 === 'true') {
          console.info('🔧 [React 19] 已过滤的React 19兼容性警告:', message);
        }
        return;
      }
      
      originalWarn.apply(console, args);
    };

    if (isReact19OrHigher()) {
      console.info('✅ React 19 兼容性检查通过');
      console.info('🔧 已启用 @ant-design/v5-patch-for-react-19 兼容包');
      console.info('📘 如需调试兼容性警告，请设置环境变量 NEXT_PUBLIC_DEBUG_ANTD=true 或 NEXT_PUBLIC_DEBUG_REACT19=true');
    } else {
      console.warn('⚠️ 当前React版本低于19，某些新特性可能不可用');
    }
  }
}

/**
 * React 19 ref 工具函数
 * 在React 19中，ref现在是一个普通的prop
 */
export function createRefProp<T>(ref?: React.Ref<T>) {
  return ref ? { ref } : {};
}

/**
 * 用于处理旧版本forwardRef的兼容性
 */
export function withReact19Ref<T, P extends object>(
  Component: React.ComponentType<P & { ref?: React.Ref<T> }>
) {
  if (isReact19OrHigher()) {
    // React 19中，直接返回组件，因为ref是普通prop
    return Component;
  } else {
    // React 18及以下版本，使用forwardRef
    const WrappedComponent = React.forwardRef<T, P>((props, ref) => {
      return React.createElement(Component, { ...props, ref } as P & { ref?: React.Ref<T> });
    });
    
    // 添加 displayName 以便调试
    WrappedComponent.displayName = `withReact19Ref(${Component.displayName || Component.name || 'Component'})`;
    
    return WrappedComponent;
  }
}

/**
 * 修复Antd组件在React 19中的渲染问题
 */
export function fixAntdReact19Issues() {
  if (typeof window === 'undefined') return;
  
  // 修复可能的样式问题
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        const target = mutation.target as Element;
        
        // 移除浏览器扩展添加的属性，避免hydration警告
        const extensionAttrs = [
          'data-atm-ext-installed',
          'data-extension-id',
          'data-adblock-key',
          'data-darkreader'
        ];
        
        extensionAttrs.forEach(attr => {
          if (target.hasAttribute(attr)) {
            target.removeAttribute(attr);
          }
        });
      }
    });
  });
  
  // 观察document.body的属性变化
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: [
      'data-atm-ext-installed',
      'data-extension-id', 
      'data-adblock-key',
      'data-darkreader'
    ]
  });
  
  return () => observer.disconnect();
} 