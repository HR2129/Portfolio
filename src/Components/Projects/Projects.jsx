import React, { useEffect, useRef } from 'react';
import IconCloud from './IconCloud.jsx';
import Timeline from './Timeline.jsx';
import { gsap } from 'gsap';
import MouseAnimation from '../MouseAnimation.jsx';

const Projects = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const chars = text.textContent.split('');
    text.innerHTML = chars
      .map((char) => `<span class="inline-block">${char}</span>`)
      .join('');

    const spans = text.querySelectorAll('span');

    gsap.fromTo(
      spans,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'power3.out' }
    );

    spans.forEach((span) => {
      span.addEventListener('mouseenter', () => {
        gsap.to(span, {
          scale: 1.5,
          color: '#ff0000',
          duration: 0.3,
          ease: 'elastic.out(1, 0.3)',
        });
      });
      span.addEventListener('mouseleave', () => {
        gsap.to(span, {
          scale: 1,
          color: '#fff',
          duration: 0.3,
          ease: 'elastic.out(1, 0.3)',
        });
      });
    });
  }, []);

  ////////////////////////////////////////////////////

  return (
    <>
      <MouseAnimation />
      <div className="bg-[#180202] text-white min-h-screen w-full">
        {/* Icon Cloud Section */}
        <div className="flex justify-center items-center bg-[#180202] p-5 sm:p-10">
          <IconCloud />
        </div>

        {/* Project Timeline Title */}
        <h2
          className="flex justify-center text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-purple-400 m-5 p-5 bg-[#180202] text-center"
          ref={textRef}
        >
          Project Timeline
        </h2>

        {/* Timeline Section */}
        <div className="w-full bg-gradient-to-b from-[#180202] to-[#f32727] p-5 sm:p-10">
          <Timeline />
        </div>
      </div>
    </>
  );
};

export default Projects;