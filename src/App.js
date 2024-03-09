import React, {lazy,Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense, lazy } from "react";
import { data } from "browserslist";
import userContext from "./components/useContext";

const About =lazy(()=>import("./components/About"))

const App=()=>{
    const [userName,SetUserName]=useState()
    useEffect(()=>{
        const data={
            name:"Fathima"
        }
        SetUserName (data.name)
    },[]);
    return (
        <div className="App-Layout">
        <userContext.Provider value={{loggedInUser:userName,SetUserName}}>
        <Header/> 
        <Outlet />
        </userContext.Provider>
        </div>
    )
}

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