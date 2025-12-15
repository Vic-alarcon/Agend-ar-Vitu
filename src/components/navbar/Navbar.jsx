import React from 'react';
import Carrito from './carrito/Carrito';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="bg-[#1e293b] shadow-lg relative z-10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Side: Hamburger Menu & Brand */}
        <div className="flex items-center space-x-4">
          <button 
            className="text-gray-400 hover:text-white transition-colors duration-300 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a href="#" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors duration-300">Eventos</a>
        </div>

        {/* Center: Logo with Scroll-to-Top */}
         <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            {/* Logo Imagen */}
             <div className="bg-transparent p-0">
               <Image 
                src="/Logo-agendar.png"
                  alt="Agend-ar" 
                  width={100} 
                  height={100} 
                  className="object-contain"/>
              </div>
                       
          </Link>

        {/* Right Side: Cart & Login */}
        <div className="hidden md:flex items-center space-x-6">
          <Carrito />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Login
          </button>
        </div>
        
        {/* Mobile Cart Icon */}
        <div className="md:hidden">
            <Carrito />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute w-full bg-[#1e293b] text-center left-0">
          <a href="#" className="block py-3 px-4 text-white hover:bg-gray-700 transition-colors duration-300">Eventos</a>
          <a href="#" className="block py-3 px-4 text-white hover:bg-gray-700 transition-colors duration-300">Login</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
