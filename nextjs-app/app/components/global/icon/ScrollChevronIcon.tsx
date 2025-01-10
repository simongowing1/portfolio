"use client";

import { scrollToSection } from "@/utils/helpers/scrollHelper";
import { IconBaseProps } from "react-icons/lib";
import { TbChevronCompactDown } from "react-icons/tb";

type ScrollChevronIconProps = IconBaseProps & {
    scrollTarget: string;
}


const ScrollChevronIcon = ({size, className, scrollTarget}: ScrollChevronIconProps) => {

    const handleIconClick = () => {
        scrollToSection(scrollTarget)
    }

    return (
        <TbChevronCompactDown size={size} className={className} onClick={handleIconClick}/>
    )
}

export default ScrollChevronIcon;