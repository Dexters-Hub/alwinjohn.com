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

        <div className='grid grid-cols-12 px-16 py-32 gap-x-5'>
            <h3 className='col-start-2 col-span-2 font-semibold text-4xl py-8'>Writings</h3>

            <div className='col-start-2 col-span-10 flex justify-between text-slate-500'>
            <div className='pb-8'>Publishing my thoughts and learnings since 2023.</div>
            </div>
            

        

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-8">
                {postPreviews.map((preview, index) => (
                    <div key={index}>{preview}</div>
                ))}
            </div>

    

    </div>

    </div>
  );
};

export default Posts;