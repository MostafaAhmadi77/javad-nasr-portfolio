import { GoArrowRight } from "react-icons/go";
import Hero from "../../Components/Hero/Hero";
import Button from "../../Components/Button/Button";
import Swiperjs from "./components/Swiperjs";

function About() {
  return (
    <>
      <Hero
        titlePage="ABOUT ME"
        textHyper={
          <div className="flex flex-col ss:items-center md:items-center lg:items-start  ">
            <section className="w-full md:w-[30%] mb-6 h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)]"></section>

            <h1>
              <span className="font-family-CormorantGaramondBold text-5xl line-clamp-3">
                Building Organizations That{" "}
                <span className="text-primary-orange">Last.</span>
              </span>
            </h1>
            <section className="w-[85%] md:w-[30%] mt-6 h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)]"></section>
          </div>
        }
        textPageDescription={
          <div className="w-md text-justify ">
            <span className="flex text-justify ss:items-center ss:text-center md:items-center lg:items-start">
              I partner with ieadership teams to turn challenges into
              opportunities through strategy, system, and execution.My approach
              combines deep analytical thinking with hande-on implementation to
              deliver measurable and sustainable results.
            </span>
          </div>
        }
        buttons={
          <Button
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
          />
        }
      />
      <div className="logo pb-4">
        <Swiperjs />
      </div>
    </>
  );
}

export default About;
