
import Logo from "../../assets/Images/Logo.png";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Legal from "./components/Legal";

import Connects from "./components/Connects";
function Footer() {
  return (
    <>
    <div className=" flex flex-col w-full">

      <div className=" flex  flex-1 items-start justify-between pt-5 pb-5 pr-5 pl-2 gap-10 z-  border-primary-orange border-t ss:flex-col  ss:items-center
      md:flex-row md:items-start">
        <div className="flex items-center ss:flex-col ss:items-center md:flex-row ">
          <img src={Logo} className="size-20 bg-cover" alt="" />
          <section className="w-[16.5rem] flex flex-col justify-center ss:items-center ss:mt-2 md:items-start ">
            <span className="font-family-CormorantGaramondBold font-bold text-3xl">
              JAVAD NASR
            </span>
            <span className="font-family-CormorantGaramondBold text-2xl md:text-[0.9rem]">
              Management Consultant | Business Strategist | Organizational Transformation Partner
            </span>
          </section>
        </div>

        <Navigation />
        <Services />
        <Legal />
        <Connects />
      </div>




      <div className="border border-primary-orange border-r-0 border-l-0 flex items-center gap-3 justify-center">
        <section className="flex items-center gap-2 border-primary-orange  p-2"> 

        <span>©</span>
        <h3>Built pixel by pixel by  <span className="text-primary-orange"> Oaktech</span></h3>
        </section>
      </div>
    </div>
    </>
  );
}

export default Footer;
