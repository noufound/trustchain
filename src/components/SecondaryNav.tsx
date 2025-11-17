"use client";

import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

interface SecondaryNavProps {
  items: NavItem[];
}

export default function SecondaryNav({ items }: SecondaryNavProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    const header = document.querySelector('.header-container');
    setHeaderHeight(header ? header.getBoundingClientRect().height : 0);
  }, []);   

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      // 检测是否sticky - 根据导航栏实际位置判断
      const navbar = document.getElementById('secondaryNav');
      if (navbar) {
        const rect = navbar.getBoundingClientRect();
        // 当导航栏的top值小于或等于header高度时，说明已经sticky了
        setIsSticky(rect.top <= headerHeight);
      }

      // 检测当前在哪个section，设置进度条
      items.forEach((item, index) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // section在视口上部时，设置对应的进度
          if (rect.top <= 200 && rect.bottom >= 200) {
            const progress = ((index + 1) / items.length) * 100;
            setScrollProgress(progress);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 初始化时执行一次
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items, headerHeight]);

  // 平滑滚动到section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150; // 考虑sticky header + navbar高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <nav
      id="secondaryNav"
      className={`secondary-page-navbar secondary-page-navbar-subhome d-none d-lg-flex border-bottom ${
        isSticky ? 'is-sticky' : 'py-4'
      }`}
      style={{
        top: headerHeight
      }}
    >
      <div className="container-fluid container-xl secondary-page-navbar-container">
        <div className="d-flex justify-content-center w-100 position-relative">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex-fill d-flex align-items-center justify-content-center border-0 bg-transparent cursor-pointer px-3 px-md-6 fw-medium position-relative text-dark ${
                'py-3'
              }`}
              style={{
                transition: 'all 0.5s ease-in-out',
                outline: 'none'
              }}
            >
              {/* 图标 - 初始显示，sticky后通过CSS隐藏 */}
              <span
                aria-hidden="true"
                className={`csc-icon ${item.icon} nav-icon flex-shrink-0 d-inline-block`}
                style={{
                  color: 'var(--primary-color)',
                  fontSize: '2rem',
                  transition: 'all 0.5s ease-in-out',
                  overflow: 'hidden',
                  marginRight: '0.5rem'
                }}
              />
              <span className="text-nowrap">{item.label}</span>
            </button>
          ))}
          
          {/* 滚动进度条 - 只在sticky时显示，位于items下方 */}
          <div className="scroll-progress-bar">
            <div 
              className="progress-bar-fill"
              style={{
                width: `${scrollProgress}%`
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
