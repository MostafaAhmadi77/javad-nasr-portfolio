import { createBrowserRouter } from "react-router";
import MainLayout from "./Components/Layouts/MainLayout";
import Home from "./Pages/Home/Page";
import NotFound from "./Components/404/NotFound";
import Services from "./Pages/Services/Page";

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
                element:<NotFound />
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