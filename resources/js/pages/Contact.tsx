import MainLayout from "@/layouts/MainLayout";
import { ContactProps, ContactFormData } from "@/types";
import { useForm, Head } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Contact({ contact_info }: ContactProps) {
    const { data, setData, post, processing, errors, reset } = useForm<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('contact.send'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <MainLayout>
            <Head title="Contact" />
            
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Get In Touch
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Let's discuss your next project
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <span className="text-gray-600">Email:</span>
                                    <span className="ml-2 text-gray-900">{contact_info.email}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600">Phone:</span>
                                    <span className="ml-2 text-gray-900">{contact_info.phone}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-600">Location:</span>
                                    <span className="ml-2 text-gray-900">{contact_info.location}</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="text-md font-medium text-gray-900 mb-4">
                                    Follow Me
                                </h4>
                                <div className="flex space-x-4">
                                    <a
                                        href={contact_info.social.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={contact_info.social.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        LinkedIn
                                    </a>
                                    <a
                                        href={contact_info.social.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        Twitter
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                    {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                    {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={data.subject}
                                        onChange={(e) => setData('subject', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                    {errors.subject && <div className="text-red-600 text-sm mt-1">{errors.subject}</div>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        value={data.message}
                                        onChange={(e) => setData('message', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                    {errors.message && <div className="text-red-600 text-sm mt-1">{errors.message}</div>}
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                                    >
                                        {processing ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

function route(arg0: string): string {
    throw new Error("Function not implemented.");
}
