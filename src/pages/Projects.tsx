
import NavigationBar from "../components/NavigationBar";
import Project from "../components/Project";
import Footer from "../components/Footer";
import ProjectsData from "../data/Projects.json";
import { useTheme } from "../context/theme/theme";
interface Project {
  projectID: string;
  projectName: string;
  projectThumbnail: string;
  projectLink: string;
  category: string;
}

const Projects = () => {
  // Type ProjectsData explicitly as Project[]
  const projects: Project[] = ProjectsData as Project[];
  const {theme}=useTheme();
  return (
    <div className={`${theme==="dark"?"bg-black":"bg-white"}`}>
      <NavigationBar />
      <section>
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold text-center tracking-wide dark:text-white">
          Frontend UI Projects
        </h1>
        <div className="grid grid-cols-3">
          {projects.map((project: Project) =>
            project.category === "Frontend" ? (
              <Project
                key={project.projectID}
                projectThumbnail={project.projectThumbnail}
                projectName={project.projectName}
                projectLinks={`/projects/${project.projectID}`}
              />
            ) : null
          )}
        </div>
      </section>
      <section>
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold tracking-wide text-center dark:text-white">
          Commercial Web Projects
        </h1>
        <div className="grid grid-cols-3">
          {projects.map((project: Project) =>
            project.category === "Commercial" ? (
              <Project
                key={project.projectID}
                projectThumbnail={project.projectThumbnail}
                projectName={project.projectName}
                projectLinks={`/projects/${project.projectID}`}
              />
            ) : null
          )}
        </div>
      </section>
      <section>
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold tracking-wide text-center dark:text-white">
          Personal Website Projects
        </h1>
        <div className="grid grid-cols-3">
          {projects.map((project: Project) =>
            project.category === "Personal" ? (
              <Project
                key={project.projectID}
                projectThumbnail={project.projectThumbnail}
                projectName={project.projectName}
                projectLinks={`/projects/${project.projectID}`}
              />
            ) : null
          )}
        </div>
      </section>
      <section>
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold tracking-wide text-center dark:text-white">
          Mobile Apps
        </h1>
        <div className="grid grid-cols-3">
          {projects.map((project: Project) =>
            project.category === "Mobile" ? (
              <Project
                key={project.projectID}
                projectThumbnail={project.projectThumbnail}
                projectName={project.projectName}
                projectLinks={`/projects/${project.projectID}`}
              />
            ) : null
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
