import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection";
import IndustrySection from "./components/IndustrySection";
import MethodologySection from "./components/MethodologySection";
import CTASection from "./components/CTASection";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <HeroSection />

      <main className="text-white border border-primary-orange border-b-0 rounded-t-2xl mr-4 ml-4 backdrop-blur-xl bg-white/2 ss:pt-6 sm:pt-6 xl:pt-0">
        <AboutSection />
        <ExpertiseSection />
        <IndustrySection />
        <MethodologySection />
        <CTASection />
      </main>
    </>
  );
}

export default Home;