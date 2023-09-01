const AchievementPreview = () => {
  return (
    <div className='grid grid-cols-12 px-16 py-8 gap-x-5'>
    <h3 className='col-start-2 col-span-4 font-semibold text-4xl py-6'>Personal Achievements</h3>

    <div className='col-start-2 col-span-10 flex justify-between text-slate-500'>
      <div className='pb-12'>Some of the accomplishments done in life as GitHub Campus Expert and an Engineer</div>
    </div>

    {/* Create Cards having metrics and title - grid would be better */}
    <div className="col-start-2 col-span-10 grid grid-cols-4 gap-8">
        <div className='bg-white border rounded-lg  p-12'>
            <h3 className='text-4xl font-semibold pb-4'>20+</h3>
            <p className='text-xl '>Open Source Projects</p>
            
            
        </div>
        <div className='bg-white  border rounded-lg p-12'>
        <h3 className='text-4xl font-semibold pb-4'>2000+</h3>
            <p className='text-xl '>Mentored Students</p>
        </div>
        <div className='bg-white border rounded-lg  p-12'>
        <h3 className='text-4xl font-semibold pb-4'>270+</h3>
            <p className='text-xl '>Github Followers</p>
        </div>

        <div className='bg-white border rounded-lg  p-12'>
        <h3 className='text-4xl font-semibold pb-4'>1900+</h3>
            <p className='text-xl '>Contributions</p>
        </div>

    </div>
    </div>
  );
};

export default AchievementPreview;