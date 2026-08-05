import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";


function MainLayout() {
  return (
    <>
      <div className="bg-bla ">
        <header className="w-full bg-black ">
          <div className="sticky top-0  z-50">
            
          </div>
          <Navbar  />
          
        </header>
        <div className="w-full bg-black pt-3 pb-0">
          <Outlet />
          <p>heeell</p>
        </div>
        <footer className="bg-black">Footer</footer>
      </div>
    </>
  );
}

export default MainLayout;
