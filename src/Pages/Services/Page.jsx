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
        textPageDescription = {<div className="">
            <span>I partner with organizations to solve complex challenges, optimize performance, and build the capabilities needed
                for long-term success
            </span>
        </div>}
      />

    </>
  );
}

export default Services;
