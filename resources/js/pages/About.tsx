import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import MainLayout from "@/layouts/MainLayout";
import { AboutProps } from "@/types";
import { Head } from "@inertiajs/react";


export default function About({ personal_info, skills, experience }: AboutProps) {
    return (
        <MainLayout>
            <Head title="About" />
            
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            About Me
                        </h2>
                        <div className="mt-8 max-w-3xl mx-auto">
                            <p className="text-lg text-gray-500">{personal_info.bio}</p>
                            <div className="mt-8 flex justify-center">
                                <a
                                    href={personal_info.resume_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SkillsSection skills={skills} />
            <ExperienceSection experience={experience} />
        </MainLayout>
    );
}