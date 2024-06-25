import React from 'react'

const Hero = () => {
  return (
    <div className=' flex  max-w-[1500px] h-[90vh] mx-auto '>
        <div className='flex-col mx-auto my-auto'>
            <h2 className='flex justify-center font-abc text-5xl text-white'>Hello,I'am Siddhartha!</h2>
            <div className='flex justify-center font-semibold text-3xl'>
              <p  className='text-white font-abc'>Frontend Developer</p>
            </div>
            <div  className='flex justify-center mt-4 '>
              <button className=" bg-purple-800 text-white px-5 py-1 rounded-md text-sm font-jost">Hire me</button>
            </div>
        </div>

    </div>
  )
}

export default Hero