import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import MouseAnimation from './MouseAnimation.jsx'

const Home = () => {

/////////////////////////////////////Background Animation////////////////////
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);

  useEffect(() => {
    const bigBall = bigBallRef.current;
    const smallBall = smallBallRef.current;

    gsap.set(bigBall, { filter: 'blur(20px)' });
    gsap.set(smallBall, { filter: 'blur(20px)' });

    gsap.to(bigBall, {
      x: 80,
      y: 20,
      duration: 2,
      rotateX:20,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      skewY: 10,
    });

    gsap.to(smallBall, {
      x: -70,
      y: -20,
      rotateX:20,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      skewX: -10,
    });
  }, []);
/////////////////////////////////////Background Animation////////////////////



///////////////////////////Name Animation////////////////////////////

const textRef = useRef();

useEffect(() => {
  const text = textRef.current.innerText;
  const chars = text.split('');

  textRef.current.innerText = '';

  const tl = gsap.timeline();

  chars.forEach((char, i) => {
    tl.to(textRef.current, {
      duration: 0.1,
      delay:0.2,
      textContent: text.slice(0, i + 1),
      ease: 'none'
    });
  });
}, []);
///////////////////////////Name Animation////////////////////////////




///////////////////////////Typing Animation////////////////////////////
const texRef = useRef(null);
  const texts = ["Web Developer", "Front-End Developer", "React Developer"];

  useEffect(() => {
    const element = texRef.current;
    const tl = gsap.timeline({ repeat: -1 });

    texts.forEach((text, index) => {
      const chars = text.split('');

      // Type the text
      chars.forEach((char, i) => {
        tl.to(element, {
          duration: 0.2,
          delay:0.2,
          textContent: text.slice(0, i + 1),
          ease: 'none',
          delay: index === 0 && i === 0 ? 1 : 0  
        });
      });

      tl.to({}, { duration: 1 });

      // Delete the text
      chars.forEach((char, i) => {
        tl.to(element, {
          duration: 0.05,
          textContent: text.slice(0, chars.length - i - 1),
          ease: 'none',
        });
      });

      // Pause 
      tl.to({}, { duration: 0.5 });
    });
  }, [texts]);
///////////////////////////Typing Animation////////////////////////////


 let entryRef= useRef()

 useGSAP(()=>{
  gsap.from(entryRef.current,{
    opacity:0,
    x:20,
    delay:0.5,
    duration:0.5
  })
 })

  return (
    <>
      <MouseAnimation/>
      <div className="relative w-full h-screen flex items-center justify-center bg-[#180202]">
        <div ref={bigBallRef} className="w-96 h-96 bg-gradient-to-bl from-[#f32727] to-black rounded-full absolute z-0"></div>
        <div ref={smallBallRef} className="w-64 h-64 bg-gradient-to-br from-black to-[#f32727] rounded-full absolute top-48"></div>  

        <div className='absolute  text-[#f9f9f9] z-10 flex-col space-between top-80 left-20' ref={entryRef}>        
          <h1 className='max-w-fit font-semibold text-7xl m-5 font-serif '>Hello! I'm <br /><span className='text text-[#f32727] typing-effect font-mono text-9xl leading-relaxed' ref={textRef}>Rishi.R.Dubey</span></h1>
          <h2 className='text typing-effect font-bold text-5xl m-5 font-serif '>A <span className='text-yellow-200 font-mono text-7xl' ref={texRef} ></span> .</h2>
        </div>
      </div>  
    </>

  )
}

export default Home
