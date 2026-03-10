"use client";

import { useScrollResponsiveHeader } from "@/utils/hooks/useScrollResponsiveHeader";
import useIsMobile from "@/utils/hooks/useIsMobile";

export default function HeaderClient() {
    const isMobile = useIsMobile();
    useScrollResponsiveHeader(isMobile);
    return null;
}