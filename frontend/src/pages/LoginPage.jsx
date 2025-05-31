import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LogIn, Mail, Lock, Loader,  ArrowRight, } from 'lucide-react';
import { userStore } from '../stores/useUserStore';
import GoogleAuthButton from './GoogleAuthButton';

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
        <h2 className='mt-6 mb-8 text-center text-3xl font-extrabold text-yellow-600'>Đăng nhập vào tài khoản</h2>
        {/* <p className='text-stone-700 text-center'>đăng nhập bằng tài khoản admin:</p>
        <p className='text-stone-700 text-center'>email: admin@123</p>
        <p className='text-stone-700 text-center'>Password: 123456</p> */}
      </motion.div>
      <motion.div
        className='sm:mx-auto sm:w-full sm:max-w-md'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className='bg-stone-300 py-8 px-4 shadow sm:rounder-lg sm:px-10'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            
              

            <div>
              <label htmlFor="address" className='block text-sm font-medium text-gray-400'>
                Địa chỉ email
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
                  className='text-stone-700 block w-full px-3 py-2 pl-10 bg-gray-100 border border-orange-300 rounded-md shadow-sm
                              placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-e-red-500 sm:tex-sm'
                  placeholder='Youremail@example'
                ></input>
              </div>
            </div>

            <div>
              <label htmlFor="password" className='block text-sm font-medium text-stone-700'>
                Mật khẩu
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock  className=' h-5 w-5 text-stone-700 ' aria-hidden='true'></Lock >
                </div>
                <input
                  id='password'
                  type='password'
                  required
                  value={password}
                  onChange={(e) => setPassword( e.target.value)}
                  className='text-stone-700 block w-full px-3 py-2 pl-10 bg-gray-100 border border-orange-300 rounded-md shadow-sm
                              placeholder-stone-700 focus:outline-none focus:ring-emerald-500 focus:border-e-red-500 sm:tex-sm'
                  placeholder='********'
                ></input>
              </div>
            </div>

            

            <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 bg-yellow-600 hover:bg-yellow-700 rounded-md
                     text-sm font-medium transition duration-400 ease-in-out  cursor-pointer'
            >
              {loading?(
                <>
                <Loader className=' mr-2 animate-spin'></Loader>
                Loading...
                </>
              ):(<>
              <LogIn className='mr-2 h-5 w-5' aria-hidden='true'></LogIn>
              Đăng nhập
              </>)}
            </button>





          </form>
          <GoogleAuthButton text="Đăng nhập với Google" />
          <p className='mt-8 flex justify-center text-center text-sm text-gray-400'>
						Không có tài khoản?{" "}
						<Link to='/signup' className='font-medium ml-2 text-yellow-600 hover:text-yellow-700'>
							Đăng kí <ArrowRight className='inline h-4 w-4' />
						</Link>
					</p>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage