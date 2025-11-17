import Link from 'next/link';
import { 
  CubeIcon, 
  CogIcon, 
  ChartBarIcon, 
  LockClosedIcon, 
  ArrowPathIcon,
  AcademicCapIcon,
  UserGroupIcon,
  BriefcaseIcon,
  CalendarIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

interface SolutionTemplateProps {
  lang: string;
  dict: any;
  solutionKey: string; // 例如: 'familytrust', 'dao', 'compliance', 'enterprise', 'rwa', 'vesting'
}

export default function SolutionTemplate({ lang, dict, solutionKey }: SolutionTemplateProps) {
  const solutionDict = dict[solutionKey];

  return (
    <div className="solution-page">
      <main className="solution-main">
        {/* Hero Section */}
        <section className="solution-hero" style={{ backgroundImage: 'url(/images/banner2.jpg)' }}>
          <div className="solution-hero-overlay"></div>
          <div className="container-fluid container-xl">
            <div className="row align-items-center min-vh-70">
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="solution-hero-content">
                  <div className="solution-hero-badge mb-3">
                    <CubeIcon className="w-6 h-6 me-2" />
                    {solutionDict.title}
                  </div>
                  <h1 className="solution-hero-title display-3 fw-bold text-white mb-4">
                    {solutionDict.title}
                  </h1>
                  <p className="solution-hero-subtitle fs-4 text-white mb-4">
                    {solutionDict.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="solution-intro py-5 bg-light">
          <div className="container-fluid container-xl">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-10">
                <div className="solution-intro-content text-center">
                  <p className="fs-5 text-muted lh-lg">
                    {solutionDict.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="solution-features py-5 bg-white">
          <div className="container-fluid container-xl">
            <div className="row justify-content-center mb-5">
              <div className="col-12 col-xl-10 text-center">
                <div className="solution-section-border mx-auto mb-3"></div>
                <h2 className="solution-section-title display-5 fw-bold mb-4">
                  {solutionDict.whyus}
                </h2>
              </div>
            </div>
            
            {/* 第一行 - 三个卡片 */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              <div className="col">
                <div className="solution-feature-card h-100">
                  <div className="solution-feature-icon-wrapper mb-4">
                    <CubeIcon className="w-12 h-12" />
                  </div>
                  <h3 className="solution-feature-title fs-5 fw-bold mb-3">
                    {solutionDict.dualFramework}
                  </h3>
                  <p className="solution-feature-desc text-muted mb-0">
                    {solutionDict.dualFrameworkDesc}
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="solution-feature-card h-100">
                  <div className="solution-feature-icon-wrapper mb-4">
                    <CogIcon className="w-12 h-12" />
                  </div>
                  <h3 className="solution-feature-title fs-5 fw-bold mb-3">
                    {solutionDict.programmableRules}
                  </h3>
                  <p className="solution-feature-desc text-muted mb-0">
                    {solutionDict.programmableRulesDesc}
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="solution-feature-card h-100">
                  <div className="solution-feature-icon-wrapper mb-4">
                    <ChartBarIcon className="w-12 h-12" />
                  </div>
                  <h3 className="solution-feature-title fs-5 fw-bold mb-3">
                    {solutionDict.multiAssetManagement}
                  </h3>
                  <p className="solution-feature-desc text-muted mb-0">
                    {solutionDict.multiAssetManagementDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* 第二行 - 两个卡片居中 */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mt-2 justify-content-center">
              <div className="col col-lg-4">
                <div className="solution-feature-card h-100">
                  <div className="solution-feature-icon-wrapper mb-4">
                    <LockClosedIcon className="w-12 h-12" />
                  </div>
                  <h3 className="solution-feature-title fs-5 fw-bold mb-3">
                    {solutionDict.privacyTransparency}
                  </h3>
                  <p className="solution-feature-desc text-muted mb-0">
                    {solutionDict.privacyTransparencyDesc}
                  </p>
                </div>
              </div>

              <div className="col col-lg-4">
                <div className="solution-feature-card h-100">
                  <div className="solution-feature-icon-wrapper mb-4">
                    <ArrowPathIcon className="w-12 h-12" />
                  </div>
                  <h3 className="solution-feature-title fs-5 fw-bold mb-3">
                    {solutionDict.crossGenerational}
                  </h3>
                  <p className="solution-feature-desc text-muted mb-0">
                    {solutionDict.crossGenerationalDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="solution-usecases py-5 bg-light">
          <div className="container-fluid container-xl">
            <div className="row justify-content-center mb-5">
              <div className="col-12 col-xl-10 text-center">
                <div className="solution-section-border mx-auto mb-3"></div>
                <h2 className="solution-section-title display-5 fw-bold mb-4">
                  {solutionDict.moduleTwoTitle}
                </h2>
              </div>
            </div>
            
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="solution-usecase-card h-100">
                  <div className="solution-usecase-icon mb-4">
                    <AcademicCapIcon className="w-10 h-10" />
                  </div>
                  <h3 className="solution-usecase-title fs-5 fw-bold mb-3">
                    {solutionDict.educationMilestoneFund}
                  </h3>
                  <p className="solution-usecase-desc text-muted mb-2">
                    {solutionDict.educationMilestoneFundDesc}
                  </p>
                  <p className="solution-usecase-setting text-muted mb-0">
                    {solutionDict.educationMilestoneFundSetting}
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="solution-usecase-card h-100">
                  <div className="solution-usecase-icon mb-4">
                    <UserGroupIcon className="w-10 h-10" />
                  </div>
                  <h3 className="solution-usecase-title fs-5 fw-bold mb-3">
                    {solutionDict.longTermLivingExpense}
                  </h3>
                  <p className="solution-usecase-desc text-muted mb-2">
                    {solutionDict.longTermLivingExpenseDesc}
                  </p>
                  <p className="solution-usecase-setting text-muted mb-0">
                    {solutionDict.longTermLivingExpenseSetting}
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="solution-usecase-card h-100">
                  <div className="solution-usecase-icon mb-4">
                    <BriefcaseIcon className="w-10 h-10" />
                  </div>
                  <h3 className="solution-usecase-title fs-5 fw-bold mb-3">
                    {solutionDict.enterpriseEquityInheritance}
                  </h3>
                  <p className="solution-usecase-desc text-muted mb-2">
                    {solutionDict.enterpriseEquityInheritanceDesc}
                  </p>
                  <p className="solution-usecase-setting text-muted mb-0">
                    {solutionDict.enterpriseEquityInheritanceSetting}
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="solution-usecase-card h-100">
                  <div className="solution-usecase-icon mb-4">
                    <CalendarIcon className="w-10 h-10" />
                  </div>
                  <h3 className="solution-usecase-title fs-5 fw-bold mb-3">
                    {solutionDict.riskProtectionAssetIsolation}
                  </h3>
                  <p className="solution-usecase-desc text-muted mb-2">
                    {solutionDict.riskProtectionAssetIsolationDesc}
                  </p>
                  <p className="solution-usecase-setting text-muted mb-0">
                    {solutionDict.riskProtectionAssetIsolationSetting}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="solution-faq py-5 bg-white">
          <div className="container-fluid container-xl">
            <div className="row justify-content-center mb-5">
              <div className="col-12 col-xl-10 text-center">
                <div className="solution-section-border mx-auto mb-3"></div>
                <h2 className="solution-section-title display-5 fw-bold mb-4">
                  {solutionDict.faqTitle}
                </h2>
              </div>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-12 col-xl-10">
                <div className="solution-faq-list">
                  <div className="solution-faq-item">
                    <h3 className="solution-faq-question fs-5 fw-bold mb-3">
                      <span className="solution-faq-q-mark me-2">Q</span>
                      {solutionDict.q1}
                    </h3>
                    <p className="solution-faq-answer text-muted mb-0">
                      <span className="solution-faq-a-mark me-2">A</span>
                      {solutionDict.a1}
                    </p>
                  </div>

                  <div className="solution-faq-item">
                    <h3 className="solution-faq-question fs-5 fw-bold mb-3">
                      <span className="solution-faq-q-mark me-2">Q</span>
                      {solutionDict.q2}
                    </h3>
                    <p className="solution-faq-answer text-muted mb-0">
                      <span className="solution-faq-a-mark me-2">A</span>
                      {solutionDict.a2}
                    </p>
                  </div>

                  <div className="solution-faq-item">
                    <h3 className="solution-faq-question fs-5 fw-bold mb-3">
                      <span className="solution-faq-q-mark me-2">Q</span>
                      {solutionDict.q3}
                    </h3>
                    <p className="solution-faq-answer text-muted mb-0">
                      <span className="solution-faq-a-mark me-2">A</span>
                      {solutionDict.a3}
                    </p>
                  </div>

                  <div className="solution-faq-item">
                    <h3 className="solution-faq-question fs-5 fw-bold mb-3">
                      <span className="solution-faq-q-mark me-2">Q</span>
                      {solutionDict.q4}
                    </h3>
                    <p className="solution-faq-answer text-muted mb-0">
                      <span className="solution-faq-a-mark me-2">A</span>
                      {solutionDict.a4}
                    </p>
                  </div>

                  <div className="solution-faq-item">
                    <h3 className="solution-faq-question fs-5 fw-bold mb-3">
                      <span className="solution-faq-q-mark me-2">Q</span>
                      {solutionDict.q5}
                    </h3>
                    <p className="solution-faq-answer text-muted mb-0">
                      <span className="solution-faq-a-mark me-2">A</span>
                      {solutionDict.a5}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 悬浮联系按钮 */}
      <Link href={`/${lang}/about`} className="floating-contact-btn">
        <EnvelopeIcon className="w-6 h-6" />
        <span>联系我们</span>
      </Link>
    </div>
  );
}

