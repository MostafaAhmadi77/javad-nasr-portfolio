import { GoArrowRight } from "react-icons/go";
// import { Link } from "react-router";
import { imgData, secoundItems, textIcon, topicItems } from "../../data/data";
import Button from "../../Components/Button/Button";
import CartIcon from "../../Components/Card/CartIcons/CartIcon";
import { dataIcon } from "../../Components/Card/CartIcons/dataIcon/data";
import Divider from "../../Components/Divider/Divider";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MainTitle from "./components/MainTitle";
import TopicItems from "./components/TopicItems";
import Title from "./components/Title";
import SecoundItems from "./components/SecoundItems";

function Home() {
  return (
    <main className="text-white  border border-primary-orange rounded-2xl   backdrop-blur-xl bg-white/2 ss:pt-6 sm:pt-6  xl:pt-0 ">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-12 p-5 sm:p-8 lg:p-10">
        <div className="w-full xl:max-w-[28rem] flex flex-col gap-5 text-center xl:text-left">
          <section className="text-primary-orange tracking-[3px]">
            <SectionTitle title="ABOUT" />
          </section>

          <section>
            <p className="text-3xl sm:text-4xl lg:text-3xl font-family-PTSerif-Regular font-bold leading-tight">
              Building Organizations That{" "}
              <span className="text-primary-orange">Last</span>.
            </p>
          </section>

          <section>
            <span className="text-sm sm:text-base lg:text-[0.9rem] font-bold leading-8 text-zinc-300">
              I partner with leadership teams to turn challenges into
              opportunities through strategy, systems, and execution. My
              approach combines deep analytical thinking with hands-on
              implementation to deliver measurable and sustainable results.
            </span>
          </section>

          <section className="flex justify-center xl:justify-start">
            <Button
              link="/"
              title="Learn more about me"
              icon={<GoArrowRight />}
              styleBtn="flex items-center gap-4 text-primary-orange"
            />
          </section>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {dataIcon.map((data) => {
            const Icon = data.icon;

            return (
              <CartIcon
                key={data.id}
                title={data.title}
                description={data.decription}
                icon={<Icon />}
              />
            );
          })}
        </div>
      </div>{" "}
      <div className="Divider">
        <Divider title="AREAS OF EXPERTISE" />
      </div>
      <div className="flex flex-wrap  items-center justify-center text-center place-items-center gap-8 p-7 ss:grid ss:grid-cols-2   sm:grid sm:grid-cols-5 md:grid   md:grid-cols-5  md:grid-rows-2 md:text-center  lgg:flex lgg:flex-nowrap">
        {textIcon.map((item) => {
          return (
            <div
              key={item.id}
              className="
          flex  flex-col items-center justify-center  text-center w-full
          
          ss:w-[5%]
          sm:w-[50%]
           lg:w-[22%]
           2xl:w-[18%]
      
        "
            >
              <span className="text-primary-orange text-5xl  lg:text-5xl">
                {<item.icon />}
              </span>

              <span className="mt-4 text-sm sm:text-base leading-5 lg:text-1xl ">
                {item.discription}
              </span>
            </div>
          );
        })}
      </div>{" "}
      <hr className="text-primary-orange  mr-5 ml-5 " />
      <div className="px-4 py-8 sm:px-6 lg:px-5">
        <div
          className="
      flex
      flex-col
      items-center
      gap-6
      text-center

      lg:flex-row
      lg:justify-between
      lg:items-center
      lg:text-left
    "
        >
          <section>
            <SectionTitle title="FEATURED TRANSFORMATIONS" />
          </section>

          <section>
            <Button
              title="View All Case Studies"
              icon={<GoArrowRight />}
              styleBtn="
          flex
          items-center
          justify-center
          gap-3
          text-sm
          sm:text-base
          lg:text-lg
        "
            />
          </section>
        </div>
        <div
          className="
    flex
    flex-wrap
    justify-center
    lg:justify-between
    gap-6
    mt-6
  "
        >
          {imgData.map((item) => (
            <div
              key={item.id}
              className="
                transition-all
      duration-500
      hover:-translate-y-4
      hover:-translate-x-2
      hover:border-primary-orange
                hover:shadow-[15px_15px_20px_rgba(251,87,1,.18)]
                
        flex
        flex-col
        justify-between
        border
        border-orange-950
        rounded-2xl
        overflow-hidden

        w-full
        sm:w-[48%]
        lg:w-[31%]
        xl:w-[31%]
      "
            >
              <section>
                <img
                  className="w-full h-52 object-cover rounded-t-2xl"
                  src={item.img}
                  alt={item.title}
                />
              </section>

              <section className="px-4 py-4 flex-1">
                <span className="text-xs font-bold text-primary-orange">
                  {item.title}
                </span>

                <br />

                <span className="text-base font-bold">{item.description}</span>
              </section>

              <section className="px-4 pb-4">
                <Button
                  title="View Case Study"
                  icon={<GoArrowRight />}
                  styleBtn="flex items-center gap-3 text-primary-orange"
                />
              </section>
            </div>
          ))}
        </div>{" "}
        <div>
          <div className="w-full px-5 lg:px-10 py-10">
            <MainTitle
              title="THE DDIES FRAMEWORK™"
              des="A proven approach to transform strategy into sustainable results."
            />

            <section className="relative mt-14">
              {/* line */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 border-t border-dashed border-primary-orange opacity-50"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 relative z-10">
                {topicItems.map((item) => (
                  <TopicItems key={item.id} {...item} />
                ))}
              </div>
            </section>
            <div className="w-full border-t-2 border-primary-orange opacity-20 mt-10"></div>

            <Title title="WHY ORGANIZATIONS CHOOSE TO WORK WITH ME" />

            <section className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {secoundItems.map((item) => (
                <SecoundItems key={item.id} {...item} />
              ))}
            </section>
          </div>{" "}
        </div>



        <div>
          <div className="">
            <section></section>
            <section></section>
            <section></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
