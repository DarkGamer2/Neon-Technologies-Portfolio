import React from "react";
import NavigationBar from "../components/NavigationBar";
import Frontend from "../data/Frontend.json";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Commercial from "../data/Commercial.json";
import Personal from "../data/Personal.json";
const Projects = () => {
  return (
    <div>
      <NavigationBar />
      <section>
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold text-center tracking-wide">
          Frontend UI Projects
        </h1>
        <div className="flex grid-cols-3">
          {Frontend.map((project) => {
            return (
              <Project
                key={project.projectID}
                projectThumbnail={project.projectThumbnail}
                projectName={project.projectName}
                projectLinks={project.projectLink}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold tracking-wide text-center">
          Commercial Web Projects
        </h1>
        <div className="grid grid-cols-3">
          {Commercial.map((project) => {
            return (
              <Project
                key={project.projectID}
                projectThumbnail={project.projectThumbnail}
                projectName={project.projectName}
                projectLinks={project.projectLink}
              />
            );
          })}
        </div>
      </section>
      <section>
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold tracking-wide text-center">
          Personal Website Projects
        </h1>
        <div className="grid grid-cols-3"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
