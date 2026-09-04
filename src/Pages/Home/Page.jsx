import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

import AOS from "aos";
import "aos/dist/aos.css";

import {
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
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [activeCard, setActiveCard] = useState(null);

  // =========================================================
  // AOS INITIALIZATION
  // =========================================================

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 100,
      anchorPlacement: "top-bottom",
    });

    const refreshAOS = () => {
      AOS.refreshHard();
    };

    // Refresh after initial render
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 300);

    // Refresh after images/layout are loaded
    window.addEventListener("load", refreshAOS);
    window.addEventListener("resize", refreshAOS);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", refreshAOS);
      window.removeEventListener("resize", refreshAOS);
    };
  }, []);

  // =========================================================
  // CARD TOUCH HANDLER
  // =========================================================

  const handleCardTouch = (id) => {
    setActiveCard((current) => (current === id ? null : id));
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

<div
  data-aos="fade"
  data-aos-duration="1200"
>
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
            sequence={[
              300,
              "Javad ",
              300,
              "Javad Nasr",
            ]}
            wrapper="span"
            speed={1}
            cursor={false}
            repeat={0}
          />
        </h2>

        {/* PROFESSIONAL TITLE */}
        <span className="text-2xl line-clamp-none ss:text-[0.85rem] lg:text-2xl">

          <TypeAnimation
            sequence={[
              500,
              "Management Consultant | ",
            ]}
            wrapper="span"
            speed={40}
            cursor={false}
            repeat={0}
          />

          <TypeAnimation
            sequence={[
              1500,
              "Business Strategist",
            ]}
            wrapper="span"
            speed={40}
            cursor={false}
            repeat={0}
            className="text-primary-orange"
          />

          <TypeAnimation
            sequence={[
              1500,
              " | Organizational Transformation Partner",
            ]}
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
        className="
          flex
          flex-col
          ss:flex-col
          sm:flex-row
          gap-4
          justify-center
          lg:justify-start
        "
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="500"
      >
        {/* BUTTON 1 */}
        <Button
          title="Let's Work Together"
          icon={<GoArrowRight />}
          styleBtn="
            flex
            justify-center
            items-center
            bg-primary-orange
            px-8
            py-3
            gap-3
            rounded-2xl
            text-white
            transition
            duration-300
          "
        />

        {/* BUTTON 2 */}
        <Button
          title="Explore Services"
          icon={<GoArrowRight />}
          styleBtn="
            flex
            justify-center
            items-center
            border
            border-white
            px-10
            py-3
            gap-3
            rounded-2xl
            text-white
            hover:text-white
            transition
            duration-300
          "
        />
      </div>
    }
  />
