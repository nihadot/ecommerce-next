'use client'
import React, { useState } from 'react'
import { HiOutlineArrowSmRight } from "react-icons/hi";

type Props = {}

const FaqComponent = (props: Props) => {

    const [activeNumber, setActiveNumber] = useState(0)
    return (
        <div className='my-20 flex flex-col gap-2'>
            <div className="border-b py-3">
                <div onClick={() => setActiveNumber((previous) => {
                    if (previous === 1) {
                        return 0
                    } else {
                        return 1
                    }
                })} className="flex justify-between items-center">
                    <p className='text-gray-700 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore, delectus sunt!</p>
                    <HiOutlineArrowSmRight />
                </div>
                {activeNumber === 1 && <span className='py-2 text-gray-700 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam deserunt labore blanditiis doloremque facere similique voluptatem, eaque suscipit rerum distinctio nisi, perspiciatis vero magni animi. Consequatur pariatur ratione vero?</span>}
            </div>
            <div className="border-b py-3">
                <div onClick={() => setActiveNumber((previous) => {
                    if (previous === 2) {
                        return 0
                    } else {
                        return 2
                    }
                })} className="flex justify-between items-center">
                    <p className='text-gray-700 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore, delectus sunt!</p>
                    <HiOutlineArrowSmRight />
                </div>
                {activeNumber === 2 && <span className='py-2 text-gray-700 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam deserunt labore blanditiis doloremque facere similique voluptatem, eaque suscipit rerum distinctio nisi, perspiciatis vero magni animi. Consequatur pariatur ratione vero?</span>}
            </div>
            <div className="border-b py-3">
                <div onClick={() => setActiveNumber((previous) => {
                    if (previous === 3) {
                        return 0
                    } else {
                        return 3
                    }
                })} className="flex justify-between items-center">
                    <p className='text-gray-700 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore, delectus sunt!</p>
                    <HiOutlineArrowSmRight />
                </div>
                {activeNumber === 3 && <span className='py-2 text-gray-700 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam deserunt labore blanditiis doloremque facere similique voluptatem, eaque suscipit rerum distinctio nisi, perspiciatis vero magni animi. Consequatur pariatur ratione vero?</span>}
            </div>
            <div className="border-b py-3">
                <div onClick={() => setActiveNumber((previous) => {
                    if (previous === 4) {
                        return 0
                    } else {
                        return 4
                    }
                })} className="flex justify-between items-center">
                    <p className='text-gray-700 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore, delectus sunt!</p>
                    <HiOutlineArrowSmRight />
                </div>
                {activeNumber === 4 && <span className='py-2 text-gray-700 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam deserunt labore blanditiis doloremque facere similique voluptatem, eaque suscipit rerum distinctio nisi, perspiciatis vero magni animi. Consequatur pariatur ratione vero?</span>}
            </div>
            <div className="border-b py-3">
                <div onClick={() => setActiveNumber((previous) => {
                    if (previous === 5) {
                        return 0
                    } else {
                        return 5
                    }
                })} className="flex justify-between items-center">
                    <p className='text-gray-700 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore, delectus sunt!</p>
                    <HiOutlineArrowSmRight />
                </div>
                {activeNumber === 5 && <span className='py-2 text-gray-700 text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam deserunt labore blanditiis doloremque facere similique voluptatem, eaque suscipit rerum distinctio nisi, perspiciatis vero magni animi. Consequatur pariatur ratione vero?</span>}
            </div>
        </div>
    )
}

export default FaqComponent