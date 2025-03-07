import NavigationBar from "../components/NavigationBar";
import Project from "../components/Project";
import Footer from "../components/Footer";
import ProjectsData from "../data/Projects.json";
import { useTheme } from "../context/theme/theme";

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

const Projects = () => {
  const projects: Project[] = ProjectsData as Project[];
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <NavigationBar />

      <section className="py-8 px-4">
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold text-center tracking-wide dark:text-white mb-6">
          Frontend UI Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="py-8 px-4">
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold tracking-wide text-center dark:text-white mb-6">
          Commercial Web Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="py-8 px-4">
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold tracking-wide text-center dark:text-white mb-6">
          Personal Website Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="py-8 px-4">
        <h1 className="font-vitaSans text-blue-600 uppercase font-semibold tracking-wide text-center dark:text-white mb-6">
          Mobile Apps
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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