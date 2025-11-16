'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  HomeIcon, 
  PlusCircleIcon, 
  UsersIcon, 
  ShieldCheckIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { ConnectButton } from '@rainbow-me/rainbowkit';


const menuItems = [
  { 
    name: '总览', 
    href: '/dashboard', 
    icon: HomeIcon 
  },
  { 
    name: '创建信托', 
    href: '/dashboard/create-trust', 
    icon: PlusCircleIcon 
  },
  { 
    name: '受益人', 
    href: '/dashboard/beneficiaries', 
    icon: UsersIcon 
  },
  { 
    name: '多签', 
    href: '/dashboard/multisig', 
    icon: ShieldCheckIcon 
  },
  { 
    name: '信托管理', 
    href: '/dashboard/trust-management', 
    icon: DocumentTextIcon 
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // 防止菜单打开时背景页面滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getCurrentTitle = () => {
    const current = menuItems.find(item => item.href === pathname);
    return current ? current.name : 'TrustSite';
  };

  return (
    <>
      {/* 移动端顶部导航栏 */}
      <div className="mobile-topbar">
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <Bars3Icon />
        </button>
        <h1 className="mobile-title">{getCurrentTitle()}</h1>
        <div style={{width: '40px'}}></div> {/* 占位保持标题居中 */}
      </div>

      {/* 桌面端 + 移动端滑出侧边栏 */}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        {/* Logo区域 */}
        <div className="sidebar-logo">
          <h1>TrustSite</h1>
          {/* 移动端关闭按钮 */}
          <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
            <XMarkIcon />
          </button>
        </div>

        {/* 导航菜单 */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <Icon />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* 底部信息 */}
        <div className="sidebar-footer">
          <ConnectButton showBalance={false} />
          {/* <div className="sidebar-user">
            <div className="sidebar-user-avatar">
              U
            </div>
            <div style={{flexGrow: 1}}>
              <p className="mb-0 small fw-medium">用户账户</p>
              <p className="mb-0 text-muted" style={{fontSize: '0.75rem'}}>0x1234...5678</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* 移动端遮罩层 */}
      {isOpen && (
        <div className="sidebar-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
}
