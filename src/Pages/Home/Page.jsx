import { GoArrowRight } from "react-icons/go";
// import { Link } from "react-router";
import HeroImage from "../../assets/Images/H1.png";
import { brand, textIcon } from "../../data/data";
import Button from "../../Components/Button/Button";
import CartIcon from "../../Components/Card/CartIcons/CartIcon";
import { dataIcon } from "../../Components/Card/CartIcons/dataIcon/data";
import Divider from "../../Components/Divider/Divider";

function Home() {
  return (
    <div className="bg-black flex flex-col p-3">
      <header className="px-5 sm:px-8 lg:px-12 xl:px-10 pt-8 lg:pt-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-auto)] ">
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
              style="flex justify-center items-center bg-primary-orange px-8 py-3 gap-3 rounded-2xl text-white  transition"
            />

            <Button
              title="Explore Services"
              icon={<GoArrowRight />}
              style="flex justify-center items-center border border-withe px-10 py-3 gap-3 gap-3 rounded-2xl text-white hover:text-white transition"
            />
          </div>

          <div className="text-white">
            <p className="text-sm sm:text-base text-center lg:text-left">
              Trusted by forward-thinking brands
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-5 mt-6 text-lg sm:text-xl">
              {brand.map((item) => {
                const Icon = item.Icon;

                return (
                  <span
                    key={item.title}
                    className="flex items-center  gap-2 text-gray-300 hover:text-primary-orange transition 2xl:text-2xl"
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
      </header>
      <main className="text-white  border border-primary-orange rounded-2xl   backdrop-blur-xl bg-white/2">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 p-5 sm:p-8 lg:p-10">
          <div className="w-full xl:max-w-[28rem] flex flex-col gap-5 text-center xl:text-left">
            <section className="text-primary-orange tracking-[3px]">
              ABOUT
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
                style="flex items-center gap-4 text-primary-orange"
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
        <div className="flex flex-wrap  items-center justify-center text-center gap-8 p-4   lg:flex-nowrap">
          {textIcon.map((item) => {
            return (
              <div
                className="
          flex  flex-col items-center justify-center
          w-full
          ss:w-[5%]
          sm:w-[50%]
           lg:w-[22%]
           2xl:w-[18%]
      
        "
              >
                <span className="text-primary-orange text-5xl lg:text-6xl">
                  {<item.icon />}
                </span>

                <span className="mt-4 text-sm sm:text-base leading-7">
                  {item.discription}
                </span>
              </div>
            );
          })}
        </div>{" "}
      </main>

      <footer className="text-white">Footer</footer>
    </div>
  );
}

export default Home;
// sm:w-[45%]
// lg:w-[22%]
// 2xl:w-[8%]
