
import { Head } from '@inertiajs/react';
import { HomeProps, CareerData } from '@/types';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import Career from '@/components/Career';
import FeaturedProjects from '@/components/FeaturedProjects';

export default function Home({ hero, career, featuredProjects }: HomeProps) {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero data={hero} />
            <Career data={career} />
            <FeaturedProjects projects={featuredProjects} />
        </MainLayout>
    );
}