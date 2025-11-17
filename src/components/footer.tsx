"use client";

import { ParamProps } from "@/types/params";
import { Dropdown } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer({ lang, locale }: ParamProps) {
  const dict = lang.dict;
  const router = useRouter();

  const lang_items = [
    {
      key: "1",
      label: (
        <span
          // href="#"
          onClick={() => changeLanguage("cn")}
          style={{ textDecoration: "none", color: "#111827" }} // 文字改为白色
        >
          中文
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          // href="#"
          onClick={() => changeLanguage("en")}
          style={{ textDecoration: "none", color: "#111827" }} // 文字改为白色
        >
          EN
        </span>
      ),
    },
  ];

  // 设置语言的函数
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeLanguage = (currentLang: any) => {
    document.cookie = `locale=${currentLang}; path=/; max-age=31536000`; // 1年
    if (lang !== currentLang) {
      router.push(`/${currentLang}`); // 更新 URL
    }
  };

  return (
    <footer className="bg-darkgray position-relative">
      <section className="footer container py-5">
        <div className="row footer-top align-items-start justify-content-between">
          <div className="col-12 col-md-3 footer-logo mb-4 mb-md-0">
            <Link href={`/${locale.lang}/`} className="d-inline-block ms-4">
              <img
                className="footer-logo-img"
                src="/images/logo.png"
                alt="Epoch Trust Chain"
                style={{
                  maxHeight: "120px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>
          </div>
          <div className="col-12 col-md-8 col-lg-7 col-xl-6 footer-links">
            <nav
              className="footer-nav row justify-content-center justify-content-md-end"
              aria-label="footer"
            >
              <ul className="footer-nav-list list-unstyled d-inline d-md-block col-6 col-xxl-6 mb-0">
                <li className="footer-nav-list-item mb-3">
                  <Link
                    href={`/${locale.lang}/about/`}
                    className="text-uppercase text-white footer-link"
                  >
                    {dict.contact.title}
                  </Link>
                </li>
                <li className="footer-nav-list-item mb-3">
                  <Link
                    href={`/${locale.lang}/service/privacy/`}
                    className="text-uppercase text-white footer-link"
                  >
                    {dict.header.solutions}
                  </Link>
                </li>
                <li className="footer-nav-list-item mb-3">
                  <Link
                    href={`/${locale.lang}/service/legal/`}
                    className="text-uppercase text-white footer-link"
                  >
                    {dict.header.knowledge}
                  </Link>
                </li>
              </ul>
              <ul className="footer-nav-list list-unstyled d-inline d-md-block col-5 col-xl-4 offset-1 offset-xl-2 mb-0">
                <li className="footer-nav-list-item mb-3">
                  <Link
                    href={`/${locale.lang}/about/`}
                    className="text-uppercase text-white footer-link"
                  >
                    {dict.header.compliance}
                  </Link>
                </li>
                <li className="footer-nav-list-item">
                  <Dropdown
                    menu={{ items: lang_items }}
                    overlayStyle={{ background: "#fff", borderRadius: 6 }}
                  >
                    <button
                      type="button"
                      className="text-uppercase text-white footer-link bg-transparent border-0 d-flex align-items-center gap-2"
                      style={{ cursor: "pointer" }}
                    >
                      <span>{dict.header.lang}</span>
                      <span
                        className="csc-icon c-i-arrow-thin-down"
                        style={{ fontSize: "0.8rem" }}
                      ></span>
                    </button>
                  </Dropdown>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <hr className="border-white opacity-25 my-4" />

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <p className="text-white text-center mb-0 small opacity-75">
              Please visit the{" "}
              <Link
                href={`/${locale.lang}/service/privacy/`}
                className="text-white text-decoration-underline"
              >
                Privacy page
              </Link>{" "}
              for updates to our Privacy Notice in accordance with data privacy
              legislation.
            </p>
          </div>
        </div>

        {/* <hr className="border-white opacity-25 my-4"/> */}

        <div className="row">
          <div className="col-12 footer-legal-text text-center">
            <p className="text-white small mb-0 opacity-75">
              Copyright © <span className="current-year">2025</span> Epoch Trust
              Chain.
              <br className="d-lg-none" /> All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
