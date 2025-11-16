import '../../styles/core-css-style.css'
import '../../styles/ux.css'
import '../../styles/_root.scss';
import Footer from "@/components/footer";
import Header from "@/components/header";
import { getDictionary } from '@/dictionaries';
import { PageProps } from '@/types/params';
import Link from 'next/link';
export const runtime = 'edge';


export default async function Home({ params }: PageProps) {
    const { lang } = await params;

    const dict = await getDictionary(lang); // 确保 getDictionary 正常工作
  console.log('dict:', lang);

  return (
    <div id="pageTop" className="secondary-page private-client-services item-1703">
      <div id="hs-web-interactives-top-push-anchor" className="go3670563033"></div>
      <Header lang={{ dict }} locale={{ lang }} />
      <main
        className="colors-teal-purple service-page-template"
        id="main-content"
        tabIndex={-1}
        itemProp="articleBody"
      >
        <section aria-labelledby="hero-headline" id="hero" className="page-section page-section-hero page-section-set-bg-image overlay-navyteal-ltor position-relative in-view" data-page-section-bg="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/headers/Herowave-1300x86713.jpg" tabIndex={0} style={{ backgroundImage: "none" }}>
          <div className="container-fluid container-xl py-lg-5 position-relative z-index-1">
              <div className="row row-cols-1 row-cols-lg-2 gx-4 gx-xl-5 hero-row hero-row-boxes">
                  <div className="col-12 col-lg-7 col-xxl-8 pt-5 pt-lg-0 mb-lg-4 ps-3">
                      <div className="card h-100 hero-left-box bg-white shadow border-0">
                          <div className="card-body px-5 pt-4 pb-5">
                              <div className="breadcrumbs-container mt-3 mx-xxl-4">
                                  <div className="row hero-row breadcrumbs-hero-row">
                                      <nav aria-label="breadcrumb" className="page-breadcrumbs hero-col-left-breadcrumbs" 
                                      // data-icon-bg-className="bg-purplepink-ltor"
                                      >
                                          
<ol className="breadcrumb breadcrumb-default align-items-center">
    <li className="breadcrumb-item home-icon lh-1">
        <Link href="/cscglobal/home/">
            <span className="csc-icon-sm c-i-home breadcrumbs-home text-white rounded-circle px-2 py-2 bg-purplepink-ltor" aria-hidden="true"></span>
            <span className="visually-hidden">Home</span>
        </Link>
    </li>

    <li className="breadcrumb-item lh-1">{dict.about.heroTitle}</li></ol>

                                      </nav>
                                  </div>
                              </div>
                              <div className="hero-headline-container mt-4 mx-xxl-4">
                                  <div className="section-headline-top-border section-headline-top-border bg-purple"></div>
                                  <h1 id="hero-headline" className="text-navy lh-1 display-5">{dict.about.heroTitle}</h1>
                                  <p className="mt-3 mt-lg-4 pe-lg-3 pe-xl-5">{dict.about.heroSubtitle}</p>
                                  {/* <div className="hero-left-button my-4 mt-lg-5">
                                      <Link className="btn btn-navy rounded-pill text-uppercase" href="#section1">
                                          Learn more
                                          <span className="visually-hidden"> about private client services</span>
                                      </Link>
                                  </div> */}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 col-lg-5 col-xxl-4 border-0 py-5 py-lg-0 mb-lg-4 pe-3">
                      <div className="card h-100 bg-white shadow px-3">
                          <div className="card-body px-3 pt-3 pb-4">
                              <div className="csc-contact-container-headline border border-2 border-purple border-start-0 border-end-0 border-top-0 text-center mt-xl-2">
                                  <h2 className="text-uppercase text-navy fs-5 mt-1 avenir-black">{dict.contact.title}</h2>
                              </div>
                              {/* <div className="d-flex justify-content-end">
                                  <p className="required-text-copy mt-1 mb-1 pb-0 form-disclosure-text text-darkgray">All fields marked with <span className="text-danger avenir-heavy">*</span> are required.</p>
                              </div> */}
                              <div>
                                <div className="contact-card bg-white rounded-2xl p-8 mb-10">
            <div className="prose max-w-none mb-8 text-gray-600 leading-relaxed">
                <p>{dict.contact.desc}</p>
            </div>

            <div className="text-center mb-10">
                <a href="mailto:88888888@gmail.com?subject=咨询链上信托服务" className="">
                    <i className="fa fa-paper-plane mr-2"></i>
                    {dict.contact.button1}
                </a>
            </div>

            <div className="flex items-center my-8">
                <div className="flex-grow h-px bg-gray-200"></div>
                <span className="px-4 text-gray-400 font-medium">{dict.contact.button2}</span>
                <div className="flex-grow h-px bg-gray-200"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start p-4 rounded-lg bg-blue-50">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <i className="fa fa-phone text-blue-600 text-xl"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{dict.contact.phone}</h3>
                        <a href="tel:+85268745045" className="text-gray-600 hover:text-blue-600 transition-colors">
                            +852 6874 5045
                        </a>
                    </div>
                </div>
                <div className="flex items-start p-4 rounded-lg bg-blue-50">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <i className="fa fa-envelope text-blue-600 text-xl"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{dict.contact.email}</h3>
                        <a href="mailto:88888888@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                            88888888@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
                              </div>
                            {/* <form
                            className="contact-form csc-form csc-lead-form csc-sales-form row g-3 csc-form-validate mt-xl-3 mt-xxl-1"
                            id="cscgMarketingLead"
                            name="cscgMarketingLead"
                            acceptCharset="UTF-8"
                            autoComplete="off"
                            encType="multipart/form-data"
                            method="post"
                            noValidate
                            action="/service/templates/rebrand_reskin/assets/forms/csc-marketing-lead.php"
                            >    
                <div className="col-md-6 col-lg-12 form-floating mt-2">
                    <input name="salesFirstName" aria-required="true" type="text" className="form-control csc-form-control" id="salesFirstName" placeholder=" " maxLength={255} />
                    <label htmlFor="salesFirstName" className="form-label csc-form-label ms-2 text-gray avenir-oblique">First name <span aria-hidden="true" className="text-danger avenir-heavy">*</span></label>
                </div>
                <div className="col-md-6 col-lg-12 form-floating mt-2">
                    <input name="salesLastName" aria-required="true" type="text" className="form-control csc-form-control" id="salesLastName" placeholder=" " maxLength={255} />
                    <label htmlFor="salesLastName" className="form-label csc-form-label ms-2 text-gray avenir-oblique">Last name <span aria-hidden="true" className="text-danger avenir-heavy">*</span></label>
                </div>
                <div className="col-md-6 col-lg-12 form-floating mt-2">
                    <input name="salesCompanyName" aria-required="true" type="text" className="form-control csc-form-control" id="salesCompanyName" placeholder=" " maxLength={255} />
                    <label htmlFor="salesCompanyName" className="form-label csc-form-label ms-2 text-gray avenir-oblique">Company <span aria-hidden="true" className="text-danger avenir-heavy">*</span></label>
                </div>
                <div className="col-md-6 col-lg-12 mt-2">
                    <label className="select-label visually-hidden-focusable" htmlFor="salesCountry">Country <span aria-hidden="true" className="text-danger">*</span></label>
                    <select id="salesCountry" name="salesCountry" className="form-select csc-form-select" aria-required="true" aria-label="Please select a country">
                        <option value="" >Country *</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="-------------------------------------------">-------------------------------------------</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Brunei Darussalam">Brunei Darussalam</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Curaçao">Curaçao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Territories">French Southern Territories</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">Netherlands Antilles</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sint Maarten">Sint Maarten</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">Virgin Islands, British</option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Zambia">Zambia</option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-12 form-floating mt-2">
                    <input name="salesPhone" aria-required="true" type="tel" className="form-control csc-form-control" id="salesPhone" placeholder=" " maxLength={255} />
                    <label htmlFor="salesPhone" className="form-label csc-form-label ms-2 text-gray avenir-oblique">Business phone <span aria-hidden="true" className="text-danger avenir-heavy">*</span></label>
                </div>
                <div className="col-md-6 col-lg-12 form-floating mt-2">
                    <input name="salesEmail" aria-required="true" type="email" className="form-control csc-form-control" id="salesEmail" placeholder=" " maxLength={255} />
                    <label htmlFor="salesEmail" className="form-label csc-form-label ms-2 text-gray avenir-oblique">Email <span aria-hidden="true" className="text-danger avenir-heavy">*</span></label>
                </div>
                <div className="col-md-12 form-floating mt-2">
                    <textarea name="salesMessage" aria-required="true" className="form-control csc-form-control csc-form-textarea-short" id="salesMessage" placeholder=" "></textarea>
                    <label htmlFor="salesMessage" className="form-label csc-form-label ms-2 text-gray avenir-oblique">
                        Please tell us how CSC can help <span aria-hidden="true" className="text-danger avenir-heavy">*</span>
                        <span className="visually-hidden"> Maximum of 250 characters allowed</span>
                    </label>
                    <div id="textareaHelp" className="form-disclosure-text" aria-hidden="true">Maximum of 250 characters allowed</div>
                </div>
                <div className="csc-form-hidden-fields">
                    <input id="submissionPageUrl" maxLength={255} name="submissionPageUrl" type="hidden" value="/service/entity-solutions/private-client-services/"/>
                    <input id="convertingPageReferrer" maxLength={255} name="convertingPageReferrer" type="hidden" value="https://www.cscglobal.com/service/entity-solutions/spv-management/"/>
                    <input id="pageIq" maxLength={255} name="pageIq" type="hidden" value="undefined"/>
                    <input id="utmCampaign" maxLength={255} name="utmCampaign" type="hidden" value="undefined"/>
                    <input id="utmContent" maxLength={255} name="utmContent" type="hidden" value="undefined"/>
                    <input id="utmMedium" maxLength={255} name="utmMedium" type="hidden" value="undefined"/>
                    <input id="utmSource" maxLength={255} name="utmSource" type="hidden" value="undefined"/>
                    <input id="utmTerm" maxLength={255} name="utmTerm" type="hidden" value="undefined"/>
                    <input id="firstVisitCookieReferrer" maxLength={255} name="firstVisitCookieReferrer" type="hidden" value="https3Awww.cscglobal.comcscglobalhome"/>
                    <input id="cookieId" maxLength={255} name="cookieId" type="hidden" value=""/>
                    <input id="cookieUtmCampaign" maxLength={255} name="cookieUtmCampaign" type="hidden" value=""/>
                    <input id="cookieUtmContent" maxLength={255} name="cookieUtmContent" type="hidden" value=""/>
                    <input id="cookieUtmMedium" maxLength={255} name="cookieUtmMedium" type="hidden" value=""/>
                    <input id="cookieUtmSource" maxLength={255} name="cookieUtmSource" type="hidden" value=""/>
                    <input id="cookieUtmTerm" maxLength={255} name="cookieUtmTerm" type="hidden" value=""/>
                    <input id="xReference" maxLength={255} name="xReference" type="hidden" value="CLS EN SRVC PRIV private-client-services"/>
                    <input id="uriHost" className="field text medium" maxLength={255} name="uriHost" type="hidden" value="www.cscglobal.com"/>
                    <input id="redirectPagePath" maxLength={255} name="redirectPagePath" type="hidden"/>
                    <input id="taskRedirect" maxLength={255} name="taskRedirect" type="hidden"/>
                </div>
                <input type="hidden" name="6d88c8b1478c91436f23afc5ff6ba8c4" value="1"/>	
                <div className="col-12 mt-0">
            <p
            className="recaptcha-disclosure form-disclosure-text text-darkgray"
            style={{ display: "block" }}
            >
            This site is protected by reCAPTCHA and the Google{" "}
            <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
            </Link>{" "}
            apply.
            </p>
            <div
            id="marketingRecap"
            className="recaptcha-container-marketing-forms recaptcha-container-marketing"
            >
            <div
                className="grecaptcha-badge"
                data-style="inline"
                style={{ width: "256px", height: "60px", boxShadow: "gray 0px 0px 5px" }}
            >
                <div className="grecaptcha-logo">
                <iframe
                    title="reCAPTCHA"
                    width={256}
                    height={60}
                    role="presentation"
                    name="a-3v6mfvwj7f3h"
                    frameBorder={0}
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ld-ICQjAAAAAIuhzL_ikqUxIOZ0vbsG5CWheL3g&amp;co=aHR0cHM6Ly93d3cuY3NjZ2xvYmFsLmNvbTo0NDM.&amp;hl=en&amp;v=cLm1zuaUXPLFw7nzKiQTH1dX&amp;size=invisible&amp;badge=inline&amp;anchor-ms=20000&amp;execute-ms=15000&amp;cb=6r14kc2lb2uo"
                ></iframe>
                </div>
                <div className="grecaptcha-error"></div>
                <textarea
                id="g-recaptcha-response"
                name="g-recaptcha-response"
                className="g-recaptcha-response"
                style={{
                    width: "250px",
                    height: "40px",
                    border: "1px solid rgb(193, 193, 193)",
                    margin: "10px 25px",
                    padding: 0,
                    resize: "none",
                    display: "none",
                }}
                ></textarea>
            </div>
            <iframe style={{ display: "none" }}></iframe>
            </div>
                </div>
                <div className="col-12 d-flex justify-content-center mb-2">
                    <button id="marketingFormSubmit" name="marketingFormSubmit" type="submit" className="btn btn-navy text-uppercase">
                        Submit inquiry
                    </button>
                </div>
                <div className="spinner-sm"></div>
                <div className="lead-form-overlay"></div>
                            </form> */}

                          </div>
                      </div>                        
                  </div>
              </div>
          </div>
      </section>

      <nav aria-label="page" id="secondaryNav" className="navbar sticky-top secondary-page-navbar d-none d-lg-flex py-0 nav-container-sticky">
          <div className="container-fluid container-xl secondary-page-navbar-container">
              <ul className="nav secondary-nav nav-fill">
                  <li className="nav-item secondary-nav-item position-relative">
                      <Link className="nav-link secondary-page-nav-link text-white link-with-icon avenir-medium d-flex align-items-center justify-content-center" href="#section1">
                          <span aria-hidden="true" className="csc-icon c-i-question me-2"></span>
                          <span className="link-text-underline">{dict.about.whoWeAreSectionTitle}</span>
                      </Link>
                      <div id="section1-indicator" className="active-section-indicator bg-teal"></div>
                  </li>
                  <li className="nav-item secondary-nav-item position-relative">
                      <Link className="nav-link secondary-page-nav-link text-white link-with-icon avenir-medium d-flex align-items-center justify-content-center" href="#section2">
                          <span aria-hidden="true" className="csc-icon c-i-handshake me-2"></span>
                          <span className="link-text-underline">{dict.about.cooperationSectionTitle}</span>
                      </Link>
                      <div id="section2-indicator" className="active-section-indicator bg-teal"></div>
                  </li>
                  <li className="nav-item secondary-nav-item position-relative">
                      <Link className="nav-link secondary-page-nav-link text-white link-with-icon avenir-medium d-flex align-items-center justify-content-center" href="#section3">
                          <span aria-hidden="true" className="csc-icon c-i-layers-stack me-2"></span>
                          <span className="link-text-underline">{dict.about.riskSectionTitle}</span>
                      </Link>
                      <div id="section3-indicator" className="active-section-indicator bg-teal"></div>
                  </li>
              </ul>
          </div>
      </nav>
      <div className="sticky-indicator position-absolute"></div>

      <section aria-labelledby="section1-headline" id="section1" className="page-section bg-white px-3 px-xl-0 py-5" tabIndex={0}>
          <div className="container-fluid container-xl page-section-container pe-xl-0">
              <div className="row justify-content-between">
                  <div className="col-12 pb-5">
                      <div className="mx-2 mx-md-3 mx-xl-0">
                          <div className="page-section-headline-container mb-4">
                              <div className="section-headline-top-border bg-teal"></div>
                              <h2 id="section1-headline" className="text-navy display-6">{dict.about.whoWeAreSectionTitle}</h2>
                          </div>
                          <p>{dict.about.whoWeAreDescription}<br/><br/>{dict.about.whoWeAreRoleIntro}</p>
                          <div id="whyCscStats" className="row row-cols-md-2 g-4 g-lg-5 page-section-content justify-content-center mt-5">
                              <div className="col-12 col-md-6 col-lg-5 csc-card-col">
                                  <div className="card csc-card h-100 border-0 d-flex flex-column align-items-center bg-transparent text-center">
                                      <div className="stat-number-text-container d-flex flex-column align-items-center text-center px-3 mb-1">
                                          <span aria-hidden="true" className="csc-icon-xxl c-i-international text-purple"></span>
                                      </div>
                                      <h3 className="text-default fs-4 mt-3 px-4">{dict.about.whoWeAreRole1Title}</h3>
                                      
                                      <p className="px-4 my-1 pb-0 mt-3">
                                          {dict.about.whoWeAreRole1Content} 
                                      </p>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-5 csc-card-col border-before-lg position-relative">
                                  <div className="card csc-card h-100 border-0 d-flex flex-column align-items-center bg-transparent text-center">
                                      <div className="stat-number-text-container d-flex flex-column align-items-center text-center px-3 mb-1">
                                          <span aria-hidden="true" className="csc-icon-xxl c-i-map-location text-purple"></span>
                                      </div>
                                      <h3 className="text-default fs-4 mt-3 px-4">{dict.about.whoWeAreRole2Title}</h3>
                                      
                                      <p className="px-4 my-1 pb-0 mt-3">
                                           {dict.about.whoWeAreRole2Content} 
                                      </p>
                                  </div>
                              </div>
                              <div className="col-12 col-md-6 col-lg-5 csc-card-col border-before-lg position-relative">
                                  <div className="card csc-card h-100 border-0 d-flex flex-column align-items-center bg-transparent text-center">
                                      <div className="stat-number-text-container d-flex flex-column align-items-center text-center px-3 mb-1">
                                          <span aria-hidden="true" className="csc-icon-xxl c-i-map-location text-purple"></span>
                                      </div>
                                      <h3 className="text-default fs-4 mt-3 px-4">{dict.about.whoWeAreRole3Title}</h3>
                                      
                                      <p className="px-4 my-1 pb-0 mt-3">
                                           {dict.about.whoWeAreRole3Content} 
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <p>{dict.about.whoWeAreBelief}</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section aria-labelledby="section2-headline" id="section2" className="page-section bg-lightergray px-3 px-xl-0 py-5" tabIndex={0}>
          <div className="container-fluid container-xl page-section-container">
              <div className="row mx-2 mx-md-3 mx-xl-0">
                  <div className="col">
                      <div className="page-section-headline-container mb-3 mt-3 ms-2 ms-md-0">
                          <div className="section-headline-top-border bg-purple"></div>
                          <h2 id="section2-headline" className="text-navy display-6">{dict.about.cooperationSectionTitle}</h2>
                      </div>
                  </div>
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 page-section-service-tiles mb-5 mt-0 px-xl-4 justify-content-center">
                  <div className="col col-12 col-md-6 col-lg-4 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card h-100 shadow bg-purplepink-navyteal-hover">

                          

                        <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                            <div className="card-body-upper d-flex align-items-center justify-content-center">
                                <div className="resource-tile-image-container">
                                    <span aria-hidden="true" className="csc-icon c-i-org-chart-flat-gear text-white"></span>
                                </div>
                            </div>
                            <div className="card-body-middle">
                                <h3 className="card-title text-navy mt-4 px-4 text-center">{dict.about.cooperationCard1Title}</h3>
                            </div>
                            <div className="card-body-lower mt-3 pt-3 pb-4 text-center">
                                {dict.about.cooperationCard1Content}
                            </div>
                        </div>


                      </div>
                  </div>

                  <div className="col col-12 col-md-6 col-lg-4 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card h-100 shadow bg-purplepink-navyteal-hover">

                          

                        <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                            <div className="card-body-upper d-flex align-items-center justify-content-center">
                                <div className="resource-tile-image-container">
                                    <span aria-hidden="true" className="csc-icon c-i-home text-white"></span>
                                </div>
                            </div>
                            <div className="card-body-middle">
                                <h3 className="card-title text-navy mt-4 px-4 text-center">{dict.about.cooperationCard2Title}</h3>
                            </div>
                            <div className="card-body-lower mt-3 pt-3 pb-4 text-center">
                                {dict.about.cooperationCard2Content}

                                {/* <Link href="/service/entity-solutions/private-client-services/estate-planning/" className="btn btn-navy text-uppercase">
                                    Learn more
                                    <span className="visually-hidden"> about succession and estate planning</span>
                                </Link> */}
                            </div>
                        </div>


                      </div>
                  </div>

                  <div className="col col-12 col-md-6 col-lg-4 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card h-100 shadow bg-purplepink-navyteal-hover">

                          

                        <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                            <div className="card-body-upper d-flex align-items-center justify-content-center">
                                <div className="resource-tile-image-container">
                                    <span aria-hidden="true" className="csc-icon c-i-team-full text-white"></span>
                                </div>
                            </div>
                            <div className="card-body-middle">
                                <h3 className="card-title text-navy mt-4 px-4 text-center">{dict.about.cooperationCard3Title}</h3>
                            </div>
                            <div className="card-body-lower mt-3 pt-3 pb-4 text-center">
                                {dict.about.cooperationCard3Content}
                                {/* <Link href="/service/entity-solutions/private-client-services/family-office-services/" className="btn btn-navy text-uppercase">
                                    Learn more
                                    <span className="visually-hidden"> about family office services</span>
                                </Link> */}
                            </div>
                        </div>


                      </div>
                  </div>
                                    
                

                      <div className="col col-12 col-md-6 col-lg-4 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card h-100 shadow bg-purplepink-navyteal-hover">

                          

                        <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                            <div className="card-body-upper d-flex align-items-center justify-content-center">
                                <div className="resource-tile-image-container">
                                    <span aria-hidden="true" className="csc-icon c-i-team-full text-white"></span>
                                </div>
                            </div>
                            <div className="card-body-middle">
                                <h3 className="card-title text-navy mt-4 px-4 text-center">{dict.about.cooperationCard4Title}</h3>
                            </div>
                            <div className="card-body-lower mt-3 pt-3 pb-4 text-center">
                                {dict.about.cooperationCard4Content}
                                {/* <Link href="/service/entity-solutions/private-client-services/family-office-services/" className="btn btn-navy text-uppercase">
                                    Learn more
                                    <span className="visually-hidden"> about family office services</span>
                                </Link> */}
                            </div>
                        </div>


                      </div>
                  </div>

                        <div className="col col-12 col-md-6 col-lg-4 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card h-100 shadow bg-purplepink-navyteal-hover">

                          

                        <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                            <div className="card-body-upper d-flex align-items-center justify-content-center">
                                <div className="resource-tile-image-container">
                                    <span aria-hidden="true" className="csc-icon c-i-team-full text-white"></span>
                                </div>
                            </div>
                            <div className="card-body-middle">
                                <h3 className="card-title text-navy mt-4 px-4 text-center">{dict.about.cooperationCard5Title}</h3>
                            </div>
                            <div className="card-body-lower mt-3 pt-3 pb-4 text-center">
                                {dict.about.cooperationCard5Content}
                                {/* <Link href="/service/entity-solutions/private-client-services/family-office-services/" className="btn btn-navy text-uppercase">
                                    Learn more
                                    <span className="visually-hidden"> about family office services</span>
                                </Link> */}
                            </div>
                        </div>


                      </div>
                  </div>

              </div>
          </div>
      </section>

      <section aria-labelledby="section3-headline" id="section3" className="page-section bg-lightestgray px-3 px-xl-0 py-5" tabIndex={0}>
          <div className="container-fluid container-xl page-section-container">
              <div className="row mx-2 mx-md-3 mx-xl-0">
                  <div className="col">
                      <div className="page-section-headline-container mb-3 mt-3 ms-2 ms-md-0">
                          <div className="section-headline-top-border bg-teal"></div>
                          <h2 id="section3-headline" className="text-navy display-6">{dict.about.keyComplianceTitle}</h2>
                      </div>
                  </div>
              </div>
              <div className="row row-cols-1 row-cols-md-2 g-4 g-lg-5 page-section-resource-tiles mb-5 mt-0 px-xl-4 justify-content-around">

                  <div className="col col-12 col-md-6 col-lg-5 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card tile-border-grad-navyteal h-100 shadow">
                        <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                            <div className="card-body-upper flex-fill bg-white pb-4">
                                {/* <div className="resource-tile-image-container">
                                    <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/Resourcetile-400x21417.jpg" alt=""/>
                                </div>
                                <div className="resource-tile-text-container px-4 mt-4">
                                
                                    <h3 className="card-title text-navy">
                                        Family Offices Buy into Private Equity—But They Expect Bespoke Service
                                    </h3>
                                </div> */}
                                <div className="resource-tile-text-container px-4 mt-4">
                                
                                    <h3 className="card-title text-navy">
                                        {dict.about.risk1Title}
                                    </h3>
                                    <p>
                                        {dict.about.risk1Content}
                                    </p>
                                </div>
                            </div>
                            {/* <div className="card-body-lower w-100">
                                <Link href="https://blog.cscglobal.com/family-offices-buy-into-private-equity-but-they-expect-bespoke-service/" target="_blank" className="card-link link-with-icon card-link-resource">
                                    <span aria-hidden="true" className="link-with-icon-text text-uppercase">Read more</span>
                                
                                    <span className="visually-hidden">Read more about Family Offices Buy into Private Equity - But They Expect Bespoke Service now</span>
                                    <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                                </Link>
                            </div> */}
                        </div>
                        <div className="d-none hidden-filter-data">
                        
                            
                            <span className="filter-data-btn resource-type">blog</span>
                        
                        
                            <span className="filter-data1 category">entity solutions</span>
                            <span className="filter-data2"></span>

                            <span className="month">September</span>
                            <span className="year">2022</span>
                        </div>


                      </div>
                  </div>

                  <div className="col col-12 col-md-6 col-lg-5 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card tile-border-grad-navyteal h-100 shadow">

                          

                <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                    <div className="card-body-upper flex-fill bg-white pb-4">
                        {/* <div className="resource-tile-image-container">
                            <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/Resourcetile-400x21413.jpg" alt=""/>
                        </div>
                        <div className="resource-tile-text-container px-4 mt-4">
                        
                            <h3 className="card-title text-navy">
                                Trustee Spotlight:<br/>
                                <span className="fs-5 text-default avenir-medium">Why Managed Investments Need Regular Reviews</span>
                            </h3>
                        </div> */}
                        <div className="resource-tile-text-container px-4 mt-4">
                                
                                    <h3 className="card-title text-navy">
                                        {dict.about.risk2Title}
                                    </h3>
                                    <p>
                                        {dict.about.risk2Content}
                                    </p>
                                </div>
                    </div>
                    {/* <div className="card-body-lower w-100">
                        <Link href="https://blog.cscglobal.com/trustee-spotlight-why-managed-investments-need-regular-reviews/" target="_blank" className="card-link link-with-icon card-link-resource">
                            <span aria-hidden="true" className="link-with-icon-text text-uppercase">Read more</span>
                        
                            
                            <span className="visually-hidden">Read more about Trustee Spotlight: Why Managed Investments Need Regular Reviews now</span>
                            <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                        </Link>
                    </div> */}
                </div>
                <div className="d-none hidden-filter-data">
                
                
                    <span className="filter-data-btn resource-type">blog</span>
                
                
                    <span className="filter-data1 category">entity solutions</span>
                    <span className="filter-data2"></span>

                    <span className="month">July</span>
                    <span className="year">2022</span>
                </div>


                      </div>
                  </div>

                                    <div className="col col-12 col-md-6 col-lg-5 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card tile-border-grad-navyteal h-100 shadow">

                          

                <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                    <div className="card-body-upper flex-fill bg-white pb-4">
                        {/* <div className="resource-tile-image-container">
                            <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/Resourcetile-400x21413.jpg" alt=""/>
                        </div>
                        <div className="resource-tile-text-container px-4 mt-4">
                        
                            <h3 className="card-title text-navy">
                                Trustee Spotlight:<br/>
                                <span className="fs-5 text-default avenir-medium">Why Managed Investments Need Regular Reviews</span>
                            </h3>
                        </div> */}
                        <div className="resource-tile-text-container px-4 mt-4">
                                
                                    <h3 className="card-title text-navy">
                                        {dict.about.risk3Title}
                                    </h3>
                                    <p>
                                        {dict.about.risk3Content}
                                    </p>
                                </div>
                    </div>
                    {/* <div className="card-body-lower w-100">
                        <Link href="https://blog.cscglobal.com/trustee-spotlight-why-managed-investments-need-regular-reviews/" target="_blank" className="card-link link-with-icon card-link-resource">
                            <span aria-hidden="true" className="link-with-icon-text text-uppercase">Read more</span>
                        
                            
                            <span className="visually-hidden">Read more about Trustee Spotlight: Why Managed Investments Need Regular Reviews now</span>
                            <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                        </Link>
                    </div> */}
                </div>
                <div className="d-none hidden-filter-data">
                
                
                    <span className="filter-data-btn resource-type">blog</span>
                
                
                    <span className="filter-data1 category">entity solutions</span>
                    <span className="filter-data2"></span>

                    <span className="month">July</span>
                    <span className="year">2022</span>
                </div>


                      </div>
                  </div>


                                    <div className="col col-12 col-md-6 col-lg-5 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card tile-border-grad-navyteal h-100 shadow">

                          

                <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                    <div className="card-body-upper flex-fill bg-white pb-4">
                        {/* <div className="resource-tile-image-container">
                            <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/Resourcetile-400x21413.jpg" alt=""/>
                        </div>
                        <div className="resource-tile-text-container px-4 mt-4">
                        
                            <h3 className="card-title text-navy">
                                Trustee Spotlight:<br/>
                                <span className="fs-5 text-default avenir-medium">Why Managed Investments Need Regular Reviews</span>
                            </h3>
                        </div> */}
                        <div className="resource-tile-text-container px-4 mt-4">
                                
                                    <h3 className="card-title text-navy">
                                        {dict.about.risk4Title}
                                    </h3>
                                    <p>
                                        {dict.about.risk4Content}
                                    </p>
                                </div>
                    </div>
                    {/* <div className="card-body-lower w-100">
                        <Link href="https://blog.cscglobal.com/trustee-spotlight-why-managed-investments-need-regular-reviews/" target="_blank" className="card-link link-with-icon card-link-resource">
                            <span aria-hidden="true" className="link-with-icon-text text-uppercase">Read more</span>
                        
                            
                            <span className="visually-hidden">Read more about Trustee Spotlight: Why Managed Investments Need Regular Reviews now</span>
                            <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                        </Link>
                    </div> */}
                </div>
                <div className="d-none hidden-filter-data">
                
                
                    <span className="filter-data-btn resource-type">blog</span>
                
                
                    <span className="filter-data1 category">entity solutions</span>
                    <span className="filter-data2"></span>

                    <span className="month">July</span>
                    <span className="year">2022</span>
                </div>


                      </div>
                  </div>


                                    <div className="col col-12 col-md-6 col-lg-5 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card tile-border-grad-navyteal h-100 shadow">

                          

                <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                    <div className="card-body-upper flex-fill bg-white pb-4">
                        {/* <div className="resource-tile-image-container">
                            <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/Resourcetile-400x21413.jpg" alt=""/>
                        </div>
                        <div className="resource-tile-text-container px-4 mt-4">
                        
                            <h3 className="card-title text-navy">
                                Trustee Spotlight:<br/>
                                <span className="fs-5 text-default avenir-medium">Why Managed Investments Need Regular Reviews</span>
                            </h3>
                        </div> */}
                        <div className="resource-tile-text-container px-4 mt-4">
                                
                                    <h3 className="card-title text-navy">
                                        {dict.about.risk5Title}
                                    </h3>
                                    <p>
                                        {dict.about.risk5Content}
                                    </p>
                                </div>
                    </div>
                    {/* <div className="card-body-lower w-100">
                        <Link href="https://blog.cscglobal.com/trustee-spotlight-why-managed-investments-need-regular-reviews/" target="_blank" className="card-link link-with-icon card-link-resource">
                            <span aria-hidden="true" className="link-with-icon-text text-uppercase">Read more</span>
                        
                            
                            <span className="visually-hidden">Read more about Trustee Spotlight: Why Managed Investments Need Regular Reviews now</span>
                            <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                        </Link>
                    </div> */}
                </div>
                <div className="d-none hidden-filter-data">
                
                
                    <span className="filter-data-btn resource-type">blog</span>
                
                
                    <span className="filter-data1 category">entity solutions</span>
                    <span className="filter-data2"></span>

                    <span className="month">July</span>
                    <span className="year">2022</span>
                </div>


                      </div>
                  </div>


                                    <div className="col col-12 col-md-6 col-lg-5 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card tile-border-grad-navyteal h-100 shadow">

                          

                <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                    <div className="card-body-upper flex-fill bg-white pb-4">
                        {/* <div className="resource-tile-image-container">
                            <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/Resourcetile-400x21413.jpg" alt=""/>
                        </div>
                        <div className="resource-tile-text-container px-4 mt-4">
                        
                            <h3 className="card-title text-navy">
                                Trustee Spotlight:<br/>
                                <span className="fs-5 text-default avenir-medium">Why Managed Investments Need Regular Reviews</span>
                            </h3>
                        </div> */}
                        <div className="resource-tile-text-container px-4 mt-4">
                                
                                    <h3 className="card-title text-navy">
                                        {dict.about.risk6Title}
                                    </h3>
                                    <p>
                                        {dict.about.risk6Content}
                                    </p>
                                </div>
                    </div>
                    {/* <div className="card-body-lower w-100">
                        <Link href="https://blog.cscglobal.com/trustee-spotlight-why-managed-investments-need-regular-reviews/" target="_blank" className="card-link link-with-icon card-link-resource">
                            <span aria-hidden="true" className="link-with-icon-text text-uppercase">Read more</span>
                        
                            
                            <span className="visually-hidden">Read more about Trustee Spotlight: Why Managed Investments Need Regular Reviews now</span>
                            <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                        </Link>
                    </div> */}
                </div>
                <div className="d-none hidden-filter-data">
                
                
                    <span className="filter-data-btn resource-type">blog</span>
                
                
                    <span className="filter-data1 category">entity solutions</span>
                    <span className="filter-data2"></span>

                    <span className="month">July</span>
                    <span className="year">2022</span>
                </div>


                      </div>
                  </div>


                                    <div className="col col-12 col-md-6 col-lg-5 csc-cta-card-col filter-item">
                      <div className="card csc-cta-card bg-white zoom-card tile-border-grad-navyteal h-100 shadow">

                          

                <div className="card-body d-flex flex-column justify-content-between px-0 py-0">
                    <div className="card-body-upper flex-fill bg-white pb-4">
                        {/* <div className="resource-tile-image-container">
                            <img aria-hidden="true" width="100%" src="https://cscwebcontentstorage.blob.core.windows.net/cscmarketing-cscglobal-media/images/resources/Resourcetile-400x21413.jpg" alt=""/>
                        </div>
                        <div className="resource-tile-text-container px-4 mt-4">
                        
                            <h3 className="card-title text-navy">
                                Trustee Spotlight:<br/>
                                <span className="fs-5 text-default avenir-medium">Why Managed Investments Need Regular Reviews</span>
                            </h3>
                        </div> */}
                        <div className="resource-tile-text-container px-4 mt-4">
                                
                                    <h3 className="card-title text-navy">
                                        {dict.about.risk7Title}
                                    </h3>
                                    <p>
                                        {dict.about.risk7Content}
                                    </p>
                                </div>
                    </div>
                    {/* <div className="card-body-lower w-100">
                        <Link href="https://blog.cscglobal.com/trustee-spotlight-why-managed-investments-need-regular-reviews/" target="_blank" className="card-link link-with-icon card-link-resource">
                            <span aria-hidden="true" className="link-with-icon-text text-uppercase">Read more</span>
                        
                            
                            <span className="visually-hidden">Read more about Trustee Spotlight: Why Managed Investments Need Regular Reviews now</span>
                            <span aria-hidden="true" className="csc-icon c-i-arrow-right ms-2"></span>
                        </Link>
                    </div> */}
                </div>
                <div className="d-none hidden-filter-data">
                
                
                    <span className="filter-data-btn resource-type">blog</span>
                
                
                    <span className="filter-data1 category">entity solutions</span>
                    <span className="filter-data2"></span>

                    <span className="month">July</span>
                    <span className="year">2022</span>
                </div>


                      </div>
                  </div>

              </div>
              <div className="centered-cta-row text-center mt-5">
                  <Link href="/service/resources/" className="btn btn-navy text-uppercase mt-4">View all resources</Link>
              </div>
          </div>
      </section>
      
</main>
 

        

<div id="searchResultsModal" className="modal search-results-modal" tabIndex={-1}>
    <div className="modal-dialog">
        <div className="modal-content border border-3 border-teal">
            <div className="modal-header">
                <span className="csc-icon csc-icon-md c-i-search text-teal d-none d-md-inline me-2"></span>
                <h2 className="modal-title text-navy avenir-heavy text-uppercase h3">Search results</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="container-fluid">
                    <div id="st-results-container"></div>
                </div>
            </div>
        </div>
    </div>
</div>


<div id="footer-sticky-banner" className="footer-sticky-banner bg-purple z-index-1" data-paired-section-id="#hero">
  <div className="container-fluid container-xl">
    <div className="row py-2">
      <div className="col d-flex justify-content-center align-items-center">
        <p className="my-0 text-white avenir me-4 d-none d-md-block">Need help from our experts?</p>
      	<Link href="#hero" className="btn btn-white-outline rounded-pill text-uppercase d-flex align-items-center py-2 px-3">
          {dict.contact.title}
          <span aria-hidden="true" className="csc-icon-sm c-i-arrow-up ms-2"></span>
        </Link>
      </div>
    </div>
  </div>
</div>

<Footer lang={{ dict }} locale={{ lang }}/>




</div>

  );
}
