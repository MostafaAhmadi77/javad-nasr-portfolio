import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../Components/Button/Button";

export default function MainTable({
  id,
  img,
  shortTitle,
  longTitle,
  type,
  typeIcon: TypeIcon,
  loc,
  locIcon: LocIcon,
  description,
  firstNum,
  firstTitle,
  secoundNum,
  secoundTitle,
  thirdNum,
  thirdTitle,
}) {
  return (
    <div
      className="flex w-full    gap-10 rounded-2xl border border-gray-800 text-amber-50 
    ss:flex-col
    sm:flex-col
    md:flex-col 
    xl:flex-row
    "
    >
      {/* Project Image */}
      <div
        className="h-62.5 w-87.5 rounded-2xl 
         
         bg-cover bg-center 
         ss:w-full 
         sm:w-full
         md:w-full
         xl:w-[24rem]
         "
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Project Information */}
      <div
        className="h-87.5 w-115.25 flex items-center justify-center
      ss:flex-col ss:h-62 ss:w-full
      sm:flex-col sm:h-62.5 sm:w-full 
      md:flex-col md:h-62.5 md:w-full 
      xl:flex-col xl:h-62.5 xl:w-full xl:items-start  
       
      lgg:w-175"
      >
        <div className="flex flex-col gap-5 ">
          <div
            className=" flex gap-5  text-primary-orange
          ss:items-center ss:justify-center
           xl:justify-start
          "
          >
            <span className="rounded border border-primary-orange px-3 py-2">
              {id}
            </span>
            <span className="text-[0.9rem]">{shortTitle}</span>
          </div>

          <h2
            className=" font-family-CormorantGaramondBold text-2xl text-white 
          ss:text-center 
          sm:text-center
          md:text-center
          xl:text-start
           "
          >
            {longTitle}
          </h2>

          <p
            className="text-[0.9rem] text-gray-400 ss:self-center sm:w-132 
          ss:text-center 
          md:text-center
          xl:text-start"
          >
            {description}
          </p>

          <div
            className="flex items-center justify-start gap-10 text-[0.9rem] text-gray-400 
          ss:self-center
          sm:self-center
          md:self-center
          xl:self-start"
          >
            <div className="flex items-center gap-5">
              {TypeIcon && (
                <span>
                  <TypeIcon />
                </span>
              )}
              <span>{type}</span>
            </div>

            <div className="flex items-center gap-5">
              {LocIcon && (
                <span>
                  <LocIcon />
                </span>
              )}
              <span>{loc}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Statistics and Action */}
      <div
        className=" h-100 w-116 flex  flex-col  justify-around gap-24 p-4 border-l border-gray-700

        ss:
         ss:p-0 ss:w-full ss:h-60  ss:justify-center ss:items-center ss:border-l-0
         sm:p-0 sm:w-full sm:h-60 sm:justify-center sm:items-center 
         sm:gap-16 sm:border-0
         
         md:p-0 md:w-full md:h-60 md:justify-center md:items-center 
         md:gap-16 md:border-0 md:border-l-0 
         md:flex-1
         lg:p-5 lg:justify-center lg:items-center  
         xl:w-175 xl:h-64 xl:items-center xl:gap-12 xl:flex-1 xl:border-l
      "
      >
        <div className="flex items-center justify-center  gap-10 ss:gap-3 sm:gap-20 xl:gap-20 ">
          <div className="flex flex-col ss:gap-3  sm:gap-5">

            <span
              className="font-family-PTSerif-Regular text-4xl text-primary-orange 
            ss:text-[0.9rem]
            ss:self-center 
            sm:self-center 
            lg:self-center
            xl:self-center
             "
            >
              {firstNum}
            </span>
            <span
              className="text-[0.8rem] text-gray-400   flex-1 
              ss:text-[0.7rem]
              ss:text-center 
              sm:self-center
              lgg:self-center"
            >
              {firstTitle}
            </span>
          </div>

          <div className="flex flex-col ss:gap-3 sm:gap-5 ">
            <span
              className="font-family-PTSerif-Regular text-4xl text-primary-orange  flex-1              
              ss:text-[0.9rem] 
            ss:self-center
            lg:self-center
            lgg:self-center"
            >
              {secoundNum}
            </span>
            <span
              className="text-[0.8rem] text-gray-400               
              ss:text-[0.7rem] ss:text-center  
              lgg:self-center"
            >
              {secoundTitle}
            </span>
          </div>

          <div className="flex flex-col ss:gap-3 sm:gap-5">
            <span
              className="font-family-PTSerif-Regular text-4xl text-primary-orange  flex-1 ss:self-center  
               ss:text-[0.9rem]
                 sm:self-center
                lgg:self-center"
            >
              {thirdNum}
            </span>
            <span
              className="text-[0.8rem] text-gray-400
              ss:text-[0.7rem]
              ss:text-center 
              lgg:self-center"
            >
              {thirdTitle}
            </span>
          </div>
        </div>

        <div className="w-40">
          <Button
            title="View Case Study"
            icon={<FaArrowRight />}
            styleBtn="flex items-center gap-2  text-primary-orange ss:justify-center"
          />
        </div>
      </div>
    </div>
  );
}
