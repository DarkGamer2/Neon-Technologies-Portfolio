import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Confirmed";
import Confirmed from "./pages/Confirmed";
import ProjectPage from "./pages/ProjectPage";
import projectData from "./data/projects"
const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/projects",
    element: <Projects />,
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
    path: "/services",
    element: <Services />,
  },
  {
    path:"/error",
    element:<Error/>
  },{
    path:"/confirmed",
    element:<Confirmed/>
  },
  {
    path:"/projects/:id",
    element:<ProjectPage projectData={projectData}/>
  }
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
