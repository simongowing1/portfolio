// lib
import {useAnimation} from 'framer-motion';
import Img from 'next/image';
import {
  useNextSanityImage,
  UseNextSanityImageOptions,
  UseNextSanityImageProps,
} from 'next-sanity-image';
import {useEffect, useState} from 'react';
import {twMerge} from 'tailwind-merge';

import { client } from '@/sanity/lib/client';
import { Image } from '@/types/Image.types';

export type ImageLayout = 'fill' | 'responsive';

interface SanityImageProps {
  image: Image;
  layout?: ImageLayout;
  widthOverride?: string;
  heightOverride?: string;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  noCaption?: boolean;
  background?: boolean;
  sizes?: string;
  padding?: boolean;
}

export default function SanityImage({
  image,
  layout = 'fill',
  widthOverride,
  heightOverride,
  className = '',
  wrapperClassName = '',
  priority,
  background = false,
  sizes = '100vw',
  padding = true,
}: SanityImageProps) {
  const [loaded, setLoaded] = useState(false);
  const animationControls = useAnimation();
  const {hotspot} = image || {};

  // Pass in custom URL builder props
  const myCustomImageBuilder = (imageUrlBuilder: any, options: any) => {
    return imageUrlBuilder
      .width(widthOverride ? widthOverride : options.width)
      .height(heightOverride ? heightOverride : options.height)
      .quality(90)
      .fit('clip');
    //.dpr(2);
  };

  const useNextSanityImageOptions: UseNextSanityImageOptions = {};

  if (widthOverride || heightOverride) {
    useNextSanityImageOptions.imageBuilder = myCustomImageBuilder;
  }

  // Generate actual URL
  const sanityImageProps: UseNextSanityImageProps = useNextSanityImage(
    client,
    image?.asset,
    useNextSanityImageOptions,
  );

  let imageProps = {};

  // Generate attributes for Img component
  const attributes: any = {};

  if (hotspot?.x && hotspot?.y) {
    const {x, y} = hotspot;
    attributes.style = {objectPosition: `${x * 100}% ${y * 100}%`};
  }

  if (image?.alt) {
    attributes.alt = image.alt;
  } else {
    attributes.alt = '';
  }

  if (layout) {
    if (layout === 'fill') {
      attributes.fill = true;

      if (sanityImageProps) {
        imageProps = {
          src: sanityImageProps?.src,
          loader: sanityImageProps?.loader,
        };
      }
    } else {
      imageProps = sanityImageProps;
    }
  } else {
    imageProps = sanityImageProps;
  }

  if (priority) {
    attributes.priority = true;
  } else {
    attributes.priority = false;
  }

  if (sizes) {
    attributes.sizes = sizes;
  }

  useEffect(() => {
    if (loaded) {
      animationControls.start('visible');
    }
  }, [loaded, animationControls]);

  return (
    <div
      className={twMerge('image relative w-full', background && '', wrapperClassName)}
      style={{
        aspectRatio:
          !padding && layout === 'fill'
            ? ''
            : `${sanityImageProps?.width}/${sanityImageProps?.height}`,
        ...attributes.style,
      }}
    >
      <Img
        {...imageProps}
        {...attributes}
        quality="90"
        onLoadingComplete={() => setLoaded(true)}
        className={twMerge(
          'lazyload w-full',
          layout === 'fill' ? 'h-full object-cover' : 'object-contain',
          !padding && layout === 'fill' ? 'relative' : ``,
          loaded ? 'lazyloaded' : '',
          className,
        )}
      />
    </div>
  );
}