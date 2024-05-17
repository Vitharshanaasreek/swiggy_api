//name must begin with Capital letter
//<></> this tag is called as React Fragment(This tag won't reflect on html but it can be seen by react)
//invoking components into another component is called component composition
//props will be passed as objects
//when you use javascript it has to be in a curlyBracket
//if starts with Use it is called as Hook in React
//There is a concept in react called Virtual DOM this helps to track State variable or props then it will do ReRendering and then everything on the Component will be updated
//DOM updation will takes time so react use the Virtual DOM abd compares the needed data and only update them so React is FAST
//Rendering will happens only if state variable or props changes
//index cannot be passed as a unique key
//-------------------------------Day2 Of React---------------------------------------------------------
//we have to use await bcox json return a promise if we use consolt log without await func then we will get a error

import Header from "./components/Header";
import ResContainer from "./components/ResContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ResDetails from "./components/ResDetails";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <ResContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <ResDetails />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
