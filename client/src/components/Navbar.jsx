// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css'; // Make sure this file contains relevant styles

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] shadow-lg'>
      <div className='container mx-auto p-6'>
        <ul className='flex justify-around items-center space-x-6'>
          <li>
            <Link
              to="/"
              // className=' text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              className='bg-gradient-to-br from-[#00C9A7] to-[#92FE9D] text-white font-bold py-2 px-4 rounded'
            >
              Create Rule
            </Link>
          </li>
          <li>
            <Link
              to="/combine-rules"
              // className=' text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              className='bg-gradient-to-br from-[#00C9A7] to-[#92FE9D] text-white font-bold py-2 px-4 rounded'

            >
              Combine Rules
            </Link>
          </li>
          <li>
            <Link
              to="/evaluate-rule"
              // className=' text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              className='bg-gradient-to-br from-[#00C9A7] to-[#92FE9D] text-white font-bold py-2 px-4 rounded'

            >
              Evaluate Rule
            </Link>
          </li>
          <li>
            <Link
              to="/display-rules"
              // className=' text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              className='bg-gradient-to-br from-[#00C9A7] to-[#92FE9D] text-white font-bold py-2 px-4 rounded'

            >
              Display Rules
            </Link>
          </li>
          <li>
            <Link
              to="/modify-rules"
              // className=' text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              className='bg-gradient-to-br from-[#00C9A7] to-[#92FE9D] text-white font-bold py-2 px-4 rounded'

            >
              Modify Rules
            </Link>
          </li>
          <li>
            <Link
              to="/getall-rules"
              // className=' text-white p-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-110 hover:bg-green-700 ease-in-out duration-300'
              className='bg-gradient-to-br from-[#00C9A7] to-[#92FE9D] text-white font-bold py-2 px-4 rounded'

            >
              Get All Rules
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
