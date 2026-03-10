import Link from "next/link";
import ButtonGitHub from "../global/button/ButtonGitHub";
import HeaderClient from "./HeaderClient";
import { SettingsQueryResult } from "@/sanity.types";

type HeaderProps = {
  settings: SettingsQueryResult;
}

export default function Header({ settings }: HeaderProps) {

  const cvDownload = settings?.cvDownload || '#';

  return (
    <>
      <HeaderClient />
      <header id={'site-header'} className="fixed z-50 h-36 sm:h-24 inset-0 flex items-center backdrop-blur-lg transition-[top] duration-500 bg-gradient-to-b from-white/80 w-screen">
        <div className="container py-6 sm:px-6">
          <div className="flex items-center justify-between gap-5">
            <Link className="flex items-center gap-2" href="/">
              <span className="text-4xl font-bold pl-2 leading-tight tracking-tighter">
                Simon Gowing
              </span>
            </Link>

            <nav className="">
              <ul
                role="list"
                className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
              >
                <li>
                  <Link href={cvDownload} download target="_blank" className="">
                    CV
                  </Link>
                </li>

                <li className="sm:before:w-[1px] sm:before:bg-gray-100 before:block flex sm:gap-4 md:gap-6">
                  <ButtonGitHub />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
