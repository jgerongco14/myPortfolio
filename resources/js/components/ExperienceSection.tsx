import { Experience } from "@/types";

interface ExperienceSectionProps {
    experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Work Experience
                    </h2>
                </div>
                
                <div className="mt-12 space-y-8">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative">
                            {index !== experience.length - 1 && (
                                <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-300" />
                            )}
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>
                                </div>
                                <div className="ml-6 flex-1">
                                    <div className="bg-white p-6 shadow rounded-lg">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            {exp.title}
                                        </h3>
                                        <p className="text-indigo-600 font-medium">
                                            {exp.company}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {exp.period}
                                        </p>
                                        <p className="text-gray-700 mt-3">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}