import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import PreviewIcon from '@mui/icons-material/Preview';

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

  if (!project) {
    return (
      <div>
        <NavigationBar />
        <p>Project Not Found</p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavigationBar />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Center the entire block on the page
          alignItems: 'center',
          height: '80vh', // Make sure content is vertically centered
          gap: '20px',
        }}
      >
        {/* Image Section */}
        <div style={{ flex: '0 0 auto', maxWidth: '500px' }}>
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
          <h1 className="font-bold text-3xl">{project.projectName}</h1>
          <p className="text-lg mt-4">{project.description || "No description available"}</p>

          <div className="mt-6">
            <h3 className="font-semibold text-xl">Technologies Used:</h3>
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
                  <span className="text-md">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditionally render platforms */}
          {project.category === "Mobile" && project.platforms && (
            <div className="mt-6">
              <h3 className="font-semibold text-xl">Available Platforms:</h3>
              <ul className="mt-2">
                {project.platforms.map((platform, index) => (
                  <li key={index} className="flex items-center mt-2">
                    <img
                      src={platform.icon}
                      alt={`${platform.name} icon`}
                      style={{ width: '24px', height: '24px', marginRight: '8px' }}
                    />
                    <span className="text-md">{platform.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            className="bg-red-600 text-white rounded-md px-5 py-3 mt-6 font-outfit uppercase"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <PreviewIcon />
            <Link to={project.projectLink}>Visit Project</Link>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectPage;
