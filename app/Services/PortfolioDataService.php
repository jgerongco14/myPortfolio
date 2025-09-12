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

    public function getCareerData(): array
    {
        return [
            'description' => 'I am an IT professional with experience as a Programmer, Project Assistant, and Instructor. I have a strong background in software development, project coordination, and technology training, which allows me to contribute both technically and collaboratively within teams. My expertise includes developing web, desktop and mobile applications, assisting in project implementation, and mentoring students in IT fundamentals. I am eager to bring my adaptability, problem-solving skills, and passion for technology to an organization where I can contribute to innovative projects while continuing to grow professionally.',
            'resume_url' => '/assets/documents/Rendel Jeff Gerongco_Resume.pdf',
        ];
    }

    public function getFeaturedProjects(): array
    {
        return [
            [
                'id' => 1,
                'title' => 'ChumSpace',
                'description' => 'A mobile app built with Flutter and Pocketbase to support individuals with Down syndrome. It provides interactive tools for cognitive development, communication, and daily routines.',
                'fullDescription' => 'Chumspace is a mobile application developed as our capstone project to support individuals with Down syndrome through accessible and interactive digital tools. As the lead programmer, I built the app using Flutter for the front-end and Pocketbase as the backend database. The app offers features that aid in cognitive development, communication, and daily routines, tailored specifically to the needs of users with developmental disabilities. After its academic completion, our team decided to continue the project by promoting and marketing Chumspace for broader community use. While the source code is private, a live demonstration is available to showcase its functionality. This project reflects my passion for inclusive technology and my ability to lead impactful software development from concept to real-world application.',
                'image' => '/assets/projects/chumspace.png',
                'technologies' => ['Flutter', 'Dart', 'Pocketbase'],
                'platform' => 'Mobile',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'id' => 2,
                'title' => 'Guess That Sound',
                'description' => 'A Flutter-based mobile game integrated with Firebase, where I contributed as a part-time Full Stack Developer, focusing on UI design and user experience.',
                'fullDescription' => 'Guess That Sound is a mobile application currently available on the Google Play Store, developed by Misfits Canada. I contributed to the project as a part-time Full Stack Developer, with a primary focus on front-end development using Flutter. The application is built on Flutter and integrated with Firebase as its backend database, enabling real-time data management and user interaction. Although not my personal project, I played a key role in designing and implementing intuitive user interfaces, collaborating with the team to ensure a smooth and engaging user experience. This project strengthened my skills in cross-platform development and real-world app deployment.',
                'image' => '/assets/projects/guess that sound.png',
                'technologies' => ['Flutter', 'Dart', 'Firebase'],
                'platform' => 'Mobile',
                'github_url' => null,
                'live_url' => null,
            ],
        ];
    }

    public function getAllProjects(): array
    {
        return array_merge($this->getFeaturedProjects(), [
            [
                'id' => 3,
                'title' => 'Coco',
                'description' => 'Converted a classmate’s web project into a mobile-friendly Flutter app, improving accessibility. Later continued by others, COCO is now an active startup with SEC registration and IP rights.',
                'fullDescription' => 'COCO is a capstone project originally created as a website by one of my classmates. During our On-the-Job Training (OJT), I was tasked with converting the web design into a mobile-friendly interface using Flutter, focusing on front-end development to improve accessibility across mobile platforms. The application has since been continued by the succeeding batch of 4th-year students, who graduated in April 2025. They successfully pushed COCO as a startup product, and it is now in active production, officially registered with the SEC and backed by intellectual property (IP) rights.',
                'image' => '/assets/projects/coco.png',
                'technologies' => ['Flutter', 'Dart', 'Firebase'],
                'platform' => 'Mobile, Desktop',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'id' => 4,
                'title' => 'BMI Checker',
                'description' => 'A simple Flutter app that calculates Body Mass Index (BMI) and health categories, developed as a college project to strengthen my mobile development skills.',
                'fullDescription' => 'BMIChecker is a simple mobile application I developed during my second year in college. Built using Flutter, the app functions as a Body Mass Index (BMI) calculator, allowing users to input their height and weight to determine their BMI and health category. This project helped solidify my foundation in mobile app development and UI design using Flutter.',
                'image' => '/assets/projects/bmi_checker.png',
                'technologies' => ['Dart', 'Flutter'],
                'platform' => 'Mobile',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'id' => 5,
                'title' => 'SpedCademy',
                'description' => 'An educational platform designed for special education students and teachers',
                'image' => '/assets/projects/spedcademy.png',
                'technologies' => ['Laravel', 'React', 'MySQL', 'Inertia', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
                'platform' => 'Web',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'id' => 6,
                'title' => 'Pickleball',
                'description' => 'A Laravel-based web platform developed with HTML, JavaScript, Bootstrap, and MySQL, applying system analysis and full stack development principles.',
                'fullDescription' => 'The Pickleball Website was developed as part of our System Analysis and Design (SAD) and Computer Engineering courses during my second year in college. I created the platform using PHP with the Laravel framework, incorporating HTML, JavaScript, and Bootstrap for the front-end, and MySQL as the database. The project aimed to simulate a real-world web application by applying system design principles, user interaction, and database integration. This experience enhanced my skills in full stack development and solidified my understanding of web systems architecture.',
                'image' => '/assets/projects/pickleball.png',
                'technologies' => ['Laravel', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
                'platform' => 'Web, Mobile',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'id' => 7,
                'title' => "Ayumi's Vlogging Project",
                'description' => 'Created UI/UX design concepts for a proposed web application using React.js. Although the project was paused, the design remains part of my portfolio.',
                'fullDescription' => "This project was initially planned as a web-based application, where I proposed using React.js for development. I completed the UI/UX design phase based on the client’s specifications and workflow needs. However, before development could begin, the client resigned from her job—the original context for the project—and due to financial constraints, she decided not to proceed. As a result, the project is currently on hold, but the design work remains part of my portfolio as a demonstration of my front-end planning and design skills.",
                'image' => '/assets/projects/ayumi.png',
                'technologies' => ['React', 'React Native', 'Node'],
                'platform' => 'Web, Mobile',
                'github_url' => null,
                'live_url' => null,
            ],
            [
                'id' => 8,
                'title' => 'HRIS – Client Project',
                'description' => 'A custom Human Resource Information System built with Laravel, Bootstrap, and MySQL to streamline employee management, payroll, and internal communication for a school client.',
                'fullDescription' => 'The Human Resource Information System (HRIS) is a web-based system I developed for a school client to streamline HR management, employee coordination, and finance-related processes. The system facilitates employee records, payroll tracking, and internal communication within the organization. I built the platform using PHP with the Laravel framework, and designed the front-end with HTML, JavaScript, and Bootstrap, while employing MySQL as the database. This project demonstrated my capability to deliver a complete and functional solution tailored to a client’s operational needs.',
                'image' => '/assets/projects/hris.jpg',
                'technologies' => ['Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
                'platform' => 'Web, Mobile',
                'github_url' => null,
                'live_url' => null,
            ],
        ]);
    }

    public function getProjectPlatforms(): array
    {
        return ['All', 'Web', 'Mobile', 'Desktop'];
    }

    public function getPersonalInfo(): array
    {
        return [
            'bio' => "
            I am an IT professional with experience as a Programmer, Project Assistant, and Instructor. I have a strong background in software development, project coordination, and technology training, which allows me to contribute both technically and collaboratively within teams. My expertise includes developing web, desktop and mobile applications, assisting in project implementation, and mentoring students in IT fundamentals. I am eager to bring my adaptability, problem-solving skills, and passion for technology to an organization where I can contribute to innovative projects while continuing to grow professionally.",
            'location' => 'Davao City, Philippines',
            'email' => 'jgerongco14@gmail.com',
        ];
    }

    public function getSkills(): array
    {
        return [
            'Languages' => [
                ['name' => 'Java', 'level' => 85, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'],
                ['name' => 'Dart', 'level' => 80, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'],
                ['name' => 'JavaScript', 'level' => 95, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
                ['name' => 'PHP', 'level' => 90, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'],
                ['name' => 'Python', 'level' => 75, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'],
                ['name' => 'TypeScript', 'level' => 85, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
            ],
            'Frontend' => [
                ['name' => 'React', 'level' => 90, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
                ['name' => 'Bootstrap', 'level' => 85, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'],
                ['name' => 'HTML5', 'level' => 95, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
                ['name' => 'CSS3', 'level' => 90, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
                ['name' => 'Flutter', 'level' => 80, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'],
            ],
            'Backend' => [
                ['name' => 'Laravel', 'level' => 90, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'],
                ['name' => 'Node.js', 'level' => 80, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
            ],
            'Database' => [
                ['name' => 'MySQL', 'level' => 85, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
                ['name' => 'PostgreSQL', 'level' => 80, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'],
                ['name' => 'Appwrite', 'level' => 75, 'logo' => 'https://media.licdn.com/dms/image/v2/D4E0BAQFDBF46ZfJ3vQ/company-logo_200_200/company-logo_200_200/0/1718977410336/appwrite_logo?e=2147483647&v=beta&t=DoHqWw2l_PyS4_tTjcR6VXJWgBSKTLGdIw5rtLbuH3s'],
                ['name' => 'Firebase', 'level' => 85, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'],
                ['name' => 'PocketBase', 'level' => 70, 'logo' => 'https://pocketbase.io/images/logo.svg'],
                ['name' => 'Supabase', 'level' => 75, 'logo' => 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4'],
            ],
            'Tools' => [
                ['name' => 'Git', 'level' => 90, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'],
                ['name' => 'Postman', 'level' => 85, 'logo' => 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'],
                ['name' => 'Github', 'level' => 90, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'],
                ['name' => 'Bitbucket', 'level' => 80, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg'],
                ['name' => 'Visual Studio Code', 'level' => 95, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'],
                ['name' => 'NetBeans', 'level' => 75, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/9/98/Apache_NetBeans_Logo.svg'],
            ],
            'AI Tools' => [
                ['name' => 'ChatGPT', 'level' => 90, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png'],
                ['name' => 'Cursor', 'level' => 85, 'logo' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ_CU3a6muH84mLfoP6xmM4ZJ9Z6RAXMmdA&s'],
                ['name' => 'Claude AI', 'level' => 80, 'logo' => '/assets/tools_logo/claude.svg'],
            ],
            'Documentation & Design' => [
                ['name' => 'Trello', 'level' => 85, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg'],
                ['name' => 'Notion', 'level' => 80, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg'],
                ['name' => 'Canva', 'level' => 75, 'logo' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'],
                ['name' => 'CapCut', 'level' => 70, 'logo' => 'https://static.vecteezy.com/system/resources/previews/067/065/640/non_2x/capcut-logo-square-rounded-capcut-logo-capcut-logo-free-download-free-png.png'],
            ],
            'Microsoft Office' => [
                ['name' => 'Word', 'level' => 90, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png'],
                ['name' => 'Excel', 'level' => 85, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png'],
                ['name' => 'PowerPoint', 'level' => 80, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png'],
                ['name' => 'Teams', 'level' => 75, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png'],
            ],
            'Google Workspace' => [
                ['name' => 'Google Docs', 'level' => 90, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1200px-Google_Docs_logo_%282014-2020%29.svg.png'],
                ['name' => 'Google Sheets', 'level' => 85, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Sheets_logo_%282014-2020%29.svg/1200px-Google_Sheets_logo_%282014-2020%29.svg.png'],
                ['name' => 'Google Forms', 'level' => 80, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Google_Forms_2020_Logo.svg/1200px-Google_Forms_2020_Logo.svg.png'],
                ['name' => 'Google Slides', 'level' => 80, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Google_Slides_logo_%282014-2020%29.svg/1200px-Google_Slides_logo_%282014-2020%29.svg.png'],
                ['name' => 'Google Classroom', 'level' => 85, 'logo' => 'https://www.gstatic.com/classroom/logo_square_rounded.svg'],
                ['name' => 'Google Drive', 'level' => 90, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/1200px-Google_Drive_icon_%282020%29.svg.png'],
                ['name' => 'Google Calendar', 'level' => 85, 'logo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1200px-Google_Calendar_icon_%282020%29.svg.png'],
            ],
        ];
    }

    public function getExperience(): array
    {
        return [
            [
                'title' => 'Instructor - Part-time',
                'company' => 'Mindanao Kokusai Daigaku (MKD) | Davao City, Philippines',
                'period' => '2025 - Present',
                'description' => 'I am teaching mobile application development using Dart and Flutter.',
                'technologies' => ['Dart', 'Flutter', 'Appwrite', 'Github', 'Figma', 'Visual Studio Code', 'Google Classroom', 'Google Sheets', 'Google Docs', 'Canva', 'Google Forms'],
            ],
            [
                'title' => 'Project Assistant II',
                'company' => 'University of the Immaculate Conception | Davao City, Philippines',
                'period' => '2024 - 2025',
                'description' => 'As part of a University of the Immaculate Conception project funded by the Department of Science and Technology
(DOST), I contributed to a research initiative focused on functional foods endemic to the Philippines. The project aims to
identify and document the specific health benefits of these local foods, making the information accessible to the public.
In my role, I managed project documents, ensuring all necessary materials were organized and up-to-date. I was also
responsible for researching, gathering, and encoding data, which involved compiling and processing information on the
nutritional and medicinal properties of various indigenous foods. This experience allowed me to develop strong
organizational and data management skills while contributing to a project with significant potential to improve public
health awareness.',
                'technologies' => ['Google Sheets', 'Google Docs', 'Microsoft Office Word', 'Microsoft Office PowerPoint', 'Microsoft Office Excel', 'Canva'],
            ],
            [
                'title' => 'Instructor - Part-time',
                'company' => 'University of the Immaculate Conception | Davao City, Philippines',
                'period' => '2025 - Present',
                'description' => 'For almost a year, I have been teaching Data Analytics, Artificial Intelligence, and IT Era to students pursuing a Bachelor of Medical
Laboratory Science (BMLS). While the course is not as technically complex as those in IT or Computer Science, the goal is to
introduce students to the transformative potential of AI and Data Analytics in the healthcare industry. My focus is on raising
awareness about how these technologies are integrated into modern systems and their practical applications in improving
healthcare outcomes. By equipping students with foundational knowledge, I aim to bridge the gap between technology and
the health industry, ensuring future professionals are prepared to leverage AI and data-driven solutions in their field.
',
                'technologies' => ['Google Classroom', 'Canva', 'Microsoft Office Word', 'Microsoft Office PowerPoint', 'Microsoft Office Excel', 'Google Docs', 'Google Slides', 'Google Sheets'],
            ],
            [
                'title' => 'Instructor - Part-time',
                'company' => "Philippine Women's College of Davao | Davao City, Philippines",
                'period' => '2024 - Present',
                'description' => '
                For a year up to the present, I have been teaching college-level students in classes ranging from 10 to 30 students. My expertise spans
    a variety of advanced subjects in computer science and information technology, including:
    • Mobile Development
    • System Integration and Architecture
    • Complex Systems
    • Advanced Database Systems
    • System Integration and Technologies
    • System Administration and Maintenance
    • Web Systems
Through these courses, I aim to prepare students for real-world challenges by combining theoretical knowledge with
practical, hands-on experience. My teaching approach emphasizes collaboration, critical thinking, and the application of
cutting-edge technologies to solve complex problems.
                ',
                'technologies' => ['Microsoft Teams', 'Canva', 'Microsoft Office Word', 'Microsoft Office PowerPoint', 'Microsoft Office Excel', 'Google Docs', 'Google Slides', 'Google Sheets', 'Google Forms'],
            ],
            [
                'title' => 'Resource Speaker - Git and GitHub Workshop',
                'company' => 'Mindanao Kokusai Daigaku (MKD) | Davao City, Philippines',
                'period' => 'April 2025 (1 day session)',
                'description' => 'On April 10, 2025, I was invited as a resource speaker by the Computing Education Department of Mindanao Kokusai
Daigaku to conduct a hands-on workshop on Git and GitHub. During the session, I delivered both foundational and practical
training on version control and collaborative coding practices tailored for students and faculty members. The workshop also
emphasized best practices in using Git for project management and GitHub for open-source collaboration. The event was well-received, with participants expressing appreciation for the practical skills and knowledge gained, which they found immediately applicable to their academic and personal projects.',
                'technologies' => ['Git', 'GitHub', 'Visual Studio Code'],
            ],
            [
                'title' => 'Instructor',
                'company' => 'Ezential | Davao City, Philippines',
                'period' => '2024-Early 2025',
                'description' => 'I work at EZ to teach children Scratch, a beginner-friendly programming platform and Canva for them learn to design and some of the posters and presentations. Our students range from high school
students from Manila to Davao-based students. The work schedule is only on Sundays, with each session lasting for 2 hours.',
                'technologies' => ['Scratch', 'Google Meet', 'Canva'],
            ],
            [
                'title' => 'Part-time Full Stack Developer',
                'company' => 'Mistfits | Canada',
                'period' => '2023 - 2024',
                'description' => 'I worked at Misfits for almost a year and a half (January 2023 - June 2024), primarily focusing on front-end tasks. I also gained some experience
                backend tasks, although my seniors were primarily responsible for managing the backend.',
                'technologies' => ['Dart', 'Flutter', 'Firebase', 'Bitbucket', 'Figma'],
            ],
        ];
    }

    public function getEducation(): array
    {
        return [
            [
                'degree' => 'Bachelor of Science in Information Technology',
                'institution' => 'University of the Immaculate Conception',
                'period' => '2020 - 2024',
                'description' => 'Graduated with Latin Honors, My major is Healthcare Technologies, Forte Programming',
                'achievements' => ['Cum Laude', 'Dean\'s List', 'Best Research Award', 'Leadership Award', 'Best Internship Award', 'SSG Service Award'],
            ],
            [
                'degree' => 'Senior High School',
                'institution' => "Philippine Women's College of Davao",
                'period' => '2018-2020',
                'description' => 'Graduated with honors. ICT-Computer Programming.',
                'achievements' => ['With Honors', 'Strand Excellence Award', '3rd Place - ICT Quiz Bee', 'Best Research Award'],
            ],
            [
                'degree' => 'Junior High School',
                'institution' => "Mabini National High School",
                'period' => '2013-2018',
                'description' => 'Actively participated in various academic and extracurricular activities, demonstrating leadership and teamwork skills.',
                'achievements' => ['Leadership Award', 'Organization President', 'Scout Leader', 'Loyalty Award'],
            ],
            [
                'degree' => 'Elementary',
                'institution' => "A. Mabini Elementary School",
                'period' => '2007-2013',
                'description' => 'Actively participated in various academic and extracurricular activities, demonstrating leadership and teamwork skills.',
                'achievements' => ['Scouting Award'],
            ],
        ];
    }

    public function getAchievements(): array
    {
        return [
            [
                'title' => 'Graduated Cum Laude',
                'year' => '2024',
                'description' => 'Earned a Bachelor\'s degree in Information Technology, Major in Healthcare Technology from the University of Immaculate Conception.',
                'category' => 'Academic',
            ],
            [
                'title' => 'Best Research (Capstone)',
                'year' => '2024',
                'description' => 'Recognized for outstanding research and innovation during the capstone project presentation.',
                'category' => 'Academic',
            ],
            [
                'title' => 'Vice Governor Internal - College of Computer Studies',
                'year' => '2022-2023',
                'description' => 'Served as Vice Governor Internal, providing leadership and support to the College of Computer Studies.',
                'category' => 'Leadership',
            ],
            [
                'title' => 'Executive Public Information Officer',
                'year' => '2021-2022',
                'description' => 'Handled communication and information dissemination for the University of Immaculate Conception Student Government.',
                'category' => 'Leadership',
            ],
            [
                'title' => 'Kumu Hackathon Finalist',
                'year' => '2021',
                'description' => 'Selected as a finalist in the Kumu Hackathon for innovative project development.',
                'category' => 'Competition',
            ],
            [
                'title' => 'Best in Research',
                'year' => '2018-2020',
                'description' => 'Awarded Best in Research at PWC for delivering high-quality and impactful research projects.',
                'category' => 'Academic',
            ],
            [
                'title' => 'Strand Excellence Awardee - ICT Programming Strand',
                'year' => '2019-2020',
                'description' => 'Recognized for academic excellence in the ICT Computer Programming Strand at PWC of Davao.',
                'category' => 'Academic',
            ],
            [
                'title' => '1st President - Scouting Unit (Senior & Rover Scout)',
                'year' => '2019-2020',
                'description' => 'Led the scouting unit for the Senior and Rover Scout Section batch at PWC of Davao.',
                'category' => 'Leadership',
            ],
            [
                'title' => 'Overall President - Scouting Unit (Senior & Rover Scout)',
                'year' => '2017-2018',
                'description' => 'Served as the overall president of the scouting unit at Mabini National High School.',
                'category' => 'Leadership',
            ],
        ];
    }

    public function getContactInfo(): array
    {
        return [
            'email' => 'jgerongco14@gmail.com',
            'phone' => '+639 949 142 354',
            'location' => 'Davao City, Philippines',
            'social' => [
                'github' => 'https://github.com/jgerongco14',
                'linkedin' => 'https://www.linkedin.com/in/rendel-jeff-gerongco-864861242/',
            ],
        ];
    }
}
