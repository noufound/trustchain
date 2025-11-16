'use client'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en/translation.json';
import zhTranslation from '../locales/zh/translation.json';
import ruTranslation from '../locales/ru/translation.json';
import urTranslation from '../locales/ur/translation.json';
import koTranslation from '../locales/ko/translation.json';

// 初始化i18next
i18n
  .use(initReactI18next) // 将i18n实例传递给react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      zh: {
        translation: zhTranslation
      },
      ru: {
        translation: ruTranslation
      },
      ur: {
        translation: urTranslation
      },
      ko: {
        translation: koTranslation
      }
    },
    lng: 'zh', // 默认语言为中文
    fallbackLng: 'en', // 回退语言为英文
    interpolation: {
      escapeValue: false // 不转义特殊字符
    },
    react: {
      useSuspense: true // 使用React的Suspense功能
    }
  });

// 导出i18n实例
export default i18n;

// 语言切换函数
export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language);
  window?.localStorage?.setItem('language', language);
}; 