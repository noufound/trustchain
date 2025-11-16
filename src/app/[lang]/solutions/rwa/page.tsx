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
                     <h1 className="text-white right-align h1-large mt10 mb10">{dict.rwa.title}</h1>
                  </div>
                  <div className="col l3 pt10">
                     <blockquote className="pb0 mt10 mb10">
                        <p className="text-white left-align">{dict.rwa.subtitle}</p>
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
                     <p>{dict.rwa.content}</p>
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
                     <h2 className="text-white">{dict.rwa.whyus}</h2>
                     <div className="csc-thumbnail-container-dbs clients-thumbnail-container">
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-browsers-www"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.rwa.dualFramework}</span><br/>{dict.rwa.dualFrameworkDesc}</p>

                           </div>
                        </div>
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-org-chart-flat"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.rwa.programmableRules}</span><br/>{dict.rwa.programmableRulesDesc}</p>
                           </div>
                        </div>
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-team"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.rwa.multiAssetManagement}</span><br/>{dict.rwa.multiAssetManagementDesc}</p>
                           </div>
                        </div>
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-smartphone"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.rwa.privacyTransparency}</span><br/>{dict.rwa.privacyTransparencyDesc}</p>
                           </div>
                        </div>
                        <div className="display-flex f-direction-col f-justify-between zoom-card csc-thumbnail-item-dbs clients-thumbnail-item-m bg-white box-shadow-dark center-align">
                           <div className="card-white-bg"></div>
                           <div className="thumbnail-item-content">
                              <div className="thumbnail-icon-container">
                                 <span className="text-primary csc-icon c-i-laptop"></span>
                              </div>
                              <p className="m0 pt10 pb10"><span>{dict.rwa.crossGenerational}</span><br/>{dict.rwa.crossGenerationalDesc}</p>
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
                     <h2 className="text-secondary">{dict.rwa.moduleTwoTitle}</h2>
                     {/* <p>CSC's proprietary DomainSec<sup>SM</sup> Brand Protection Engine platform makes it possible to monitor domain names, internet content, social media, and mobile apps within a single environment. The technology comprises a context-based content-matching system, to identify online mentions of your brand, relevant associated logos, and keywords.</p> */}
                  </div>
               </div>
               <div className="section-content section-additional-content icon-family">
                  <div className="partner-table pt10">
                     <div className="row partner-table-row display-flex f-wrap">
                        <div className="col m6 partner-table-item pl20 pr20">
                           <div className="display-flex f-align-center f-justify-center f-direction-col">
                              <span className="text-secondary center-align csc-icon c-i-document-merge"></span>
                              <p className="text-secondary pb0 pl30 pt10">{dict.rwa.educationMilestoneFund}<br/><br/>{dict.rwa.educationMilestoneFundDesc}<br/>{dict.rwa.educationMilestoneFundSetting}</p>
                           </div>
                        </div>
                        <div className="col m6 partner-table-item pl20 pr20">
                           <div className="display-flex f-align-center f-justify-center f-direction-col">
                              <span className="text-secondary center-align csc-icon c-i-lock-key-fill"></span>
                              <p className="text-secondary pb0 pl30 pt10">{dict.rwa.longTermLivingExpense}<br/><br/>{dict.rwa.longTermLivingExpenseDesc}<br/>{dict.rwa.longTermLivingExpenseSetting}</p>
                           </div>
                        </div>
                     </div>
                     <div className="row partner-table-row display-flex f-wrap">
                        <div className="col m6 partner-table-item pl20 pr20">
                           <div className="display-flex f-align-center f-justify-center f-direction-col">
                              <span className="text-secondary center-align csc-icon c-i-archive-gear"></span>
                              <p className="text-secondary pb0 pl30 pt10">{dict.rwa.enterpriseEquityInheritance}<br/><br/>{dict.rwa.enterpriseEquityInheritanceDesc}<br/>{dict.rwa.enterpriseEquityInheritanceSetting}</p>
                           </div>
                        </div>
                        <div className="col m6 partner-table-item pl20 pr20">
                           <div className="display-flex f-align-center f-justify-center f-direction-col">
                              <span className="text-secondary center-align csc-icon c-i-info"></span>
                              <p className="text-secondary pb0 pl30 pt10">{dict.rwa.riskProtectionAssetIsolation}<br/><br/>{dict.rwa.riskProtectionAssetIsolationDesc}<br/>{dict.rwa.riskProtectionAssetIsolationSetting}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="section4" className="section bg-lt-gray scrollspy-secondary-nav">
               <div className="section-content section-content-tall">
                  <div className="section-content">
                     <h2 className="text-secondary">{dict.rwa.faqTitle}</h2>
                     <div>
    
  <div >
    Question1: {dict.rwa.q1}<br/>
    Answer1: {dict.rwa.a1}
  </div>
<br/>

  <div>
     Question2: {dict.rwa.q2}<br/>
    Answer2: {dict.rwa.a2}
  </div>
<br/>
  <div >
    Question3: {dict.rwa.q3}<br/>
    Answer3: {dict.rwa.a3}
  </div>
<br/>

  <div >
    Question4: {dict.rwa.q4}<br/>
    Answer4: {dict.rwa.a4}
  </div>
<br/>

  <div>
    Question5: {dict.rwa.q5}<br/>
    Answer5: {dict.rwa.a5}
  </div>


                     </div>
                  </div>
               </div>
            </div>
           
      </div>
   </div>

   <Footer  lang={{ dict }} locale={{ lang }}/>
  
   </div>

  );
}



