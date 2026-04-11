import { useState, useEffect } from "react";

interface PreloaderResult {
  isLoading: boolean;
  progress: number; // 0–100
}

function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); // resolve on error so one broken asset won't block
    img.src = url;
  });
}

export function useAssetPreloader(urls: string[]): PreloaderResult {
  const [loaded, setLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (urls.length === 0) {
      setIsLoading(false);
      return;
    }

    let count = 0;

    const promises = urls.map((url) =>
      preloadImage(url).then(() => {
        count += 1;
        setLoaded(count);
      })
    );

    Promise.all(promises).then(() => setIsLoading(false));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    isLoading,
    progress: urls.length > 0 ? Math.round((loaded / urls.length) * 100) : 100,
  };
}
