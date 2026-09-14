import { GoArrowRight } from "react-icons/go";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink} from "react-router";
import Button from "../Button/Button";
import { useState } from "react";
import Logo from "../../assets/Images/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" w-full  bg-[#000000] text-white p-3  flex items-center justify-between fixed z-50">
        <div className="flex items-center justify-center">
          <h1 className="flex items-center  gap-2">
            <span className="text-primary-orange text-5xl">
              <img className=" w-[4rem] h-[4rem]" src={Logo} alt="" />
            </span>
            <span className="text-3xl"> Javad Nasr</span>
          </h1>
        </div>

        <div className="hidden lg:block">
          <ul className="2xl:text-[1.5rem] flex items-center gap-12 text-base cursor-pointer">
            <li>
              <NavLink  className={(x)=>x.isActive ? 'text-primary-orange' :''} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  className={(x)=>x.isActive ? 'text-primary-orange' :''} to="Work">Work</NavLink>
            </li>
            <li>
              <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="services">Services</NavLink>
            </li>

            <li>
              <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="process">Process</NavLink>
            </li>
            <li>
              <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="insights">Insights</NavLink>
            </li>
            <li>
              <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="about">About</NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <Button
            title="Let's Work Together"
            icon={<GoArrowRight />}
            styleBtn="flex items-center gap-4 border border-pritext-primary-orange px-5 py-3 rounded-2xl"
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
        className={`fixed  flex flex-col  top-0 left-0 h-screen rounded-r-2xl rounded-tr-2xl w-72 bg-[#111111] text-white z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <div className=" flex items-center justify-between ss p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-primary-orange">
              <img className="size-14" src={Logo} alt="" />
            </h2>

            <button onClick={() => setIsOpen(false)} className="text-3xl">
              <HiOutlineX />
            </button>
          </div>
          <ul
            className="flex flex-col gap-8 p-8 text-lg"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <li>
              <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="Work">Work</NavLink>
            </li>
            <li>
              <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="services">Services</NavLink>
            </li>

            <li>
              <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="process">Process</NavLink>
            </li>
            <li>
              <NavLink className={(x)=>x.isActive ? 'text-primary-orange' :''} to="insights">Insights</NavLink>
            </li>
            <li>
              <NavLink  className={(x)=>x.isActive ? 'text-primary-orange' :''}to="about">About</NavLink>
            </li>
          </ul>
        </div>

        <div className="px-8 mt-10">
          <Button
            title="Let's Work Together"
            icon={<GoArrowRight />}
            styleBtn="flex justify-center items-center gap-3 border border-pritext-primary-orange rounded-xl py-3"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
