import Button from "../Button/Button";
import { GoArrowRight } from "react-icons/go";
import { brand } from "../../data/data";

function Hero({HeroImage}) {
  return (
    <div className="bg-black  px-5 sm:px-8 lg:px-12 xl:px-10 pt-8 lg:pt-30 lg:pb-5 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-auto)] ">
      <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left">
        <div className="flex flex-col gap-4">
          <span className="text-primary-orange font-bold tracking-widest text-sm sm:text-base">
            HELLO, I'M
          </span>

          <h2 className="font-bold leading-tight">
            <span className="text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Javad <span className="text-primary-orange">Nasr</span>
            </span>
          </h2>

          <p className="text-white font-semibold text-lg sm:text-xl xl:text-2xl">
            Management Consultant |{" "}
            <span className="text-primary-orange">Business Strategist </span>|
            <br />
            Oraganizational Transformation Partner
          </p>

          <p className="text-gray-300 max-w-95 mx-auto lg:mx-0 text-sm sm:text-base leading-8">
            Helping organizations transform strategy into execution, build
            scalable system, and achieve sustainable growth
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            title="Let's Work Together"
            icon={<GoArrowRight />}
            styleBtn="flex justify-center items-center bg-primary-orange px-8 py-3 gap-3 rounded-2xl text-white  transition"
          />

          <Button
            title="Explore Services"
            icon={<GoArrowRight />}
            styleBtn="flex justify-center items-center border border-withe px-10 py-3 gap-3 gap-3 rounded-2xl text-white hover:text-white transition"
          />
        </div>

        <div className="text-white">
          <p className="text-sm sm:text-base text-center lg:text-left">
            Trusted by forward-thinking brands
          </p>

          <div className="flex flex-wrap justify-center w-full lg:justify-start gap-x-5 lg:gap-3 gap-y-5 mt-6 text-lg sm:text-xl lg:flex-wrap">
            {brand.map((item) => {
              const Icon = item.Icon;

              return (
                <span
                  key={item.title}
                  className="flex items-center    gap-1 text-gray-300 hover:text-primary-orange transition sm:w-[4rem] sm:w-auto   2xl:text-2xl"
                >
                  <Icon />
                  {item.title}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col relative justify-center lg:justify-end">
        <img
          src={HeroImage}
          alt="Javad Nasr"
          className="w-full  h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
