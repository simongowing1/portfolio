'use client';

import {useState, useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import Img from 'next/image';
import {UseNextSanityImageProps} from 'next-sanity-image';
import {twMerge} from 'tailwind-merge';

export type ImageLayout = 'fill' | 'responsive';

interface SanityImageClientProps {
  layout?: 'fill' | string;
  className?: string;
  wrapperClassName?: string;
  background?: boolean;
  padding?: boolean;
  attributes: any;
  imageProps: {};
  sanityImageProps: UseNextSanityImageProps;
}

export default function SanityImageClient({
  layout = 'fill',
  className = '',
  wrapperClassName = '',
  background = false,
  padding = true,
  attributes,
  imageProps,
  sanityImageProps,
}: SanityImageClientProps) {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    if (loaded) {
      animationControls.start('visible');
    }
  }, [loaded, animationControls]);

  return (
    <div className={twMerge('image relative w-full', background && '', wrapperClassName)}>
      <Img
        {...imageProps}
        {...attributes}
        quality="90"
        onLoad={() => setLoaded(true)}
        className={twMerge(
          'lazyload h-full w-full',
          layout === 'fill' ? 'object-cover' : 'object-contain',
          !padding && layout === 'fill' ? 'relative' : ``,
          loaded ? 'lazyloaded' : '',
          className
        )}
        style={{
          aspectRatio:
            !padding && layout === 'fill'
              ? ''
              : `${sanityImageProps?.width}/${sanityImageProps?.height}`,
          ...attributes.style,
        }}
      />
    </div>
  );
}