import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Pages/Home/Home";
import Root from "../Layouts/Root/Root";
import Login from './../Pages/Login/Login';
import Register from "../Pages/Register/Register";
import Details from "../Pages/Details/Details";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from './PrivateRoute';
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../residential.json")
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch("../residential.json")
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
        loader: () => fetch("../residential.json")
      },
      {
        path: "/about",
        element: <About></About>,
        loader: () => fetch("../residential.json")
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
        loader: () => fetch("../residential.json")
      },
    ],
  },
]);

export default Router;
