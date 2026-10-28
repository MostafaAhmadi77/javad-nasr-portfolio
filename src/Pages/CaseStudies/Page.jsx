// import React from 'react'
import { casestudiesBtns, casestudiesTable } from "../../data/caseStudiesData";
import { GoArrowRight } from "react-icons/go";
import Hero from "../../Components/Hero/Hero";
import Button from "../../Components/Button/Button";
import MainTable from "./components/MainTable";
import Swiperjs from "../About/components/Swiperjs";


export default function CaseStudies() {
  return (
    <>
      .
      <Hero
        titlePage="Case Studies"
        textHyper={
          <div className="flex flex-col ss:items-center md:items-center lg:items-start  ">
            <section className="w-full md:w-[30%] mb-6 h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)]"></section>

            <h1>
              <span className="font-family-CormorantGaramondBold text-5xl line-clamp-3">
                Transformation in{" "}
                <span className="text-primary-orange">Action.</span>
              </span>
            </h1>
            <section className="w-[85%] md:w-[30%] mt-6 h-[0.1rem] bg-[radial-gradient(circle,#FB5701_0%,#050302_99%)]"></section>
          </div>
        }
        textPageDescription={
          <div className="text-justify ">
            <span className="flex text-justify ">
              Real projects. Real impact. See how I partner with organizations
              to solve complex challenges and deliver measurable , lasting
              results.
            </span>
          </div>
        }
        buttons={
          <Button
            link="/consultation"
            title="Let's Discuss Your Case"
            icon={<GoArrowRight />}
            styleBtn="
            flex
            justify-center
            items-center
            border
            border-primary-orange
            px-10
            py-3
            gap-3
            rounded-2xl
            text-primary-orange
            hover:text-white
            hover:bg-primary-orange
            hover:border-white
            transition
            duration-300
          "
          />
        }
      />
      {/* Swiper Silder */}
      <div className="siwper-silder px-6">
        <Swiperjs />
      </div>




      
      {/* casestudiesTable Sections */}
      <div className="w-full flex flex-col  gap-10  p-5 ">
        {casestudiesTable.map((x) => (
          <MainTable key={x.id} {...x} />
        ))}
      </div>
      {/* last part */}
      <div className="p-5">
        <div className=" w-full  p-4   flex justify-between   gap-10   border border-primary-orange rounded-2xl 
        ss:flex-col ss:justify-center ss:items-center ss:text-center
        sm:flex-col sm:justify-center sm:text-center sm:items-center
        xl:flex-row xl:justify-baseline xl:text-start xl:items-center
        ">
          <div className=" w-full flex flex-col   items-center  gap-5 
          ss:self-center 
          sm:self-center sm:w-[50%] sm:items-center
          xl:self-start xl:w-[80%] xl:items-start
          ">
            <p className="text-primary-orange flex text-[0.8rem] ">
              --- READY TO CREATE YOUR SUCCESS STORY ?
            </p>
            <div className="w-[24rem] ss:text-center sm:text-center xl:w-160 xl:text-start">
              <span className=" text-white text-4xl ss:text-[0.9rem] sm:text-4xl font-family-CormorantGaramondBold">
                Let's Build Transformation{" "}
              </span>
              <span className="text-primary-orange text-4xl ss:text-[0.9rem] sm:text-4xl font-family-CormorantGaramondBold ">
                Together.
              </span>
            </div>
            <p className="text-gray-400 text-[0.8rem] self-center xl:self-start">
              Every organization has potential. Let's unlock yours.
            </p>
          </div>

          <div className="w-full sm:w-[35%] flex justify-center items-center xl:w-[20%]">
            <Button
              link="/consultation"
              title="Book a Consultation"
              styleBtn="
        
            border
            border-primary-orange
            px-6
            py-4
            rounded-[0.5rem]
            text-primary-orange
            hover:text-white
            hover:bg-primary-orange
            hover:border-white
            transition
            duration-300
          "
            />
          </div>

        </div>
      </div>
    </>
  );
}
