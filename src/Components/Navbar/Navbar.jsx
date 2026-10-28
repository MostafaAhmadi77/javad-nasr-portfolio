import { GoArrowRight } from "react-icons/go";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink, Link, useLocation, useNavigate } from "react-router";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

import headerData from "../../data/headerData";
import {
  isAdminLoggedIn,
  setAdminLoggedIn,
} from "../../Pages/dashboardAdmin/utils/adminAuth";

import Logo from "../../assets/Images/Logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(() => isAdminLoggedIn());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(isAdminLoggedIn());
  }, [location.pathname]);

  useEffect(() => {
    const update = () => setLoggedIn(isAdminLoggedIn());
    window.addEventListener("admin-auth-changed", update);
    return () => window.removeEventListener("admin-auth-changed", update);
  }, []);

  function handleLogout() {
    setAdminLoggedIn(false);
    setLoggedIn(false);
    setIsOpen(false);
    navigate("/");
  }

  // Dashboard appears in the menu only after the admin logs in.
  const menuItems = loggedIn
    ? [...headerData, { id: 7, title: "Dashboard", path: "/dashboardAdmin" }]
    : headerData;

  return (
    <>
      <nav className="w-full bg-[#000000] text-white px-3 lg:px-4 xl:px-6 py-2 flex items-center justify-between gap-3 fixed z-50">
        <div className="flex items-center shrink-0">
          <h1 className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-primary-orange">
              <img className="w-10 h-10 xl:w-12 xl:h-12 shrink-0" src={Logo} alt="" />
            </span>
            <span className="text-xl xl:text-2xl">Javad Nasr</span>
          </h1>
        </div>

        <div className="hidden lg:flex flex-1 justify-center min-w-0">
          <ul className="flex items-center gap-4 xl:gap-6 2xl:gap-8 text-sm xl:text-base cursor-pointer whitespace-nowrap">
            {menuItems.map((x) => (
              <li key={x.id} className="shrink-0">
                <NavLink
                  to={x.path}
                  className={(link) => (link.isActive ? "text-primary-orange" : "")}
                >
                  {x.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-2 shrink-0">
          {loggedIn ? (
            <button
              type="button"
              onClick={handleLogout}
              className="border border-primary-orange text-primary-orange px-3 py-2 rounded-xl text-sm whitespace-nowrap"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/dashboardAdmin"
              className="border border-primary-orange text-primary-orange px-3 py-2 rounded-xl text-sm whitespace-nowrap"
            >
              Login
            </Link>
          )}
          {!loggedIn && (
            <span>
              <Button
                link="/consultation"
                title="Let's Work Together"
                icon={<GoArrowRight />}
                styleBtn="flex items-center gap-2 border border-white px-4 py-2 rounded-xl text-sm whitespace-nowrap"
              />
            </span>
          )}
        </div>

        <button
          className="lg:hidden text-4xl shrink-0"
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
        className={`fixed flex flex-col top-0 left-0 h-screen rounded-r-2xl rounded-tr-2xl w-72 bg-[#111111] text-white z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <div className="flex items-center justify-between ss p-6 border-b border-gray-700">
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
            {menuItems.map((x) => (
              <li key={x.id}>
                <NavLink
                  to={x.path}
                  className={(link) => (link.isActive ? "text-primary-orange" : "")}
                >
                  {x.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-8 mt-10 flex flex-col gap-3">
          {loggedIn ? (
            <button
              type="button"
              onClick={handleLogout}
              className="flex justify-center items-center gap-3 border border-primary-orange text-primary-orange rounded-xl py-3"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/dashboardAdmin"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center gap-3 border border-primary-orange text-primary-orange rounded-xl py-3"
            >
              Login
            </Link>
          )}
          <Button
          link="/consultation"
            title="Let's Work Together"
            icon={<GoArrowRight />}
            styleBtn="flex justify-center items-center gap-3 border border-white rounded-xl py-3"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
