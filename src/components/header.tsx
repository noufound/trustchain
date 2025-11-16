"use client"; // 声明为 Client Component

import { ParamProps } from '@/types/params';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { Button, Dropdown, Menu, MenuProps } from 'antd';
import { useState } from 'react';

export default function Header({ lang, locale }: ParamProps) {
  const dict = lang.dict;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link rel="noopener noreferrer" href="/solutions/family-trust/">
          Family Trust
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link rel="noopener noreferrer" href="/solutions/enterprise/">
          Enterprise Trust
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link rel="noopener noreferrer" href="https://www.luohanacademy.com">
          DAO Governance
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.example.com">
          RWA
        </Link>
      ),
    },
    {
      key: '5',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.example.com">
          Vesting
        </Link>
      ),
    },
    {
      key: '6',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.example.com">
          Compliance
        </Link>
      ),
    },
  ];

  const itemsKnowledge: MenuProps['items'] = [
    {
      key: '11',
      label: (
        <Link rel="noopener noreferrer" href="/solutions/family-trust/">
          Insights
        </Link>
      ),
    },
    {
      key: '12',
      label: (
        <Link rel="noopener noreferrer" href="/solutions/enterprise/">
          Events
        </Link>
      ),
    },
    {
      key: '13',
      label: (
        <Link rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Whitepapers
        </Link>
      ),
    },
  ];

  return (
    <header className="header-container fixed-top bg-white">
      <Link className="visually-hidden-focusable skip-to-main-link" href="#main-content">
        Skip to main content
      </Link>
      <nav aria-label="site" className="navbar main-nav navbar-expand-lg pt-0 pb-0">
        <div className="container-fluid container-xl nav-container">
          <div className="navbar-brand-container d-flex align-items-center justify-content-between">
            <Link className="navbar-brand nav-logo-link ms-2" href="/">
              <img
                className="nav-logo-img"
                src="/images/logo.png"
                alt="CSC - We are the business behind business"
              />
            </Link>
            {/* 添加汉堡菜单按钮 */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              {/* 使用 Ant Design 的 Dropdown 组件 */}
              <li className="nav-item">
                <Dropdown menu={{ items }} trigger={['click']}>
                  <a className="nav-link avenir-heavy text-uppercase" onClick={(e) => e.preventDefault()}>
                    {dict.header.solutions} <span className="csc-icon-sm c-i-arrow-thin-down text-teal ms-2"></span>
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
                <Dropdown menu={{ items: itemsKnowledge }} trigger={['click']}>
                  <a className="nav-link avenir-heavy text-uppercase" onClick={(e) => e.preventDefault()}>
                    {dict.header.knowledge} <span className="csc-icon-sm c-i-arrow-thin-down text-teal ms-2"></span>
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
                <Link className="nav-link avenir-heavy text-uppercase" href="/about/">
                  {dict.header.about}
                </Link>
              </li>
              <li className="nav-item">

              <Link className="nav-link avenir-heavy text-uppercase" href="/dashboard/">
                {dict.header.dashboard}
              </Link>
            
     
              </li>
            </ul>
           
          </div>
          
        </div>
      </nav>

     
    </header>
  );
}