import { Head } from "@inertiajs/react";

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export default function SEO({
    title = 'Portfolio',
    description = 'Portfolio website showcasing my work and experience',
    keywords = 'developer, portfolio, web development, full stack',
    image = '/images/og-image.jpg',
    url = window.location.href,
    type = 'website'
}: SEOProps) {
    const fullTitle = title === 'Portfolio' ? title : `${title} - Portfolio`;

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            
            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            
            {/* Additional Meta */}
            <link rel="canonical" href={url} />
        </Head>
    );
}