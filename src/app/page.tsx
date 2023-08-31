import Image from 'next/image';
import profilePicture from '../../public/images/profile.png';
import TimeDisplay from '@/components/Nav/TimeDisplay';
import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import Link from 'next/link';

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
  <div className='min-h-screen flex flex-col '>
    <p className="flex text-2xl font-bold justify-center p-8 ">Old Portfolio<a className='text-rose-400'  href="https://portfolio-v1-1t92fq516-dexters-hub.vercel.app/" target='_blank' rel='noreferrer'> : v3.0.0</a></p>
    <main className="grid grid-cols-12 px-16 py-32 gap-x-5">         
              <div className='col-start-2 col-span-6'>
                
                <TimeDisplay />
                <h3 className="text-8xl font-bold">Alwin John</h3>
                <p className="text-5xl font-semibold pt-4 pb-10">Frontend Engineer | UX Engineer</p>
                <p className='text-[30px] '>I&apos;m a Frontend Engineer with 1.5 years experience building interactive web apps.</p>
                <p className='text-[30px] mt-8'>I <a href='' className=''>code</a>, <a href='' className=''>write</a> and build stuff on internet and talk about good design, solving problems and making the web more usable by keeping it simple.</p>
              </div>
              <Image className='col-end-12 col-span-3 rounded-full' src={profilePicture} placeholder='blur'  alt='A handsome guy' height={400} width={400}/>
    </main>

    

    <div className='grid grid-cols-12 px-16 py-32 gap-x-5'>
    <h3 className='col-start-2 col-span-2 font-semibold text-4xl py-6'>Writings</h3>

    <div className='col-start-2 col-span-10 flex justify-between text-slate-500'>
      <div className='pb-12'>Some of my thoughts on designing, life, experience and developing great software.</div>
      {postPreviews.length > 4 && (

                <Link href='/posts'>View all</Link> 

      )}
    </div>
    

   

    <div className="col-start-2 col-span-10 grid grid-cols-2 gap-8">
        {postPreviews.slice(0, 4).map((preview, index) => (
            <div key={index}>{preview}</div>
        ))}
    </div>

    

    </div>


    
  </div>
  );
}
