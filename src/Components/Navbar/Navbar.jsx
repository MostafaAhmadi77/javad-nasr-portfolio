import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router";
import Button from "../Button/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="  bg-[#000000] text-white p-3  flex items-center justify-between relative z-50">
        <div>
          <h1 className="flex items-center gap-2">
            <span className="text-[#FB5701] text-5xl">JN</span>
            <span className="text-3xl"> Javad Nasr</span>
          </h1>
        </div>

        <div className="hidden lg:block">
          <ul className="2xl:text-[1.5rem] flex items-center gap-12 text-base cursor-pointer">
            <li>Work</li>
            <li>Services</li>
            <li>About</li>
            <li>Process</li>
            <li>Insights</li>
          </ul>
        </div>

        <div className="hidden lg:block">
          
          <Button
            title="Let's Work Together"
            icon={<GoArrowRight />}
            style="flex items-center gap-4 border border-[#FB5701] px-5 py-3 rounded-2xl"
          />
        </div>

        <button
          className="lg:hidden text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 left-0 h-screen rounded-r-2xl rounded-tr-2xl w-72 bg-[#111111] text-white z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-[#FB5701]">JN</h2>

          <button onClick={() => setIsOpen(false)} className="text-3xl">
            <HiOutlineX />
          </button>
        </div>

        <ul className="flex flex-col gap-8 p-8 text-lg">
          <li className="cursor-pointer hover:text-[#FB5701] transition">
            Work
          </li>

          <li className="cursor-pointer hover:text-[#FB5701] transition">
            Services
          </li>

          <li className="cursor-pointer hover:text-[#FB5701] transition">
            About
          </li>

          <li className="cursor-pointer hover:text-[#FB5701] transition">
            Process
          </li>

          <li className="cursor-pointer hover:text-[#FB5701] transition">
            Insights
          </li>
        </ul>

        <div className="px-8 mt-10">
          <Button
            title="Let's Work Together"
            icon={<GoArrowRight />}
            style="flex justify-center items-center gap-3 border border-[#FB5701] rounded-xl py-3"
          />
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
