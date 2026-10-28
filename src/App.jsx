import { RouterProvider } from "react-router";
import router from "./router";
import { useEffect } from "react";



function App() {
  useEffect(() => {
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
