import React from 'react'

type Props = {}

const FooterSubscribe = (props: Props) => {
  return (
    <div className='px-20 bg-blue-800 w-full flex justify-between items-center h-[150px]'>
        <div className="w-[600px]">
            <h1 className='font-medium text-[38px] text-white'><span className='text-green-600'>Subscripbe</span> us for get news events and offers</h1>
        </div>
        <div className="flex gap-3 ">
            <input type="email" className=' bg-white outline-none text-[13px] px-3 py-2 rounded-md  placeholder:text-gray-700 border shadow-md' placeholder='Enter oyur mail...' />
            <button className='bg-green-500 text-white rounded-md text-[15px] px-3 py-2'>Submit</button>
        </div>
    </div>
  )
}

export default FooterSubscribe