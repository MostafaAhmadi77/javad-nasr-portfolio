import React from "react";

export default function SecoundItems({ title, des, icon: Icon }) {
  return (
    <div className="flex justify-center items-center w-1xl gap-2 bg-[#11121187] rounded-2xl p-2">
      <Icon className="text-amber-600 size-28 " />
      <div>
        <h2 className=" text-1xl font-bold text-white/85 font-serif">
          {title}
        </h2>
        <p className="text-gray-200 text-sm ">{des}</p>
      </div>
    </div>
  );
}
