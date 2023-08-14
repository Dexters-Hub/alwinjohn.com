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
        <h3 className='col-start-2 col-span-2 font-semibold text-4xl'>Online</h3>
        <nav className='col-start-2 flex space-x-4 py-12'>
          <a href='mailto:alwinjohn.com' className='rounded-lg bg-red-500 py-2 px-8 hover:bg-red-500 font-bold text-white'>Email</a>
          <a href='https://twitter.com/_alwin_john' target='_blank' rel='noreferrer' className="rounded-lg bg-sky-500 py-2 px-8 hover:bg-sky-500 font-bold text-white">Twitter</a>
          <a href='https://github.com/Dexters-Hub' target='_blank' rel='noreferrer' className="rounded-lg bg-gray-900 py-2 px-8 hover:bg-gray-900 font-bold text-white">Github</a>
          <a href='https://leetcode.com/Dexters-Hub/' target='_blank' rel='noreferrer' className="rounded-lg bg-orange-400 py-2 px-8 hover:bg-orange-400 font-bold text-white">Leetcode</a>
          <a href='https://www.linkedin.com/in/alwinjohn/' target='_blank' rel='noreferrer' className="rounded-lg bg-blue-600 py-2 px-8 hover:bg-blue-600 font-bold text-white">LinkedIn</a>
        </nav>

        <h3 className='col-start-2 col-span-2 font-semibold text-4xl pt-16'>Work</h3>

        <div className='col-start-2 col-span-10 py-12'>
          <div className='flex items-center'>
            <div className="inline-block border rounded-full border-slate-300 ">
              <Image src='/images/google.png' alt='An awesome guy' className='rounded-full p-6 ' height={125} width={125}/>
            </div>
            <div className='w-full ml-12'>
              <div className='flex w-full justify-between font-bold mb-4'>
                <div>UX Engineer</div>
                <div>Google</div>
                <div>2022 - Now</div>
              </div>
              <div className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestiae voluptas laudantium nam minus ad dolore vitae. Temporibus, soluta? Eaque quas totam at ipsum id? Voluptatibus ipsa odit eligendi beatae!</div>
            </div>
          </div>
        </div>
    </main>
  </div>
  );
}
