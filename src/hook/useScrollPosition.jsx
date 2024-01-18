import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const listenScroll = throttle(function () {
    setScrollX(window.scrollX);
    setScrollY(window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => {
      window.removeEventListener("click", listenScroll);
    };
  });

  return { scrollX, scrollY };
}
