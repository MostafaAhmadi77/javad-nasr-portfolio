import Divider from "../../../Components/Divider/Divider";
import { textIcon } from "../../../data/data";

function ExpertiseSection() {
  return (
    <>
      <div className="Divider" data-aos="fade" data-aos-duration="1200">
        <Divider title="AREAS OF EXPERTISE" sizeText="" />
      </div>

      <div className="flex flex-wrap items-center justify-center text-center place-items-center gap-8 p-7 ss:grid ss:grid-cols-2 sm:grid sm:grid-cols-5 md:grid md:grid-cols-5 md:grid-rows-2 lgg:flex lgg:flex-nowrap">
        {textIcon.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay={index * 100}
              className="flex flex-col items-center justify-center text-center w-full sm:w-[50%] lg:w-[25%] 2xl:w-[18%]"
            >
              <div className="w-full flex flex-1 flex-col justify-center items-center">
                <span className="text-primary-orange text-5xl text-center lg:text-5xl">
                  <Icon />
                </span>
                <span className="mt-4 flex text-sm sm:text-base leading-5 lg:text-[13px]">
                  {item.discription}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="w-[95%] h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)] mx-auto"
        data-aos="fade"
        data-aos-duration="1200"
      />
    </>
  );
}

export default ExpertiseSection;
