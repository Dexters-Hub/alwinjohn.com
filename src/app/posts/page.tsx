import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/components/getPostMetadata';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title:'Posts',
  description:'Amazing Posts writtrn by Alwin John',
  alternates:{
    canonical: '/posts',
  },
};

const Posts = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  
  return (
    <div className='min-h-screen flex flex-col '>

        <div className='grid md:grid-cols-12 md:px-16 py-16 md:gap-x-5 md:mx-0 mx-7'>
            <h3 className='md:col-start-2 md:col-span-2 font-semibold text-4xl py-6'>Writings</h3>

            <div className='md:col-start-2 md:col-span-10  flex justify-between text-slate-500'>
            <div className='pb-12'>Publishing my thoughts and learnings since 2023.</div>
            </div>
            

        

            <div className="md:col-start-2 md:col-span-10 grid md:grid-cols-2 grid-cols-1 gap-y-8 md:gap-8">
                {postPreviews.map((preview, index) => (
                    <div key={index}>{preview}</div>
                ))}
            </div>

    

    </div>

    </div>
  );
};

export default Posts;