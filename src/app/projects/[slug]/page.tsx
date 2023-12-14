
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getProjectMetadata from '@/components/getProjectMetadata';
import type { Metadata } from 'next';


const getProjectContent = (slug: string) => {
  const folder = 'src/projects/';
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

//method for selecting text and making it shareable on twitter or other


export const generateStaticParams = async () => {
  const projects = getProjectMetadata();
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export async function generateMetadata(props: { params: { slug: string; }; }): Promise<Metadata> {
  const slug = props.params.slug;
  const project = getProjectContent(slug);

  if (!project) return {
    title:'Not Found',
    description:'Not Found',
  };

  return {
    title:project.data.title,
    description:project.data.description,
    alternates:{
      canonical: `/projects/${slug}`,
    },
  };
}

const ProjectPage = (props: { params: { slug: string; }; }) => {
  const slug = props.params.slug;
  const project = getProjectContent(slug);
  return (
    <div className='grid md:grid-cols-12 grid-cols-1 md:px-16 py-16 md:gap-x-5 md:mx-0 mx-7'>
      <div className="md:col-start-2 md:col-span-4 ">
        <h1 className="md:col-start-2 md:col-span-10 col-start-2 col-span-10 text-4xl font-bold">{project.data.title}</h1>
        <p className="md:col-start-2 md:col-span-10 text-slate-400 mt-2 text-l">{project.data.date}</p>
      </div>

      <article className="md:col-start-2 md:col-span-10 prose text-2xl">
        <Markdown className="md:col-start-2 md:col-span-10 col-start-2 col-span-10">{project.content}</Markdown>
      </article>
        
      
    </div>
  );
};

export default ProjectPage;