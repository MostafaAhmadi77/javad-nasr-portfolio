import { GoArrowRight } from "react-icons/go";
import Button from "../../../Components/Button/Button";
import CartIcon from "../../../Components/Card/CartIcons/CartIcon";
import { dataIcon } from "../../../Components/Card/CartIcons/dataIcon/data";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

function AboutSection() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-between gap-12 p-5 sm:p-8 lg:p-10">
      {/* About Text */}
      <div
        className="w-full xl:max-w-[28rem] flex flex-col justify-center items-center gap-5 text-center xl:text-left"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <section
          className="text-primary-orange tracking-[3px]"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <SectionTitle title="ABOUT" />
        </section>

        <section data-aos="fade-up" data-aos-delay="200">
          <p className="text-3xl sm:text-4xl lg:text-3xl font-family-PTSerif-Regular font-bold leading-tight">
            Building Organizations That{" "}
            <span className="text-primary-orange">Last.</span>
          </p>
        </section>

        <section data-aos="fade-up" data-aos-delay="300">
          <div className="w-full max-w-2xl text-sm sm:text-base lg:text-[0.9rem] font-bold leading-8 text-zinc-300 lg:text-center xl:text-justify">
            I partner with leadership teams to turn challenges into
            opportunities through strategy, systems, and execution. My approach
            combines deep analytical thinking with hands-on implementation to
            deliver measurable and sustainable results.
          </div>
        </section>

        <section
          className="flex justify-center xl:justify-start"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Button
            link="/"
            title="Learn more about me"
            icon={<GoArrowRight />}
            styleBtn="flex items-center gap-4 text-primary-orange transition duration-300"
          />
        </section>
      </div>

      {/* Icon Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {dataIcon.map((data, index) => {
          const Icon = data.icon;
          return (
            <div key={data.id}>
              <CartIcon
                title={data.title}
                description={data.decription}
                icon={<Icon />}
                styles="text-center flex flex-col gap-2 items-center justify-center"
                flex="flex flex-col items-center gap-4 justify-center"
                data-aos="flip-up"
                data-aos-duration="900"
                data-aos-delay={index * 120}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutSection;
