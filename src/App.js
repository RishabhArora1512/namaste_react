// const heading = React.createElement(
//     "h1", 
//     {}, 
//     "Something From React"
// );
import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import '../style.css';
import Header from './components/Header.js';
import Body from './components/Body.js';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu.js";


const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () =>{
    return (<div className="app">
        <Header/>
        <Outlet/>
    </div>)
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loaading....</h1>}><Grocery/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


