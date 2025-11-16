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
            key: '1',
            label: (
                <button
                    // href="#"
                    onClick={() => changeLanguage('cn')}
                    style={{ textDecoration: 'none' }}
                >
                    中文
                </button>
            )
        },
        {
            key: '2',
            label: (
                <button
                    // href="#"
                    onClick={() => changeLanguage('en')}
                    style={{ textDecoration: 'none' }}
                >
                    EN
                </button>
            )
        }
    ];

    // 设置语言的函数
    const changeLanguage = (currentLang: any) => {
        document.cookie = `locale=${currentLang}; path=/; max-age=31536000`; // 1年

        if (lang !== currentLang) {
            router.push(`/${currentLang}`); // 更新 URL
        }
    };


  return (
  <footer className="bg-darkgray position-relative">
        <section className="footer container">
          <div className="row footer-top align-items-start justify-content-between pt-4">
            <div className="col-12 col-md-3 footer-logo mt-3 ps-md-4">
              <Link href="/cscglobal/home/">
                <img aria-hidden="true" width="180" height="47" src="/images/logo.png" alt="" />
              </Link>
            </div>
            <div className="col-12 col-md-8 col-lg-7 col-xl-6 footer-links">
              <nav className="footer-nav mt-4 mt-md-0 row justify-content-center justify-content-end" aria-label="footer">
                <ul className="footer-nav-list list-unstyled d-inline d-md-block col-6 col-xxl-6">
                  <li className="footer-nav-list-item">
                    <Link href="/about/" className="text-uppercase text-white">{dict.contact.title}</Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/service/privacy/" className="text-uppercase text-white">{dict.header.solutions}</Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="/service/legal/" className="text-uppercase text-white">{dict.header.knowledge}</Link>
                  </li>
                </ul>
                <ul className="footer-nav-list list-unstyled d-inline d-md-block col-5 col-xl-4 offset-1 offset-xl-2">
                  <li className="footer-nav-list-item">
                    <Link href="/about/" className="text-uppercase text-white">{dict.header.compliance}</Link>
                  </li>
                  <li className="footer-nav-list-item">
                    <Link href="https://my.cscglobal.com/cscportal/whois" target="_blank" className="text-uppercase text-white">{dict.header.support}</Link>
                  </li>
                  <li className="footer-nav-list-item">

                    <div className="flex items-center gap-6">
                        {/* PC 端的语言切换按钮 */}
                        <button type="button" className="flex items-center text-15 font-medium btn-primary !h-[2.5rem] hidden lg:flex">
                            <Dropdown menu={{ items: lang_items }}>
                                <div className="flex justify-center items-center gap-2">
                                    <span>{dict.header.lang}</span>
                                </div>
                            </Dropdown>
                        </button>
                    </div>
                    </li>
                </ul>
              </nav>
            </div>
          </div>
          <hr className="border-white"/>
          <div className="row justify-content-center">
            <div className="col-12">
              <p className="text-white text-center mb-0">Please visit the 
                <Link href="/service/privacy/">Privacy page</Link> for updates to our Privacy Notice in accordance with data privacy legislation.
              </p>
            </div>
          </div>
          <hr className="border-white"/>
          <div className="row py-2">
            <div className="col-12 col-md-6 footer-bbb-logo ps-md-4">
              <Link href="https://www.bbb.org/us/de/wilmington/profile/incorporation/corporation-service-company-0251-32001200/#sealclick" target="_blank" rel="nofollow">
                <img src="https://seal-delaware.bbb.org/seals/black-seal-200-42-whitetxt-bbb-32001200.png" alt="Corporation Service Company BBB Business Review" />
              </Link>
            </div>
            {/* <div className="col-12 col-md-6 footer-social text-end pe-2 d-flex align-items-center justify-content-end">
              <Link className="me-3" href="https://www.linkedin.com/company/cscsince1899/" target="_blank">
                <img width="36" height="36" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/icons/linkedin-logo-white.svg" alt="Check us out on LinkedIn" />
              </Link>
            </div> */}
          </div>
          <hr className="border-white"/>
          <div className="row">
            <div className="col-12 footer-legal-text text-center">
              <p className="text-white small">Copyright ©
                <span className="current-year">2025</span> Epoch Trust Chain. 
                <br className="d-lg-none" />All rights reserved.
                </p>
              </div>
            </div>
        </section>
      </footer>

  );
}






 