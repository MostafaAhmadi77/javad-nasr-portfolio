import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <div className="bg-[#000000] ">
        <header className="w-full sticky top-0  z-50">
          <Navbar />
        </header>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
