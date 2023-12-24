import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='flex justify-end'>
      <nav>
        <ul className='flex pr-8 text-lg '>
          <li className='m-6'>
            <a href='/' className=' hover:text-white hover:underline'>
              Gmail
            </a>
          </li>
          <li className='m-6'>
            <a href='/' className=' hover:text-white hover:underline'>
              Image
            </a>
          </li>
          <div className='m-4 relative rounded-full overflow-hidden w-12 h-12 hover:bg-richblack-700 flex justify-center items-center'>
            
                <a href='/'>
                <RxDashboard size={28} />
                </a>
           
            </div>

            <div className='m-4 relative rounded-full overflow-hidden w-12 h-12 hover:bg-richblack-700 flex justify-center items-center'>
            
                <a href='/'>
                <FaUserCircle size={28} />
                </a>
         
            </div>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
