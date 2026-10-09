import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import Button from "../../../Components/Button/Button";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { imgData } from "../../../data/data";

function IndustrySection() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardTouch = (id) => {
    setActiveCard((current) => (current === id ? null : id));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-5">
      {/* Header */}
      <div
        className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:items-center lg:text-left mt-5"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <section>
          <SectionTitle title="INDUSTRY EXPERTISE" />
        </section>
        <section>
          <Button
            title="View All Case Studies"
            icon={<GoArrowRight />}
            styleBtn="flex items-center justify-center gap-3 text-sm sm:text-base lg:text-lg transition duration-300"
          />
        </section>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center lg:justify-between gap-6 mt-6">
        {imgData.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay={index * 120}
            onTouchStart={() => handleCardTouch(item.id)}
            onClick={() => {
              if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
                handleCardTouch(item.id);
              }
            }}
            className="group flex flex-col justify-between border border-orange-950 rounded-2xl overflow-hidden w-full sm:w-[48%] lg:w-[31%] transition-all duration-800 lg:hover:-translate-y-4 lg:hover:-translate-x-2 lg:hover:border-primary-orange lg:hover:shadow-[15px_15px_20px_rgba(251,87,1,.18)]"
          >
            <section>
              <img
                src={item.img}
                alt={item.title}
                width={600}
                height={350}
                loading="lazy"
                decoding="async"
                className="w-full h-52 object-cover rounded-t-2xl transition-transform duration-700 lg:group-hover:scale-105"
              />
            </section>

            <section className="px-4 py-4 flex-1">
              <span className="text-xs font-bold text-primary-orange">
                <abbr title={item.description} className="no-underline">
                  {item.title}
                </abbr>
              </span>
            </section>

            <section
              className={`px-4 pb-4 opacity-0 translate-y-3 transition-all duration-500 ease-out ${
                activeCard === item.id ? "opacity-100 translate-y-0" : ""
              } lg:group-hover:opacity-100 lg:group-hover:translate-y-0`}
            >
              <Button
                title="View Case Study"
                icon={<GoArrowRight />}
                styleBtn="flex items-center gap-3 text-primary-orange"
              />
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustrySection;