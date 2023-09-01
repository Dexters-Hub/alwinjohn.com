import Image from 'next/image';
import Link from 'next/link';
import profilePicture from '../../../public/images/profile.png';
const Nav = () => {
  return (
    <div  className='grid px-48 py-4 border-b border-slate-100	' >
        <div className='flex items-center'>
            <Link href='/'><Image className='rounded-full' src={profilePicture} alt='A handsome guy' height={50} width={50}/></Link>
            <Link href='/'><p className='text-xl font-semibold  px-8'>Alwin John</p></Link>
        </div>


            <nav className='flex items-center col-start-3 justify-between text-xl font-semibold'>
                <Link href='/about'>About</Link>
                <a href='https://blogs.alwinjohn.com' target='_blank' rel='noreferrer'>Blogs</a>
                <Link href='/projects'>Projects</Link>
                <Link href='mailto:alwinjohn.com'>Contact</Link>
            </nav>
    </div>
  );
};

export default Nav;