import Divider from "../../Components/Divider/Divider";
import Hero from "../../Components/Hero/Hero";
import HeroImg from "../../assets/Images/H1.png";
function Services() {
  return (
    <>
      <Hero
        HeroImage={HeroImg}
        titlePage="SERVICES"
        textHyper={
          <div className="font-family-CormorantGaramondBold text-6xl">
            <section className="w-20 h-[0.1rem] bg-primary-orange mb-2"></section>
            <p>Strategic Solutions.</p>
            <span>
              Measurable <span className="text-primary-orange">Results.</span>
            </span>
            <section className="w-20 h-[0.1rem] bg-primary-orange mt-2"></section>
          </div>
        }
        textPageDescription={
          <div className="">
            <span>
              I partner with organizations to solve complex challenges, optimize
              performance, and build the capabilities needed for long-term
              success
            </span>
          </div>
        }
      />
      <div className="py-2 flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-3">
          <div className="">
            <span className="text-primary-orange  font-bold text-5xl ss:text-[0.5rem] sm:text-[0.8rem] xl:text-[1rem]  2xl:text-2xl">WHAT I DO</span>
          </div>
          <Divider title={
            <div className="text-white font-family-CormorantGaramondBold text-5xl ss:text-[0.5rem] sm:text-[1.2rem] lg:text-2xl xl:text-3xl">
              <p>Core consulting Services</p>
            </div>
          }  />
        </div>
      </div>
    </>
  );
}

export default Services;
