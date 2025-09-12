import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow transition-shadow hover:shadow-lg md:flex-row">
            <div className="flex flex-col justify-center p-4 md:w-1/2">
                {project.image && <img src={project.image} alt={project.title} className="mb-4 h-48 w-full rounded-lg object-cover border-4 border-gray-200" />}
                <div className="mb-2 flex w-full flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                        {project.platform}
                    </span>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-center px-4 py-5 sm:p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mb-2 text-gray-600">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4">
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
            </div>
        </div>
    );
}
