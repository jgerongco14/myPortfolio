import { CareerData } from "@/types";

interface CareerProps {
    data: CareerData;
}

export default function Career({data}: CareerProps) {
    return (
        <div className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">My Career Objectives</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        {data.description}
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a
                            href={data.resume_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-indigo-600 px-6 py-3 text-white transition-colors hover:bg-indigo-700"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
