import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn = (threshold = 0.7, direction = "up", duration = 1, delay = 0) => {
  if (
    typeof threshold !== "number" ||
    typeof direction !== "string" ||
    typeof duration !== "number" ||
    typeof delay !== "number"
  ) {
    return;
  }

  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;

      if (entry.isIntersecting) {
        current.style.transition = `all ${duration}s cubic-bezier(0, 0, 0.2, 1) ${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(onScroll, { threshold: `${threshold}` });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll, threshold]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useScrollFadeIn;
