import Image from 'next/image'
import React from 'react'
import { productData } from '../static/data'

type Props = {}

const OfferCard = (props: Props) => {
    return (
          
            <div className='bg-white  py-[50px] flex mt-[20px] mb-[30px] border shadow-md rounded-md h-[450px]'>
                <div className="flex-1 flex justify-center items-center">
                    <Image
                        src={productData[0].image_Url[0].url}
                        width={300}
                        height={400}
                        alt='l'
                        className='object-cover w-[300px] h-[400] '
                    />
                </div>
                <div className="flex-1">
                    <h2 className='text-[20px] font-medium '>title of the mobile</h2>
                    <p className='text-[#5c5858] pt-[7px] text-[14px]'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed natus molestias aut porro excepturi nobis magnam nemo quod repellat, deleniti necessitatibus soluta, veritatis blanditiis, omnis nisi magni dolore at tempore non harum! Unde sint optio numquam ullam architecto sequi quibusdam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed natus molestias aut porro excepturi nobis magnam nemo quod repellat, deleniti necessitatibus soluta, veritatis blanditiis, omnis nisi magni dolore at tempore non harum! Unde sint optio numquam ullam architecto sequi quibusdam.
                    </p>
                    <div className="flex justify-between gap-[10px] my-5">
                        <div className="">
                            <p className='text-red-500 font-[16px] line-through'>4444$</p>
                            <p className='font-medium text-[16px]'>200 sold</p>
                        </div>
                        <p className='text-green-500 font-normal me-4'>120 Sold</p>
                    </div>
                    <div className="text-red-500 font-medium my-[8px] text-[17px] ">time upp</div>

                    <div className="flex gap-[17px]">
                        <button className='rounded bg-black text-white text-[15px] py-[8px] px-[15px]'>Show details</button>
                        <button className='rounded bg-black text-white text-[15px] py-[8px] px-[15px]'>Show details</button>
                    </div>
                    <p className='capitalize text-end me-5 text-[14px]'>See more events</p>
                </div>
            </div>


    )
}

export default OfferCard