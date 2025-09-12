import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

interface FeaturedProjectsProps {
    projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Some of my recent work
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors mx-auto"
                        onClick={() => window.location.href = '/projects'}
                    >
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
}