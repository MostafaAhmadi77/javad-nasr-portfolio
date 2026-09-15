import {  GoArrowRight } from "react-icons/go";
import Hero from "../../Components/Hero/Hero";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
function About() {
    useEffect(() => {
      AOS.init({
        duration: 900,
        easing: "ease-out-cubic",
        once: false,
        mirror: true,
        offset: 100,
        anchorPlacement: "top-bottom",
      });
  
      const refreshAOS = () => {
        AOS.refreshHard();
      };
  
      
      const timer = setTimeout(() => {
        AOS.refreshHard();
      }, 300);
  
      
      window.addEventListener("load", refreshAOS);
      window.addEventListener("resize", refreshAOS);
  
      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", refreshAOS);
        window.removeEventListener("resize", refreshAOS);
      };
    }, []);
  
  return (
    <>

    
    <Hero  titlePage="ABOUT ME" textHyper={
      <div>
        <h1>
          <span className="font-family-CormorantGaramondBold text-6xl line-clamp-2">Building Organizations That <span className="text-primary-orange">Last</span></span>
        </h1>
        
      </div>
    } textPageDescription={
      <div className="w-md text-justify">
        <span>I partner with ieadership teams to turn challenges into opportunities through strategy, system, and execution.My approach combines deep analytical thinking with hande-on implementation to deliver measurable and sustainable results.</span>
      </div>
    }
    buttons={<Button
          title="Explore Services"
          icon={<GoArrowRight />}
          styleBtn="
            flex
            justify-center
            items-center
            border
            border-primary-orange
            px-10
            py-3
            gap-3
            rounded-2xl
            text-primary-orange
            hover:text-white
            hover:bg-primary-orange
            hover:border-white
            transition
            duration-300
          "
        />}/>

    </>
  );
}

export default About;
