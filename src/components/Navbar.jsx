import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js';
import { AppContext } from '../context/AppContext.jsx';

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  console.log("User from context:", user);

  return (
    <div className='flex items-center justify-between py-4 relative'>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='w-28 sm:w-32 lg:w-40' />
      </Link>

      <div>
        {user && user.name ? (
          <div className='flex items-center gap-6 text-sm font-medium text-zinc-800'>

            {/* Show actual credit from user context */}
            <button onClick={() => navigate('/buy')} className='flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm'>
              <img src={assets.credit_star} alt='credit' className='w-5 h-5' />
              <p className='text-sm font-medium text-gray-600'>
              Credits Left: {credit ? credit : 0}

              </p>
            </button>

            {/* Show actual name */}
            <p className='text-gray-600 max-sm:hidden pl-4'>
              Hi, {user.name}
            </p>

            {/* Profile Menu */}
            <div className='relative group'>
              <img
                src={assets.profile_icon}
                className='w-10 h-10 rounded-full cursor-pointer drop-shadow'
                alt="user"
              />
              <div className='absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg hidden group-hover:block z-10'>
                <ul className='text-sm text-center py-2'>
                  <li className='px-4 py-1 hover:bg-gray-100 cursor-pointer'
                    onClick={logout}
                  >Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex gap-4 items-center'>
            <p onClick={() => navigate('/buy-credit')} className='cursor-pointer text-sm font-medium'>
              Pricing
            </p>
            <button onClick={() => setShowLogin(true)} className='px-4 py-2 bg-zinc-800 text-white rounded-full text-sm'>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
  

};

export default Navbar;
