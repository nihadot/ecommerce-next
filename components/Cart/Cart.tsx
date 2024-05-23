import React from 'react'
import { MdClose } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5"
import Image from 'next/image';
import { productData } from '../static/data';

type Props = {
    setCartState:string;
cartState:string;
}



const Cart = ({cartState,setCartState}: Props) => {



    return (
        <div className='w-[350px] px-2 h-screen bg-white fixed z-50 top-0 right-0'>
            <div className="flex mt-4 justify-end items-end">
                <MdClose onClick={()=>setCartState(!cartState)} size={30} />
            </div>
            <div className="flex mb-3 gap-3 justify-start items-start mt-5">
                <IoBagHandleOutline size={28} />  <span className='font-semibold'>3 Items</span>
            </div>
            <div className="">
                <div className="h-[150px] mb-2 justify-center items-center bg-white border flex rounded-md shadow-md">
                    <div className="flex flex-col justify-center items-center gap-1 w-[60px]">
                        <span className='flex rounded-full justify-center items-center w-6 h-6 bg-red-600 text-white'>+</span>
                        <span className='flex font-normal justify-center items-center'>0</span>
                        <span className='flex rounded-full w-6 h-6 bg-gray-300 justify-center items-center text-black'>-</span>
                    </div>
                    <div className="h-full w-[75px]">
                        {/* <Image
                    src={}
                    /> */}
                    </div>
                    <div className="w-full">
                        <h3 className='text-[14px] text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, recusandae.</h3>
                        <p className='text-gray-600'>$000 + 1</p>
                        <h2 className='text-[18px] text-red-600 font-medium'>US$999</h2>

                    </div>
                </div>
                
                <div className="h-[150px] justify-center items-center bg-white border flex rounded-md shadow-md">
                <div className="flex flex-col justify-center items-center gap-1 w-[60px]">
                    <span className='flex rounded-full justify-center items-center w-6 h-6 bg-red-600 text-white'>+</span>
                    <span className='flex font-normal justify-center items-center'>0</span>
                    <span className='flex rounded-full w-6 h-6 bg-gray-300 justify-center items-center text-black'>-</span>
                </div>
                <div className="shadow-md border h-full w-[60px]">
                    {/* <Image
                    src={}
                    /> */}
                </div>
                <div className="w-full">
                    <h3 className='text-[14px] text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, recusandae.</h3>
                    <p className='text-gray-600'>$000 + 1</p>
                    <h2 className='text-[18px] text-red-600 font-medium'>US$999</h2>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cart