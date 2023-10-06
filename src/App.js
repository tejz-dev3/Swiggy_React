import React from "react";
import { createRoot } from "react-dom/client"; 
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const routerApp = createBrowserRouter([
  {
   path :'/',
   element : <App />,
   errorElement : <NotFound />
  },
  {
    path : '/about',
    element : <About />
  },
  {
    path : '/contact',
    element : <Contact />
  }
])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerApp}/>);

