// src/Resume.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import MouseAnimation from './MouseAnimation.jsx'

const Resume = () => {
  const resumeRef = useRef(null);

  useGSAP(() => {
    gsap.from(resumeRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'ease-in',
    });

    gsap.from('.h2', {
      opacity: 0,
      x: 30,
      duration: 1,
      delay:0.5,
      ease: 'ease-in',
    });

    gsap.from('.data', {
      opacity: 0,
      x: -20,
      duration: 1,
      delay:0.5,
      ease: 'ease-in',
    });
  }, []);

////////////////////////////////////////////////////////////////

  
  // ref={resumeRef} 
  return (
    <>
    <MouseAnimation/>
    <section className="resume-section py-20 bg-[#180202] text-white "  >
      <div className="container mx-auto bg-[#d186862f] rounded-xl" ref={resumeRef}>
        <h2 className="text-4xl font-bold mb-6 text-center">My Resume</h2>
        <h2 className='h2 bg-[#f32727] px-5 py-3 font-bold font-serif text-center hover:text-lg'>BRIEF SUMMARY</h2>
        <p className='data p-3 text-lg'>I am seeking a challenging role as an Engineer in a dynamic organization. I aim to apply my technical expertise, problem-solving abilities, and communication skills to develop and implement innovative solutions. Ultimately, I hope to contribute to the company's growth and success.</p>
        <h2 className='h2 bg-[#f32727] px-5 py-3 font-bold font-serif text-center'>EDUCATION</h2>
        <h3 className='data p-3 text-lg text-center'>Don Bosco Institute of Technology Mumbai</h3>
        <p className='data p-2 text-lg text-center'>B.E. - Electronics & Telecommunication Engineering | CGPA: 7.2 / 10</p>
        <h2 className='h2 bg-[#f32727] px-5 py-3 font-bold font-serif text-center'>Projects</h2>
        <ul className='p-3 text-lg list-disc list-inside'>
          <li className='p-3 text-lg data'>
              Portfolio 
              <p className='px-4 text-lg'>Key Skills: React.js, GSAP, React-Router-Dom & Tailwind</p>
              <p className='px-4 text-lg'> Portfolio WebPage you are on.</p>
            </li>
          <li className='p-3 text-lg data'>
               SRT 
              <p className='px-4 text-lg'>Key Skills: React.js, GSAP & React-Router-Dom</p>
              <p className='px-4 text-lg'>Project Link:  <a href="https://srtcar.netlify.app/" className='text-yellow-500'>SRT</a></p>
              <p className='px-4 text-lg'> A dynamic webpage using react-router-dom library and GSAP animations.</p>
            </li>
            <li className='p-3 text-lg data'>
               React 
              <p className='px-4 text-lg'>Key Skills: ReactJS, Animation, CSS</p>
              <p className='px-4 text-lg'>Project Link: <a href=" https://neon-pika-6749bb.netlify.app/" className='text-yellow-500'>React_Landing_Page</a></p>
              <p className='px-4 text-lg'>A static webpage of modern version of introductory landing page of React.js</p>
            </li>
            <li className='p-3 text-lg data'>
               AHJIN 
              <p className='px-4 text-lg'>Key Skills: CSS Animation & HTML5</p>
              <p className='px-4 text-lg'>Project Link: <a href="https://hr2129.github.io/AHJIN/first.html" className='text-yellow-500'>Ahjin</a></p>
              <p className='px-4 text-lg'>Developed "AHJIN" website solely using web technologies without any framework/library</p>
            </li>
        </ul>
        <h2 className='h2 bg-[#f32727] px-5 py-3 font-bold font-serif text-center'>ASSESSMENTS / CERTIFICATIONS</h2>
        <h3 className='p-3 text-lg data'>1.) React JS</h3>
        <p className='px-6 text-lg data'>JavaScript library for building user interfaces for Web-Development. Widely used for Single Page Application.</p>
        <h3 className='p-3 text-lg data'>2.) Front End Development - HTML</h3>
        <p className='px-6 pb-10 text-lg data'>Used HTML, CSS, JavaScript to build a Web-Application.</p>

        {/* <hr className='p-2'/> */}
        
      </div>
      <div className='mb-8 text-center h2'>
          <p className="text-lg mb-8 mt-5">You can view or download my entire resume by clicking the button below.</p>
          <a
            href="https://drive.google.com/file/d/1V5zscCXqJ-qb9ZrsMs8joCeVq8K7mKIz/view?usp=sharing"
            download
            className="px-6 py-3 bg-[#f32727] text-white rounded-lg shadow-lg hover:bg-[#6e2323] transition duration-300"
          >
            Download Resume
          </a>
        </div>
    </section>
    </>
  );
};

export default Resume;