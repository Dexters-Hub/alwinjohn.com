import Image from 'next/image';

const Nav = () => {
  return (
    <div  className='grid px-48 py-4 border-b border-slate-100	' >
        <div className='flex items-center'>
            <div><Image className='rounded-full' src="/images/profile.png" alt='A handsome guy' height={50} width={50}/></div>
            <p className='text-2xl font-semibold  px-8'>Alwin John</p>
        </div>


            <ul className='flex items-center col-start-3 justify-between'>
                <li className='text-2xl font-semibold'>About</li>
                <li className='text-2xl font-semibold'>Blogs</li>
                <li className='text-2xl font-semibold'>Projects</li>
                <li className='text-2xl font-semibold'>Contact</li>
            </ul>
    </div>
  );
};

export default Nav;