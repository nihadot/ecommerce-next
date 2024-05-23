'use client'
import Link from 'next/link'
import React from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type Props = {}

type IsVisibleForPassword = "password" | "text"

const Login = (props: Props) => {


  const [isVisible, setIsVisible] = React.useState<IsVisibleForPassword>();
  const [formData, setFormData] = React.useState<FormData>();

  const handleIsVisible = () => {
    setIsVisible("text")
  }
  const handleIsHidden = () => {
    setIsVisible("password")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setFormData({ [e.target.name]: e.target.value })
    }
  }

  return (
    <div className='w-full bg-slate-50 min-h-screen flex justify-start items-center flex-col'>
      <div className=" h-[200px] w-full flex justify-center items-end">
        <h1 className='text-3xl font-bold'>Login to your account</h1>
      </div>
      <div className="w-[450px] px-[40px] shadow-lg flex-col mt-5 flex justify-start py-5 items-center border border-white rounded-sm">
        <div className="flex flex-col w-full mt-3">
          <label htmlFor="email" className='text-gray-900 text-sm mb-1 capitalize'>Email address</label>
          <input type="text" name='name' onChange={handleChange} className='border w-full border-gray-300 outline-none rounded-md py-1.5 px-3 focus:ring-blue-600' />
        </div>

        <div className="flex flex-col mt-3 l w-full">
          <label htmlFor="password" className='text-gray-900 text-sm mb-1 capitalize'>password</label>
          <div className="relative w-full">
            {isVisible === "password" ? <FaEyeSlash onClick={handleIsVisible} size={20} className='absolute right-3 top-2' /> : <FaEye onClick={handleIsHidden} size={20} className='absolute right-3 top-2' />}
            <input type={isVisible} name='password' onChange={handleChange} className='border border-gray-300 outline-none w-full rounded-md py-1.5 px-3 focus:ring-blue-600' />
          </div>
        </div>

        <div className="flex w-full  items-center mt-3 justify-between ">
          <div className="flex justify-center items-center">
            <input type="checkbox" className='block' />
            <label htmlFor="password" className='block text-gray-900 ml-2 text-xs capitalize'>Remember me</label>
          </div>
          <label htmlFor="password" className='block text-gray-900 ml-2 text-xs'>Remember me</label>
        </div>
        <div className="flex w-full  items-center mt-3 justify-between">
          <button className='w-full h-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2.5 text-sm' >Submit</button>
        </div>

        <div className="my-3">
          <p className='text-gray-700 text-sm text-start'>Not have any account ? <Link href={'signup'} className='capitalize text-blue-700'>Signu Up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login