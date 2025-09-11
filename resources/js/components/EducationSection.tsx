import { Education } from "@/types";

interface EducationSectionProps {
    education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Education
                    </h2>
                </div>
                
                <div className="mt-12 space-y-8">
                    {education.map((edu, index) => (
                        <div key={index} className="relative">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full">
                                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-6 flex-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {edu.degree}
                                        </h3>
                                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-medium text-indigo-600 mt-1">
                                        {edu.institution}
                                    </h4>
                                    <p className="mt-2 text-gray-600">
                                        {edu.description}
                                    </p>
                                    {edu.achievements && edu.achievements.length > 0 && (
                                        <div className="mt-4">
                                            <h5 className="text-sm font-medium text-gray-900 mb-2">Achievements:</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.achievements.map((achievement, achievementIndex) => (
                                                    <span
                                                        key={achievementIndex}
                                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                                                    >
                                                        {achievement}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
