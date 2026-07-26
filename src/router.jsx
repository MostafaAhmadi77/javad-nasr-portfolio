import { createBrowserRouter } from "react-router";
import MainLayout from "./Components/Layouts/MainLayout";
import Home from "./Pages/Home/Page";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            }
            
        ]
        
        
    }
])



export default router