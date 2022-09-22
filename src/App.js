import { Container } from "react-bootstrap";
import { Routes, Router, Route, BrowserRouter, Switch, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import React from "react";
import Services from "./Services"
import Navbar from "./components/Navbar";
import Products from "./Products";
import SignUp from "./SignUp";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar></Navbar> <Home></Home> </>,
  },
  {
    path:'/services',
    element: <><Navbar></Navbar><Services></Services></>
  },
  {
    path:'/products',
    element: <><Navbar></Navbar><Products></Products></>
  },
  {
    path:'/products',
    element: <><Navbar></Navbar><SignUp></SignUp></>
  }
]);

function App() {
  return <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

{/* <BrowserRouter>
      <Routes>
      <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </BrowserRouter> */}
}

export default App;
