import { SkillCategory } from "@/types";

interface SkillsSectionProps {
    skills: SkillCategory;
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Skills & Technologies
                    </h2>
                </div>
                
                <div className="mt-12 space-y-12">
                    {Object.entries(skills).map(([category, categorySkills]) => (
                        <div key={category}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                                {category}
                            </h3>
                            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                {categorySkills.map((skill, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-center justify-between">
                                            <div className="items-center space-x-3">
                                                {skill.logo && (
                                                    <img 
                                                        src={skill.logo} 
                                                        alt={`${skill.name} logo`}
                                                        className="w-10 h-10 object-contain flex-shrink-0"
                                                    />
                                                )}
                                                <h4 className="text-lg font-semibold text-gray-900">
                                                    {skill.name}
                                                </h4>
                                            </div>
                                            <div className="relative w-16 h-16">
                                                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                                                    <path
                                                        className="text-gray-200"
                                                        stroke="currentColor"
                                                        strokeWidth="5"
                                                        fill="none"
                                                        d="M18 2.0845
                                                            a 15.9155 15.9155 0 0 1 0 31.831
                                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    />
                                                    <path
                                                        className="text-indigo-600 transition-all duration-300"
                                                        stroke="currentColor"
                                                        strokeWidth="5"
                                                        strokeLinecap="round"
                                                        fill="none"
                                                        strokeDasharray={`${skill.level}, 100`}
                                                        d="M18 2.0845
                                                            a 15.9155 15.9155 0 0 1 0 31.831
                                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-xs font-bold text-gray-700">{skill.level}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}