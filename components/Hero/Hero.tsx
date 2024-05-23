import React from 'react'
import "./index.css"
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className=' hero-section w-full h-[77.5vh] flex justify-center flex-col items-center'>
      <div className="bg-black/30 w-full h-full flex justify-center items-center ">

        <div className="w-[800px]">

        <div className="">
            <p className='text-[55px] text-white space-x-4 font-bold'>This is Home</p>
            <p className='text-[55px] text-white space-x-4 font-bold'>Offers Starting Soon...</p>
        </div>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ea a reiciendis obcaecati, harum id praesentium voluptatum qui expedita provident impedit ut quis nemo labore molestiae temporibus commodi ipsum veniam.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero