import { ImgHTMLAttributes, useState } from "react";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError'> {
    src: string;
    alt: string;
    fallbackSrc?: string;
    lazy?: boolean;
}

export default function OptimizedImage({ 
    src, 
    alt, 
    fallbackSrc = '/images/placeholder.jpg',
    lazy = true,
    className = '',
    ...props 
}: OptimizedImageProps) {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoading(false);
        if (fallbackSrc && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
        }
    };

    return (
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
            )}
            <img
                src={imageSrc}
                alt={alt}
                loading={lazy ? 'lazy' : 'eager'}
                onLoad={handleLoad}
                onError={handleError}
                className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                {...props}
            />
            {hasError && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500">
                    Image not available
                </div>
            )}
        </div>
    );
}