</div>      {/* =====================================================
          MAIN
      ===================================================== */}

      <main
        className="
          text-white
          border
          border-primary-orange
          border-b-0
          rounded-t-2xl
          mr-4
          ml-4
          backdrop-blur-xl
          bg-white/2
          ss:pt-6
          sm:pt-6
          xl:pt-0
        "
      >

        {/* ===================================================
            ABOUT + ICON CARDS
        =================================================== */}

        <div
          className="
            flex
            flex-col
            xl:flex-row
            items-center
            justify-between
            gap-12
            p-5
            sm:p-8
            lg:p-10
          "
        >

          {/* =================================================
              ABOUT
          ================================================= */}

          <div
            className="
              w-full
              xl:max-w-[28rem]
              flex
              flex-col
              gap-5
              text-center
              xl:text-left
            "
            data-aos="fade-right"
            data-aos-duration="1000"
          >

            {/* ABOUT TITLE */}

            <section
              className="text-primary-orange tracking-[3px]"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <SectionTitle title="ABOUT" />
            </section>

            {/* MAIN ABOUT TITLE */}

            <section
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-3xl
                  font-family-PTSerif-Regular
                  font-bold
                  leading-tight
                "
              >
                Building Organizations That{" "}
                <span className="text-primary-orange">
                  Last
                </span>
                .
              </p>
            </section>

            {/* DESCRIPTION */}

            <section
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                className="
                  w-full
                  max-w-2xl
                  text-sm
                  sm:text-base
                  lg:text-[0.9rem]
                  font-bold
                  leading-8
                  text-zinc-300
                  text-justify
                "
              >
                I partner with leadership teams to turn
                challenges into opportunities through
                strategy, systems, and execution. My
                approach combines deep analytical thinking
                with hands-on implementation to deliver
                measurable and sustainable results.

                <span
                  aria-hidden="true"
                  className="invisible select-none"
                >
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </div>
            </section>

            {/* LEARN MORE */}

            <section
              className="
                flex
                justify-center
                xl:justify-start
              "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Button
                link="/"
                title="Learn more about me"
                icon={<GoArrowRight />}
                styleBtn="
                  flex
                  items-center
                  gap-4
                  text-primary-orange
                  transition
                  duration-300
                "
              />
            </section>
          </div>

          {/* =================================================
              ABOUT ICON CARDS
          ================================================= */}

          <div
            className="
              w-full
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4
              gap-6
            "
          >
            {dataIcon.map((data, index) => {
              const Icon = data.icon;

              return (
                <div
                  key={data.id}
                  data-aos="flip-up"
                  data-aos-duration="900"
                  data-aos-delay={index * 120}
                >
                  <CartIcon
                    title={data.title}
                    description={data.decription}
                    icon={<Icon />}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            DIVIDER
        =================================================== */}

        <div
          className="Divider"
          data-aos="fade"
          data-aos-duration="1200"
        >
          <Divider
            title="AREAS OF EXPERTISE"
            sizeText=""
          />
        </div>

        {/* ===================================================
            AREAS OF EXPERTISE
        =================================================== */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            text-center
            place-items-center
            gap-8
            p-7

            ss:grid
            ss:grid-cols-2

            sm:grid
            sm:grid-cols-5

            md:grid
            md:grid-cols-5
            md:grid-rows-2

            lgg:flex
            lgg:flex-nowrap
          "
        >
          {textIcon.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay={index * 100}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  w-full
                  sm:w-[50%]
                  lg:w-[25%]
                  2xl:w-[18%]
                "
              >
                <div
                  className="
                    w-full
                    flex
                    flex-1
                    flex-col
                    justify-center
                    items-center
                  "
                >
                  <span
                    className="
                      text-primary-orange
                      text-5xl
                      text-center
                      lg:text-5xl
                    "
                  >
                    <Icon />
                  </span>

                  <span
                    className="
                      mt-4
                      flex
                      text-sm
                      sm:text-base
                      leading-5
                      lg:text-[13px]
                    "
                  >
                    {item.discription}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <br />

        {/* ===================================================
            SECTION DIVIDER
        =================================================== */}

        <div
          className="
            w-[95%]
            h-[0.1rem]
            bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)]
            mx-auto
          "
          data-aos="fade"
          data-aos-duration="1200"
        />

        {/* ===================================================
            INDUSTRY EXPERTISE
        =================================================== */}

        <div
          className="
            px-4
            py-
            sm:px-6
            lg:px-5
          "
        >

          {/* =================================================
              SECTION HEADER
          ================================================= */}

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
                styleBtn="
                  flex
                  items-center
                  justify-center
                  gap-3
                  text-sm
                  sm:text-base
                  lg:text-lg
                  transition
                  duration-300
                "
              />
            </section>
          </div>

          {/* =================================================
              INDUSTRY CARDS
          ================================================= */}

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
            {imgData.map((item, index) => (
              <div
                key={item.id}

                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay={index * 120}

                onTouchStart={() => handleCardTouch(item.id)}

                onClick={() => {
                  if (
                    typeof window !== "undefined" &&
                    window.matchMedia("(hover: none)").matches
                  ) {
                    handleCardTouch(item.id);
                  }
                }}

                className="
                  group
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

                  transition-all
                  duration-800

                  lg:hover:-translate-y-4
                  lg:hover:-translate-x-2

                  lg:hover:border-primary-orange

                  lg:hover:shadow-[15px_15px_20px_rgba(251,87,1,.18)]
                "
              >

                {/* =================================================
                    IMAGE
                ================================================= */}

                <section>
                  <img
                    className="
                      w-full
                      h-52
                      object-cover
                      rounded-t-2xl

                      transition-transform
                      duration-700

                      lg:group-hover:scale-105
                    "
                    src={item.img}
                    alt={item.title}
                  />
                </section>

                {/* =================================================
                    TITLE
                ================================================= */}

                <section
                  className="
                    px-4
                    py-4
                    flex-1
                  "
                >
                  <span
                    className="
                      text-xs
                      font-bold
                      text-primary-orange
                    "
                  >
                    <abbr
                      title={item.description}
                      className="no-underline"
                    >
                      {item.title}
                    </abbr>
                  </span>
                </section>

                {/* =================================================
                    BUTTON
                ================================================= */}

                <section
                  className={`
                    px-4
                    pb-4

                    opacity-0
                    translate-y-3

                    transition-all
                    duration-500
                    ease-out

                    ${
                      activeCard === item.id
                        ? "opacity-100 translate-y-0"
                        : ""
                    }

                    lg:group-hover:opacity-100
                    lg:group-hover:translate-y-0
                  `}
                >
                  <Button
                    title="View Case Study"
                    icon={<GoArrowRight />}
                    styleBtn="
                      flex
                      items-center
                      gap-3
                      text-primary-orange
                    "
                  />
                </section>
              </div>
            ))}
          </div>

          {/* ===================================================
              DDIES FRAMEWORK
          =================================================== */}

          <div>
            <div
              className="
                w-full
                px-5
                lg:px-10
                py-10
              "
            >

              {/* =================================================
                  TITLE
              ================================================= */}

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <MainTitle
                  title="THE DDIES FRAMEWORK™"
                  des="A proven approach to transform strategy into sustainable results."
                />
              </div>

              {/* =================================================
                  FRAMEWORK
              ================================================= */}

              <section className="relative mt-14">

                {/* LINE */}

                <div
                  className="
                    hidden
                    lg:block

                    absolute
                    top-12
                    left-0
                    right-0

                    border-t
                    border-dashed
                    border-primary-orange

                    opacity-50
                  "
                  data-aos="fade"
                  data-aos-duration="1500"
                />

                {/* ITEMS */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-1
                    lg:grid-cols-5

                    gap-10

                    relative
                    z-10
                  "
                >
                  {topicItems.map((item, index) => (
                    <div
                      key={item.id}
                      data-aos="flip-left"
                      data-aos-duration="800"
                      data-aos-delay={index * 150}
                    >
                      <TopicItems {...item} />
                    </div>
                  ))}
                </div>
              </section>

              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div
                className="
                  w-full
                  h-[0.1rem]

                  bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)]

                  opacity-90
                  mt-10
                "
                data-aos="fade"
              />

              {/* =================================================
                  WHY
              ================================================= */}

              <div
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <Title
                  title="WHY ORGANIZATIONS CHOOSE TO WORK WITH ME"
                />
              </div>

              {/* =================================================
                  SECOND ITEMS
              ================================================= */}

              <section
                className="
                  mt-12

                  grid
                  grid-cols-1
                  sm:grid-cols-1
                  md:grid-cols-2
                  xl:grid-cols-4

                  gap-6
                "
              >
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
          </div>

          {/* ===================================================
              CTA
          =================================================== */}

          <div
            className="
              px-4
              sm:px-6
              lg:px-10
              
              
            "
          >
            <div
              className="
                

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
              // data-aos="zoom-in"
              // data-aos-duration="1000"
            >

              {/* =================================================
                  CTA TEXT
              ================================================= */}

              <section
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  lg:text-left
                "
              >
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
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Let's Build{" "}
                  <span className="text-primary-orange">
                    What's Next
                  </span>
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
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Every successful transformation starts
                  with a conversation.
                </p>
              </section>

              {/* =================================================
                  CTA BUTTON
              ================================================= */}

              <section
                className="
                  flex
                  justify-center
                  lg:justify-start
                "
                data-aos="fade-left"
                data-aos-delay="400"
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

                    transition-all
                    duration-300

                    hover:scale-105
                  "
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;