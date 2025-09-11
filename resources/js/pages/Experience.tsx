import ExperienceSection from "@/components/ExperienceSection";
import MainLayout from "@/layouts/MainLayout";
import { ExperienceProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Experience({ experience }: ExperienceProps) {
    return (
        <MainLayout>
            <Head title="Experience" />
            <ExperienceSection experience={experience} />
        </MainLayout>
    );
}
