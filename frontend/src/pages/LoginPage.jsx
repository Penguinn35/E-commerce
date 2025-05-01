import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LogIn, Mail, Lock, Loader,  ArrowRight, } from 'lucide-react';
import { userStore } from '../stores/useUserStore';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, loading} = userStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  }

  return (
    <div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <motion.div
        className='sm:mx-auto sm:w-full sm:max-w-md'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className='mt-6 mb-8 text-center text-3xl font-extrabold text-emerald-400'>Login your account</h2>
      </motion.div>
      <motion.div
        className='sm:mx-auto sm:w-full sm:max-w-md'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className='bg-gray-800 py-8 px-4 shadow sm:rounder-lg sm:px-10'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            
              

            <div>
              <label htmlFor="address" className='block text-sm font-medium text-gray-400'>
                Email address
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className=' h-5 w-5 text-gray-400 ' aria-hidden='true'></Mail>
                </div>
                <input
                  id='email'
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value )}
                  className=' block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm
                              placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-e-red-500 sm:tex-sm'
                  placeholder='Youremail@example'
                ></input>
              </div>
            </div>

            <div>
              <label htmlFor="password" className='block text-sm font-medium text-gray-400'>
                Password
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock  className=' h-5 w-5 text-gray-400 ' aria-hidden='true'></Lock >
                </div>
                <input
                  id='password'
                  type='password'
                  required
                  value={password}
                  onChange={(e) => setPassword( e.target.value)}
                  className=' block w-full px-3 py-2 pl-10 bg-gray-700 border border-gray-600 rounded-md shadow-sm
                              placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-e-red-500 sm:tex-sm'
                  placeholder='********'
                ></input>
              </div>
            </div>

            

            <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 bg-emerald-500 hover:bg-emerald-700 rounded-md
                     text-sm font-medium transition duration-400 ease-in-out  cursor-pointer'
            >
              {loading?(
                <>
                <Loader className=' mr-2 animate-spin'></Loader>
                Loading...
                </>
              ):(<>
              <LogIn className='mr-2 h-5 w-5' aria-hidden='true'></LogIn>
              Login
              </>)}
            </button>





          </form>
          <p className='mt-8 flex justify-center text-center text-sm text-gray-400'>
						Don't have account?{" "}
						<Link to='/signup' className='font-medium ml-2 text-emerald-400 hover:text-emerald-300'>
							Signup here <ArrowRight className='inline h-4 w-4' />
						</Link>
					</p>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage