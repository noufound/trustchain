// hydration-fix.js - 处理浏览器扩展导致的 hydration 不匹配问题

(function() {
  'use strict';

  // 只在浏览器环境执行
  if (typeof window === 'undefined') return;

  // 需要清理的浏览器扩展属性
  const EXTENSION_ATTRIBUTES = [
    'data-atm-ext-installed',
    'data-extension-id',
    'data-adblock-key', 
    'data-darkreader',
    'data-lastpass',
    'data-grammarly',
    'data-extension',
    'data-1password',
    'data-bitwarden',
    'data-dashlane',
    'data-metamask',
    'spellcheck', // 某些扩展会修改这个属性
  ];

  // 清理元素上的扩展属性
  function cleanExtensionAttributes(element) {
    if (!element || !element.removeAttribute) return;
    
    EXTENSION_ATTRIBUTES.forEach(attr => {
      if (element.hasAttribute(attr)) {
        element.removeAttribute(attr);
      }
    });
  }

  // 递归清理所有子元素
  function cleanElementTree(element) {
    if (!element) return;
    
    cleanExtensionAttributes(element);
    
    // 清理所有子元素
    if (element.children) {
      for (let i = 0; i < element.children.length; i++) {
        cleanElementTree(element.children[i]);
      }
    }
  }

  // 在DOM内容加载完成后清理属性
  function performCleanup() {
    try {
      // 清理 html 和 body 元素
      cleanExtensionAttributes(document.documentElement);
      cleanExtensionAttributes(document.body);
      
      // 清理整个文档树
      cleanElementTree(document.documentElement);
      
      if (process.env.NODE_ENV === 'development') {
        console.info('🧹 Hydration Fix: 已清理浏览器扩展属性');
      }
    } catch (error) {
      console.warn('Hydration Fix: 清理扩展属性时出错', error);
    }
  }

  // MutationObserver 监听动态添加的扩展属性
  function setupMutationObserver() {
    if (!window.MutationObserver) return;

    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes') {
          const target = mutation.target;
          const attributeName = mutation.attributeName;
          
          if (EXTENSION_ATTRIBUTES.includes(attributeName)) {
            cleanExtensionAttributes(target);
          }
        } else if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              cleanElementTree(node);
            }
          });
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: EXTENSION_ATTRIBUTES
    });

    // 在窗口卸载时断开观察器
    window.addEventListener('beforeunload', function() {
      observer.disconnect();
    });
  }

  // 多个时机执行清理
  function initHydrationFix() {
    // 立即执行
    if (document.readyState === 'loading') {
      // DOM还在加载
      document.addEventListener('DOMContentLoaded', performCleanup);
    } else {
      // DOM已加载完成
      performCleanup();
    }

    // 页面完全加载后再次清理
    window.addEventListener('load', performCleanup);

    // 设置延迟清理，处理异步加载的扩展
    setTimeout(performCleanup, 100);
    setTimeout(performCleanup, 500);
    setTimeout(performCleanup, 1000);

    // 启动监听器
    setupMutationObserver();
  }

  // 启动修复程序
  initHydrationFix();

  // 导出清理函数供其他模块使用
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      cleanExtensionAttributes,
      cleanElementTree,
      performCleanup
    };
  } else if (typeof window !== 'undefined') {
    window.hydrationFix = {
      cleanExtensionAttributes,
      cleanElementTree,
      performCleanup
    };
  }

})(); 