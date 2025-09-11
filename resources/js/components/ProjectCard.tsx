import { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow">
            <div className="px-4 py-5 sm:p-6">
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                )}
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    {project.github_url && (
                        <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                            GitHub
                        </a>
                    )}
                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:text-indigo-500 font-medium"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}