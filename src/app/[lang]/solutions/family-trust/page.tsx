import '../../../styles/template.css'
import '../../../styles/core-css-style.css'
import '../../../styles/ux.css'
import '../../../styles/_root.scss';
import Footer from "@/components/footer";
import Header from "@/components/header";
import { getDictionary } from '@/dictionaries';
import { PageProps } from '@/types/params';

export const runtime = 'edge';


export default async function Home({ params }: PageProps) {
    const { lang } = await params;

    const dict = await getDictionary(lang); // 确保 getDictionary 正常工作
  console.log('dict:', lang);

  return (
    

<div className="site secondary-page brand-protection com_content view-article no-layout no-task itemid-140">
   {/* 
   <div id="hs-web-interactives-top-push-anchor" className="go3670563033">
   </div>
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P2NMWP3"
      height="0" width="0" style="display:none;visibility:hidden">
      </iframe>
   </noscript>
   */}
   <Header lang={{ dict }} locale={{ lang }} />
   <div className="item-page"  itemType="https://schema.org/Article">

      <div itemProp="articleBody">
         <div id="pageTop" className="section secondary-page-hero scrollspy-secondary-nav in-view">
            <img className="page-hero-image" src="/images/headers/DBSHero14.jpg" alt="Online Brand Protection, brand protect, brand protection" width="3074px" height="1152px"/>
            <div className="section-content hero-content">
               <div className="row hide-on-med-and-down show-on-large">
                  <div className="col l7">
                     <h1 className="text-white right-align h1-large mt10 mb10">{dict.familytrust.title}</h1>
                  </div>
                  <div className="col l3 pt10">
                     <blockquote className="pb0 mt10 mb10">
                        <p className="text-white left-align">{dict.familytrust.subtitle}</p>
                     </blockquote>
                  </div>
               </div>
               {/* <div className="show-on-medium-and-down hide-on-large-only">
                  <h1 className="text-white center-align h1-large mt10 mb10">ONLINE BRAND PROTECTION</h1>
                  <p className="text-white center-align">Protect and secure your brands online.</p>
               </div> */}
            </div>
         </div>
         {/* <div className="main-content"> */}
            <div id="section1" className="section bg-white scrollspy-secondary-nav in-view">
               <div className="section-content section-content-tall template-section-content-img pb10">
                  <div className="section-content-left-text">
                     <p>{dict.familytrust.content}</p>
                  </div>
                  <div className="section-content-icon left-align">
                     <blockquote>
                        <h3 className="text-secondary-alt">GET IN TOUCH</h3>
                        <p>Contact us now for a free consultation.</p>
                        <a href="#inlineLeadCollector" className="btn btn-secondary">Contact us&nbsp;<span className="triangle-arrow triangle-arrow-down arrow-white"></span></a>
                     </blockquote>
                  </div>
               </div>
            </div>
            <div id="section2" className="section bg-secondary-alt scrollspy-secondary-nav icon-family">
               <div className="section-content section-content-tall">
                  <div className="section-content-left-text">
                     <h2 className="text-white">{dict.familytrust.whyus}</h2>
                     <div className="csc-thumbnail-container-dbs clients-thumbnail-container">
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-browsers-www"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.familytrust.dualFramework}</span><br/>{dict.familytrust.dualFrameworkDesc}</p>

                           </div>
                        </div>
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-org-chart-flat"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.familytrust.programmableRules}</span><br/>{dict.familytrust.programmableRulesDesc}</p>
                           </div>
                        </div>
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-team"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.familytrust.multiAssetManagement}</span><br/>{dict.familytrust.multiAssetManagementDesc}</p>
                           </div>
                        </div>
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-smartphone"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.familytrust.privacyTransparency}</span><br/>{dict.familytrust.privacyTransparencyDesc}</p>
                           </div>
                        </div>
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-laptop"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.familytrust.crossGenerational}</span><br/>{dict.familytrust.crossGenerationalDesc}</p>
                           </div>
                        </div>
                        {/* <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-dashboard"></span>
                              </div>
                              <p className="m0 pt10 pb10">Relationships with key online service companies, registrars, internet service providers, and law-enforcement agencies—allowing us to deliver industry-leading enforcement processes in local languages to ensure the swiftest compliance</p>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
            <div id="section3" className="section bg-white scrollspy-secondary-nav">
               <div className="section-content section-content-tall pb10 pt10">
                  <div className="section-content">
                     <h2 className="text-secondary">{dict.familytrust.moduleTwoTitle}</h2>
                     {/* <p>CSC's proprietary DomainSec<sup>SM</sup> Brand Protection Engine platform makes it possible to monitor domain names, internet content, social media, and mobile apps within a single environment. The technology comprises a context-based content-matching system, to identify online mentions of your brand, relevant associated logos, and keywords.</p> */}
                  </div>
               </div>
               <div className="section-content section-additional-content icon-family">
                  <div className="partner-table pt10">
                     <div className="row partner-table-row display-flex f-wrap">
                        <div className="col m6 partner-table-item pl20 pr20">
                           <div className="display-flex f-align-center f-justify-center f-direction-col">
                              <span className="text-secondary center-align csc-icon c-i-document-merge"></span>
                              <p className="text-secondary pb0 pl30 pt10">{dict.familytrust.educationMilestoneFund}<br/><br/>{dict.familytrust.educationMilestoneFundDesc}<br/>{dict.familytrust.educationMilestoneFundSetting}</p>
                           </div>
                        </div>
                        <div className="col m6 partner-table-item pl20 pr20">
                           <div className="display-flex f-align-center f-justify-center f-direction-col">
                              <span className="text-secondary center-align csc-icon c-i-lock-key-fill"></span>
                              <p className="text-secondary pb0 pl30 pt10">{dict.familytrust.longTermLivingExpense}<br/><br/>{dict.familytrust.longTermLivingExpenseDesc}<br/>{dict.familytrust.longTermLivingExpenseSetting}</p>
                           </div>
                        </div>
                     </div>
                     <div className="row partner-table-row display-flex f-wrap">
                        <div className="col m6 partner-table-item pl20 pr20">
                           <div className="display-flex f-align-center f-justify-center f-direction-col">
                              <span className="text-secondary center-align csc-icon c-i-archive-gear"></span>
                              <p className="text-secondary pb0 pl30 pt10">{dict.familytrust.enterpriseEquityInheritance}<br/><br/>{dict.familytrust.enterpriseEquityInheritanceDesc}<br/>{dict.familytrust.enterpriseEquityInheritanceSetting}</p>
                           </div>
                        </div>
                        <div className="col m6 partner-table-item pl20 pr20">
                           <div className="display-flex f-align-center f-justify-center f-direction-col">
                              <span className="text-secondary center-align csc-icon c-i-info"></span>
                              <p className="text-secondary pb0 pl30 pt10">{dict.familytrust.riskProtectionAssetIsolation}<br/><br/>{dict.familytrust.riskProtectionAssetIsolationDesc}<br/>{dict.familytrust.riskProtectionAssetIsolationSetting}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="section4" className="section bg-lt-gray scrollspy-secondary-nav">
               <div className="section-content section-content-tall">
                  <div className="section-content">
                     <h2 className="text-secondary">{dict.familytrust.faqTitle}</h2>
                 
    
  <div >
    Question1: {dict.familytrust.q1}<br/>
    Answer1: {dict.familytrust.a1}
  </div>
<br/>

  <div>
     Question2: {dict.familytrust.q2}<br/>
    Answer2: {dict.familytrust.a2}
  </div>
<br/>
  <div >
    Question3: {dict.familytrust.q3}<br/>
    Answer3: {dict.familytrust.a3}
  </div>
<br/>

  <div >
    Question4: {dict.familytrust.q4}<br/>
    Answer4: {dict.familytrust.a4}
  </div>
<br/>

  <div>
    Question5: {dict.familytrust.q5}<br/>
    Answer5: {dict.familytrust.a5}
  </div>


                 
                  </div>
               </div>
            </div>
            {/* <div id="section5" className="section bg-image-overlay scrollspy-secondary-nav">
               <img className="section-bg-image" src="/images/headers/DBSHero19.jpg" alt="Our Customers" width="3074px" height="1406"/>
               <div className="section-content template-section-content">
                  <div className="quote-content">
                     <span className="quotes quotes-left text-gold">“</span>
                     <p className="text-white">The level of service that I receive from my account manager at CSC is second to none. Both proactive and reactive requests are actioned straight away, and they always strive to cut through to the issue at hand.</p>
                     <span className="quotes quotes-right text-gold">”</span>
                  </div>
                  <div className="col s12 quote-author">
                     <p className="text-white right-align"><small>Justyn Ang&nbsp;&nbsp;|&nbsp; Transport for New South Wales, Digital platform product owner</small></p>
                  </div>
               </div>
            </div> */}
            {/* <div id="inlineLeadCollector" className="section section-lead-collector bg-lt-gray scrollspy-secondary-nav">
               <div className="section-content display-flex f-align-center f-justify-start">
                  <div className="section-content-icon hide-on-med-and-down">
                     <img width="250" src="/images/icons/Teal-WereReadytoTalk.png" alt="We're ready to talk."/>
                  </div>
                  <div className="lead-collector-text padding-left-right">
                     <h2 className="text-secondary">WE'RE READY TO TALK</h2>
                     <p>Our specialists are ready to answer your questions about Online Brand Protection.</p>
                  </div>
               </div>
               <div className="section-content template-section-content">
                  <div className="lead-capture-section">
                     <div className="moduletable ">
                        &#xFEFF;
                        <div id="container" className="ltr lead-form-fields pt10 pb30">
                           <form id="cscgMarketingLead" className="csc-form csc-sales-form csc-form-validate contact-form row hidden-field" name="cscgMarketingLead" acceptCharset="UTF-8" autoComplete="off" encType="multipart/form-data" method="post" noValidate action="/templates/rebrand_reskin/assets/forms/csc-marketing-lead.php">
                              <div className="col s12 m6">
                                 <input name="salesFirstName" aria-required="true" type="text" className="form-control csc-form-control" id="salesFirstName" placeholder="First name*"   maxLength={255} />
                              </div>
                              <div className="col s12 m6">
                                 <input name="salesLastName" aria-required="true" type="text" className="form-control csc-form-control" id="salesLastName" placeholder="Last name*" maxLength={255}/>
                              </div>
                              <div className="col s12 m6">
                                 <input name="salesJobTitle" aria-required="true" type="text" className="form-control csc-form-control" id="salesJobTitle" placeholder="Job title*" maxLength={255}/>
                              </div>
                              <div className="col s12 m6">
                                 <input name="salesCompanyName" aria-required="true" type="text" className="form-control csc-form-control" id="salesCompanyName" placeholder="Company*" maxLength={255}/>
                              </div>
                              <div className="col s12 m6">
                                 <select id="salesCountry" name="salesCountry" className="form-select csc-form-select" >
                                    <option value="">Country*</option>
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
                              <div className="col s12 m6"><input name="salesPhone" aria-required="true" type="tel" className="form-control csc-form-control" id="salesPhone" placeholder="Business phone*" maxLength={255}/></div>
                              <div className="col s12 m6"><input name="salesEmail" aria-required="true" type="email" className="form-control csc-form-control" id="salesEmail" placeholder="Email*" maxLength={255}/></div>
                              <div className="col s12">
                                 <textarea name="salesMessage" aria-required="true" spellCheck="true" className="form-control csc-form-control" id="salesMessage" placeholder="Please provide any additional information that you would like to discuss.*" rows={10} maxLength={250}></textarea>
                                 <p><strong>Maximum characters: 250</strong><br/><em className="right">*Required</em></p>
                              </div>
                              <input id="submissionPageUrl" className="field text medium" maxLength={255} name="submissionPageUrl" type="hidden" value="/en/brand-protection/"/>
                              <input id="convertingPageReferrer" className="field text medium" maxLength={255} name="convertingPageReferrer" type="hidden" value=""/>
                              <input id="pageIq" className="field text medium" maxLength={255} name="pageIq" type="hidden" value="undefined"/>
                              <input id="utmCampaign" className="field text medium" maxLength={255} name="utmCampaign" type="hidden" value="undefined"/>
                              <input id="utmContent" className="field text medium" maxLength={255} name="utmContent" type="hidden" value="undefined"/>
                              <input id="utmMedium" className="field text medium" maxLength={255} name="utmMedium" type="hidden" value="undefined"/>
                              <input id="utmSource" className="field text medium" maxLength={255} name="utmSource" type="hidden" value="undefined"/>
                              <input id="utmTerm" className="field text medium" maxLength={255} name="utmTerm" type="hidden" value="undefined"/>
                              <input id="firstVisitCookieReferrer" className="field text medium" maxLength={255} name="firstVisitCookieReferrer" type="hidden" value=""/>
                              <input id="cookieId" className="field text medium" maxLength={255} name="cookieId" type="hidden" value=""/>
                              <input id="cookieUtmCampaign" className="field text medium" maxLength={255} name="cookieUtmCampaign" type="hidden" value=""/>
                              <input id="cookieUtmContent" className="field text medium" maxLength={255} name="cookieUtmContent" type="hidden" value=""/>
                              <input id="cookieUtmMedium" className="field text medium" maxLength={255} name="cookieUtmMedium" type="hidden" value=""/>
                              <input id="cookieUtmSource" className="field text medium" maxLength={255} name="cookieUtmSource" type="hidden" value=""/>
                              <input id="cookieUtmTerm" className="field text medium" maxLength={255} name="cookieUtmTerm" type="hidden" value=""/>
                              <input id="xReference" className="field text medium" maxLength={255} name="xReference" type="hidden" value="CSCDBS EN SRVC BP brand-protection"/>
                              <input id="uriHost" className="field text medium" maxLength={255} name="uriHost" type="hidden" value="www.cscdbs.com"/>
                              <input id="redirectPagePath" maxLength={255} name="redirectPagePath" type="hidden"/>
                              <input id="taskRedirect" maxLength={255} name="taskRedirect" type="hidden"/>
                              <input type="hidden" name="c4255b4487da79202e610b67e5286985" value="1"/>		
                              <div className="col s12 row">
                                 <div className="col s12 m8 mt0">
                                    <p className="recaptcha-disclosure font-xs text-tertiary mt0 mb10" style={{ display: 'block' }}>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
                                    <div id="marketingRecap" className="recaptcha-container-marketing-forms recaptcha-container-marketing">
                                       <div className="grecaptcha-badge" data-style="inline" style={{
                                       width: '256px',
                                       height: '60px',
                                       boxShadow: 'gray 0px 0px 5px',
                                       }}>
                                       <div className="grecaptcha-logo">
                                          
                                       </div>
                                       <div className="grecaptcha-error"></div>
                                       <textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{
                                       width: '250px',
                                       height: '40px',
                                       border: '1px solid rgb(193, 193, 193)',
                                       margin: '10px 25px',
                                       padding: '0px',
                                       resize: 'none',
                                       display: 'none',
                                       }}></textarea>
                                    </div>
                                    
                                 </div>
                                 <p className="form-disclaimers">Learn how to <a href="https://pages.cscglobal.com/csc-email-dbs-preferences" target="_blank">unsubscribe</a> from emails.</p>
                              </div>
                              <div className="col s12 m4 display-flex f-justify-end">
                                 <button id="marketingFormSubmit" type="submit" name="marketingFormSubmit" className="btn btn-secondary-alt mt0">Submit ►</button>
                              </div>
                        </div>
                        </form>
                        <div className="spinner-sm"></div>
                        <div className="lead-form-overlay"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div> */}
      </div>
   </div>

   <Footer  lang={{ dict }} locale={{ lang }}/>
   {/* <div id="mod-custom410" className="mod-custom custom">
      <div id="searchResultsModal" className="modal search-results-modal" tabIndex={0}>
         <div className="csc-family-modal-container bg-white">
            <div className="modal-header display-flex f-justify-between">
               <div className="modal-title-container display-flex f-align-center">
                  <span className="csc-icon c-i-search text-primary"></span>
                  <p className="modal-title text-secondary pb0">SEARCH RESULTS</p>
               </div>
               <div className="modal-close-container">
                  <a className="modal-close" href="#!">
                  <span className="csc-icon c-i-x text-hyperlink"></span>
                  </a>
               </div>
            </div>
            <div className="modal-body">
               <div id="st-results-container"></div>
            </div>
         </div>
      </div>
   </div>
   <div id="mod-custom429" className="mod-custom custom">
      <div id="defaultVideoModal" className="modal video-modal img-modal bg-transparent box-shadow-none" tabIndex={0}>
         <div className="modal-header">
            <a href="#!" className="modal-close video-modal-close x-btn btn-flat right"><span className="csc-icon c-i-x"></span></a>
         </div>
         <div className="modal-content modal-video-content">
            <div className="video-container">
               <iframe src="https://www.youtube.com/embed/5yF5XQMVMTI?rel=0" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
         </div>
      </div>
   </div>
   <script type="text/javascript" src="/templates/rebrand_reskin/js/replacement-scripts.js"></script>
   <script type="text/javascript" src="/templates/rebrand_reskin/js/ux-form-validation.js"></script>
   <div id="onetrust-consent-sdk">
      <div className="onetrust-pc-dark-filter ot-fade-in" style="display: none;transition: visibility 0s 500ms, opacity 500ms linear;
         opacity: 0;visibility: hidden;z-index:2147483645;">
      </div>
      <div id="onetrust-banner-sdk" className="otCenterRounded default ot-wo-title" tabindex="0" role="region" aria-label="Cookie banner" style="display: none;
         transition: visibility 0s 400ms, opacity 400ms linear;
         opacity: 0;visibility: hidden;">
         <div className="ot-sdk-container" role="alertdialog" aria-describedby="onetrust-policy-text" aria-modal="true" aria-label="Privacy">
            <div className="ot-sdk-row">
               <div id="onetrust-group-container" className="ot-sdk-twelve ot-sdk-columns">
                  <div id="onetrust-policy">
                     <div className="banner-header">
                        <div className="banner_logo"></div>
                     </div>
                     <div id="onetrust-policy-text">By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. <a href="https://www.cscglobal.com/service/csc/privacy/" aria-label="More information about your privacy, opens in a new tab" rel="noopener" target="_blank">Privacy Policy &amp; Cookies</a></div>
                  </div>
               </div>
               <div id="onetrust-button-group-parent" className="ot-sdk-twelve ot-sdk-columns">
                  <div id="onetrust-button-group">
                     <div className="banner-actions-container"> <button id="onetrust-accept-btn-handler">Accept all cookies</button></div>
                     <button id="onetrust-pc-btn-handler" className="cookie-setting-link">Cookies settings</button>
                  </div>
               </div>
               <!-- Close Button -->
               <div id="onetrust-close-btn-container"></div>
               <!-- Close Button END-->
            </div>
         </div>
      </div>
      <div id="onetrust-pc-sdk" className="otPcPanel ot-hide ot-fade-in ot-slide-out-left" lang="en" aria-label="Preference center" role="region" style="display: none;
         transition: visibility 0s 500ms, opacity 500ms linear;
         opacity: 0;visibility: hidden;">
         <div role="alertdialog" aria-modal="true" aria-describedby="ot-pc-desc" style="height: 100%;" aria-label="Privacy Preference Center">
            <!-- PC Header -->
            <div className="ot-pc-header">
               <div className="ot-pc-logo" role="img" aria-label="Company Logo"><img alt="Company Logo" src="https://cdn.cookielaw.org/logos/static/ot_company_logo.png"></div>
               <button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Close" style="background-image: url(&quot;https://cdn.cookielaw.org/logos/static/ot_close.svg&quot;);"></button>
            </div>
            <div id="ot-pc-content" className="ot-pc-scrollbar">
               <div className="ot-optout-signal ot-hide">
                  <div className="ot-optout-icon">
                     <svg xmlns="http://www.w3.org/2000/svg">
                        <path className="ot-floating-button__svg-fill" d="M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z" fill="#FFF" fill-rule="evenodd"></path>
                     </svg>
                  </div>
                  <span></span>
               </div>
               <h2 id="ot-pc-title">Privacy Preference Center</h2>
               <div id="ot-pc-desc">When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
                  <br/><a href="https://cookiepedia.co.uk/giving-consent-to-cookies" className="privacy-notice-link" rel="noopener" target="_blank" aria-label="More information about your privacy, opens in a new tab">More information</a>
               </div>
               <button id="accept-recommended-btn-handler">Allow All</button>
               <section className="ot-sdk-row ot-cat-grp">
                  <h3 id="ot-category-title"> Manage Consent Preferences</h3>
                  <div className="ot-accordion-layout ot-cat-item ot-vs-config" data-optanongroupid="C0001">
                     <button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001 ot-status-id-C0001"></button><!-- Accordion header -->
                     <div className="ot-acc-hdr ot-always-active-group">
                        <div className="ot-plus-minus"><span></span><span></span></div>
                        <h4 className="ot-cat-header" id="ot-header-id-C0001">Strictly Necessary Cookies</h4>
                        <div id="ot-status-id-C0001" className="ot-always-active">Always Active</div>
                     </div>
                     <!-- accordion detail -->
                     <div className="ot-acc-grpcntr ot-acc-txt">
                        <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0001">These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.</p>
                        <div className="ot-hlst-cntr"><button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0001">Cookies Details&lrm;</button></div>
                     </div>
                  </div>
                  <div className="ot-accordion-layout ot-cat-item ot-vs-config" data-optanongroupid="C0002">
                     <button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0002" aria-labelledby="ot-header-id-C0002"></button><!-- Accordion header -->
                     <div className="ot-acc-hdr">
                        <div className="ot-plus-minus"><span></span><span></span></div>
                        <h4 className="ot-cat-header" id="ot-header-id-C0002">Performance Cookies</h4>
                        <div className="ot-tgl"><input type="checkbox" name="ot-group-id-C0002" id="ot-group-id-C0002" role="switch" className="category-switch-handler" data-optanongroupid="C0002" aria-labelledby="ot-header-id-C0002" checked=""> <label className="ot-switch" for="ot-group-id-C0002"><span className="ot-switch-nob" aria-label="Performance Cookies"></span> <span className="ot-label-txt">Performance Cookies</span></label> </div>
                     </div>
                     <!-- accordion detail -->
                     <div className="ot-acc-grpcntr ot-acc-txt">
                        <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0002">These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.</p>
                        <div className="ot-hlst-cntr"><button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0002">Cookies Details&lrm;</button></div>
                     </div>
                  </div>
                  <div className="ot-accordion-layout ot-cat-item ot-vs-config" data-optanongroupid="C0003">
                     <button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0003" aria-labelledby="ot-header-id-C0003"></button><!-- Accordion header -->
                     <div className="ot-acc-hdr">
                        <div className="ot-plus-minus"><span></span><span></span></div>
                        <h4 className="ot-cat-header" id="ot-header-id-C0003">Functional Cookies</h4>
                        <div className="ot-tgl"><input type="checkbox" name="ot-group-id-C0003" id="ot-group-id-C0003" role="switch" className="category-switch-handler" data-optanongroupid="C0003" aria-labelledby="ot-header-id-C0003" checked=""> <label className="ot-switch" for="ot-group-id-C0003"><span className="ot-switch-nob" aria-label="Functional Cookies"></span> <span className="ot-label-txt">Functional Cookies</span></label> </div>
                     </div>
                     <!-- accordion detail -->
                     <div className="ot-acc-grpcntr ot-acc-txt">
                        <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0003">These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.</p>
                        <div className="ot-hlst-cntr"><button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0003">Cookies Details&lrm;</button></div>
                     </div>
                  </div>
                  <div className="ot-accordion-layout ot-cat-item ot-vs-config" data-optanongroupid="C0004">
                     <button ot-accordion="true" aria-expanded="false" aria-controls="ot-desc-id-C0004" aria-labelledby="ot-header-id-C0004"></button><!-- Accordion header -->
                     <div className="ot-acc-hdr">
                        <div className="ot-plus-minus"><span></span><span></span></div>
                        <h4 className="ot-cat-header" id="ot-header-id-C0004">Targeting Cookies</h4>
                        <div className="ot-tgl"><input type="checkbox" name="ot-group-id-C0004" id="ot-group-id-C0004" role="switch" className="category-switch-handler" data-optanongroupid="C0004" aria-labelledby="ot-header-id-C0004" checked=""> <label className="ot-switch" for="ot-group-id-C0004"><span className="ot-switch-nob" aria-label="Targeting Cookies"></span> <span className="ot-label-txt">Targeting Cookies</span></label> </div>
                     </div>
                     <!-- accordion detail -->
                     <div className="ot-acc-grpcntr ot-acc-txt">
                        <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0004">These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.</p>
                        <div className="ot-hlst-cntr"><button className="ot-link-btn category-host-list-handler" aria-label="Cookie Details button opens Cookie List menu" data-parent-id="C0004">Cookies Details&lrm;</button></div>
                     </div>
                  </div>
                  <!-- Non Accordion Group --><!-- Accordion Group section starts --><!-- Accordion Group section ends -->
               </section>
            </div>
            <section id="ot-pc-lst" className="ot-hide ot-pc-scrollbar">
               <div id="ot-pc-hdr">
                  <div id="ot-lst-title">
                     <button className="ot-link-btn back-btn-handler" aria-label="Back">
                        <svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xml:space="preserve">
                           <title>Back Button</title>
                           <g>
                              <path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                                 l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                                 c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                                 s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                                 L213.13,222.409z"></path>
                           </g>
                        </svg>
                     </button>
                     <h3>Cookie List</h3>
                  </div>
                  <div className="ot-lst-subhdr">
                     <div className="ot-search-cntr">
                        <p role="status" className="ot-scrn-rdr"></p>
                        <input id="vendor-search-handler" type="text" name="vendor-search-handler" placeholder="Search…" aria-label="Cookie list search"> 
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true">
                           <title>Search Icon</title>
                           <path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                              s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                              c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                              s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                        </svg>
                     </div>
                     <div className="ot-fltr-cntr">
                        <button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true">
                           <svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xml:space="preserve">
                              <title>Filter Icon</title>
                              <g>
                                 <path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
                                    c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
                                    c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
                                    C402.765,25.895,404.093,19.231,400.858,11.427z"></path>
                              </g>
                           </svg>
                        </button>
                     </div>
                     <div id="ot-anchor"></div>
                     <section id="ot-fltr-modal">
                        <div id="ot-fltr-cnt">
                           <button id="clear-filters-handler">Clear</button>
                           <div className="ot-fltr-scrlcnt ot-pc-scrollbar">
                              <div className="ot-fltr-opts">
                                 <div className="ot-fltr-opt">
                                    <div className="ot-chkbox"><input id="chkbox-id" type="checkbox" className="category-filter-handler"> <label for="chkbox-id"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div>
                                 </div>
                              </div>
                              <div className="ot-fltr-btns"><button id="filter-apply-handler">Apply</button> <button id="filter-cancel-handler">Cancel</button></div>
                           </div>
                        </div>
                     </section>
                  </div>
               </div>
               <section id="ot-lst-cnt" className="ot-pc-scrollbar">
                  <div id="ot-sel-blk">
                     <div className="ot-sel-all">
                        <div className="ot-sel-all-hdr"><span className="ot-consent-hdr">Consent</span> <span className="ot-li-hdr">Leg.Interest</span></div>
                        <div className="ot-sel-all-chkbox">
                           <div className="ot-chkbox" id="ot-selall-hostcntr"><input id="select-all-hosts-groups-handler" type="checkbox"> <label for="select-all-hosts-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div>
                           <div className="ot-chkbox" id="ot-selall-vencntr"><input id="select-all-vendor-groups-handler" type="checkbox"> <label for="select-all-vendor-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div>
                           <div className="ot-chkbox" id="ot-selall-licntr"><input id="select-all-vendor-leg-handler" type="checkbox"> <label for="select-all-vendor-leg-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div>
                        </div>
                     </div>
                  </div>
                  <div className="ot-sdk-row">
                     <div className="ot-sdk-column">
                        <ul id="ot-host-lst"></ul>
                     </div>
                  </div>
               </section>
            </section>
            <!-- Footer buttons and logo -->
            <div className="ot-pc-footer ot-pc-scrollbar">
               <div className="ot-btn-container"> <button className="save-preference-btn-handler onetrust-close-btn-handler">Confirm My Choices</button></div>
               <div className="ot-pc-footer-logo"><a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" aria-label="Powered by OneTrust Opens in a new Tab"><img alt="Powered by Onetrust" src="https://cdn.cookielaw.org/logos/static/powered_by_logo.svg" title="Powered by OneTrust Opens in a new Tab"></a></div>
            </div>
            <!-- Cookie subgroup container --><!-- Vendor list link --><!-- Cookie lost link --><!-- Toggle HTML element --><!-- Checkbox HTML --><!-- Arrow SVG element --><!-- plus minus--><!-- Accordion basic element --><span className="ot-scrn-rdr" aria-atomic="true" aria-live="polite">Your Privacy [`dialog closed`]</span><!-- Vendor Service container and item template -->
         </div>
         <iframe className="ot-text-resize" sandbox="allow-same-origin" title="onetrust-text-resize" style="position: absolute; top: -50000px; width: 100em;" aria-hidden="true"></iframe>
      </div>
      <div id="ot-sdk-btn-floating" className="ot-floating-button" data-title="Cookies settings">
         <div className="ot-floating-button__front custom-persistent-icon"><button type="button" className="ot-floating-button__open" aria-label="Open Preferences" aria-hidden="false" style={{ display: 'block' }}></button></div>
         <div className="ot-floating-button__back custom-persistent-icon">
            <button type="button" className="ot-floating-button__close" aria-label="Close Preferences" aria-hidden="true" style="display: none;">
               <!--?xml version="1.0" encoding="UTF-8"?--> 
               <svg role="presentation" tabindex="-1" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                     <g id="Banner_02" className="ot-floating-button__svg-fill" transform="translate(-318.000000, -725.000000)" fill="#ffffff" fill-rule="nonzero">
                        <g id="Group-2" transform="translate(305.000000, 712.000000)">
                           <g id="icon/16px/white/close">
                              <polygon id="Line1" points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"></polygon>
                              <polygon id="Line2" transform="translate(25.000000, 25.000000) scale(-1, 1) translate(-25.000000, -25.000000) " points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"></polygon>
                           </g>
                        </g>
                     </g>
                  </g>
               </svg>
            </button>
         </div>
      </div>
   </div>
   <script id="hs-script-loader" text="" charset="" type="text/javascript" src="//js.hs-scripts.com/2490359.js"></script>      <script type="text/javascript" id="" charset="">(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.referrerPolicy="unsafe-url";a.src="https://ws.zoominfo.com/pixel/61671cd10b0f5a00156ff10b";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();</script>
   <noscript>
      <img src="https://ws.zoominfo.com/pixel/61671cd10b0f5a00156ff10b" width="1" height="1" style="display: none;">
   </noscript>
   <iframe height="0" width="0" style="display: none; visibility: hidden;"></iframe>
   <div className="go2933276541 go2369186930" id="hs-web-interactives-top-anchor">
      <div id="hs-interactives-modal-overlay" className="go1632949049"></div>
   </div>
   <div className="go2933276541 go1348078617" id="hs-web-interactives-bottom-anchor"></div>
   <div id="hs-web-interactives-floating-container">
      <div id="hs-web-interactives-floating-top-left-anchor" className="go2417249464 go613305155">
      </div>
      <div id="hs-web-interactives-floating-top-right-anchor" className="go2417249464 go471583506">
      </div>
      <div id="hs-web-interactives-floating-bottom-left-anchor" className="go2417249464 go3921366393">
      </div>
      <div id="hs-web-interactives-floating-bottom-right-anchor" className="go2417249464 go3967842156">
      </div>
   </div>
   <iframe sandbox="" style="display: none;"></iframe>
   <div style="visibility: hidden; position: absolute; width: 100%; top: -10000px; left: 0px; right: 0px; transition: visibility linear 0.3s, opacity 0.3s linear; opacity: 0;">
      <div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.5;"></div>
      <div style="margin: 0px auto; top: 0px; left: 0px; right: 0px; position: fixed; border: 1px solid rgb(204, 204, 204); z-index: 2000000000; background-color: rgb(255, 255, 255);"><iframe title="recaptcha challenge expires in two minutes" name="c-fldnblws1c6s" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/bframe?hl=en&amp;v=naPR4A6FAh-yZLuCX253WaZq&amp;k=6Ld-ICQjAAAAAIuhzL_ikqUxIOZ0vbsG5CWheL3g&amp;bft=0dAFcWeA41TWhnII8P5C7mW55dq726lujIFQT4n27bUXRjL4jR0oSEjbUAlv5R2qY6HLW4I6u2h_rvTYdP8ZeLLM-bD_G0oasQwA" style="width: 100%; height: 100%;"></iframe></div>
   </div> */}
   </div>

  );
}



