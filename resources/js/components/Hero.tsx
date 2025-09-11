import { HeroData } from "@/types";
import { Link } from "@inertiajs/react";

interface HeroProps {
    data: HeroData;
}

export default function Hero({ data }: HeroProps) {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
     
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:bg-transparent">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">{data.name}</span>
                            </h1>
                            <h2 className="mt-2 text-2xl tracking-tight font-semibold text-indigo-600 sm:text-3xl md:text-4xl">
                                {data.title}
                            </h2>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                {data.subtitle}
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        href="/projects"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors"
                                    >
                                        {data.cta_text}
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        href="/contact"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 transition-colors"
                                    >
                                        Get in touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:z-20 lg:flex lg:items-center">
                <div className="p-4 w-full h-full flex items-center justify-center">
                    <img
                        className="w-full h-auto max-h-[500px] object-cover rounded-lg border-8 border-white shadow-2xl"
                        src={data.avatar}
                        alt={data.name}
                    />
                </div>
            </div>
        </div>
    );
}