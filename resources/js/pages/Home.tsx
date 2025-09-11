
import { Head } from '@inertiajs/react';
import { HomeProps, CareerData } from '@/types';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import Career from '@/components/Career';

export default function Home({ hero, career }: HomeProps) {
    return (
        <MainLayout>
            <Head title="Home" />
            
            <Hero data={hero} />
            <Career data={career} />
        </MainLayout>
    );
}