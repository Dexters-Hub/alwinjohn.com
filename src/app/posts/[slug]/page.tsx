
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';
import type { Metadata } from 'next';



const getPostContent = (slug: string) => {
  const folder = 'src/posts/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props: { params: { slug: string; }; }): Promise<Metadata> {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  if (!post) return {
    title:'Not Found',
    description:'Not Found',
  };

  return {
    title:post.data.title,
    description:post.data.description,
    alternates:{
      canonical: `/posts/${slug}`,
    },
  };
}

const PostPage = (props: { params: { slug: string; }; }) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className='grid md:grid-cols-12 grid-cols-1 md:px-16 py-16 md:gap-x-5 md:mx-0 mx-7'>
      <div className="md:col-start-2 md:col-span-4 ">
        <h1 className="md:col-start-2 md:col-span-10 col-start-2 col-span-10 text-4xl font-bold">{post.data.title}</h1>
        <p className="md:col-start-2 md:col-span-10 text-slate-400 mt-2 text-l">{post.data.date}</p>
      </div>

      <article className="md:col-start-2 md:col-span-10 prose text-2xl">
        <Markdown className="md:col-start-2 md:col-span-10 col-start-2 col-span-10">{post.content}</Markdown>
      </article>
        
      
    </div>
  );
};

export default PostPage;