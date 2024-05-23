import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='px-20 gap-3 pt-10 pb-10  text-white flex justify-between items-start bg-black h-[250px]'>
            <div className="w-1/4 flex flex-col justify-between h-full ">
                <h1 className='font-semibold text-[36px] text-white'>Logo</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>

            <div className="w-1/4">
                <h4 className='mb-2 text-[17px] text-white font-semibold'>Company</h4>
                <ul className='text-[#d9d9d9] text-[15px] flex flex-col gap-[7px]'>
                    <li className=''>About</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                </ul>
            </div>

            <div className="w-1/4">
                <h4 className='mb-2 text-[17px] text-white font-semibold'>Company</h4>
                <ul className='text-[#d9d9d9] text-[15px] flex flex-col gap-[7px]'>
                    <li className=''>About</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                </ul>
            </div>

            <div className="w-1/4">
                <h4 className='mb-2 text-[17px] text-white font-semibold'>Company</h4>
                <ul className='text-[#d9d9d9] text-[15px] flex flex-col gap-[7px]'>
                    <li className=''>About</li>
                    <li>About</li>
                    <li>About</li>
                    <li>About</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer