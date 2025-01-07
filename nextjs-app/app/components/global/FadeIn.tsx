import {useInView} from 'framer-motion';
import React, {useRef} from 'react';
import {twMerge} from 'tailwind-merge';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  amount?: number | 'some' | 'all' | undefined;
  andUp?: boolean;
  delay?: number;
}

const FadeIn = ({children, className = '', amount = 0.2, andUp = true, delay = 0}: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: amount});

  return (
    <div
      ref={ref}
      className={twMerge(
        'transition-[opacity,transform] duration-1000 will-change-[opacity]',
        !isInView && 'opacity-0',
        !isInView && andUp && 'translate-y-5',
        className,
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;