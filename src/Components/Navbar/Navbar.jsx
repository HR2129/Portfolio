import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navRef = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    gsap.from(navRef.current, {
      opacity: 0,
      y: 200,
      delay: 0.4,
      duration: 1,
    });

    gsap.from(imgRef.current, {
      opacity: 0,
      x: 50,
      delay: 0.9,
      duration: 0.5,
    });

    gsap.from('li', {
      opacity: 0,
      y: 20,
      delay: 1,
      duration: 0.9,
      stagger: 0.3,
    });
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#f32727] to-[#180202] bg-opacity-90 z-30 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-64 sm:hidden`}
      >
        <button
          className="absolute top-5 right-5 text-white text-3xl"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        <ul className="flex flex-col items-start gap-5 px-5 mt-20">
          <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl w-full">
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl w-full">
            <Link to="/Project" onClick={toggleSidebar}>
              Project
            </Link>
          </li>
          <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl w-full">
            <Link to="/Resume" onClick={toggleSidebar}>
              Resume
            </Link>
          </li>
          <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl w-full">
            <Link to="/Contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Navbar */}
      <div
        className="fixed bottom-0 left-0 right-0 flex items-center justify-between p-4 font-semibold text-2xl bg-gradient-to-b from-[#f32727] to-[#180202] bg-opacity-80 mx-5 sm:mx-20 my-5 rounded-full z-20 text-black"
        ref={navRef}
      >
        <img
          src="https://i.pinimg.com/736x/db/8c/2a/db8c2ae5b39c508207bb827d1031ba04.jpg"
          alt=""
          className="rounded-full h-10 w-10"
          ref={imgRef}
        />

        {/* Mobile Hamburger Button */}
        <button
          className="sm:hidden text-black text-3xl"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {/* Navbar Links (Hidden on Mobile) */}
        <ul className="hidden sm:flex gap-5 px-5">
          <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl">
            <Link to="/Project">Project</Link>
          </li>
          <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl">
            <Link to="/Resume">Resume</Link>
          </li>
          <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;