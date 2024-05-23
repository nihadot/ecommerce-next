import Image from 'next/image'
import React from 'react'
import { IoMdClose } from "react-icons/io"
import { AiOutlineMessage } from "react-icons/ai";
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
type Props = {
    item: object;
    setPoppupProductView: (e: {status:boolean;item:object}) => void
}


const PoppupProduct = ({ item, setPoppupProductView }: Props) => {
    return (
        <div className='w-full z-30 h-screen justify-center flex items-center bg-black/35 fixed top-0 left-0'>
            <div className="w-[700px] relative h-[70vh] max-h-[70vh] overflow-x-auto bg-white rounded-md">
                <IoMdClose className='absolute top-2 right-3 ' onClick={()=> setPoppupProductView({item:"",status:false}) } size={30} />
                <div className="mt-10">
                    <div className="flex">
                        <div className="flex-[45%] overflow-hidden ">
                            <div className='group block relative w-[90%] m-auto rounded-md h-[260px]'>
                                <Image
                                    className=' w-full h-full object-contain'
                                    src={item.image_Url[0].url}
                                    width={200}

                                    quality={100}
                                    height={200}
                                    alt={item.name}
                                />
                            </div>
                            <div className="px-3 py-3 flex flex-col justify-start items-start">
                                <div className="flex gap-3 justify-start items-start ">
                                    <Image
                                        className=' w-[50px] rounded-full overflow-hidden h-[47px] object-cover'
                                        src={item?.shop?.shop_avatar?.url}
                                        width={100}
                                        quality={100}
                                        height={100}
                                        alt={item?.shop?.name}
                                    />
                                    <div className="flex flex-col ">
                                        <p className='text-blue-800 text-[16px]'>{item?.shop?.name}</p>
                                        <p className='text-gray-800 text-[16px]'>{`(${item?.shop?.ratings})`} Ratings</p>
                                    </div>
                                </div>
                                <button className='my-3 flex gap-2 justify-center items-center py-2 px-4 text-[14px] bg-blue-950 capitalize text-white rounded-md'>sent message <AiOutlineMessage size={20} /></button>

                                <p className=' my-3 text-[15px] text-red-600'>{`(${item?.total_sell}) Sold out`}</p>
                            </div>

                        </div>
                        <div className="flex-[55%]">
                            <p className='text-[25px] font-medium mb-1'>{item.name}</p>
                            <p>{item.description}</p>

                            <h1 className='text-[16] font-semibold my-3'>{item?.price || 0}$</h1>

                            <div className="flex justify-between">
                                <div className="flex items-center justify-center w-[100px] h-[35px] ">
                                    <div className="w-1/3 bg-green-600 h-full rounded-l text-white flex justify-center items-center">-</div>
                                    <div className="w-1/3 bg-slate-50 h-full flex justify-center items-center text-black font-semibold">0</div>
                                    <div className="w-1/3 bg-green-600 h-full rounded-r text-white flex justify-center items-center">+</div>
                                </div>
                                {<CiHeart size={25} className='me-4' />}
                            </div>

                            <button className='my-4 flex gap-2 justify-center items-center py-2 px-3 text-[14px] bg-blue-950 text-white rounded-md'>Add to Cart <CiShoppingCart size={18} /></button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoppupProduct