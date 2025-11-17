import "../../styles/core-css-style.css";
import "../../styles/ux.css";
import "../../styles/_root.scss";
import "../../styles/about.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { getDictionary } from "@/dictionaries";
import { PageProps } from "@/types/params";
import Link from "next/link";
import Image from "next/image";
export const runtime = "edge";

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  const dict = await getDictionary(lang); // 确保 getDictionary 正常工作
  console.log("dict:", lang);

  return (
    <div
      id="pageTop"
      className="secondary-page private-client-services item-1703"
    >
      <Header lang={{ dict }} locale={{ lang }} />
      <main
        className="about-page-main"
        id="main-content"
        tabIndex={-1}
        itemProp="articleBody"
      >
        <section
          aria-labelledby="hero-headline"
          id="hero"
          className="about-hero-section position-relative"
          tabIndex={0}
        >
          <div className="container-fluid container-xl py-5 position-relative">
            <div className="row gx-4 gx-xl-5 align-items-stretch">
              <div className="col-12 col-lg-7 col-xxl-8 mb-4 mb-lg-0">
                <div className="about-hero-card h-100 bg-white shadow-lg rounded-4 overflow-hidden">
                  <div className="card-body p-4 p-lg-5">
                    <div className="about-hero-content">
                      <div className="about-hero-border mb-3"></div>
                      <h1
                        id="hero-headline"
                        className="about-hero-title display-6 fw-bold mb-4"
                      >
                        {dict.about.heroTitle}
                      </h1>
                      <p className="about-hero-subtitle fs-5 text-muted mb-4">
                        {dict.about.heroSubtitle}
                      </p>
                      <div className="about-hero-image-wrapper rounded-3 overflow-hidden mt-4">
                        <Image
                          src="/images/about.jpg"
                          alt="about us"
                          width={800}
                          height={600}
                          className="img-fluid about-hero-image"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5 col-xxl-4">
                <div className="about-contact-card h-100 bg-white shadow-lg rounded-4">
                  <div className="card-body p-4 p-lg-5">
                    <div className="about-contact-header text-center mb-4">
                      <div className="about-contact-icon-wrapper mx-auto mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                      </div>
                      <h2 className="about-contact-title fs-4 fw-bold mb-2">
                        {dict.contact.title}
                      </h2>
                      <p className="about-contact-desc text-muted mb-4">
                        {dict.contact.desc}
                      </p>
                    </div>

                    <div className="about-contact-actions">
                      <a
                        href="mailto:88888888@gmail.com?subject=咨询链上信托服务"
                        className="about-contact-btn btn btn-primary-custom w-100 mb-3"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                        {dict.contact.button1}
                      </a>
                      <div className="about-contact-email-box text-center p-3 bg-light rounded-3">
                        <div className="mb-2">
                          <strong className="d-block mb-1">{dict.contact.email}</strong>
                          <a
                            href="mailto:puredriftvision@gmail.com?subject=咨询链上信托服务"
                            className="about-email-link"
                          >
                            puredriftvision@gmail.com
                          </a>
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

        <nav
          aria-label="page"
          id="secondaryNav"
          className="about-nav navbar sticky-top d-none d-lg-flex py-0"
        >
          <div className="container-fluid container-xl">
            <ul className="nav secondary-nav nav-fill w-100">
              <li className="nav-item secondary-nav-item position-relative flex-fill">
                <Link
                  className="about-nav-link nav-link d-flex align-items-center justify-content-center py-3"
                  href="#section1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                  </svg>
                  <span>{dict.about.whoWeAreSectionTitle}</span>
                </Link>
                <div
                  id="section1-indicator"
                  className="about-nav-indicator"
                ></div>
              </li>
              <li className="nav-item secondary-nav-item position-relative flex-fill">
                <Link
                  className="about-nav-link nav-link d-flex align-items-center justify-content-center py-3"
                  href="#section2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
                  </svg>
                  <span>{dict.about.cooperationSectionTitle}</span>
                </Link>
                <div
                  id="section2-indicator"
                  className="about-nav-indicator"
                ></div>
              </li>
              <li className="nav-item secondary-nav-item position-relative flex-fill">
                <Link
                  className="about-nav-link nav-link d-flex align-items-center justify-content-center py-3"
                  href="#section3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                  </svg>
                  <span>{dict.about.riskSectionTitle}</span>
                </Link>
                <div
                  id="section3-indicator"
                  className="about-nav-indicator"
                ></div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="sticky-indicator position-absolute"></div>

        <section
          aria-labelledby="section1-headline"
          id="section1"
          className="about-section-1 bg-light py-5"
          tabIndex={0}
        >
          <div className="container-fluid container-xl">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-10">
                <div className="about-section-header text-center mb-5">
                  <div className="about-section-border mx-auto mb-3"></div>
                  <h2 id="section1-headline" className="about-section-title display-5 fw-bold mb-4">
                    {dict.about.whoWeAreSectionTitle}
                  </h2>
                  <p className="about-section-desc fs-5 text-muted mb-4">
                    {dict.about.whoWeAreDescription}
                  </p>
                  <p className="about-section-intro fs-6 text-muted">
                    {dict.about.whoWeAreRoleIntro}
                  </p>
                </div>
                
                <div className="row g-4 justify-content-center mt-4">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="about-role-card h-100 bg-white rounded-4 shadow-sm p-4 text-center">
                      <div className="about-role-icon-wrapper mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                        </svg>
                      </div>
                      <h3 className="about-role-title fs-5 fw-bold mb-3">
                        {dict.about.whoWeAreRole1Title}
                      </h3>
                      <p className="about-role-desc text-muted mb-0">
                        {dict.about.whoWeAreRole1Content}
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="about-role-card h-100 bg-white rounded-4 shadow-sm p-4 text-center">
                      <div className="about-role-icon-wrapper mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                      </div>
                      <h3 className="about-role-title fs-5 fw-bold mb-3">
                        {dict.about.whoWeAreRole2Title}
                      </h3>
                      <p className="about-role-desc text-muted mb-0">
                        {dict.about.whoWeAreRole2Content}
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="about-role-card h-100 bg-white rounded-4 shadow-sm p-4 text-center">
                      <div className="about-role-icon-wrapper mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                        </svg>
                      </div>
                      <h3 className="about-role-title fs-5 fw-bold mb-3">
                        {dict.about.whoWeAreRole3Title}
                      </h3>
                      <p className="about-role-desc text-muted mb-0">
                        {dict.about.whoWeAreRole3Content}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="about-belief-box text-center mt-5 p-4 bg-white rounded-4 shadow-sm">
                  <p className="fs-5 text-muted mb-0">{dict.about.whoWeAreBelief}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="section2-headline"
          id="section2"
          className="about-section-2 bg-white py-5"
          tabIndex={0}
        >
          <div className="container-fluid container-xl">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-10">
                <div className="about-section-header text-center mb-5">
                  <div className="about-section-border mx-auto mb-3"></div>
                  <h2 id="section2-headline" className="about-section-title display-5 fw-bold mb-4">
                    {dict.about.cooperationSectionTitle}
                  </h2>
                </div>
                
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                  <div className="col">
                    <div className="about-cooperation-card h-100">
                      <div className="about-cooperation-icon-wrapper mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                          <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
                        </svg>
                      </div>
                      <h3 className="about-cooperation-title fs-5 fw-bold mb-3">
                        {dict.about.cooperationCard1Title}
                      </h3>
                      <p className="about-cooperation-desc text-muted mb-0">
                        {dict.about.cooperationCard1Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-cooperation-card h-100">
                      <div className="about-cooperation-icon-wrapper mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                        </svg>
                      </div>
                      <h3 className="about-cooperation-title fs-5 fw-bold mb-3">
                        {dict.about.cooperationCard2Title}
                      </h3>
                      <p className="about-cooperation-desc text-muted mb-0">
                        {dict.about.cooperationCard2Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-cooperation-card h-100">
                      <div className="about-cooperation-icon-wrapper mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        </svg>
                      </div>
                      <h3 className="about-cooperation-title fs-5 fw-bold mb-3">
                        {dict.about.cooperationCard3Title}
                      </h3>
                      <p className="about-cooperation-desc text-muted mb-0">
                        {dict.about.cooperationCard3Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-cooperation-card h-100">
                      <div className="about-cooperation-icon-wrapper mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                      </div>
                      <h3 className="about-cooperation-title fs-5 fw-bold mb-3">
                        {dict.about.cooperationCard4Title}
                      </h3>
                      <p className="about-cooperation-desc text-muted mb-0">
                        {dict.about.cooperationCard4Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-cooperation-card h-100">
                      <div className="about-cooperation-icon-wrapper mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                        </svg>
                      </div>
                      <h3 className="about-cooperation-title fs-5 fw-bold mb-3">
                        {dict.about.cooperationCard5Title}
                      </h3>
                      <p className="about-cooperation-desc text-muted mb-0">
                        {dict.about.cooperationCard5Content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="section3-headline"
          id="section3"
          className="about-section-3 bg-light py-5"
          tabIndex={0}
        >
          <div className="container-fluid container-xl">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-10">
                <div className="about-section-header text-center mb-5">
                  <div className="about-section-border mx-auto mb-3"></div>
                  <h2 id="section3-headline" className="about-section-title display-5 fw-bold mb-4">
                    {dict.about.keyComplianceTitle}
                  </h2>
                </div>
                
                <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
                  <div className="col">
                    <div className="about-risk-card h-100 bg-white rounded-4 shadow-sm p-4">
                      <div className="about-risk-number mb-3">01</div>
                      <h3 className="about-risk-title fs-5 fw-bold mb-3">
                        {dict.about.risk1Title}
                      </h3>
                      <p className="about-risk-desc text-muted mb-0">
                        {dict.about.risk1Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-risk-card h-100 bg-white rounded-4 shadow-sm p-4">
                      <div className="about-risk-number mb-3">02</div>
                      <h3 className="about-risk-title fs-5 fw-bold mb-3">
                        {dict.about.risk2Title}
                      </h3>
                      <p className="about-risk-desc text-muted mb-0">
                        {dict.about.risk2Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-risk-card h-100 bg-white rounded-4 shadow-sm p-4">
                      <div className="about-risk-number mb-3">03</div>
                      <h3 className="about-risk-title fs-5 fw-bold mb-3">
                        {dict.about.risk3Title}
                      </h3>
                      <p className="about-risk-desc text-muted mb-0">
                        {dict.about.risk3Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-risk-card h-100 bg-white rounded-4 shadow-sm p-4">
                      <div className="about-risk-number mb-3">04</div>
                      <h3 className="about-risk-title fs-5 fw-bold mb-3">
                        {dict.about.risk4Title}
                      </h3>
                      <p className="about-risk-desc text-muted mb-0">
                        {dict.about.risk4Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-risk-card h-100 bg-white rounded-4 shadow-sm p-4">
                      <div className="about-risk-number mb-3">05</div>
                      <h3 className="about-risk-title fs-5 fw-bold mb-3">
                        {dict.about.risk5Title}
                      </h3>
                      <p className="about-risk-desc text-muted mb-0">
                        {dict.about.risk5Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-risk-card h-100 bg-white rounded-4 shadow-sm p-4">
                      <div className="about-risk-number mb-3">06</div>
                      <h3 className="about-risk-title fs-5 fw-bold mb-3">
                        {dict.about.risk6Title}
                      </h3>
                      <p className="about-risk-desc text-muted mb-0">
                        {dict.about.risk6Content}
                      </p>
                    </div>
                  </div>

                  <div className="col">
                    <div className="about-risk-card h-100 bg-white rounded-4 shadow-sm p-4">
                      <div className="about-risk-number mb-3">07</div>
                      <h3 className="about-risk-title fs-5 fw-bold mb-3">
                        {dict.about.risk7Title}
                      </h3>
                      <p className="about-risk-desc text-muted mb-0">
                        {dict.about.risk7Content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div
        id="searchResultsModal"
        className="modal search-results-modal"
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content border border-3 border-teal">
            <div className="modal-header">
              <span className="csc-icon csc-icon-md c-i-search text-teal d-none d-md-inline me-2"></span>
              <h2 className="modal-title text-navy avenir-heavy text-uppercase h3">
                Search results
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div id="st-results-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* 底部sticky 联系我们 */}
      {/* <div
        id="footer-sticky-banner"
        className="about-footer-banner bg-primary-color"
        data-paired-section-id="#hero"
      >
        <div className="container-fluid container-xl">
          <div className="row py-3">
            <div className="col d-flex justify-content-center align-items-center gap-3">
              <p className="my-0 text-white fs-6 fw-medium d-none d-md-block">
                {dict.contact.title}
              </p>
              <Link
                href="#hero"
                className="btn btn-light rounded-pill text-uppercase d-flex align-items-center py-2 px-4 fw-bold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-2">
                  <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                </svg>
                {dict.contact.title}
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <Footer lang={{ dict }} locale={{ lang }} />
    </div>
  );
}
