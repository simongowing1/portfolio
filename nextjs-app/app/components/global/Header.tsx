"use client";

import Link from "next/link";
import ButtonPill from "./ButtonPill";
import IconGithub24 from "@/public/icons/ic-github";
import { useScrollResponsiveHeader } from "@/utils/hooks/useScrollResponsiveHeader";
import { GITHUB_REPO_URL } from "@/utils/constants";

export default function Header() {

  useScrollResponsiveHeader();

  return (
    <header id={'site-header'} className="fixed z-50 h-24 inset-0 flex items-center backdrop-blur-lg transition-[top] duration-500 bg-gradient-to-b from-white/80">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <span className="text-lg lg:text-4xl font-bold pl-2 leading-tight tracking-tighter">
              Simon Gowing
            </span>
          </Link>

          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li>
                <Link href="/about" className="">
                  CV
                </Link>
              </li>

              <li className="sm:before:w-[1px] sm:before:bg-gray-100 before:block flex sm:gap-4 md:gap-6">
              <ButtonPill label="View on GitHub" href={GITHUB_REPO_URL} icon={IconGithub24({className:'h-6'})} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
