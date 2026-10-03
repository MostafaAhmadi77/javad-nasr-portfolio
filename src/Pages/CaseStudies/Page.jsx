import React from 'react'
import casestudiesBtns from '../../data/casestudiesData'
import { GoArrowRight } from "react-icons/go";
import Hero from "../../Components/Hero/Hero";
import Button from "../../Components/Button/Button";



export default function CaseStudies() {
  return (
    <>
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
         Real projects. Real impact. See how I partner with organizations to solve complex challenges and deliver measurable , lasing results.
            </span>
          </div>
        }
        buttons={
          <Button
            title="Let 's Discuss Your Case "
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

      <div className=' grid
                  grid-cols-1
                  sm:grid-cols-1
                  md:grid-cols-2
                  xl:grid-cols-4   mr-3  ml-3 p-4  gap-4'>
        {casestudiesBtns.map(x=>(
             <Button
             key={x.id}
            title={x.title}
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
        ))}
      </div>
    
    
    </>
  )
}
