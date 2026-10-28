import { RouterProvider } from "react-router";
import router from "./router";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    if (!window.AOS) {
      // The AOS script comes from a CDN. If it fails to load, its CSS still
      // hides every [data-aos] element, so the page would stay blank.
      // In that case, drop the animation attributes and show the content.
      document
        .querySelectorAll("[data-aos]")
        .forEach((el) => el.removeAttribute("data-aos"));
      return;
    }
    if (window.AOS) {
      window.AOS.init({
        duration: 800,      // مدت زمان انیمیشن (میلی‌ثانیه)
        once: true,         // فقط یک‌بار انیمیشن اجرا بشه
        // offset: 120,
        // easing: 'ease-in-out',
      });
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
