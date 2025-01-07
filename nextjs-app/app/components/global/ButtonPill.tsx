import Link from "next/link"

type ButtonPillProps = {
    href: string;
    label: string;
    icon?: JSX.Element;
}

const ButtonPill = ({href, label, icon}: ButtonPillProps) => {
    return (
        <Link
                  className="rounded-full flex gap-2 items-center bg-black hover:bg-red-500 focus:bg-cyan-500 p-1 sm:py-3 sm:px-6 text-white transition-colors duration-200 "
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only sm:not-sr-only">{label}</span>
                  {icon}
                </Link>
    )
}

export default ButtonPill;