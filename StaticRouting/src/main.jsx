import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Home from "./Pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import Course from "./Pages/Course.jsx";
import Blog from "./Pages/Blog.jsx";
import BlogDetail from "./Pages/BlogDetail.jsx";
import Error404 from "./Pages/Error404.jsx";

let allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "course",
    element: <Course />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  //for dynamic
  {
    path: "blog/:id",
    element: <BlogDetail />,
  },
  // * will be call when nth matches
  {
    path: "*",
    element: <Error404 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={allRoutes} />
  </StrictMode>
);
