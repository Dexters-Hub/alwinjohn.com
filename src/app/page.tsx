import Image from 'next/image';
import profilePicture from '../../public/images/profile.png';
import TimeDisplay from '@/components/Nav/TimeDisplay';


export default function Home() {
  return (
  <div className='min-h-screen'>
    <h4 className="flex text-4xl font-bold justify-center p-8">Currently under construction v4.0.1-beta</h4>
    <p className="flex text-2xl font-bold justify-center p-8 ">Old Portfolio<a className='text-rose-400'  href="https://portfolio-v1-1t92fq516-dexters-hub.vercel.app/" target='_blank' rel='noreferrer'> : v3.0.0</a></p>
    <main className="grid grid-cols-12 px-16 py-32 gap-x-5">         
              <div className='col-start-2 col-span-6'>
                
                <TimeDisplay />
                <h3 className="text-8xl font-bold">Alwin John</h3>
                <p className="text-5xl font-semibold pt-4 pb-10">Frontend Engineer | UX Engineer</p>
                <p className='text-[30px] '>I&apos;m a Frontend Engineer with 1.5 years experience building interactive web apps.</p>
                <p className='text-[30px] mt-8'>I <a href='' className='bg-gradient-to-r from-green-400  via-cyan-500 to-sky-500  bg-clip-text text-transparent'>code</a>, <a href='' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-clip-text text-transparent'>write</a> and build stuff on internet and talk about good design, solving problems and making the web more usable by keeping it simple.</p>
              </div>
              <Image className='col-end-12 col-span-3 rounded-full' src={profilePicture} placeholder='blur'  alt='A handsome guy' height={400} width={400}/>
    </main>
  </div>
  );
}
