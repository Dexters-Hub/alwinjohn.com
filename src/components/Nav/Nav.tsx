import Image from 'next/image';
import profilePicture from '../../../public/images/profile.png';
const Nav = () => {
  return (
    <div  className='grid px-48 py-4 border-b border-slate-100	' >
        <div className='flex items-center'>
            <div><Image className='rounded-full' src={profilePicture} alt='A handsome guy' height={50} width={50}/></div>
            <p className='text-2xl font-semibold  px-8'>Alwin John</p>
        </div>


            <ul className='flex items-center col-start-3 justify-between text-2xl font-semibold'>
                <li>About</li>
                <li>Blogs</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
    </div>
  );
};

export default Nav;