import { useState, useEffect, useRef } from 'react';

function usePrallaxScroll() {
  const [position, setPosition] = useState(0);

  function onScroll(){
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
        window.removeEventListener("scroll",onScroll);
    }
  }, []);

  return position;
}

export default usePrallaxScroll;
