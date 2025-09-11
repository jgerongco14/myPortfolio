import { Experience } from '@/types';

interface ExperienceSectionProps {
    experience: Experience[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
    return (
        <div className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Work Experience</h2>
                    <p className="mt-4 text-lg text-gray-600">My professional journey and career milestones</p>
                </div>

                <div className="mt-12 space-y-8">
                    {experience.map((exp, index) => (
                        <div key={index} className="relative">
                            {index !== experience.length - 1 && <div className="absolute top-8 left-4 h-full w-0.5 bg-gray-300" />}
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600">
                                        <div className="h-2 w-2 rounded-full bg-white" />
                                    </div>
                                </div>
                                <div className="ml-6 flex-1">
                                    <div className="rounded-lg bg-white p-6 shadow">
                                        <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                                        <p className="font-medium text-indigo-600">{exp.company}</p>
                                        <p className="mt-1 text-sm text-gray-500">{exp.period}</p>
                                        <p className="mt-3 text-gray-700">{exp.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
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
