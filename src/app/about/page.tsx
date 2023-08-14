import Image from 'next/image';

export default function About() {
  return (
  <div className='min-h-screen'>
    <h4 className="flex text-4xl font-bold justify-center p-8">Currently under construction v4.0.1-beta</h4>
    <p className="flex text-2xl font-bold justify-center p-8 ">Old Portfolio<a className='text-rose-400'  href="https://portfolio-v1-1t92fq516-dexters-hub.vercel.app/" target='_blank' rel='noreferrer'> : v3.0.0</a></p>
    <main className="grid grid-cols-12 px-16 pt-32 gap-x-5">   
        <h3 className='col-start-2  col-span-2 font-semibold text-4xl'>About Me</h3>
        <div className='col-start-2 col-span-10 text-[30px]'>
            <p className='mt-8'>Hey there! 👋. I&apos;m Alwin John, a Front End Engineer based in India, that loves to code and build products with a delightful user experience.</p>
            <p className='mt-8'>Currently building amazing open-source projects.  Before that I mentored several students regarding their development and career.</p>
            <p className='mt-8'>I love working in between product, engineering and developer experience. Some things that make me excited are JavaScript, Open Source, CI & CD systems, simplicity, automating things and building meaningful user-centric products.</p>
            <p className='mt-8'>Outside of work, I&apos;m obsessed with puzzles, doing open source, playing music and have fun.</p>
        </div>
        
        <div className='relative col-start-2 col-span-10 py-96'>
        
            <Image className='col-start-2 z-10 absolute top-20' src='/images/rock.png' alt='A handsome guy' height={450} width={450}/>
            <Image className='z-20  absolute top-12 left-[25em]' src='/images/mask.png' alt='A handsome guy' height={420} width={420}/>
            <Image className='z-10 absolute right-0 top-20' src='/images/group.png' alt='A handsome guy' height={550} width={550}/>
        
        </div>
    </main>
  </div>
  );
}
