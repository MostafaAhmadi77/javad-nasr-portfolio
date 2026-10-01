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
          <div className="text-justify ">
            <span className="flex text-justify ">
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
      <div className="swiperSlider logo pb-4">
        <Swiperjs />
      </div>
      <div className="mainbar-About mr-3 ml-3 ">
        <div className="w-ful border  border-primary-orange rounded-2xl p-4">
          <section className="w-[50%] h-120 border border-primary-orange rounded-2xl text-justify  bg-[linear-gradient(182deg,rgba(255,89,0,0.15)_00%,rgba(5,3,2,0.9)_90%),url('/src/assets/Images/About-img/About.png')]  bg-cover bg-center flex flex-col justify-end p-4">
            <span className="text-primary-orange text-8xl font-family-CormorantGaramondBold">
              ،،
            </span>
            <span className="text-white font-family-CormorantGaramondBold w-110 text- p-2 text-3xl">
              Successful Organizations are not built by chance. They are
              designed with clarity, led with purpose, and executed with
              discipline.
            </span>
          </section>
          <section className="w-[50%]"></section>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </>
  );
}

export default About;
