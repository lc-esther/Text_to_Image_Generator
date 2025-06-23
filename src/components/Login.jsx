import React, { useEffect , useContext, useState} from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = React.useState('Login');
  const {setShowLogin, backendUrl, setToken, setUser} = React.useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      if(state === 'Login')
      {
        const {data} = await axios.post(backendUrl + '/api/users/login', {email, password})
        if(data.success)
        {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        }
        else
        {
          toast.error(data.message || 'Login failed. Please try again.');
        }
      }
      else
      {
        const {data} = await axios.post(backendUrl + '/api/users/register', {name, email, password})
        if(data.success)
        {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        }
        else
        {
          toast.error(data.message || 'Sign Up failed. Please try again.');
        }
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return ()=>{
        document.body.style.overflow = 'unset'; 
    }
  }, []);

  return (
    <div className='fixed inset-0 z-10 flex justify-center items-center bg-black/30 backdrop-blur-sm'>
      <form className='relative bg-white p-10 rounded-xl text-slate-700 w-[90%] max-w-md shadow-xl'
      onSubmit={onSubmitHandler}
      >
        <h1 className='text-2xl font-bold text-center mb-2'>{state}</h1>
        <p className='text-center text-sm mb-6 text-gray-500'>
          Welcome back! Please sign in to continue
        </p>

        {/* Show Full Name only in Sign Up */}
        {state !== 'Login' && (
          <div className='flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-white'>
            <img src={assets.user_icon} alt="User Icon" className='w-5 h-5 opacity-70' />
            <input
            onChange={e=> setName(e.target.value)} value = {name}
              type="text"
              placeholder='Full Name'
              className='flex-1 outline-none text-sm bg-transparent placeholder-gray-500'
            />
          </div>
        )}

        {/* Email Field */}
        <div className='flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-white'>
          <img src={assets.email_icon} alt="Email Icon" className='w-5 h-5 opacity-70' />
          <input
            onChange={e=> setEmail(e.target.value)} value = {email}
            type="email"
            placeholder='Email id'
            className='flex-1 outline-none text-sm bg-transparent placeholder-gray-500'
          />
        </div>

        {/* Password Field */}
        <div className='flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 mb-4 bg-white'>
          <img src={assets.lock_icon} alt="Lock Icon" className='w-5 h-5 opacity-70' />
          <input
            onChange={e=> setPassword(e.target.value)} value = {password}
            type="password"
            placeholder='Password'
            className='flex-1 outline-none text-sm bg-transparent placeholder-gray-500'
          />
        </div>

        <p className='text-sm text-blue-500 cursor-pointer mb-4'>Forgot password?</p>

        <button
          type="submit"
          className='w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition'
        >
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {/* Toggle between Login and Sign Up */}
        {state === 'Login' ? (
          <p className='mt-5 text-center text-sm'>
            Don't have an account?{' '}
            <span
              className='text-blue-500 cursor-pointer font-medium'
              onClick={() => setState('Sign Up')}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className='mt-5 text-center text-sm'>
            Already have an account?{' '}
            <span
              className='text-blue-500 cursor-pointer font-medium'
              onClick={() => setState('Login')}
            >
              Login
            </span>
          </p>
        )}

        {/* Close (Cross) Icon */}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className='absolute top-5 right-5 w-5 h-5 cursor-pointer'
        />
      </form>
    </div>
  );
};

export default Login;
