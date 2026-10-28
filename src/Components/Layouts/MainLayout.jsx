import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop";
import PageMeta from "../PageMeta";

function MainLayout() {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col">
        <header className="w-full bg-black ">
          <div className="sticky top-0  z-50">
            <Navbar />
          </div>
        </header>
        <ScrollToTop />
        <PageMeta />
        <div className="w-full bg-black flex-1">
          <Outlet />
        </div>
        <footer className="bg-black text-white z-10">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default MainLayout;
