
import Logo from "../../assets/Images/Logo.webp";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

function Footer() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col items-center justify-between gap-10 border-t border-primary-orange px-5 py-8 md:flex-row md:items-start">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <img src={Logo} className="size-20" alt="Javad Nasr" />
          <section className="mt-2 flex w-[16.5rem] flex-col items-center justify-center md:mt-0 md:items-start">
            <span className="font-family-CormorantGaramondBold text-3xl font-bold">
              JAVAD NASR
            </span>
            <span className="text-center text-sm leading-relaxed font-family-CormorantGaramondBold md:text-left md:text-[0.9rem]">
              Management Consultant | Business Strategist | Organizational
              Transformation Partner
            </span>
          </section>
        </div>

        <Navigation />
        <Services />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-primary-orange px-4 py-3 text-sm">
        <span>© 2026 Javad Nasr. All rights reserved.</span>
        <span className="text-primary-orange">|</span>
        <span>
          Built pixel by pixel by{" "}
          <span className="text-primary-orange">Oaktech</span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
