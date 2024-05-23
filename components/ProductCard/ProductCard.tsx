'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { GoStarFill } from "react-icons/go";
import { RiStarHalfFill } from 'react-icons/ri';
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import PoppupProduct from '../PoppupProduct/PoppupProduct';
import { useRouter } from 'next/navigation'
type Props = {
    item: object;
}

const ProductCard = ({ item }: Props) => {

    const [poppupProductView,setPoppupProductView] = useState<{status:boolean;item:object}>({item:{},status:false});

    const router = useRouter()
    const productName = item.name?.replace(/\s+/g, '-')

    return (
        <div className='bg-white border shadow-md flex flex-col justify-start items-stretch rounded-md h-[310px] my-3 py-3'>
            <div className='group overflow-hidden block relative w-[90%] m-auto rounded-md h-[150px] object-contain'>
                <Image
                onClick={() => router.push(`/product/${productName}`)}
                    className='cursor-pointer w-full h-full object-contain'
                    src={item.image_Url[0].url}
                    width={200}

                    quality={100}
                    height={200}
                    alt={item.title}
                />
                <div className=" absolute justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out grop flex flex-col right-3 top-3">
                    {  <CiHeart size={25} />}
                    {  <CiShoppingCart size={25} />}
                    <FaEye onClick={()=>setPoppupProductView({item:item,status:true})}  size={18} />
                </div>
            </div>
            <div className="px-5 flex-col flex justify-start items-start">
                <span className='text-blue-800 text-[14px] mt-2'>{item?.shop?.name}</span>
                <p className='text-[14px] font-normal mt-2 text-gray-900 line-clamp-2'>{item?.name}</p>

                <div className="flex gap-2 my-2">
                    <GoStarFill size={18} color='#e8900c'/>
                    <GoStarFill size={18} color='#e8900c'/>
                    <GoStarFill size={18} color='#e8900c'/>
                    <GoStarFill size={18} color='#e8900c'/>
                    <RiStarHalfFill size={18} color='#e8900c'/>
                </div>

                <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                    <p className='text-[16px] font-semibold text-gray-700' >{item.price || 0}$</p>
                    <p className='text-[12px] text-red-600 line-through' >{item.discount_price}</p>
                    </div>
                    <p className='text-[14px] text-green-600 font-semibold' >{item.total_sell} sold</p>
                </div>
            </div>

            {
                poppupProductView.status && <PoppupProduct item={poppupProductView.item} setPoppupProductView={setPoppupProductView} />
            }
        </div>
    )
}

export default ProductCard