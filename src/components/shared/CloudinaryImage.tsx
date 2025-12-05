"use client";

import { CldImage, CldImageProps } from 'next-cloudinary';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CloudinaryImageProps extends Omit<CldImageProps, 'src'> {
  src: string; // Enforce src as string (publicId)
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'auto';
  containerClassName?: string;
}

export default function CloudinaryImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  aspectRatio = 'auto',
  fill,
  sizes,
  ...props
}: CloudinaryImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-secondary/20',
        {
          'aspect-square': aspectRatio === 'square',
          'aspect-video': aspectRatio === 'video',
          'aspect-3/4': aspectRatio === 'portrait',
          'aspect-4/3': aspectRatio === 'landscape',
        },
        containerClassName
      )}
    >
      <CldImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes || (fill ? '100vw' : undefined)}
        className={cn(
          'duration-700 ease-in-out',
          fill && 'object-cover',
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0',
          className
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
}
