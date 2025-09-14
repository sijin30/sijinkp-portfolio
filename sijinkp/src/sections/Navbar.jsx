import React, { useRef } from 'react';
import { socials } from '../constants';
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const navbarContent = ['home', 'services', 'about', 'work', 'contact'];

function Navbar() {
  // ✅ Move useRef inside the component
  const navRef = useRef(null);
  const linksref=useRef([])
  const contactRef=useRef(null);
  const toplineRef=useRef(null);
  const bottomlineRef=useRef(null);

 useGSAP(() => {
  gsap.set(navRef.current, { xPercent: 100 });
  
}, { scope: navRef });
  return (
    <>
    <nav
      ref={navRef}
      className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
    >
      <div className="flex flex-col text-3xl gap-y-2 md:text-6xl lg:text-8xl">
        {navbarContent.map((section, index) => (
          <div key={index} ref={(el)=>{linksref.current [index]=el}}>
            <a
              className="transition-all duration-300 cursor-pointer hover:text-white"
            >
              {section}
            </a>
          </div> 
        ))}
      </div>
      <div  ref={contactRef} className='flex flex-col flex-wrap justify-between gap-8 md:flex-row'>
        <div className='font-extralight '>
         <p className='tracking-wider  text-white/50'>E-mail</p>
         <p className='text-xl tracking-wider lowercase text-pretty'>imsijinkp@gmail.com</p>
        </div>
        <div  className='font-light'>
          <p className='tracking-wider text-white/50'>
            Social Media
          </p>
          <div className='flex flex-col flex-wrap md:flex-row '>
                 {socials.map((social,index)=>(
                  <a key={index}
                  href={social.href}
                  className='text-sm leading-loose tracking-widest uppercase hover:text-white'>
                           {"{ "}
                           {social.name}
                           {" }"}
                  </a>
                 ))}
          </div>
        </div>
      </div>
    </nav>

    <div className='fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 right-10 top-4'>
         <div ref={toplineRef} className='block w-6 h-0.5 bg-white rounded-full origin-center'></div>
         <div ref={bottomlineRef} className='block w-6 h-0.5 bg-white rounded-full origin-center'></div>
         
    </div>
    </>
    
  );
}

export default Navbar;
