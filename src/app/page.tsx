import CareerSection from '@/components/Career/CareerSection';
import Intro from '@/components/IntroPage/Intro';
import ContactSection from '@/components/Links/ContactSection';
import LinksSection from '@/components/Links/LInksSection';
import Navbar from '@/components/Navbar/Navbar';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import SkillsSection from '@/components/Skills/SkillsSection';

export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <Intro />
      <CareerSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <LinksSection/>
      <ContactSection/>
      <div className="prose prose-invert p-8">
      <h1>Markdown 제목</h1>
      <p>문단입니다. <strong>강조</strong>도 있습니다.</p>
      <ul>
        <li>리스트 1</li>
        <li>리스트 2</li>
      </ul>
    </div>
    </main>
    </>
  );
}