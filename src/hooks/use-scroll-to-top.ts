import { useEffect } from "react";

/**
 * Hook to prevent the browser from restoring the previous scroll position
 * and always start at the top on refresh.
 */
export const useScrollToTop = () => {
  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    
    // Always start at the top on refresh
    window.scrollTo(0, 0);
  }, []);
};