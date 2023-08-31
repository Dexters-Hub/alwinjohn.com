
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';


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

const PostPage = (props: { params: { slug: string; }; }) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className='grid grid-cols-12 px-16 py-32 gap-x-5'>
      <div className="col-start-2 col-span-10 ">
        <h1 className="text-4xl font-bold">{post.data.title}</h1>
        <p className="text-slate-400 mt-2 text-l">{post.data.date}</p>
      </div>

      <article className="col-start-2 w-full col-span-10 prose text-2xl">
        <Markdown className="w-full">{post.content}</Markdown>
      </article>
        
      
    </div>
  );
};

export default PostPage;