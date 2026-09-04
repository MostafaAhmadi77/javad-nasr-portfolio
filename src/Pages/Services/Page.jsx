import Divider from "../../Components/Divider/Divider";
import Hero from "../../Components/Hero/Hero";
import HeroImg from "../../assets/Images/H1.png";
import { dataServices, titleService } from "../../data/data";
import CartIcon from "../../Components/Card/CartIcons/CartIcon";
import Items from "../../Components/Item/Items";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import Button from "../../Components/Button/Button";
import { GoArrowRight } from "react-icons/go";
function Services() {
  return (
    <>
      <div className="px-5 pb-5">
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

        <div className="py-2 flex flex-col ">
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
          data-aos="zoom-in"
          className="bg-[#111111] w-full flex flex-col items-center 
        py-4 px-4 
        justify-between border border-primary-orange rounded-2xl"
        >
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="text-primary-orange font-bold"
          >
            {" "}
            HOW I CREATE IMPACT
          </p>
          <h3
            data-aos="zoom-in-down"
            className="text-white font-family-CormorantGaramondBold font-bold 
          text-3xl
          "
          >
            A Holistic Approach to Transformation
          </h3>
          <div className="w-full">
            <Items colorText="text-white" />
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <div data-aos="zoom-in-right" className="w-[50%] p-4 flex flex-col gap-2 items-center border bg-[#111111]  rounded-2xl">
            <p className="font-family-CormorantGaramondBold text-white text-3xl ">
              Why Organizations{" "}
              <span className="text-primary-orange">Choose</span> My Services
            </p>
            <div className="flex flex-col">
              {titleService.map((item) => (
                <div className=" flex items-center gap-2">
                  <span className="text-primary-orange text-2xl">
                    <HiOutlineCheckBadge />
                  </span>
                  <span className="text-white pt-2">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div  
          data-aos="zoom-in-left"
          className="w-[50%] flex p-4 gap-3 border bg-[radial-gradient(circle,rgba(255,89,0,0.1)_40%,rgba(5,3,2,1)_99%)]  border-primary-orange rounded-2xl justify-center items-center ">
            <div className=" flex flex-col justify-center items-center gap-3">
              <div className="text-white flex flex-col justify-center items-center text-2xl font-family-CormorantGaramondBold">
                <span>Ready to Transform</span>
                <span className="text-primary-orange">Your Organization?</span>
              </div>
              <div className="text-white w-full">
                <span>
                  Let's discuss how we can achieve extraordinary results
                  together
                </span>
              </div>
              <div className="">
                <Button
                  title="Book a Consultation"
                  styleBtn="w-[13rem] bg-primary-orange flex justify-center items-center gap-3 p-4 text-white rounded-2xl"
                  icon={<GoArrowRight />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
