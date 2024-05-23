'use client'
import Brands from '@/components/Brands/Brands';
import Footer from '@/components/Footer/Footer';
import FooterSubscribe from '@/components/FooterSubscribe/FooterSubscribe';
import Header from '@/components/Header/Header';
import { productData } from '@/components/static/data';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

type Props = {
    params:string;
}

const page = ({params}: Props) => {

    const [data,setData] = useState({})

    useEffect(()=>{
        if(params.name){

            const productName = params.name.replace(/-/g," ");
            const resultOfFindOne = productData.find((item)=> item.name === productName )
            setData(resultOfFindOne)
        }
    },[])
        
    
    const [isActiveTab,setIsActiveTab] = useState(1)

  return (
    <div>

<Header />

<section className='px-20'>

        <div className="flex w-full h-fit py-10 mt-9">
            <div className="flex-1 h-auto">
                <Image
                width={200}
                height={200}
                alt=''
                src={data.image_Url?.[0]?.url}
                className='object-contain w-[80%] h-[200px]'
                />
                <div className="mt-5 flex justify-start gap-3 items-center w-[80%] h-[100px]">
                    <Image
                    width={100}
                    height={100}
                    alt=''
                    src={data.image_Url?.[0]?.url}
                    className='object-contain w-[100px] h-[100px]'
                    />
                     <Image
                    width={100}
                    height={100}
                    alt=''
                    src={data.image_Url?.[0]?.url}
                    className='object-cover w-[100px] h-[100px]'
                    />
                     <Image
                    width={100}
                    height={100}
                    alt=''
                    src={data.image_Url?.[0]?.url}
                    className='object-cover w-[100px] h-[100px]'
                    />
                </div>
            </div>
            <div className="flex-1 h-auto">
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

        <div className="px-5 py-10 border shadow-md">
            <div className="flex justify-between items-center">
                <p onClick={()=> setIsActiveTab(1) }  className={`${isActiveTab === 1 && 'border-b border-b-gray-700'}`} >Home</p>
                <p onClick={()=> setIsActiveTab(2) }  className={`${isActiveTab === 2 && 'border-b border-b-gray-700'}`} >Feedback</p>
                <p onClick={()=> setIsActiveTab(3) }  className={`${isActiveTab === 3 && 'border-b border-b-gray-700'}`} >About</p>
            </div>
            {
                isActiveTab === 1 && (
                    <div>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis architecto repellendus nemo, consequuntur facere non dignissimos, similique iusto est iure ab et commodi quo officiis fugit sint incidunt provident suscipit.</p>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis architecto repellendus nemo, consequuntur facere non dignissimos, similique iusto est iure ab et commodi quo officiis fugit sint incidunt provident suscipit.</p>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis architecto repellendus nemo, consequuntur facere non dignissimos, similique iusto est iure ab et commodi quo officiis fugit sint incidunt provident suscipit.</p>
                    </div>
                )
            }
             {
                isActiveTab === 2 && (
                    <div>
                        <p className='mt-2'>No Feedback</p>
                        
                    </div>
                )
            }
             {
                isActiveTab === 3 && (
                    <div>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis architecto repellendus nemo, consequuntur facere non dignissimos, similique iusto est iure ab et commodi quo officiis fugit sint incidunt provident suscipit.</p>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis architecto repellendus nemo, consequuntur facere non dignissimos, similique iusto est iure ab et commodi quo officiis fugit sint incidunt provident suscipit.</p>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis architecto repellendus nemo, consequuntur facere non dignissimos, similique iusto est iure ab et commodi quo officiis fugit sint incidunt provident suscipit.</p>
                    </div>
                )
            }

        </div>

</section>

        
        
<Brands />
      <FooterSubscribe />
      <Footer />
        </div>
  )
}

export default page