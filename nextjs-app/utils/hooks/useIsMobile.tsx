import { useEffect, useState } from "react";

function useIsMobile(query: string = "(max-width: 1024px)", defaultState: boolean = false): boolean {
  const [isMobile, setIsMobile] = useState(defaultState);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listener to update state
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMobile;
}

export default useIsMobile;