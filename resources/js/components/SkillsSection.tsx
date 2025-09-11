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
                
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(skills).map(([category, categorySkills]) => (
                        <div key={category} className="bg-white rounded-lg p-6 shadow">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                {category}
                            </h3>
                            <div className="space-y-3">
                                {categorySkills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-700">{skill.name}</span>
                                            <span className="text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${skill.level}%` }}
                                            />
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