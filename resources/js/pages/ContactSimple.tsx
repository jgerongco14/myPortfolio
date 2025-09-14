import MainLayout from '@/layouts/MainLayout';
import { ContactProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function ContactSimple({ contact_info }: ContactProps) {
    return (
        <MainLayout>
            <Head title="Contact Me" />
            <div className="bg-white py-16">
                <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Me</h2>
                    <p className="mb-8 text-lg text-gray-600">You can reach me directly via Gmail, phone, or follow me on GitHub and LinkedIn.</p>
                    <div className="space-y-6">
                        <div>
                            <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact_info.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-lg border-2 border-gray-400 px-4 py-2 text-gray-700 hover:bg-gray-50"
                            >
                                <img src="/assets/tools_logo/gmail.png" alt="Gmail" className="mr-2 h-8 w-11" />
                                {contact_info.email}
                            </a>
                        </div>
                        <div>
                            <span className="inline-flex items-center rounded-lg border-2 border-gray-400 px-4 py-2 text-gray-700">
                                <img src="/assets/tools_logo/call.jpg" alt="Phone" className="mr-2 h-10 w-10" />
                                {contact_info.phone}
                            </span>
                        </div>
                        <div className="mt-6 flex justify-center space-x-6">
                            <a
                                href={contact_info.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <img
                                    src="/assets/tools_logo/github.png"
                                    alt="GitHub"
                                    className="h-10 w-10 rounded border-2 border-gray-400 bg-white"
                                />
                            </a>
                            <a
                                href={contact_info.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                <img
                                    src="/assets/tools_logo/linkedin.png"
                                    alt="LinkedIn"
                                    className="h-10 w-10 rounded border-2 border-gray-400 bg-white"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
