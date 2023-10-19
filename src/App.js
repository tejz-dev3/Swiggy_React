import React, { Suspense } from "react";
import { createRoot } from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import RestraMenu from "./components/RestraMenu";
import Groceries from "./components/Groceries";
import { lazy } from "react";
import ShimmerGrocery from "./components/ShimmerGrocery";

//lazyloading, Dynamic loading
const Groceries = lazy(()=> import ("./components/Groceries") )

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const routerApp = createBrowserRouter([
  {
   path :'/',
   element : <App />,
   children : [{
     path : '/',
     element : <Body />
   },
    {
      path : '/about',
      element : <About />
    },
    {
      path : '/contact',
      element : <Contact />
    },
    {
      path : 'restaurants/:resId',
      element : <RestraMenu />
    },
    {
      path : '/groceries',
      element : (
        <Suspense fallback={<ShimmerGrocery/>} ><Groceries/></Suspense>
      )
    }
   ],
   errorElement : <NotFound />
  }
  
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp}/>);

