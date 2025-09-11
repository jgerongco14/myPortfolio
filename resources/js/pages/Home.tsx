
import { Head } from '@inertiajs/react';
import { HomeProps } from '@/types';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';

export default function Home({ hero, featured_projects }: HomeProps) {
    return (
        <MainLayout>
            <Head title="Home" />
            
            <Hero data={hero} />
            <FeaturedProjects projects={featured_projects} />
        </MainLayout>
    );
}