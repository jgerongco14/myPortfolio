import ProjectCard from "@/components/ProjectCard";
import MainLayout from "@/layouts/MainLayout";
import { ProjectsProps } from "@/types";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Projects({ projects, categories }: ProjectsProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    return (
        <MainLayout>
            <Head title="Projects" />
            
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            My Projects
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            A collection of projects I've worked on
                        </p>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <div className="flex space-x-4">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                        selectedCategory === category
                                            ? 'bg-indigo-600 text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}