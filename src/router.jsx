import { createBrowserRouter } from "react-router";
import MainLayout from "./Components/Layouts/MainLayout";
import Home from "./Pages/Home/Page";
import NotFound from "./Components/404/NotFound";
import Services from "./Pages/Services/Page";
import About from "./Pages/About/Page";
import CaseStudies from "./Pages/CaseStudies/Page";
import DashboardAdmin from "./Pages/dashboardAdmin/Page";
import Insights from "./Pages/Insights/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/caseStudies",
        element: <CaseStudies />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboardAdmin",
        element: <DashboardAdmin />,
      },
      {
        path: "/methodology",
        element: <NotFound />,
      },
      {
        path: "/insights",
        element: <Insights />,
      },
    ],
  },
]);

export default router;
