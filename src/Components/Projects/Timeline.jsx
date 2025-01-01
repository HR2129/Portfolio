// src/Timeline.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Timeline.css'; // Additional custom styling
import { useGSAP } from '@gsap/react';

const projects = [
  { id: 1, title: 'Portfolio', description: 'Portfolio WebPage you are on.', date: 'December 2024', imgSrc: 'https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif' },
  { id: 2, title: 'SRT', description: ' A dynamic webpage using react-router-dom library and GSAP animations.  Project Link:  https://srtcar.netlify.app', date: 'November 2024', imgSrc: 'https://th.bing.com/th/id/OIP.nMvIA_9jFrZU_H-42RalhAAAAA?rs=1&pid=ImgDetMain' },
  { id: 3, title: ' React', description: 'A static webpage of modern version of introductory landing page of React.js. Project Link:  https://neon-pika-6749bb.netlify.app', date: 'October 2024', imgSrc: 'https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg' },
  { id: 4, title: 'AHJIN', description: ' Developed "AHJIN" website solely using web technologies without any framework/library.Project Link:  https://hr2129.github.io/AHJIN/first.html', date: 'August 2024', imgSrc: 'https://th.bing.com/th/id/OIP.CTT5jfQ_I6nFX-XwAaZeDAAAAA?rs=1&pid=ImgDetMain' },
  // Add more projects as needed
];

const Timeline = () => {
  const timelineRef = useRef(null);

  useGSAP(() => {
    const items = timelineRef.current.querySelectorAll('.timeline-item');

    gsap.from(items, {
      opacity: 0,
      y: -25,
      stagger: 0.2,
      duration: 1,
      ease: 'power1.out',
    });
  }, []);



  
  return (
    <div className="flex justify-center p-10 " ref={timelineRef}>
      <div className="timeline w-full max-w-4xl mb-20" >
        {projects.map((project) => (
          <div key={project.id} className="timeline-item flex flex-col md:flex-row items-center mb-10 relative ">
            <div className="timeline-content bg-[#d186862f] rounded-xl p-6  shadow-lg w-full md:w-1/2 mx--5">
              <h3 className="font-semibold text-3xl font-mono" >{project.title}</h3>
               
              <p className="mt-2 text-xl">{project.description}</p>
              <img src={project.imgSrc} alt={project.title} className="mt-4 w-full h-auto rounded-lg" />
            </div>
            <div className="timeline-date hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-[#f32727]  p-2 rounded-full shadow-lg">
              {project.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;