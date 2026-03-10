'use client';

import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type ProjectsProps = {
    children: React.ReactNode;
    heading?: string;
    subHeading?: string;
}

export const Projects = ({
    children,
}: ProjectsProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const panels = gsap.utils.toArray<HTMLElement>(container.children);
        if (panels.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + container.scrollWidth,
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} id="project-target" className="flex flex-nowrap w-full">
            {children}
        </div>
    );
};