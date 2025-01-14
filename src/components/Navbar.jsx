import React from "react";
import Image from "next/image"; 
import Link from "next/link";
import AboutPage from '@/components/AboutPage'
import ContactPage from '@/components/ContactPage'
import GalleryPage from '@/components/GalleryPage'
import PricePage from '@/components/PricePage'
import { AiOutlineMenu, AiOutlineClose, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="fixed w-full h-24 shadow-lg shadow-orange-300 bg-white z-10">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href='/'>
          <Image
            src="/Logo.jpg" 
            alt="Logo"      
            width={150}    
            height={50}
            className="cursor-pointer"
            priority    
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl hover:text-orange-400">
                Why us
              </li>
            </Link>
            <Link href="/gallery">
              <li className="ml-10 uppercase hover:border-b text-xl hover:text-orange-400">
                Gallery
              </li>
            </Link>
            <Link href="/price">
              <li className="ml-10 uppercase hover:border-b text-xl hover:text-orange-400">
                Prices
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-xl hover:text-orange-400">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div className={menuOpen ? "fixed left-0 top-0 w-[65%] h-screen bg-[#ffcc99] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/gallery">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Gallery
              </li>
            </Link>
            <Link href="/price">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Price
              </li>
            </Link>
            <Link href="/contact">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
      </div>  
    </nav>
  );
};

export default Navbar;
