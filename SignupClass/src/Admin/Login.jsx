import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500'>
      <div className='w-full max-w-md bg-white rounded-lg shadow-lg p-8'>
          <h1 className='text-center text-2xl font-bold text-gray-800 '>Welcome Back</h1>
          <p className='text-center text-gray-500 text-sm'>signin to contiue to your journey</p>

          <form className='space-y-4'>
        <div>
          <label className='block text-gray-700 text-sm font-medium'>Email:</label>
          <input type="text" placeholder='Your Email' className='mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400' />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700'>Password</label>
          <input type="text" placeholder='Your Password' className='mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400' />
        </div>
        <div className='flex justify-between items-center gap-2'>
          <div className='flex justify-center items-center'>
            <input type="checkbox" className='h-4 w-4 text-blue-600' />
            <p className='text-sm pl-1 text-gray-700'>remember me</p>
          </div>
          <div><Link className='text-sm text-gray-700'>Forget Password</Link></div>
        </div>

        <div>
          <button className='w-full  py-2 bg-gradient-to-r from-blue-500 to-purple-500  text-white font-semibold rounded-md cursor-pointer hover:opacity-90 transition duration-200 ease-in-out'>Sign In</button>
        </div>

        <div>
          <p className='text-sm text-gray-700 text-center py-2'>Don't have an account? <Link to='/'className='text-blue-500 underline'>Sign up</Link> </p>
        </div>

        <div>
          <p className='text-center text-gray-500 text-sm'>Or countinue with</p>
          <div className='flex justify-center gap-4 mt-3'>
            <button className='rounded-md border w-full p-2 hover:bg-gray-100 cursor-pointer'>Google</button>
            <button className='rounded-md border w-full p-2 hover:bg-gray-100 cursor-pointer'>Facebook</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login
