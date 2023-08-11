import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-start p-24">
      <div className='flex justify-between'>
        <div className='flex flex-col justify-around'>
            <div className=''>
              <h2 className="text-8xl font-bold">Alwin John</h2>
              <p className="text-5xl font-semibold py-8">Frontend Engineer | UX Engineer</p>
            </div>
            <p className='text-[32px] font-normal w-3/4'>I&apos;m a Frontend Engineer with 1.5 years experience building interactive web apps.</p>
        </div>
        <Image className='rounded-full' src="/images/profile.png" alt='A handsome guy' height={400} width={400}/>
      </div>
    </main>
  );
}
