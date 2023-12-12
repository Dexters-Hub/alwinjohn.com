// WorkExperience.tsx

import React from 'react';
import Image from 'next/image';

interface WorkExperienceProps {
  title: string;
  company: string;
  date: string;
  description: string;
  imageSrc: string;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  title,
  company,
  date,
  description,
  imageSrc,
}) => {
  return (
    <div className='md:col-start-2 md:col-span-10 col-start-1 col-span-2 py-12'>
      <div className='md:flex md:flex-row md:items-center flex flex-col'>
        <div className="md:inline-block flex flex-col items-start justify-center  md:border rounded-full border-slate-300 ">
          <Image src={imageSrc} alt={`Logo of ${company}`} className='rounded-full p-6' height={125} width={125} />
        </div>
        <div className='w-full md:ml-12'>
          <div className='md:flex md:flex-row flex-col w-full md:justify-between font-semibold mb-4'>
            <div>{title}</div>
            <div>{company}</div>
            <div>{date}</div>
          </div>
          <div className='text-slate-400'>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
