"use client"; // 声明为 Client Component

import { ParamProps } from "@/types/params";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { Button, Dropdown, Menu, MenuProps } from "antd";
import { useState } from "react";

export default function Header({ lang, locale }: ParamProps) {
  const dict = lang.dict;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          rel="noopener noreferrer"
          href={`/${locale.lang}/solutions/family-trust/`}
        >
          {dict.header.family}
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          rel="noopener noreferrer"
          href={`/${locale.lang}/solutions/enterprise/`}
        >
          {dict.header.enterprise}
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="noopener noreferrer" href={`/${locale.lang}/solutions/dao/`}>
          {dict.header.dao}
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link rel="noopener noreferrer" href={`/${locale.lang}/solutions/rwa/`}>
          {dict.header.rwa}
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link
          rel="noopener noreferrer"
          href={`/${locale.lang}/solutions/vesting/`}
        >
          {dict.header.vesting}
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link
          rel="noopener noreferrer"
          href={`/${locale.lang}/solutions/compliance/`}
        >
          {dict.header.compliance2}
        </Link>
      ),
    },
  ];

  const itemsKnowledge: MenuProps["items"] = [
    {
      key: "11",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs"
        >
          {dict.header.overview}
        </Link>
      ),
    },
    {
      key: "12",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/2.1-chuan-tong-xin-tuo-hang-ye-xian-zhuang-yu-ju-xian"
        >
          {dict.header.analysis}
        </Link>
      ),
    },
    {
      key: "13",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/di-3-zhang-she-ji-li-nian-yu-jia-zhi-zhu-zhang/3.1-ba-shou-tuo-guan-li-yu-shou-yi-fen-pei-ban-shang-lian"
        >
          {dict.header.vision}
        </Link>
      ),
    },
    {
      key: "14",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/di-3-zhang-she-ji-li-nian-yu-jia-zhi-zhu-zhang/ye-wu-jia-gou-chi-pai-xin-tuo-+-lian-shang-xie-yi-de-xie-tong/4.1-jue-se-yu-guan-xi-gai-lan"
        >
          {dict.header.architecture}
        </Link>
      ),
    },
    {
      key: "15",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/di-3-zhang-she-ji-li-nian-yu-jia-zhi-zhu-zhang/ye-wu-jia-gou-chi-pai-xin-tuo-+-lian-shang-xie-yi-de-xie-tong/di-5-zhang-lian-shang-xin-tuo-chan-pin-xing-tai/5.1-lian-shang-xin-tuo-zhang-hu-de-jie-gou-yu-te-xing"
        >
          {dict.header.products}
        </Link>
      ),
    },
    {
      key: "16",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/di-3-zhang-she-ji-li-nian-yu-jia-zhi-zhu-zhang/ye-wu-jia-gou-chi-pai-xin-tuo-+-lian-shang-xie-yi-de-xie-tong/di-5-zhang-lian-shang-xin-tuo-chan-pin-xing-tai/di-6-zhang-ji-shu-jia-gou-yu-an-quan-she-ji/6.1-ji-shu-zhan-yu-wang-luo-xuan-ze"
        >
          {dict.header.security}
        </Link>
      ),
    },
    {
      key: "17",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/di-3-zhang-she-ji-li-nian-yu-jia-zhi-zhu-zhang/ye-wu-jia-gou-chi-pai-xin-tuo-+-lian-shang-xie-yi-de-xie-tong/di-5-zhang-lian-shang-xin-tuo-chan-pin-xing-tai/di-6-zhang-ji-shu-jia-gou-yu-an-quan-she-ji/di-7-zhang-falyu-he-gui-kuang-jia/7.1-falding-wei-ji-shu-xie-yi-ceng-er-fei-shou-tuo-falzhu-ti"
        >
          {dict.header.legal}
        </Link>
      ),
    },
    {
      key: "18",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/di-3-zhang-she-ji-li-nian-yu-jia-zhi-zhu-zhang/ye-wu-jia-gou-chi-pai-xin-tuo-+-lian-shang-xie-yi-de-xie-tong/di-5-zhang-lian-shang-xin-tuo-chan-pin-xing-tai/di-6-zhang-ji-shu-jia-gou-yu-an-quan-she-ji/di-7-zhang-falyu-he-gui-kuang-jia/di-8-zhang-dian-xing-shi-yong-chang-jing-yu-an-li/8.1-duo-fa-yu-jia-zu-cai-fu-chuan-cheng-cong-zhi-ben-tiao-kuan-dao-lian-shang-gui-ze"
        >
          {dict.header.case}
        </Link>
      ),
    },
    {
      key: "19",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/di-3-zhang-she-ji-li-nian-yu-jia-zhi-zhu-zhang/ye-wu-jia-gou-chi-pai-xin-tuo-+-lian-shang-xie-yi-de-xie-tong/di-5-zhang-lian-shang-xin-tuo-chan-pin-xing-tai/di-6-zhang-ji-shu-jia-gou-yu-an-quan-she-ji/di-7-zhang-falyu-he-gui-kuang-jia/di-8-zhang-dian-xing-shi-yong-chang-jing-yu-an-li/di-9-zhang-zhi-li-jie-gou-yu-she-qu/9.1-zhi-li-mu-biao-yu-ji-ben-yuan-ze"
        >
          {dict.header.governance}
        </Link>
      ),
    },
    {
      key: "20",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/di-3-zhang-she-ji-li-nian-yu-jia-zhi-zhu-zhang/ye-wu-jia-gou-chi-pai-xin-tuo-+-lian-shang-xie-yi-de-xie-tong/di-5-zhang-lian-shang-xin-tuo-chan-pin-xing-tai/di-6-zhang-ji-shu-jia-gou-yu-an-quan-she-ji/di-7-zhang-falyu-he-gui-kuang-jia/di-8-zhang-dian-xing-shi-yong-chang-jing-yu-an-li/di-9-zhang-zhi-li-jie-gou-yu-she-qu/di-10-zhang-lu-xian-tu-yu-sheng-tai-fa-zhan/10.1-jie-duan-xing-mu-biao-gai-lan"
        >
          {dict.header.roadmap}
        </Link>
      ),
    },
    {
      key: "21",
      label: (
        <Link
          rel="noopener noreferrer"
          href="https://epoch-trust-chain.gitbook.io/epoch-trust-chain-docs/di-2-zhang-hang-ye-bei-jing-yu-tong-dian-fen-xi/di-3-zhang-she-ji-li-nian-yu-jia-zhi-zhu-zhang/ye-wu-jia-gou-chi-pai-xin-tuo-+-lian-shang-xie-yi-de-xie-tong/di-5-zhang-lian-shang-xin-tuo-chan-pin-xing-tai/di-6-zhang-ji-shu-jia-gou-yu-an-quan-she-ji/di-7-zhang-falyu-he-gui-kuang-jia/di-8-zhang-dian-xing-shi-yong-chang-jing-yu-an-li/di-9-zhang-zhi-li-jie-gou-yu-she-qu/di-10-zhang-lu-xian-tu-yu-sheng-tai-fa-zhan/di-11-zhang-feng-xian-pi-lu-yu-mian-ze-sheng-ming/11.1-zong-ti-sheng-ming"
        >
          {dict.header.risk}
        </Link>
      ),
    },
  ];

  return (
    <header className="header-container sticky-top bg-white">
      <Link
        className="visually-hidden-focusable skip-to-main-link"
        href="#main-content"
      >
        Skip to main content
      </Link>
      <nav
        aria-label="site"
        className="navbar main-nav navbar-expand-lg pt-0 pb-0"
      >
        <div className="container-fluid container-xl nav-container">
          <div className="navbar-brand-container d-flex align-items-center justify-content-between">
            <Link
              className="navbar-brand nav-logo-link ms-2"
              href={`/${locale.lang}/`}
            >
              <img
                className="nav-logo-img"
                src="/images/logo.png"
                alt="CSC - We are the business behind business"
                style={{
                  maxHeight: "50px",
                  width: "auto",
                  objectFit: "contain",
                }}
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
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto">
              {/* 使用 Ant Design 的 Dropdown 组件 */}
              <li className="nav-item">
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <a
                    className="nav-link avenir-heavy text-uppercase d-flex align-items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                    {dict.header.solutions}{" "}
                    <span
                      className="csc-icon-sm c-i-arrow-thin-down ms-1"
                      style={{ color: "var(--primary-color)" }}
                    ></span>
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
                <Dropdown menu={{ items: itemsKnowledge }} trigger={["click"]}>
                  <a
                    className="nav-link avenir-heavy text-uppercase d-flex align-items-center"
                    onClick={(e) => e.preventDefault()}
                  >
                    {dict.header.knowledge}{" "}
                    <span
                      className="csc-icon-sm c-i-arrow-thin-down ms-1"
                      style={{ color: "var(--primary-color)" }}
                    ></span>
                  </a>
                </Dropdown>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link avenir-heavy text-uppercase"
                  href={`/${locale.lang}/about/`}
                >
                  {dict.header.about}
                </Link>
              </li>
            </ul>

            {/* 右侧按钮区域 */}
            <div className="d-flex align-items-center gap-2">
              <Link
                href={`/${locale.lang}/dashboard/`}
                className="btn-header-action"
              >
                {dict.header.dashboard}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
