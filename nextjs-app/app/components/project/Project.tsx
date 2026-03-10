"use client";

import { Project as ProjectType } from "@/sanity.types";
import { useEffect, useRef } from "react";
import SanityImage from "../global/SanityImage";
import ButtonPill from "../global/ButtonPill";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { twMerge } from "tailwind-merge";

gsap.registerPlugin(ScrollTrigger);

type ProjectProps = {
  isNotFinalProjectInArray?: boolean
  project: ProjectType
}

const Project = ({ project, isNotFinalProjectInArray = false }: ProjectProps) => {
  const { _id, title, url, slug, coverImage } = project;

  return (
    <div key={_id} className={twMerge("w-screen flex-shrink-0 overflow-hidden relative z-0", 'h-screen')}>
      <div className="h-full w-full">
        <SanityImage image={coverImage} wrapperClassName="h-full w-full" priority />
      </div>
      <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black flex items-end">
        <div className="container py-10 sm:px-6 flex justify-center sm:justify-end">
          <ButtonPill label={title} href={url} classNameText="text-lg sm:text-2xl" styling="cyan" classNameWrapper="px-6 py-3 text-center" />
        </div>
      </div>
    </div>
  );
};

export default Project;