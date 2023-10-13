import Image from 'next/image';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Me',
  description: 'Alwin John is developing amazing open-source projects. A Finger-Style Guitarist. He is a GitHub Campus Expert`22. He is passionate about building great user experiences and solving problems.',
};

export default function About() {
  return (
  <div className='min-h-screen'>
    <main className="grid grid-cols-12 px-16 pt-32 gap-x-5">   
        <h3 className='col-start-2  col-span-2 font-semibold text-4xl'>About Me</h3>
        <div className='col-start-2 col-span-10 text-2xl mb-12'>
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
        <nav className='col-start-2 flex space-x-4 py-12 font-normal'>
          <a href='mailto:alwinjohn.com' className='rounded-lg border text-slate-500 py-2 px-8 hover:bg-red-500 transition duration-250 hover:ease-in hover:text-white'>Email</a>
          <a href='https://twitter.com/_alwin_john' target='_blank' rel='noreferrer' className="rounded-lg border text-slate-500 py-2 px-8 transition duration-250 hover:ease-in hover:bg-sky-500  hover:text-white">Twitter</a>
          <a href='https://github.com/Dexters-Hub' target='_blank' rel='noreferrer' className="rounded-lg border text-slate-500 py-2 px-8 transition duration-250 hover:ease-in hover:bg-gray-900  hover:text-white">GitHub</a>
          <a href='https://leetcode.com/Dexters-Hub/' target='_blank' rel='noreferrer' className="rounded-lg border text-slate-500 py-2 px-8 transition duration-250 hover:ease-in hover:bg-orange-400  hover:text-white">Leetcode</a>
          <a href='https://www.linkedin.com/in/alwinjohn/' target='_blank' rel='noreferrer' className="rounded-lg border text-slate-500 py-2 px-8 transition duration-250 hover:ease-in hover:bg-blue-600  hover:text-white">LinkedIn</a>
        </nav>

        <h3 className='col-start-2 col-span-2 font-semibold text-4xl pt-16'>Work</h3>

        <div className='col-start-2 col-span-10 py-12'>
          <div className='flex items-center'>
            <div className="inline-block border rounded-full border-slate-300 ">
              <Image src='/images/bridge.png' alt='An Company Logo' className='rounded-full p-6 ' height={125} width={125}/>
            </div>
            <div className='w-full ml-12'>
              <div className='flex w-full justify-between font-semibold mb-4'>
                <div>Frontend React Developer (Internship)</div>
                <div>Bridge</div>
                <div>Sep 2021 - Dec 2021</div>
              </div>
              <div className='text-slate-400 '>I demonstrated keen aesthetics, attention to detail, and a proactive learning attitude. My role spanned information architecture, wireframing, prototyping, web development, and seamless integration, enhancing project outcomes and highlighting my dedicated contributions.</div>
            </div>
          </div>
        </div>
    </main>
  </div>
  );
}
