import React from 'react';
import  { useState } from 'react';
import '../App.css'; 

function Navbar() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`bg-${isDarkTheme ? 'black' : 'white'} text-${isDarkTheme ? 'white' : 'black'}`}>
      <div className='flex justify-between items-center max-w-[1500px] mx-auto '>
        <h1 className='w-full text-3xl font-bold ml-5 text-purple-400 font-abc'>Anvesh.in</h1>
        <ul className='hidden md:flex mr-4 font-abc'>
          <li className='p-3'>Home</li>
          <li className='p-3'>About</li>
          <li className='p-3'>MyResume</li>
          <li className='p-3'>Contact</li>
        </ul>
        <button onClick={toggleTheme} className='text-white mr-3 font-abc'>
          {isDarkTheme ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;