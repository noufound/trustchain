import '../../../styles/core-css-style.css'
import '../../../styles/ux.css'
import '../../../styles/_root.scss';
import '../../../styles/solutions.css';
import Footer from "@/components/footer";
import Header from "@/components/header";
import SolutionTemplate from "@/components/SolutionTemplate";
import { getDictionary } from '@/dictionaries';
import { PageProps } from '@/types/params';

export const runtime = 'edge';

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  console.log('dict:', lang);

  return (
    <div className="solution-page vesting-page">
      <Header lang={{ dict }} locale={{ lang }} />
      <SolutionTemplate lang={lang} dict={dict} solutionKey="vesting" />
      <Footer lang={{ dict }} locale={{ lang }} />
    </div>
  );
}
