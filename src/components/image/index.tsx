import { useState } from "react";
import { cn } from "@/utils/cn";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

export const Image = ({
    src,
    fallbackSrc,
    alt,
    className,
    ...props
}: ImageProps) => {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
        if (fallbackSrc && imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={cn("object-cover", className)}
            onError={handleError}
            {...props}
        />
    );
};
