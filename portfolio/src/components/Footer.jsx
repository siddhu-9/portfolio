import React from 'react'

const Footer = () => {
  return (
    <div className='  bg-purple-950 h-60 text-white grid grid-cols-4 mt-10 m-36'>
  
      <div className=' font-jost'>About Me
      <ul  className=' mt-6'>
        <li>Resume</li>
        <li>previous experience</li>
        <li>vedvv</li>
        </ul>
        </div>
    
        <div className=' font-jost'>Projects
          <ul className=' mt-6'>
            <li>kjndfn</li>
            <li>fcbdsin</li>
            <li>klnknfv</li>
          </ul>
      </div>
      <div className=''>Subscribe
      <label for='femail' className='text-white font-jost border-base-line' >Join my online club for design community for free.No spam. Ever</label>
      <input type='text' placeholder='Enter your E-mail'></input></div>
  
      </div>
  )
}

export default Footer