import React from 'react';

const Work = () => {
  return (
    <div className='bg-purple-800'>
      <div className='flex flex-col justify-center items-center p-20'>
        <h3 className="text-white font-abc text-2xl mb-10">My Works</h3>
        <div className='flex justify-center gap-3'>
          <div className="bg-[#333333]/40 p-2 rounded-md block-text-base max-w-xs overflow-hidden">
            <h3 className="md:text-2xl text-2xl font-semibold text-white">3</h3>
            <p><span className="md:text-base text-xs text-white px-5"> My Projects Lorem ipsum dolor sit amet, consectetur odio quibusdam tempore sed!</span></p>
          </div>
          <div className="bg-[#333333]/40 p-3 rounded-md overflow-hidden">
            <h3 className="md:text-2xl text-2xl font-semibold text-white">3</h3>
            <p><span className="md:text-base text-xs text-white">On Progress</span></p>
          </div>
          <div className="bg-[#333333]/40 p-3 rounded-md overflow-hidden">
            <h3 className="md:text-2xl text-2xl font-semibold text-white">3</h3>
            <p><span className="md:text-base text-xs text-white">Live</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
