import {
  useNextSanityImage,
  UseNextSanityImageProps,
  UseNextSanityImageOptions,
} from 'next-sanity-image';

// lib
import SanityImageClient from './client';
import { Image } from '@/utils/types/Image.types';
import { client } from '@/sanity/lib/client';

export type ImageLayout = 'fill' | 'responsive';

interface SanityImageProps {
  image: Image;
  layout?: 'fill' | string;
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
  priority,
  sizes = '100vw',
  className,
  wrapperClassName,
  background,
  padding,
}: SanityImageProps) {
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
    image?.asset || {}, // Fallback to an empty object if image.asset is null
    useNextSanityImageOptions
  ) || {};

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

  return (
    <SanityImageClient
      layout={layout}
      className={className}
      wrapperClassName={wrapperClassName}
      background={background}
      padding={padding}
      attributes={attributes}
      imageProps={imageProps}
      sanityImageProps={sanityImageProps}
    />
  );
}