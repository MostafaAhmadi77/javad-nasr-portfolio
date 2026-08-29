import { GoArrowRight } from "react-icons/go";
// import { Link } from "react-router";
import {
  brand,
  imgData,
  secoundItems,
  textIcon,
  topicItems,
} from "../../data/data";
import Button from "../../Components/Button/Button";
import CartIcon from "../../Components/Card/CartIcons/CartIcon";
import { dataIcon } from "../../Components/Card/CartIcons/dataIcon/data";
import Divider from "../../Components/Divider/Divider";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MainTitle from "./components/MainTitle";
import TopicItems from "./components/TopicItems";
import Title from "./components/Title";
import SecoundItems from "./components/SecoundItems";
import Hero from "../../Components/Hero/Hero";
import HeroImg from "../../assets/Images/H1.png";

function Home() {
  return (
    <>
      <div className="">
        <Hero
          HeroImage={HeroImg}
          titlePage="HELLO, I'M"
          textHyper={
            <div className="flex flex-col gap-10">
              <h2 className="font-family-CormorantGaramondBold ">
                Javad <span className="text-primary-orange">Nasr</span>
              </h2>
              <span className="text-2xl line-clamp-none  ss:text-[0.85rem] lg:text-2xl">
                Management Consultant |{" "}
                <span className="text-primary-orange">
                  Businness Strategist
                </span>{" "}
                | Organizational Transformation Partner
              </span>
            </div>
          }
          textPageDescription="Helping organizations transform strategy into execution, build
            scalable system, and achieve sustainable growth"
          buttons={
            <div className="flex flex-col ss:flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          }
        />
      </div>
      <main className="text-white  border border-primary-orange border-b-0 rounded-t-2xl mr-4 ml-4  backdrop-blur-xl  bg-white/2 ss:pt-6 sm:pt-6  xl:pt-0 ">
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
              <div className="w-full max-w-2xl text-sm sm:text-base lg:text-[0.9rem] font-bold leading-8 text-zinc-300 text-justify">
                I partner with leadership teams to turn challenges into
                opportunities through strategy, systems, and execution. My
                approach combines deep analytical thinking with hands-on
                implementation to deliver measurable and sustainable results.
                <span aria-hidden="true" className="invisible select-none">
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </div>
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
          <Divider title="AREAS OF EXPERTISE" sizeText="" />
        </div>
        <div className="flex flex-wrap  items-center justify-center text-center place-items-center gap-8 p-7 ss:grid ss:grid-cols-2   sm:grid sm:grid-cols-5 md:grid   md:grid-cols-5  md:grid-rows-2 md:text-center  lgg:flex lgg:flex-nowrap">
          {textIcon.map((item) => {
            return (
              <div
                key={item.id}
                className="
          flex  flex-col items-center justify-center   text-center w-full
          
          ss:w-[5%]
          sm:w-[50%]
           lg:w-[25%]
           2xl:w-[18%]
      
        "
              >
                <div className=" w-full flex flex-col  justify-center items-center ">
                  <span className="text-primary-orange text-5xl   lg:text-5xl">
                    {<item.icon />}
                  </span>

                  <span className="mt-4 text-sm sm:text-base leading-5 lg:text-[13px] w-full">
                    {item.discription}
                  </span>
                </div>
              </div>
            );
          })}
        </div>{" "}
        <br />
        <div className="w-[95%] h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)] mr-5 ml-5 "></div>
        <div className="px-4 py- sm:px-6 lg:px-5">
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

      mt-5
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

                  <span className="text-base font-bold">
                    {item.description}
                  </span>
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
            <div className="w-full px-5 lg:px-10 py-10 ">
              <MainTitle
                title="THE DDIES FRAMEWORK™"
                des="A proven approach to transform strategy into sustainable results."
              />

              <section className="relative mt-14">
                {/* line */}
                <div className="hidden lg:block absolute top-12 left-0 right-0 border-t border-dashed border-primary-orange opacity-50"></div>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-10 relative z-10">
                  {topicItems.map((item) => (
                    <TopicItems key={item.id} {...item} />
                  ))}
                </div>
              </section>
              <div className="w-full h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)] opacity-90 mt-10"></div>

              <Title title="WHY ORGANIZATIONS CHOOSE TO WORK WITH ME" />

              <section className="mt-12 grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-6">
                {secoundItems.map((item) => (
                  <SecoundItems key={item.id} {...item} />
                ))}
              </section>
            </div>{" "}
          </div>
          <div className="px-4  sm:px-6 lg:px-10">
            <div
              className="
            -mb-px
      border
      border-primary-orange
      border-b-black
      
      z-20
      rounded-t-2xl
      rounded-b-none
      px-6
      py-1

      flex
      flex-col
      ss:pt-7
      lg:flex-row

      items-center
      justify-between

      
      ss:gap-20
      sm:gap-10
    "
            >
              <section className=" flex flex-col items-center justify-center text-center lg:text-left  ">
                <h2
                  className="
                
          font-family-PTSerif-Regular
          text-3xl
          sm:text-2xl
          lg:text-4xl
          lgg:text-5xl
          font-bold
          leading-tight
        "
                >
                  Let's Build{" "}
                  <span className="text-primary-orange">What's Next</span>
                </h2>

                <p
                  className="
          mt-4
          text-gray-300
          text-sm
          sm:text-base
          leading-7
          pb-4
        "
                >
                  Every successful transformation starts with a conversation.
                </p>
              </section>

              <section
                className="
        flex
        justify-center
        lg:justify-start
      "
              >
                <Button
                  title="Book a Consultation"
                  icon={<GoArrowRight />}
                  styleBtn="
          bg-primary-orange
          rounded-2xl
          px-7
          py-4
          flex
          mb-12
          items-center
          gap-3
          whitespace-nowrap
        "
                />
              </section>
            </div>
          </div>{" "}
        </div>
      </main>
    </>
  );
}

export default Home;
