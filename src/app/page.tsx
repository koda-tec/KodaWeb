import HeroSection from './components/sections/HeroSection';
import ContactSection from './components/sections/ContactoSections';
import AboutSection from './components/sections/AboutSection';


export default function Home() {
  return (
    
    <main className="p-8"> 
    <HeroSection/>
    <AboutSection/>
      <ContactSection/>

    </main>
  );
}