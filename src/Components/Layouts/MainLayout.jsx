import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


function MainLayout() {
  return (
    <>
      <div className="bg-bla ">
        <header className="w-full bg-black ">
          <div className="sticky top-0  z-50">
            
          <Navbar  />
          </div>
          
        </header>
        <div className="w-full bg-black pt-3 pb-0">
          <Outlet />
       
        </div>
        <footer className="bg-black text-white flex flex-1">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default MainLayout;
