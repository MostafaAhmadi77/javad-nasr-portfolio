import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import HeroImage from "../../assets/Images/H1.png";

function MainLayout() {
  return (
    <>
      <div className=" ">
        <header className="w-full bg-black ">
          <div className="sticky top-0  z-50">
            
          </div>
          <Navbar />
          <Hero HeroImage={HeroImage} />
        </header>
        <div className="w-full bg-black pt-3 pb-3">
          <Outlet />
        </div>
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default MainLayout;
