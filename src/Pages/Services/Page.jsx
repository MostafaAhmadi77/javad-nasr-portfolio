import { Icon } from "@mui/material";
import ServiceCart from "../../Components/Card/ServicesCart/ServiceCart";
import Divider from "../../Components/Divider/Divider";
import Hero from "../../Components/Hero/Hero";
import HeroImg from "../../assets/Images/H1.png";
import { dataServices } from "../../data/data";
import CartIcon from "../../Components/Card/CartIcons/CartIcon";
import Items from "../../Components/Item/Items";
import { HiOutlineCheckBadge } from "react-icons/hi2";
function Services() {
  return (
    <>
      <div className="px-5">
        <Hero
          HeroImage={HeroImg}
          titlePage="SERVICES"
          textHyper={
            <div className="flex ss:flex-col ss:justify-center ss:items-center ss:text-3xl md:flex-col md:justify-center md:items-center md:text-5xl lg:justify-start lg:items-start font-family-CormorantGaramondBold text-6xl">
              <section className="w-full md:w-[30%] mb-6 h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)]"></section>
              <p>Strategic Solutions.</p>
              <span>
                Measurable <span className="text-primary-orange">Results.</span>
              </span>
              <section className="w-[85%] md:w-[30%] mt-6 h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)]"></section>
            </div>
          }
          textPageDescription={
            <div>
              <span>
                I partner with organizations to solve complex challenges,
                optimize performance, and build the capabilities needed for
                long-term success
              </span>
            </div>
          }
        />

        <div className="py-2 flex flex-col">
          <div className="w-full flex flex-col items-center gap-3">
            <div>
              <span
                data-aos="zoom-out"
                className="text-primary-orange font-bold text-5xl ss:text-[0.45rem] sm:text-[0.8rem] xl:text-[1rem] 2xl:text-2xl"
              >
                WHAT I DO
              </span>
            </div>
            <Divider
              title={
                <div className="text-white font-family-CormorantGaramondBold text-5xl ss:text-[0.45rem] sm:text-[1.2rem] lg:text-2xl xl:text-3xl">
                  <p>Core consulting Services</p>
                </div>
              }
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-5 auto-rows-fr">
            {dataServices.map((item) => {
              const Icon = item.icon;
              return (
                <CartIcon
                  key={item.id}
                  icon={<Icon />}
                  title={item.title}
                  styles="h-full gap-6"
                  flex="w-full flex items-center gap-5"
                  description={item.description}
                  setylDec={"w-[18rem] "}
                  w={"w-auto"}
                  h={"h-auto p-1"}
                  option={
                    <div className="flex flex-col flex-1  gap-2 mt-auto">
                      {item.itemService.map((service, index) => (
                        <p key={index} className="flex  items-center gap-2">
                          <span className="text-primary-orange">
                            <HiOutlineCheckBadge />
                          </span>
                          {service}
                        </p>
                      ))}
                    </div>
                  }
                />
              );
            })}
          </div>
        </div>
        <div
          className="w-full flex flex-col items-center 
        py-4 px-4 
        justify-between border border-primary-orange rounded-2xl"
        >
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="text-primary-orange font-bold"
          >
            {" "}
            HOW I CREATE IMPACT
          </p>
          <h3
            className="text-white font-family-CormorantGaramondBold font-bold 
          text-3xl
          "
          >
            A Holistic Approach to Transformation
          </h3>
          <div className="w-full">
            <Items />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
