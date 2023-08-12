import Image from 'next/image';
import Link from 'next/link';
import profilePicture from '../../../public/images/profile.png';
const Nav = () => {
  return (
    <div  className='grid px-48 py-4 border-b border-slate-100	' >
        <div className='flex items-center'>
            <Link href='/'><Image className='rounded-full' src={profilePicture} alt='A handsome guy' height={50} width={50}/></Link>
            <Link href='/'><p className='text-2xl font-semibold  px-8'>Alwin John</p></Link>
        </div>


            <nav className='flex items-center col-start-3 justify-between text-2xl font-semibold'>
                <Link href='/about'>About</Link>
                <Link href='/blogs'>Blogs</Link>
                <Link href=''>Projects</Link>
                <Link href=''>Contact</Link>
            </nav>
    </div>
  );
};

export default Nav;