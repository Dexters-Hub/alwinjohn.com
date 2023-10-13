import ProjectPreview from '@/components/ProjectPreview';
import getProjectMetadata from '@/components/getProjectMetadata';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title:'Projects',
  description:'Open Source, Collaborated Projects done by Alwin John',
  alternates:{
    canonical: '/projects',
  },
};

const Projects = () => {
  const projectMetadata = getProjectMetadata();
  const projectPreviews = projectMetadata.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).map((project) => (
    <ProjectPreview key={project.slug} {...project} />
  ));
  
  return (
    <div className='min-h-screen flex flex-col '>

        <div className='grid grid-cols-12 px-16 py-32 gap-x-5'>
            <h3 className='col-start-2 col-span-2 font-semibold text-4xl py-8'>Projects</h3>

            <div className='col-start-2 col-span-10 flex justify-between text-slate-500'>
            <div className='pb-8'>Building Projects since 2020.</div>
            </div>
            

        

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-8">
                {projectPreviews.map((preview, index) => (
                    <div key={index}>{preview}</div>
                ))}
            </div>

    

    </div>

    </div>
  );
};

export default Projects;