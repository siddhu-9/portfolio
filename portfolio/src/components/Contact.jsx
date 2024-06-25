import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-center items-center h-[90vh] '>
      
    <div className=' rounded-b-md  p-5  h-18 shadow-lg'>
      <form className=' bg-purple-800 p-1  rounded-md  w-250'> 
      <div className='flex justify-center m-5'>
      <h2 className=' text-white font-abc '>Contact Me</h2>
      </div>
     
      <div className=' rounded-md m-4 w-150 '>
        <label for ='fname' className=' block-text-base mb-2  text-white'>Name :</label>
        <input type='text' id='fname' placeholder='Enter your name ' className=' px-3 py-1  border w-full focus:outline-none rounded-md'></input></div>
        <div className=' rounded-md m-4'>
        <label for ='femail' className=' block-text-base  mb-2 text-white'>E-mail :</label>
        <input type='text' id='femail' placeholder='Enter your email ' className=' px-3 py-1  border w-full focus:outline-none rounded-md'></input></div>
        <div className=' rounded-md m-4 '>
        <label for ='femail' className=' block-text-base  mb-2 text-white'>Share your thoughts:</label>
        <input type='text' id='femail' placeholder='Enter your email ' className=' px-3  border w-full focus:outline-none rounded-md  py-10'></input></div>
         <div className='flex justify-center'>
          <button className=' bg-blue-800  hover:bg-green-600 text-white px-5 py-1 rounded-md mt-6 font-abc'>Submit</button>
         </div>
      </form>
    </div>
    </div>
  )
}

export default Contact