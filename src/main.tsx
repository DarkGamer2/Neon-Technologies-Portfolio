import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Error";  // Assuming "Error" is different from "Confirmed"
import Confirmed from "./pages/Confirmed";
import ProjectPage from "./pages/ProjectPage";
import projectData from "./data/Projects.json";
import { ThemeProvider } from "./context/theme/theme";

// Main functional component that manages state
const RootComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Create your router with conditional access to the Confirmed page
  const router = createHashRouter([
    {
      path: "/",
      element: <App />,
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
      element: <Contact setIsSubmitted={setIsSubmitted} />,  // Pass setIsSubmitted to Contact
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/error",
      element: <Error />,
    },
    {
      path: "/confirmed",
      element: isSubmitted ? <Confirmed /> : <Navigate to="/contact" />, // Redirect if not submitted
    },
    {
      path: "/projects/:id",
      element: <ProjectPage projectData={projectData} />,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

// Render the root component
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
