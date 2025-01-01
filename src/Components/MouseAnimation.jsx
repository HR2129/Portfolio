import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MouseAnimation = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(cursor, { x, y, duration: 0.1 });
      gsap.to(trail, { x, y, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 bg-[#e97575] rounded-full pointer-events-none z-50"
        style={{ mixBlendMode: 'difference' }}
      ></div>
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-12 h-12 bg-[#fcfcfc63] rounded-full pointer-events-none z-40 opacity-50"
        style={{ mixBlendMode: 'difference' }}
      ></div>
    </div>
  );
};

export default MouseAnimation;