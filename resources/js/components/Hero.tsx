import { HeroData } from '@/types';
import { Link } from '@inertiajs/react';

interface HeroProps {
    data: HeroData;
}

export default function Hero({ data }: HeroProps) {
    return (
        <div className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:bg-transparent lg:pb-28 xl:pb-32">
                    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">{data.name}</span>
                            </h1>
                            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-indigo-600 sm:text-3xl md:text-4xl">{data.title}</h2>
                            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                {data.subtitle}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        href="/projects"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
                                    >
                                        {data.cta_text}
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        href="/contact"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 transition-colors hover:bg-indigo-200 md:px-10 md:py-4 md:text-lg"
                                    >
                                        Get in touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:z-20 lg:flex lg:w-1/2 lg:items-center">
                <div className="flex h-full w-full items-center justify-center p-4">
                    <img
                        className="h-auto max-h-[500px] w-full rounded-lg border-8 border-white object-cover shadow-2xl"
                        src={data.avatar}
                        alt={data.name}
                    />
                </div>
            </div>
        </div>
    );
}
