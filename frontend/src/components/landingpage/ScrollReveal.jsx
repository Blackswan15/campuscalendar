import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

function ScrollReveal({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(el, {
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
              ease: 'outCubic',
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}

export default ScrollReveal;
