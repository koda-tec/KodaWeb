import HeroSection from './components/sections/HeroSection';
import ContactSection from './components/sections/ContactoSections';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import WhyChooseUs from "./components/sections/WhyChooseUs";
import FinalCTA from "./components/sections/FinalCTA";

export default function Home() {
  return (
    
    <> 
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <WhyChooseUs/>
      <ContactSection/>
      <FinalCTA/>

    </>
  );
}

