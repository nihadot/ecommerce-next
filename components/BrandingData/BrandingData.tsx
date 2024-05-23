import React from 'react'
import { brandingData, categoriesData } from '../static/data'
import Image from 'next/image'

type Props = {}

const BrandingData = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-center mt-7 px-20' >
            <div className="flex w-full justify-between items-center bg-white shadow-md border px-5 py-3">

                {
                    brandingData && brandingData.length > 0 && brandingData.map((item, index) => {
                        return (
                            <div className="flex gap-3 items-center justify-center" key={index}>
                                <div className="">
                                    {item.icon}
                                </div>
                                <div className="flex gap-0 flex-col items-start justify-center">
                                    <p className='text-gray-800 text-[15px]'>{item.title}</p>
                                    <p className='text-gray-800 text-[12px]'>{item.Description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="grid mt-5 gap-y-7 w-full grid-cols-5 bg-white shadow-md border px-5 py-3">

                {
                    categoriesData && categoriesData.length > 0 && categoriesData.map((item, index) => {
                        return (
                            <div className="flex gap-3 items-center justify-start" key={index}>
                                <div className=' overflow-hidden block relative w-[90px] rounded-md h-[70px] object-cover'>
                                            <Image
                                                className='w-full h-full object-cover'
                                                src={item.image_Url}
                                                width={100}

                                                quality={100}
                                                height={100}
                                                alt={item.title}
                                            />
                                        </div>
                                <div className="flex gap-0 flex-col items-start justify-center">
                                    <p className='text-gray-800 text-[15px] capitalize'>{item.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BrandingData