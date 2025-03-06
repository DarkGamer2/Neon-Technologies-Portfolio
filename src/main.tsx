import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Confirmed from "./pages/Confirmed";
import ProjectPage from "./pages/ProjectPage";
import projectDataJson from "./data/Projects.json"; // Rename the import to projectDataJson
import { ThemeProvider } from "./context/theme/theme";

interface Project {
  projectName: string;
  projectThumbnail: string;
  projectLink: string;
  repoLink: string;
  category: string;
  technologies: { name: string; icon: string; }[];
  projectPics: { image: string; description: string; }[];
  projectID: string;
  description?: string;
  platforms?: { name: string; icon: string; }[];
}

// Type assertion to treat projectDataJson as Project[]
const projectData = projectDataJson as Project[];

const RootComponent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      element: <Contact setIsSubmitted={setIsSubmitted} />,
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
      element: isSubmitted ? <Confirmed /> : <Navigate to="/contact" />,
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);