// src/Contact.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {
  const formRef = useRef(null);
  const reasonsRef = useRef(null);

  useGSAP(() => {
    const form = formRef.current;
    const reasons = reasonsRef.current;

    // Apply 3D rotation animation to the form and reasons
    gsap.from(form, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(reasons, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
    });

    // Apply hover effects to the form elements for 3D effect
    const formElements = form.querySelectorAll('input, textarea, button');
    formElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, { scale: 1.05, duration: 0.3 });
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(element, { scale: 1, duration: 0.3 });
      });
    });
  }, []);




  return (
    <section className="flex items-center justify-center min-h-screen animated-bg p-6 bg-[#180202]">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center bg-[#d186862f] rounded-xl">
        <div ref={reasonsRef} className="md:w-1/2 p-6">
          <h2 className="text-3xl font-serif font-bold mb-6 text-white">Why Contact Me?</h2>
          <p className="text-lg text-white mb-4">As a dedicated and skilled web developer, I bring:</p>
          <ul className="list-disc list-inside text-white">
            <li>Expertise in modern web technologies.</li>
            <li>Strong problem-solving abilities.</li>
            <li>Experience with responsive and user-friendly designs.</li>
            <li>Commitment to delivering high-quality code.</li>
            <li>Passion for continuous learning and improvement.</li>
          </ul>
        </div>
        <div ref={formRef} className="md:w-1/2 p-8 rounded-lg shadow-lg transform-style-3d mt-6 md:mt-0 bg-[#f32727]">
          <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#180202] text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;