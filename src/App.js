import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
                element:<About />
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