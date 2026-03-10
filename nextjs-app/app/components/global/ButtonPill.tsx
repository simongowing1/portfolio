"use client";

import Link from "next/link"
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ButtonPillProps = {
  href: string;
  label: string;
  icon?: JSX.Element;
  classNameText?: string;
  classNameWrapper?: string;
  styling?: "black" | "cyan" | "white"
}

const ButtonPill = ({ href, label, icon, classNameText, styling, classNameWrapper }: ButtonPillProps) => {

  const [isHovered, setIsHovered] = useState(false);

  const styleObject = () => {
    switch (styling) {
      case 'cyan': return {
        backgroundColor: isHovered ? "#f77769" : "cyan",
        text: "#4d4d4d"
      };
      case 'white': return {
        backgroundColor: isHovered ? "#f77769" : "white",
        text: "black"
      };
      default: return {
        backgroundColor: isHovered ? "#f77769" : "black",
        text: "white"
      }
    }
  }

  return (
    <Link
      className={twMerge("rounded-full flex gap-2 items-center p-1 sm:py-3 sm:px-6 text-white transition duration-500", classNameWrapper)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: styleObject().backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={twMerge(icon && "sr-only sm:not-sr-only", "capitalize", classNameText)} style={{ color: styleObject().text }}>{label}</span>
      {icon}
    </Link>
  )
}

export default ButtonPill;