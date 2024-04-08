import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Pages/Home/Home";
import Root from "../Layouts/Root/Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Router;
