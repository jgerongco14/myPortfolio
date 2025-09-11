<?php

namespace App\Services;

class PortfolioDataService
{
    public function getHeroData(): array
    {
        return [
            'name' => 'Rendel Jeff A. Gerongco',
            'title' => 'Programmer | Project Assistant | Instructor',
            'subtitle' => 'Turning ideas into code, guiding projects to success, and shaping future tech minds.',
            'cta_text' => 'View My Work',
            'avatar' => '/assets/images/del_profile.jpg',
        ];
    }

    public function getFeaturedProjects(): array
    {
        return [
            [
                'id' => 1,
                'title' => 'E-commerce Platform',
                'description' => 'Modern e-commerce solution built with Laravel and React',
                'image' => '/images/project1.jpg',
                'technologies' => ['Laravel', 'React', 'MySQL'],
                'category' => 'Full Stack',
                'github_url' => 'https://github.com/username/project1',
                'live_url' => 'https://project1.com',
            ],
            [
                'id' => 2,
                'title' => 'Task Management App',
                'description' => 'Collaborative task management with real-time updates',
                'image' => '/images/project2.jpg',
                'technologies' => ['Vue.js', 'Node.js', 'PostgreSQL'],
                'category' => 'Full Stack',
                'github_url' => 'https://github.com/username/project2',
                'live_url' => 'https://project2.com',
            ],
        ];
    }

    public function getAllProjects(): array
    {
        return array_merge($this->getFeaturedProjects(), [
            [
                'id' => 3,
                'title' => 'Weather App',
                'description' => 'Beautiful weather application with location-based forecasts',
                'image' => '/images/project3.jpg',
                'technologies' => ['React', 'API Integration'],
                'category' => 'Frontend',
                'github_url' => 'https://github.com/username/project3',
                'live_url' => 'https://project3.com',
            ],
        ]);
    }

    public function getProjectCategories(): array
    {
        return ['All', 'Frontend', 'Backend', 'Full Stack'];
    }

    public function getPersonalInfo(): array
    {
        return [
            'bio' => "
            I am an IT professional with experience as a Programmer, Project Assistant, and Instructor. I have a strong background in software development, project coordination, and technology training, which allows me to contribute both technically and collaboratively within teams. My expertise includes developing web, desktop and mobile applications, assisting in project implementation, and mentoring students in IT fundamentals. I am eager to bring my adaptability, problem-solving skills, and passion for technology to an organization where I can contribute to innovative projects while continuing to grow professionally.",
            'location' => 'Davao City, Philippines',
            'email' => 'jgerongco14@gmail.com',
            'resume_url' => 'public/assets/documents/Rendel Jeff Gerongco_Resume.pdf',
        ];
    }

    public function getSkills(): array
    {
        return [
            'Frontend' => [
                ['name' => 'React', 'level' => 90],
                ['name' => 'TypeScript', 'level' => 85],
                ['name' => 'Vue.js', 'level' => 80],
                ['name' => 'JavaScript', 'level' => 95],
                ['name' => 'CSS3', 'level' => 85],
                ['name' => 'HTML5', 'level' => 90],
            ],
            'Backend' => [
                ['name' => 'Laravel', 'level' => 90],
                ['name' => 'Node.js', 'level' => 80],
                ['name' => 'Python', 'level' => 75],
                ['name' => 'PHP', 'level' => 90],
            ],
            'Database' => [
                ['name' => 'MySQL', 'level' => 85],
                ['name' => 'PostgreSQL', 'level' => 80],
                ['name' => 'MongoDB', 'level' => 70],
            ],
            'Tools' => [
                ['name' => 'Git', 'level' => 90],
                ['name' => 'Docker', 'level' => 75],
                ['name' => 'AWS', 'level' => 70],
                ['name' => 'Linux', 'level' => 80],
            ],
        ];
    }

    public function getExperience(): array
    {
        return [
            [
                'title' => 'Senior Full Stack Developer',
                'company' => 'Tech Company Inc.',
                'period' => '2022 - Present',
                'description' => 'Led development of multiple web applications using Laravel, React, and modern DevOps practices. Mentored junior developers and implemented best practices.',
                'technologies' => ['Laravel', 'React', 'AWS', 'Docker'],
            ],
            [
                'title' => 'Full Stack Developer',
                'company' => 'StartupXYZ',
                'period' => '2020 - 2022',
                'description' => 'Developed and maintained client websites and applications. Worked closely with design team to implement pixel-perfect UIs.',
                'technologies' => ['Vue.js', 'Node.js', 'MySQL'],
            ],
        ];
    }

    public function getContactInfo(): array
    {
        return [
            'email' => 'john@example.com',
            'phone' => '+1 (555) 123-4567',
            'location' => 'San Francisco, CA',
            'social' => [
                'github' => 'https://github.com/username',
                'linkedin' => 'https://linkedin.com/in/username',
                'twitter' => 'https://twitter.com/username',
            ],
        ];
    }
}
