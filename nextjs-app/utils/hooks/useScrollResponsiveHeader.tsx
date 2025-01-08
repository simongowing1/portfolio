import { useEffect, useState } from "react";

export function useScrollResponsiveHeader(headerId: string = "site-header") {
  const [siteHeaderHeight, setSiteHeaderHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const siteHeader = document.getElementById(headerId);
    if (!siteHeader) return;

    // Get and set header height
    const headerHeight = siteHeader.offsetHeight;
    setSiteHeaderHeight(headerHeight);

    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (siteHeaderHeight !== undefined) {
        if (prevScrollPos > currentScrollPos) {
          // Scrolling up: Show header
          siteHeader.style.top = "0";
        } else if (currentScrollPos > siteHeaderHeight) {
          // Scrolling down: Hide header
          siteHeader.style.top = `-${siteHeaderHeight}px`;
        }

        prevScrollPos = currentScrollPos;
      }
    };

    // Attach event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerId, siteHeaderHeight]);
}