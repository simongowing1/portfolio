"use client";

import { GITHUB_REPO_URL } from "@/utils/constants";
import ButtonPill from "./ButtonPill"
import useIsMobile from "@/utils/hooks/useIsMobile";
import IconGithub24 from "@/public/icons/ic-github";
import ButtonGitHub from "./button/ButtonGitHub";

export default function Footer() {

  const isMobile = useIsMobile();

  return (
    <footer className="bg-gray-50 border-gray-100 border-t">
      <div className="container">
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
            Built with Sanity + Next.js.
          </h3>
          
          <div className="flex flex-col gap-3 items-center justify-end lg:w-1/2 lg:flex-row lg:pl-4">
          <ButtonGitHub/>
          </div>
        </div>
      </div>
    </footer>
  );
}
