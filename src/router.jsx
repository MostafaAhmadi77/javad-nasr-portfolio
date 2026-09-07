import { createBrowserRouter } from "react-router";
import MainLayout from "./Components/Layouts/MainLayout";
import Home from "./Pages/Home/Page";
import NotFound from "./Components/404/NotFound";
import Services from "./Pages/Services/Page";
import About from "./Pages/About/Page"

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
               
            },
            {
                path:"/work",
                element:<NotFound />
            },
            {
                path:"/services",
                element:<Services />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/process",
                element:<NotFound />
            },
            {
                path:"/insights",
                element:<NotFound />
            }
            
        ]
        
        
    }
])



export default router