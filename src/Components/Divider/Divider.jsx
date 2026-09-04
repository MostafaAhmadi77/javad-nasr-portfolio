import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Divider({ title }) {
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
    <div className="flex items-center gap-4 w-full">
      <div data-aos="fade-right" className="flex justify-end flex-1 relative h-px bg-[linear-gradient(to_right,#050302_0%,#FB5701_91%)] ml-6">
        <section className=" w-[0.5rem]  h-[0.5rem] rounded-full absolute -top-1 bg-primary-orange"></section>
      </div>

      <span
        
        className={`  font-bold tracking-[0.3em] uppercase whitespace-nowrap`}
        
      >
        <h3 data-aos="zoom-in">{title}</h3>
      </span>

      <div data-aos="fade-left" className="flex-1 h-px bg-[linear-gradient(to_left,#050302_0%,#FB5701_91%)] mr-6">
        <section className=" w-[0.5rem]  h-[0.5rem] rounded-full absolute  -mt-1 bg-primary-orange"></section>
      </div>
    </div>
  );
}

export default Divider;
