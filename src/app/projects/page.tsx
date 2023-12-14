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

        <div className='grid md:grid-cols-12 md:px-16 py-16 md:gap-x-5 md:mx-0 mx-7'>
            <h3 className='md:col-start-2 md:col-span-2 font-semibold text-4xl py-6'>Projects</h3>

            <div className='md:col-start-2 md:col-span-10  flex justify-between text-slate-500'>
            <div className='pb-12'>Building Projects since 2020.</div>
            </div>
            

        

            <div className="md:col-start-2 md:col-span-10 grid md:grid-cols-2 grid-cols-1 gap-y-8 md:gap-8">
                {projectPreviews.map((preview, index) => (
                    <div key={index}>{preview}</div>
                ))}
            </div>

    

    </div>

    </div>
  );
};

export default Projects;