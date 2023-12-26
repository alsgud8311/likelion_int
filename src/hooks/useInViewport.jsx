import { useState, useEffect, useRef } from 'react';

function useInViewport(ref) {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries) => {
      entries.forEach((entry) => {
        setIsInViewport(entry.isIntersecting);
      });
    };

    const options = { root: null, rootMargin: '0px', threshold: 0 };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isInViewport;
}

export default useInViewport;
