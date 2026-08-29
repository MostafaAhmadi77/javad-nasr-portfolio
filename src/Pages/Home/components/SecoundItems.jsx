import React from "react";

export default function SecoundItems({ title, des, icon: Icon }) {
  return (
    <div className=" w-full  flex justify-between items-center w-1xl gap-4 bg-[#25292587] rounded-2xl p-2 ss:flex-col sm:flex-col sm:items-center sm:justify-center 
    md:flex md:flex-row md:justify-between md:p-4 ">
      <Icon className="text-amber-600 size-20 md:size-25" />
      <div className="text-center flex-1 lg:flex lg:flex-col w-full">
        <h2 className=" text-[0.93rem] ss:text-2xl sm:text-2xl md:text-[1rem]  font-bold text-white/85 font-serif ">
          {title}
        </h2>
        <p className="text-gray-200 text-[.7rem]   shrink-0">{des}</p>
        
      </div>
    </div>
  );
}
