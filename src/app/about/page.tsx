import Image from 'next/image';
import type { Metadata } from 'next';
import WorkExperience from '@/components/WorkExperience/WorkExperience';


export const metadata: Metadata = {
  title: 'About Me',
  description: 'Alwin John is developing amazing open-source projects. A Finger-Style Guitarist. He is a GitHub Campus Expert`22. He is passionate about building great user experiences and solving problems.',
};

export default function About() {
  return (
  <div className='min-h-screen'>
    <main className="grid md:grid-cols-12 grid-cols-2 md:px-16 py-16 md:gap-x-5 md:mx-0 mx-7">   
        <h3 className='md:col-start-2  md:col-span-2 col-start-1 col-span-2 font-semibold text-4xl'>About Me</h3>
        <div className='md:col-start-2 md:col-span-10 col-start-1 col-span-2 text-2xl mb-12'>
            <p className='mt-8'>Hey there! 👋. I&apos;m Alwin John, a Front End Engineer based in India, that loves to code and build products with a delightful user experience.</p>
            <p className='mt-8'>Currently building amazing open-source projects.  Before that I mentored several students regarding their development and career.</p>
            <p className='mt-8'>I love working in between product, engineering and developer experience. Some things that make me excited are JavaScript, Open Source, CI & CD systems, simplicity, automating things and building meaningful user-centric products.</p>
            <p className='mt-8'>Outside of work, I&apos;m obsessed with puzzles, doing open source, playing music and have fun.</p>
        </div>
        
        <div className='relative md:col-start-2 md:col-span-10 col-start-1 col-span-2 py-96'>
        
            <Image className='md:col-start-2 md:z-10 md:absolute md:top-20' src='/images/rock.png' alt='A handsome guy' height={450} width={450}/>
            <Image className='md:z-20  md:absolute md:top-12 md:left-[25em]' src='/images/mask.png' alt='A handsome guy' height={420} width={420}/>
            <Image className='md:z-10 md:absolute md:right-0 md:top-20' src='/images/group.png' alt='A handsome guy' height={550} width={550}/>
        
        </div>
        <h3 className='md:col-start-2 md:col-span-2 col-start-1 col-span-2 font-semibold text-4xl pt-16'>Work</h3>

        <WorkExperience 
        title="Frontend Engineer"
        company="Kerala Police"
        date="July 2023 - Aug 2023"
        description="Contributed to the development of an internal project under Kerala Police CBCID Special Branch intended to
        be used by senior police officials."
        imageSrc="/images/kerala-police.png"
        />

        <WorkExperience 
        title="FE Developer & JS Learning Facilitator"
        company="TinkerHub Foundation"
        date="July 2021 - Feb 2022"
        description="I was responsible for developing the frontend of the Open-Source library covering 38 learning paths. I also mentored students in the field of web development and JavaScript."
        imageSrc="/images/tinkerhub.png"
        />

        <WorkExperience
          title="Frontend React Developer (Internship)"
          company="Bridge EdTech Solutions"
          date="Sep 2021 - Dec 2021"
          description="I demonstrated keen aesthetics, attention to detail, and a proactive learning attitude. My role spanned information architecture, wireframing, prototyping, web development, and seamless integration, enhancing project outcomes and highlighting my dedicated contributions."
          imageSrc="/images/bridge.png"
        />


        <h3 className='md:col-start-2 md:col-span-2 col-start-1 col-span-2 font-semibold text-4xl'>Online</h3>
        <nav className='md:flex grid md:col-start-2 md:col-span-10 md:space-x-4 md:space-y-0 col-start-1 py-12 font-normal'>
          <a href='mailto:alwinjohn.tech@gmail.com' className='rounded-lg border text-slate-500 py-2 px-8 hover:bg-red-500 transition duration-250 hover:ease-in hover:text-white'>Email</a>
          <a href='https://twitter.com/_alwin_john' target='_blank' rel='noreferrer' className="rounded-lg border text-slate-500 py-2 px-8 transition duration-250 hover:ease-in hover:bg-sky-500  hover:text-white">Twitter</a>
          <a href='https://github.com/Dexters-Hub' target='_blank' rel='noreferrer' className="rounded-lg border text-slate-500 py-2 px-8 transition duration-250 hover:ease-in hover:bg-gray-900  hover:text-white">GitHub</a>
          <a href='https://leetcode.com/Dexters-Hub/' target='_blank' rel='noreferrer' className="rounded-lg border text-slate-500 py-2 px-8 transition duration-250 hover:ease-in hover:bg-orange-400  hover:text-white">Leetcode</a>
          <a href='https://www.linkedin.com/in/alwinjohn/' target='_blank' rel='noreferrer' className="rounded-lg border text-slate-500 py-2 px-8 transition duration-250 hover:ease-in hover:bg-blue-600  hover:text-white">LinkedIn</a>
        </nav>

        <h3 className='md:col-start-2 md:col-span-2 col-start-1 font-semibold text-4xl pt-16'>Volunteering</h3>

        <WorkExperience 
        title="GitHub Campus Expert"
        company="GitHub Education"
        date="August 2022 - December 2023"
        description="I was selected as one of 65 GitHub Campus Experts (GCE) from 28 countries for the GitHub Campus Expert Program in the 2022 February cohort. I was also the only one to be selected as GCE from Kerala. Mentored 600+ students at multiple hackathons, including DefineHack 2022 Hackathon, TechnoHack 2023 and FOSS Hack 3.0, showcasing leadership, teamwork, and technical expertise to help students build and extend FOSS projects."
        imageSrc="/images/github.jpeg"
        />

        <WorkExperience 
        title="Mentor | Student Volunteer"
        company="IEEE"
        date="Nov 2019 - June 2022"
        description="Launched the Official Website of IEEE SB CEC in 6 months with the Web team collaborating as a Frontend Developer under the DevCom Team"
        imageSrc="/images/ieee.jpeg"
        />

        <WorkExperience 
        title="Web Development Mentor"
        company="IEDC"
        date="Jan 2020 - Nov 2020"
        description="Mentored students as part of the Weboski 6-Day Bootcamp conducted by IEDC for First Years Students. Teaching students to Create pages using HTML, and CSS and taught version control using Git and hosting them using GitHub Pages. 25+ Projects were created as part of the Weboski Bootcamp"
        imageSrc="/images/iedc.jpeg"
        />

        <WorkExperience 
        title="Student Volunteer & Webmaster"
        company="FOCES"
        date="Aug 2019 - June 2023"
        description="Implemented ScholarFox project, an open-source Scholarship and Job listing website leading a Team of 3 for students to provide updates regarding new opportunities and scholarships."
        imageSrc="/images/foces.jpeg"
        />

        <WorkExperience 
        title="Student Activity Coordinator"
        company="IEEE SIGHT"
        date="Jan 2021 - Jan 2022"
        description="Contributed to the project “RoboSight” which received funding from the IEEE Region 10 Student Activities Committee (SAC) special call for proposals connected to COVID-19. RoboSight is an assistance robot that allows healthcare workers to interact with COVID-positive patients from a distance to reduce the risk of transmission."
        imageSrc="/images/ieee-sight.jpeg"
        />

        <WorkExperience
          title="Flutter Developer & Mentor"
          company="PRODDEC"
          date="Dec 2020 - Dec 2021"
          description="Developed an open-source mobile app to keep students updated with institution notices, forum activities, and university notifications using Flutter and Firebase."
          imageSrc="/images/proddec.png"
        />



        

        
        
    </main>
  </div>
  );
}
