import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {useEffect, useRef} from 'react';
import {twMerge} from 'tailwind-merge';

import FadeIn from '../global/FadeIn';

import SanityImage from '../global/SanityImage';
import VideoWrapper from '../global/VideoWrapper';
import { Video } from '@/types/Video.types';
import { Image } from '@/types/Image.types';

gsap.registerPlugin(ScrollTrigger);

export interface HeroProps {
  video?: Video;
  heading?: string;
  subheading?: string;
  image?: Image;
  type?: string;
  showScroll?: boolean;
  hideHero?: boolean;
  className?: string;
}

export default function Hero(props: HeroProps) {
  const {
    video,
    image,
    heading,
    subheading,
    showScroll,
    hideHero,
    type,
    className,
  } = props;

  const containerRef = useRef(null);
  const pinnedRef = useRef(null);

  useEffect(() => {
    let ctx: gsap.Context | undefined;
    if (containerRef.current) {
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        });
      }, containerRef);
    }

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, [containerRef]);

  if (hideHero) return <></>;

  return (
    <section ref={containerRef} className={twMerge('hero h-availPageMobile lg:h-avail', className)}>
      <div ref={pinnedRef} className="relative h-full">
        {image &&
          type == 'image' &&
            <SanityImage image={image} layout="fill" wrapperClassName="h-full" priority />
            }
        {video && type == 'video' && (
          <VideoWrapper
            autoplay={video.autoplay || true}
            layout="fill"
            className="absolute h-full w-full"
            src={video}
          />
        )}
        {heading && (
          <div className="overlay absolute inset-0 z-10 flex w-full items-center justify-center text-white">
            <div className="relative z-10 text-center">
              <FadeIn delay={300}>
                <h1 className="text-3xl lg:text-4xl">{heading}</h1>
              </FadeIn>
              {subheading && (
                <FadeIn delay={400}>
                  <div className="max-w-3xl">{subheading}</div>
                </FadeIn>
              )}
            </div>
          </div>
        )}
        {showScroll && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white">Scroll</div>
        )}
      </div>
    </section>
  );
}