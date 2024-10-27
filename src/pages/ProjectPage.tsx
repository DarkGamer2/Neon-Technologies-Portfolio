import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import PreviewIcon from '@mui/icons-material/Preview';
import { useTheme } from '../context/theme/theme';
import GitHub from '@mui/icons-material/GitHub';

type Technology = {
  name: string;
  icon?: string;  // icon is optional
};

type Platform = {
  name: string;
  icon: string;
};

type Project = {
  projectID: string;
  projectName: string;
  projectThumbnail: string;
  description?: string;
  projectLink: string;
  repoLink: string;
  technologies: Array<Technology>;
  category: string; // Added category field
  platforms?: Array<Platform>; // Optional platforms field
};

type ProjectPageProps = {
  projectData: Project[];
};

const ProjectPage: React.FC<ProjectPageProps> = ({ projectData }) => {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find((project) => project.projectID === id);
  const { theme } = useTheme();

  if (!project) {
    return (
      <div className={`${theme==="dark"?"bg-black":"bg-white"} min-h-screen flex flex-col`}>
        <NavigationBar />
        <div className="flex-grow flex items-center justify-center">
          <p>Project Not Found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`${theme==="dark"?"dark":"light"} min-h-screen flex flex-col`}>
      <NavigationBar />
      <div className="flex-grow flex items-center justify-center">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // Center the entire block on the page
            alignItems: 'center',
            gap: '20px',
          }} className="dark:bg-black"
        >
          {/* Image Section */}
          <div style={{ flex: '0 0 auto', maxWidth: '500px', marginRight: '20px' }}>
            <img
              src={project.projectThumbnail}
              alt={project.projectName}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>

          {/* Project Details Section */}
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h1 className="font-bold text-3xl dark:text-white">{project.projectName}</h1>
            <p className="text-lg mt-4 dark:text-white">{project.description || "No description available"}</p>

            <div className="mt-6">
              <h3 className="font-semibold text-xl dark:text-white">Technologies Used:</h3>
              <ul className="mt-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center mt-2">
                    {tech.icon && (
                      <img
                        src={tech.icon}
                        alt={`${tech.name} icon`}
                        style={{ width: '24px', height: '24px', marginRight: '8px' }}
                      />
                    )}
                    <span className="text-md dark:text-white">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conditionally render platforms */}
            {project.category === "Mobile" && project.platforms && (
              <div className="mt-6">
                <h3 className="font-semibold text-xl dark:text-white">Available Platforms:</h3>
                <ul className="mt-2">
                  {project.platforms.map((platform, index) => (
                    <li key={index} className="flex items-center mt-2">
                      <img
                        src={platform.icon}
                        alt={`${platform.name} icon`}
                        style={{ width: '24px', height: '24px', marginRight: '8px' }}
                      />
                      <span className="text-md dark:text-white">{platform.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 flex gap-4">
              <button
                className="bg-red-600 text-white rounded-md px-5 py-3 font-outfit uppercase"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <PreviewIcon />
                <Link to={project.projectLink}>Visit Project</Link>
              </button>
              <button
                className="bg-black text-white rounded-md px-5 py-3 font-outfit uppercase"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <GitHub />
                <Link to={project.repoLink}>Visit GitHub Repo</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;