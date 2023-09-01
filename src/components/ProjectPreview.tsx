import Link from 'next/link';
import { ProjectMetadata } from './ProjectMetadata';

const ProjectPreview = (props: ProjectMetadata) => {
  return (
    <Link href={`/projects/${props.slug}`}><div
      className="border h-[320px] border-slate-100 p-8 rounded-md shadow-sm
    bg-white hover:border-slate-300 transition duration-150 hover:ease-in"
    >
      

      
        <h2 className="text-2xl font-semibold my-2">{props.title}</h2>
      
      <p className="text-sm py-2 text-slate-400">{props.date}</p>
      <p className="text-slate-500 text-xl py-4 leading-relaxed">{props.subtitle}</p>
    </div></Link>
  );
};

export default ProjectPreview;