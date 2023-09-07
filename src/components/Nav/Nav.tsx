'use client';

import { useState } from 'react'; // Import useState
import Image from 'next/image';
import Link from 'next/link';
import profilePicture from '../../../public/images/profile.png';

const Nav = () => {
  // Create a state variable to track the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='md:grid md:px-48 md:py-4 flex py-6 mx-6  border-b border-slate-100'>
      <div className='flex items-center w-full justify-between'>
        <div className='flex items-center'>
          <Link href='/'>
            <Image className='rounded-full' src={profilePicture} alt='A handsome guy' height={50} width={50} />
          </Link>
          <Link href='/'>
          <p className='text-xl font-semibold px-8'>Alwin John</p>
          </Link>
        </div>
        <div className='md:hidden'>
        <button onClick={toggleMobileMenu} className='text-4xl font-semibold px-2'>
          ☰
        </button>
      </div>
      </div>

      {/* Mobile Menu Button */}
      

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className='md:hidden absolute top-28 right-12 flex flex-col items-end'>
          <Link href='/about'>About</Link>
          <a href='https://blogs.alwinjohn.com' target='_blank' rel='noreferrer'>
            Blogs
          </a>
          <Link href='/projects'>Projects</Link>
          <Link href='mailto:alwinjohn.com'>Contact</Link>
        </nav>
      )}

      {/* Desktop Menu */}
      <nav className='hidden md:flex items-center col-start-3 justify-between text-xl font-semibold'>
        <Link href='/about'>About</Link>
        <a href='https://blogs.alwinjohn.com' target='_blank' rel='noreferrer'>
          Blogs
        </a>
        <Link href='/projects'>Projects</Link>
        <Link href='mailto:alwinjohn.com'>Contact</Link>
      </nav>
    </div>
  );
};

export default Nav;
