import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Loader, UserPlus, ArrowRight  } from 'lucide-react';
import { userStore }  from '../stores/useUserStore.js';
import GoogleAuthButton from './GoogleAuthButton.jsx';


const SignupPage = () => {
  const loading = false;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {signup, user} = userStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signup(formData);
    
  }
  return (
    <div className='flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <motion.div
        className='sm:mx-auto sm:w-full sm:max-w-md'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className='mt-6 mb-8 text-center text-3xl font-extrabold text-yellow-600'>Tạo tài khoản</h2>
        {/* <p className='text-stone-700 text-center'>đăng nhập bằng tài khoản admin:</p>
        <p className='text-stone-700 text-center'>userName: admin</p>
        <p className='text-stone-700 text-center'>Password: 123456</p> */}
      </motion.div>
      <motion.div
        className='sm:mx-auto sm:w-full sm:max-w-md'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className='bg-stone-300 py-8 px-4 shadow sm:rounder-lg sm:px-10 rounded-md'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="name" className='block text-sm font-medium text-stone-700'>
                Tên đầy đủ
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className=' h-5 w-5 text-gray-400 ' aria-hidden='true'></User>
                </div>
                <input
                  id='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className='text-stone-700 block w-full px-3 py-2 pl-10 bg-gray-100 border border-gray-600 rounded-md shadow-sm
                              placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-e-red-500 sm:tex-sm'
                  placeholder='Your name'
                ></input>
              </div>
            </div>

            <div>
              <label htmlFor="address" className='block text-sm font-medium text-stone-700'>
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className='text-stone-700 block w-full px-3 py-2 pl-10 bg-gray-100 border border-gray-600 rounded-md shadow-sm
                              placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-e-red-500 sm:tex-sm'
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
                  <Lock  className=' h-5 w-5 text-gray-400 ' aria-hidden='true'></Lock >
                </div>
                <input
                  id='password'
                  type='password'
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className='text-stone-700 block w-full px-3 py-2 pl-10 bg-gray-100 border border-gray-600 rounded-md shadow-sm
                              placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-e-red-500 sm:tex-sm'
                  placeholder='********'
                ></input>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className='block text-sm font-medium text-stone-700'>
                Xác nhận mật khẩu
              </label>
              <div className='mt-1 relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock  className=' h-5 w-5 text-gray-400 ' aria-hidden='true'></Lock >
                </div>
                <input
                  id='confirmPassword'
                  type='password'
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className='text-stone-700 block w-full px-3 py-2 pl-10 bg-gray-100 border border-gray-600 rounded-md shadow-sm
                              placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-e-red-500 sm:tex-sm'
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
              <UserPlus className='mr-2 h-5 w-5' aria-hidden='true'></UserPlus>
              Đăng kí
              </>)}
            </button>





          </form>
          <GoogleAuthButton text="Đăng nhập với Google" />      
          <p className='mt-8 text-center text-sm text-gray-400'>
						Bạn đã có tài khoản?{" "}
						<Link to='/login' className='font-medium text-yellow-600 hover:text-yellow-700'>
							Đăng nhập ở đây <ArrowRight className='inline h-4 w-4' />
						</Link>
					</p>
        </div>
      </motion.div>
    </div>
  )
}

export default SignupPage