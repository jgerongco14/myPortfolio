import { Achievement } from "@/types";

interface AchievementsSectionProps {
    achievements: Achievement[];
}

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
    const getCategoryColor = (category: string) => {
        switch (category.toLowerCase()) {
            case 'academic':
                return 'bg-blue-100 text-blue-800';
            case 'professional':
                return 'bg-green-100 text-green-800';
            case 'competition':
                return 'bg-yellow-100 text-yellow-800';
            case 'certification':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Achievements & Awards
                    </h2>
                </div>
                
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
                                        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                </div>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>
                                    {achievement.category}
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {achievement.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">
                                {achievement.description}
                            </p>
                            <div className="text-sm font-medium text-indigo-600">
                                {achievement.year}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
