import React from 'react'
import { FaArrowRight } from "react-icons/fa";




export default function MainTable({id , img , shortTitle , longTitle , type , typeIcon , loc , locIcon , description , firstNum , firstTitle , secoundNum , secoundTitle , thirdNum , thirdTitle}) 


{
  return (
    <div className= 'w-full text-amber-50 flex  md:flex-row sm:flex-row ss:flex-col  border border-gray-800 rounded-2xl gap-10'>
       
       <img src={img} className="w-full sm:w-[25%]"  />
       
       <div className='sm:w-[35%] w-full flex flex-col items-start justify-center gap-5 p-5'>
           <div className='flex  justify-start items-baseline gap-5 text-primary-orange'>
               <span className=' pt-2 pb-2 pr-3 pl-3 border  border-primary-orange rounded'>{id}</span>
               <span className='text-[0.9rem]'>{shortTitle}</span>
           </div>
          <h1 className='text-3xl text-white font-family-CormorantGaramondBold'>{longTitle}

          </h1>
          <p className='text-gray-400 text-[0.9rem]' >{description}</p>
          <div className='flex justify-start items-center gap-10 text-gray-400 text-[0.9rem]'>
               <div className='flex justify-start items-center gap-5'>
                  <span>{typeIcon}</span>
                  <span>{type}</span>
               </div>
                 <div className='flex justify-start items-center gap-5'>
                  <span>{locIcon}</span>
                  <span>{loc}</span>
               </div>
          </div>
       </div>
         
  
       <div className='w-[35%] flex flex-col items-start justify-center gap-15 p-5 border-l-1 border-gray-700'>
            <div className='flex justify-center items-center gap-10'>
                 <div className='flex flex-col gap-5'>
                    <h2 className='text-4xl font-family-PTSerif-Regular text-primary-orange'>{firstNum}</h2>
                    <p className='text-gray-400 text-[0.8rem]'>{firstTitle}</p>
                 </div>
                   <div className='flex flex-col gap-5'>
                    <h2 className='text-4xl font-family-PTSerif-Regular text-primary-orange'>{secoundNum}</h2>
                    <p className='text-gray-400 text-[0.8rem]'>{secoundTitle}</p>
                 </div> 
                  <div className='flex flex-col gap-5'>
                    <h2 className='text-4xl font-family-PTSerif-Regular text-primary-orange'>{thirdNum}</h2>
                    <p className='text-gray-400 text-[0.8rem]'>{thirdTitle}</p>
                 </div> 
            </div>
            <button className='flex justify-start items-center p-2 rounded gap-5 text-primary-orange hover:border hover:border-primary-orange transition duration-300 hover:scale-105'>View Case Study  <FaArrowRight /></button>
       </div>



    </div>
  )
}
