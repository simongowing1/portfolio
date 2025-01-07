import Play from '@public/images/PlayIcon.svg';
import {motion} from 'framer-motion';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';
import {OnProgressProps} from 'react-player/base';
import {useMedia} from 'react-use';
import {twMerge} from 'tailwind-merge';
const ReactPlayer = dynamic(() => import('react-player'), {ssr: false});

import SanityImage from './SanityImage';
import { Video } from '@/types/Video.types';
interface VideoProps {
  src: Video;
  className?: string;
  autoplay: boolean;
  muted?: boolean;
  layout?: 'fill' | string;
}

gsap.registerPlugin(ScrollTrigger);

export default function VideoWrapper({
  src,
  className = '',
  autoplay = true,
  muted = false,
  layout = 'fill',
}: VideoProps) {
  const [videoSrc, setVideoSrc] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showImage, setImage] = useState(false);
  const isMobile = useMedia('(max-width: 1024px)', false);
  const [paused, setPaused] = useState(true);
  const [progress, setProgress] = useState(0);

  muted = autoplay ? true : muted;

  const {posterImage, mobilePosterImage} = src;

  const poster = isMobile && mobilePosterImage ? mobilePosterImage : posterImage;

  const handleProgress = (state: OnProgressProps) => {
    setProgress(state.played);
  };

  const handleOnPlay = () => {
    setPaused(false);
  };
  const handleOnPause = () => {
    setPaused(true);
  };

  const maybePlayMedia = () => {
    if (autoplay) {
      return;
    }

    if (!paused) {
      handleOnPause();
    } else {
      handleOnPlay();
    }
  };

  useEffect(() => {
    const currentSrc = isMobile ? src?.sd640 : src?.hd1920;
    setVideoSrc(currentSrc);
    setIsVisible(true);
  }, [isMobile, videoSrc, src]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    if (autoplay) {
      setPaused(false);
    }
  }, [autoplay]);

  return (
    <>
      <motion.div
        key="message"
        initial={{opacity: 0}}
        animate={{opacity: isVisible ? 1 : 0}}
        exit={{opacity: 0}}
        className={twMerge(layout === 'fill' ? '' : 'relative aspect-video', className)}
        onClick={maybePlayMedia}
      >
        {paused && (
          <div
            className={`absolute inset-0 z-20 flex items-center justify-center`}
            onClick={maybePlayMedia}
          >
            <button
              className="cursor-pointer"
              onClick={maybePlayMedia}
              aria-label={paused ? 'Play Video' : 'Pause Video'}
            >
              <Play
                width={114}
                height={114}
                className={twMerge(
                  !paused ? 'opacity-0' : 'opacity-100',
                  'transition-opacity duration-500 ease-in-out',
                  'h-fluid-6 w-6 lg:h-14 lg:w-14 2xl:h-28 2xl:w-28',
                )}
              />
            </button>
          </div>
        )}
        <ReactPlayer
          url={videoSrc}
          className={twMerge(
            `pointer-events-none w-full`,
            showImage ? 'hidden' : '',
            layout === 'fill'
              ? 'video-container cover-video absolute inset-0 h-full object-cover'
              : 'relative',
          )}
          style={{height: '100%', width: '100%', objectFit: 'cover'}}
          autoPlay={autoplay}
          muted={muted}
          playing={!paused}
          loop
          controls={false}
          onPlay={handleOnPlay}
          onPause={handleOnPause}
          onProgress={handleProgress}
          playsinline
          width="100%"
          height="100%"
        />

        {poster && paused && progress === 0 && (
          <SanityImage
            image={poster}
            layout="fill"
            wrapperClassName="absolute inset-0 h-full"
            className={`absolute inset-0`}
          />
        )}
      </motion.div>
    </>
  );
}