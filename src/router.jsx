import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "./Components/Layouts/MainLayout";
import PageLoading from "./Components/PageLoading";

const Home = lazy(() => import("./Pages/Home/Page"));
const NotFound = lazy(() => import("./Components/404/NotFound"));
const Services = lazy(() => import("./Pages/Services/Page"));
const About = lazy(() => import("./Pages/About/Page"));
const CaseStudies = lazy(() => import("./Pages/CaseStudies/Page"));
const CaseStudyDetail = lazy(() => import("./Pages/CaseStudies/Detail"));
const DashboardAdmin = lazy(() => import("./Pages/dashboardAdmin/Page"));
const Insights = lazy(() => import("./Pages/Insights/Page"));
const Consultation = lazy(() => import("./Pages/Consultation/Page"));

function withSuspense(element) {
  return <Suspense fallback={<PageLoading />}>{element}</Suspense>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: withSuspense(<Home />),
      },
      {
        path: "/caseStudies",
        element: withSuspense(<CaseStudies />),
      },
      {
        path: "/caseStudies/:id",
        element: withSuspense(<CaseStudyDetail />),
      },
      {
        path: "/services",
        element: withSuspense(<Services />),
      },
      {
        path: "/about",
        element: withSuspense(<About />),
      },
      {
        path: "/dashboardAdmin",
        element: withSuspense(<DashboardAdmin />),
      },
      {
        path: "/methodology",
        element: withSuspense(<NotFound />),
      },
      {
        path: "/insights",
        element: withSuspense(<Insights />),
      },
      {
        path: "/consultation",
        element: withSuspense(<Consultation />),
      },
    ],
  },
]);

export default router;
