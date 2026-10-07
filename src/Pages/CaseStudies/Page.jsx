import React from 'react'
import {casestudiesBtns  , casestudiesTable} from '../../data/casestudiesData'
import { GoArrowRight } from "react-icons/go";
import Hero from "../../Components/Hero/Hero";
import Button from "../../Components/Button/Button";
import MainTable from './components/MainTable';



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
                  sm:grid-cols-2
                  md:grid-cols-4
                  xl:grid-cols-6   mr-3  ml-3 p-4  gap-2'>
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
            px-8
            py-2
            gap-2
            rounded-2xl
            text-primary-orange
            hover:text-white
            hover:bg-primary-orange
            hover:border-white
            transition
            duration-300
          "
          className={ x.index ?'text-white bg-primary-orange border-white ':'' } // نمیدونم چرا این کار نکرد
          />
        ))}
      </div>
    

    <div className='w-full flex flex-col  gap-10    mr-3  ml-3 p-4 '>
       {casestudiesTable.map(x=>(
        <MainTable key={x.id} {...x}/>
       ))}
    </div>
     


     {/* last part */}
     <div className=' mt-5 pt-5 pb-5 pr-10 pl-10  flex flex-col sm:flex-row gap-10 w-full  mr-3  ml-3 p-4 border border-primary-orange rounded-2xl '>
          
          <div className=' w-full  sm:w-[50%] flex flex-col sm:items-start items-center  gap-5'>
            <p className='text-primary-orange flex text-[0.8rem] '>
             ---  READY TO CREATE YOUR SUCCESS STORY ?
            </p>
          <div>
              <h1 className='text-white text-4xl font-family-CormorantGaramondBold'>Let's Bulid Transformation </h1>
            <span className='text-primary-orange text-4xl font-family-CormorantGaramondBold ' >Together.</span>
          </div>
            <p className='text-gray-400 text-[0.8rem]'>Every organization has potential. Let's unlock yours.</p>
          </div>


          <div className='w-full sm:w-[25%] flex justify-center items-center'>
            <Button title='Book a Consultation'  styleBtn="
        
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
          "/>
          </div>


          <div className='w-full sm:w-[25%]'>
            <img  src="dist/assets/Planet Earth.png" alt="" />
          </div>
     </div>

    </>
  )
}
