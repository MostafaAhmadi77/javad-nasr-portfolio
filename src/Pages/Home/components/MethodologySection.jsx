import MainTitle from "./MainTitle";
import Title from "./Title";
import SecoundItems from "./SecoundItems";
import Items from "../../../Components/Item/Items";
import { secoundItems } from "../../../data/data";

function MethodologySection() {
  return (
    <div className="w-full px-5 lg:px-10 py-10">
      <div data-aos="fade-up" data-aos-duration="1000">
        <MainTitle title="Consulting Methodology" des="THE DDIES FRAMEWORK™" />
      </div>

      <Items />

      <div
        className="w-full h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)] opacity-90 mt-10"
        data-aos="fade"
      />

      <div data-aos="fade-right" data-aos-duration="900">
        <Title title="WHY ORGANIZATIONS CHOOSE TO WORK WITH ME" />
      </div>

      <section className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {secoundItems.map((item, index) => (
          <div
            key={item.id}
            data-aos="flip-left"
            data-aos-duration="900"
            data-aos-delay={index * 120}
          >
            <SecoundItems {...item} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default MethodologySection;
