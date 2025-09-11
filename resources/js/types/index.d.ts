import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface HeroData {
    name: string;
    lastname: string;
    title: string;
    roles?: string[];
    subtitle: string;
    cta_text: string;
    avatar: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    category: string;
    github_url?: string;
    live_url?: string;
}

export interface PersonalInfo {
    bio: string;
    location: string;
    email: string;
    resume_url: string;
}

export interface Skill {
    name: string;
    level: number;
}

export interface SkillCategory {
    [category: string]: Skill[];
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    social: {
        github: string;
        linkedin: string;
        twitter: string;
    };
}

export interface PageProps {
    auth?: {
        user: User;
    };
    flash?: {
        success?: string;
        error?: string;
    };
}

export interface HomeProps extends PageProps {
    hero: HeroData;
    featured_projects: Project[];
}

export interface AboutProps extends PageProps {
    personal_info: PersonalInfo;
    skills: SkillCategory;
    experience: Experience[];
}

export interface ProjectsProps extends PageProps {
    projects: Project[];
    categories: string[];
}

export interface ContactProps extends PageProps {
    contact_info: ContactInfo;
}

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}