import React, { useState, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import PreviewIcon from '@mui/icons-material/Preview';
import { useTheme } from '../context/theme/theme';
import GitHub from '@mui/icons-material/GitHub';
type Technology = {
  name: string;
  icon?: string;
};

type Platform = {
  name: string;
  icon: string;
};

type ProjectPic = {
  image: string;
  description?: string;
};

type Project = {
  projectID: string;
  projectName: string;
  projectThumbnail: string;
  description?: string;
  projectLink: string;
  repoLink: string;
  technologies: Technology[];
  category: string;
  platforms?: Platform[];
  projectPics?: ProjectPic[];
};

type ProjectPageProps = {
  projectData: Project[];
};

const ProjectPage: React.FC<ProjectPageProps> = ({ projectData }) => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();

  // Memoize project data to avoid unnecessary re-renders
  const project = useMemo(
    () => projectData.find((project) => project.projectID === id),
    [id, projectData]
  );

  // Modal state
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Open modal
  const openModal = useCallback((image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setModalOpen(false);
  }, []);

  // If project is not found
  if (!project) {
    return (
      <div className={`${theme === "dark" ? "dark" : "light"} min-h-screen flex flex-col`}>
        <NavigationBar />
        <div className="flex-grow flex items-center justify-center dark:bg-black">
          <p className="text-lg font-semibold dark:text-white">Project Not Found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`${theme === "dark" ? "dark" : "light"} min-h-screen w-full flex flex-col`}>
      <NavigationBar />
      {/* Changed flex-grow to just flex and added min-h-full to ensure full height */}
      <div className={`flex flex-col items-center justify-start py-10 min-h-full ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <div className="flex flex-col md:flex-row items-center gap-6 px-6 max-w-5xl w-full">
          {/* Image Section (Thumbnail) */}
          <div className="max-w-lg">
            <img
              src={project.projectThumbnail}
              alt={project.projectName}
              className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(project.projectThumbnail)}
            />
          </div>

          {/* Project Details Section */}
          <div className="text-left">
            <h1 className="font-bold text-3xl dark:text-white">{project.projectName}</h1>
            <p className="text-lg mt-4 dark:text-white">
              {project.description || "No description available"}
            </p>

            {/* Technologies Used */}
            <div className="mt-6">
              <h3 className="font-semibold text-xl dark:text-white">Technologies Used:</h3>
              <ul className="mt-2 space-y-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    {tech.icon && (
                      <img src={tech.icon} alt={tech.name} className="w-6 h-6 mr-2" />
                    )}
                    <span className="text-md dark:text-white">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available Platforms */}
            {project.category === "Mobile" && project.platforms && (
              <div className="mt-6">
                <h3 className="font-semibold text-xl dark:text-white">Available Platforms:</h3>
                <ul className="mt-2 space-y-2">
                  {project.platforms.map((platform, index) => (
                    <li key={index} className="flex items-center">
                      <img src={platform.icon} alt={platform.name} className="w-6 h-6 mr-2" />
                      <span className="text-md dark:text-white">{platform.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <Link
                to={project.projectLink}
                className="bg-red-600 text-white rounded-md px-5 py-3 font-outfit uppercase flex items-center gap-2"
              >
                <PreviewIcon />
                Visit Project
              </Link>
              <Link
                to={project.repoLink}
                className="bg-black text-white rounded-md px-5 py-3 font-outfit uppercase flex items-center gap-2"
              >
                <GitHub />
                Visit GitHub Repo
              </Link>
            </div>
          </div>
        </div>

        {/* New Image Section */}
        {project.projectPics && project.projectPics.length > 0 && (
          <div className={`px-6 max-w-5xl mx-auto py-8 w-full`}>
            <h3 className={`font-semibold text-xl ${theme === "dark" ? "text-white" : "text-black"} mb-4 text-center`}>
              Project Images:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.projectPics.map((pic, index) => (
                <div key={index} className="flex justify-center">
                  <img
                    src={pic.image}
                    alt={pic.description || "Project Image"}
                    className="w-full h-auto max-w-[300px] rounded-lg shadow-lg cursor-pointer block"
                    onClick={() => openModal(pic.image)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative">
            <img src={selectedImage} alt="Expanded View" className="max-w-full max-h-screen rounded-lg" />
            <button
              className="absolute top-4 right-4 bg-red-700 text-white rounded-full p-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectPage;