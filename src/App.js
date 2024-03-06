import React, {lazy,Suspense} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense, lazy } from "react";

const About =lazy(()=>import("./components/About"))

const App=()=>(
    <div className="App-Layout">
    <Header/> 
    <Outlet />
    </div>
)

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<Suspense><About /></Suspense> 
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu /> 

            }
        ],
        errorElement:<Error />
    },
    
])


const root =ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)