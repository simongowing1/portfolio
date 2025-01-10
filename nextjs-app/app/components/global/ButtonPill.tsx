import Link from "next/link"
import { twMerge } from "tailwind-merge";

type ButtonPillProps = {
    href: string;
    label: string;
    icon?: JSX.Element;
    classNameText?: string;
    classNameWrapper?: string;
    styling?: "black" | "cyan"
}

const ButtonPill = ({href, label, icon, classNameText, styling, classNameWrapper}: ButtonPillProps) => {

  const styleObject = () => {
    switch(styling){
      case 'cyan': return {
        backgroundColor: "cyan",
        text: "#4d4d4d"
      };
      default: return {
        backgroundColor: "black",
        text: "white"
      }
    }
  }

    return (
        <Link
                  className={twMerge("rounded-full flex gap-2 items-center  p-1 sm:py-3 sm:px-6 text-white transition-colors duration-200 hover:bg-red-500 focus:bg-cyan-500", classNameWrapper)}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{backgroundColor: styleObject().backgroundColor}}
                >
                  <span className={twMerge(icon && "sr-only sm:not-sr-only", "capitalize", classNameText)} style={{color: styleObject().text}}>{label}</span>
                  {icon}
                </Link>
    )
}

export default ButtonPill;