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
      </main>
    </>
  );
}