import { GoArrowRight } from "react-icons/go";
import Button from "../../../Components/Button/Button";

function CTASection() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      className="px-4 sm:px-6 lg:px-10"
    >
      <div className="border border-primary-orange border-b-black z-20 rounded-t-2xl rounded-b-none px-6 py-1 flex flex-col ss:pt-7 lg:flex-row items-center justify-between ss:gap-20 sm:gap-10">
        <section className="flex flex-col items-center justify-center text-center lg:text-left">
          <h2
            className="font-family-PTSerif-Regular text-3xl sm:text-2xl lg:text-4xl lgg:text-5xl font-bold leading-tight"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Let's Build <span className="text-primary-orange">What's Next</span>
          </h2>
          <p
            className="mt-4 text-gray-300 text-sm sm:text-base leading-7 pb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Every successful transformation starts with a conversation.
          </p>
        </section>

        <section
          className="flex justify-center lg:justify-start"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <Button
            title="Book a Consultation"
            icon={<GoArrowRight />}
            styleBtn="bg-primary-orange rounded-2xl px-7 py-4 flex mb-12 items-center gap-3 whitespace-nowrap transition-all duration-300 hover:scale-105"
          />
        </section>
      </div>
    </div>
  );
}

export default CTASection;
