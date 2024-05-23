import React from 'react'
import { categoriesData } from '../static/data'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const DropDown = (props: Props) => {
    return (
        <div
            className='absolute w-[400px] h-fit overflow-auto max-h-[500px] bg-white shadow-md top-[77px] px-3 py-3'
            >
                {
                    categoriesData && categoriesData.length > 0 &&
                    categoriesData.map((item,index)=>{
                        const productName = item.title.toLocaleLowerCase().replace(/\s+/g, '-')
                        return(
                            <Link href={`/products?category=${item.title}`} className="flex justify-start items-center gap-3 py-2 px-3" key={index}>
                                        <div className=' overflow-hidden block relative w-[50px] h-[50px] rounded-full object-cover'>
                                            <Image
                                                className='w-full h-full'
                                                src={item.image_Url}
                                                alt={item.name}
                                                width={100}
                                                quality={40}
                                                height={40}
                                            />
                                        </div>
                                        <p className='text-gray-800 capitalize'>{item.title}</p>
                                    </Link>
                        )
                    })
                }
            </div>
    )
}

export default DropDown