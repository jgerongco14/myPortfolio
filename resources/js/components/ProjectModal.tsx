import React from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full p-6">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Left: Image and Platform */}
          <div className="flex flex-col items-center md:w-1/2 w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full max-h-[500px] rounded-lg mb-4 border-4 border-gray-200 object-contain"
              style={{ minHeight: '300px' }}
            />
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-2">
              {project.platform}
            </span>
          </div>
          {/* Right: Details */}
          <div className="flex flex-col justify-center md:w-1/2 w-full md:h-[500px]">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="mb-2 text-gray-600">{project.fullDescription}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">GitHub:</span>
                {project.github_url ? (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View Code
                  </a>
                ) : (
                  <span className="text-sm text-gray-500">Not Available</span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-700">Live Demo:</span>
                {project.live_url ? (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View Live
                  </a>
                ) : (
                  <span className="text-sm text-gray-500">Not Available</span>
                )}
              </div>
            </div>
            {/* Full Story Section */}
            {project.fullStory && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Full Story</h3>
                <p className="text-gray-700 whitespace-pre-line">{project.fullStory}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
