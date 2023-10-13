import Image from 'next/image';
import type { Metadata } from 'next';
import profilePicture from '../../public/images/profile.png';
import TimeDisplay from '@/components/Nav/TimeDisplay';
import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import Link from 'next/link';
import AchievementPreview from '@/components/Achievement/AchievementPreview';
import getProjectMetadata from '@/components/getProjectMetadata';
import ProjectPreview from '@/components/ProjectPreview';


export const metadata: Metadata = {
  title: 'Alwin John - Frontend Engineer | UX Engineer',
  description: 'Alwin John is a Frontend Engineer and UX Engineer based in Bangalore, India. He is a GitHub Campus Expert`22. He is passionate about building great user experiences and solving problems.',
};



export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const projectMetadata = getProjectMetadata();

  //sorting projectPreviews based on date
  const projectPreviews = projectMetadata.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).map((project) => (
    <ProjectPreview key={project.slug} {...project} />
  ));
  

  


  return (
  <div className='min-h-screen flex flex-col '>
    <main className="grid md:grid-cols-12 md:px-16 py-32 md:gap-x-5 md:mx-0 mx-7">         
              <div className='md:col-start-2 md:col-span-6'>
                
                <TimeDisplay />
                <h3 className="md:text-8xl text-6xl font-bold">Alwin John</h3>
                <p className="md:text-5xl text-3xl font-semibold pt-4 pb-10">Frontend Engineer | UX Engineer</p>
                <p className='md:text-3xl text-xl '>I&apos;m a Frontend Engineer with 1.5 years experience building interactive web apps.</p>
                <p className='md:text-3xl text-xl mt-8'>I <a href='' className=''>code</a>, <a href='' className=''>write</a> and build stuff on internet and talk about good design, solving problems and making the web more usable by keeping it simple.</p>
              </div>
              <Image className='md:col-end-12 md:col-span-3 rounded-full md:p-0 p-7' src={profilePicture} placeholder='blur'  alt='A handsome guy' height={400} width={400}/>
    </main>


    <AchievementPreview />

    <div className='grid md:grid-cols-12 md:px-16 py-16 md:gap-x-5 md:mx-0 mx-7'>
    <h3 className='md:col-start-2 md:col-span-2 font-semibold text-4xl py-6'>Projects</h3>

    <div className='md:col-start-2 md:col-span-10  flex justify-between text-slate-500'>
      <div className='pb-12'>Selected open source projects.</div>
      {projectPreviews.length > 4 && (

                <Link href='/projects'>View all</Link> 

      )}
    </div>
    

   

    <div className="md:col-start-2 md:col-span-10 grid md:grid-cols-2 grid-cols-1 gap-y-8 md:gap-8">
        {projectPreviews.slice(0, 4).map((preview, index) => (
            <div key={index}>{preview}</div>
        ))}
    </div>

    

    </div>

    <div className='grid md:grid-cols-12 md:px-16 py-16 md:gap-x-5 md:mx-0 mx-7'>
    <h3 className='md:col-start-2 md:col-span-2 font-semibold text-4xl py-6'>Writings</h3>

    <div className='md:col-start-2 md:col-span-10 flex justify-between text-slate-500'>
      <div className='pb-12'>Some of my thoughts on designing, life, experience and developing great software.</div>
      {postPreviews.length > 4 && (

                <Link href='/posts'>View all</Link> 

      )}
    </div>
    

   

    <div className="md:col-start-2 md:col-span-10 md:grid md:grid-cols-2  grid-cols-1 md:gap-8">
        {postPreviews.slice(0, 4).map((preview, index) => (
            <div key={index}>{preview}</div>
        ))}
    </div>

    

    </div>


    
  </div>
  );
}
