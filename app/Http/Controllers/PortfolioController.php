<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;
use App\Services\PortfolioDataService;
use App\Http\Requests\ContactRequest;
use Illuminate\Http\RedirectResponse;

class PortfolioController extends Controller
{
    public function __construct(
        private PortfolioDataService $portfolioService
    ) {}

    public function home(): Response
    {
        return Inertia::render('Home', [
            'hero' => $this->portfolioService->getHeroData(),
            'career' => $this->portfolioService->getCareerData(),
            'featuredProjects' => $this->portfolioService->getFeaturedProjects(),
        ]);
    }

    public function about(): Response
    {
        return Inertia::render('About', [
            'personal_info' => $this->portfolioService->getPersonalInfo(),
            'skills' => $this->portfolioService->getSkills(),
            'education' => $this->portfolioService->getEducation(),
            'achievements' => $this->portfolioService->getAchievements(),
        ]);
    }

    public function experience(): Response
    {
        return Inertia::render('Experience', [
            'experience' => $this->portfolioService->getExperience(),
        ]);
    }

    public function projects(): Response
    {
        return Inertia::render('Projects', [
            'projects' => $this->portfolioService->getAllProjects(),
            'platforms' => $this->portfolioService->getProjectPlatforms(),
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('ContactSimple', [
            'contact_info' => $this->portfolioService->getContactInfo(),
        ]);
    }

    // public function sendMessage(ContactRequest $request): RedirectResponse
    // {
    //     // Handle contact form submission
    //     // You can integrate with email service, database, etc.

    //     return redirect()->back()->with('success', 'Message sent successfully!');
    // }
}
