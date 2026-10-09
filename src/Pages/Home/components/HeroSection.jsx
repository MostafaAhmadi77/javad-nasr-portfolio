import { GoArrowRight } from "react-icons/go";
import { TypeAnimation } from "react-type-animation";
import Hero from "../../../Components/Hero/Hero";
import Button from "../../../Components/Button/Button";
import HeroImg from "../../../assets/Images/H1.webp";

function HeroSection() {
  return (
    <div className="overflow-x-hidden" data-aos="fade" data-aos-duration="1200">
      <Hero
        HeroImage={HeroImg}
        titlePage="HELLO, I'M"
        textHyper={
          <div
            className="flex flex-col gap-10"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h2 className="font-family-CormorantGaramondBold text-primary-orange">
              <TypeAnimation
                sequence={[300, "Javad ", 300, "Javad Nasr"]}
                wrapper="span"
                speed={1}
                cursor={false}
                repeat={0}
              />
            </h2>

            <span className="text-2xl line-clamp-none ss:text-[0.85rem] lg:text-2xl">
              <TypeAnimation
                sequence={[500, "Management Consultant | "]}
                wrapper="span"
                speed={40}
                cursor={false}
                repeat={0}
              />
              <TypeAnimation
                sequence={[1500, "Business Strategist"]}
                wrapper="span"
                speed={40}
                cursor={false}
                repeat={0}
                className="text-primary-orange"
              />
              <TypeAnimation
                sequence={[1500, " | Organizational Transformation Partner"]}
                wrapper="span"
                speed={30}
                cursor={false}
                repeat={0}
              />
            </span>
          </div>
        }
        textPageDescription={
          <TypeAnimation
            sequence={[
              3500,
              "Helping organizations transform strategy into execution,",
              300,
              "Helping organizations transform strategy into execution, build scalable systems,",
              300,
              "Helping organizations transform strategy into execution, build scalable systems, and achieve sustainable growth.",
            ]}
            wrapper="span"
            speed={22}
            cursor={false}
            repeat={0}
          />
        }
        buttons={
          <div
            className="flex flex-col ss:flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="500"
          >
            <Button
              title="Let's Work Together"
              icon={<GoArrowRight />}
              styleBtn="flex justify-center items-center bg-primary-orange px-8 py-3 gap-3 rounded-2xl text-white transition duration-300"
            />
            <Button
              title="Explore Services"
              icon={<GoArrowRight />}
              styleBtn="flex justify-center items-center border border-white px-10 py-3 gap-3 rounded-2xl text-white hover:text-white transition duration-300"
            />
          </div>
        }
      />
    </div>
  );
}

export default HeroSection;
