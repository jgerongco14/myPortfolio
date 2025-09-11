import { Link, usePage } from '@inertiajs/react';
import { useState, ReactNode } from 'react';
import { PageProps, NavigationItem } from '@/types';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const navigation: NavigationItem[] = [
        { name: 'Home', href: '/', current: url === '/' },
        { name: 'About', href: '/about', current: url === '/about' },
        { name: 'Projects', href: '/projects', current: url === '/projects' },
        { name: 'Contact', href: '/contact', current: url === '/contact' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link href="/" className="flex items-center">
                                <span className="text-xl font-bold text-gray-900">
                                    Portfolio
                                </span>
                            </Link>
                        </div>
                        
                        <div className="hidden sm:flex sm:space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`${
                                        item.current
                                            ? 'border-indigo-500 text-gray-900'
                                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="sm:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="sm:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`${
                                        item.current
                                            ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                            : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                                    } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <main>{children}</main>

            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}