
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {

  let navRef = useRef()
  let imgRef = useRef()

  useGSAP(()=>{
    gsap.from(navRef.current,{
      opacity:0,
      y:200,
      delay:0.4,
      duration:1
    }) 
    
    gsap.from(imgRef.current,{
      opacity:0,
      x:50,
      delay:0.9,
      duration:0.5
    }) 

    gsap.from("li",{
      opacity:0,
      y:20,
      delay:1,
      duration:0.9,
      stagger:0.3
    }) 
  })

  return (
    <div className=" fixed bottom-0 left-0 right-0 flex flex-wrap justify-between p-4 font-semibold text-2xl bg-gradient-to-b from-[#f32727] to-[#180202] bg-opacity-80 mx-20 my-5 rounded-full z-20 text-black" ref={navRef}>

    {/* bg-[#f32727]   bg-opacity-20 backdrop-blur-md shadow-md */}
        <img src="https://i.pinimg.com/736x/db/8c/2a/db8c2ae5b39c508207bb827d1031ba04.jpg" alt="" className=' rounded-full h-10 w-10 ' ref={imgRef}/>
        <ul className='flex no-underline gap-5 px-5 '>
            <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl">
               <Link to='/'>Home</Link>
              </li>
            <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl">
               <Link to='/Project'>Project</Link>
              </li>
            <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl">
               <Link to='/Resume'>Resume</Link>
              </li>
            <li className="hover:bg-black hover:bg-opacity-20 active:scale-75 px-3 py-2 rounded-md text-xl">
               <Link to='/Contact'>Contact</Link>
              </li>
        </ul>
    </div>
  )
}

export default Navbar