'use client'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { FaEyeSlash, FaEye } from "react-icons/fa";

type Props = {}

type FormData = {
    email: string;
    passowrd: string;
    name: string;
}

type IsVisibleForPassword = "password" | "text"

const Signup = (props: Props) => {

    const [image, setImage] = React.useState<string>('');
    const [formData, setFormData] = React.useState<FormData>();
    const [isVisible, setIsVisible] = React.useState<IsVisibleForPassword>();
    // const [image, setImage] = React.useState<string>('');

    const imageHandleRef = React.useRef<HTMLInputElement | null>(null);

    const onchangeImageUpload = () => {
        if (imageHandleRef.current) {
            imageHandleRef.current.click();
        }
    };

    const onchangeHandleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setImage(e.target.files[0])
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setFormData({ [e.target.name]: e.target.value })
        }
    }

    const handleIsVisible = () => {
        setIsVisible("text")
    }
    const handleIsHidden = () => {
        setIsVisible("password")
    }


    return (
        <div className='w-full bg-slate-50 min-h-screen flex justify-start items-center flex-col'>
            <div className=" h-[200px] w-full flex justify-center items-end">
                <h1 className='text-3xl font-bold'>Register as a new user</h1>
            </div>
            <div className="w-[450px] px-[40px] shadow-lg flex-col mt-5 flex justify-start py-5 items-center border border-white rounded-sm">
                <div className="flex flex-col w-full ">
                    <label htmlFor="name" className='text-gray-900 text-sm mb-1 capitalize'>Full Name</label>
                    <input type="text" name='name' onChange={handleChange} className='border w-full border-gray-300 outline-none rounded-md py-1.5 px-3 focus:ring-blue-600' />
                </div>
                <div className="flex flex-col mt-3 w-full">
                    <label htmlFor="email" className='text-gray-900 text-sm mb-1 capitalize'>Email address</label>
                    <input type="email" name='email' onChange={handleChange} className='border w-full border-gray-300 outline-none rounded-md py-1.5 px-3 focus:ring-blue-600' />
                </div>
                <div className="flex flex-col mt-3 l w-full">
                    <label htmlFor="password" className='text-gray-900 text-sm mb-1 capitalize'>password</label>
                    <div className="relative w-full">
                        {isVisible === "password" ? <FaEyeSlash onClick={handleIsVisible} size={20} className='absolute right-3 top-2' /> : <FaEye onClick={handleIsHidden} size={20} className='absolute right-3 top-2' />}
                        <input type={isVisible} name='password' onChange={handleChange} className='border border-gray-300 outline-none w-full rounded-md py-1.5 px-3 focus:ring-blue-600' />
                    </div>
                </div>

                <div className="flex gap-3 my-3 justify-start items-center w-full">
                    {/* <label htmlFor="password" className='text-gray-900 text-sm mb-1 capitalize'>password</label> */}
                    {/* <GoUpload className='w-[80px] border' onClick={onchangeImageUpload}/> */}
                    <div className="flex justify-center items-center">
                        {image ? (
                            <div className="bg-green-500 rounded-full w-[40px] h-[40px]">
                                <Image
                                    src={image && URL.createObjectURL(image)}
                                    alt='avatar'
                                    width={40}
                                    height={40}
                                    loading="lazy"
                                    className='rounded-full w-full h-full object-cover'
                                />
                            </div>
                        ) : <RxAvatar size={30} />}
                    </div>
                    <div onClick={onchangeImageUpload} className="px-7 w-fit py-2 border rounded-md bg-white text-sm">
                        Upload
                    </div>
                    <input onChange={onchangeHandleImageUpload} type="file" className='hidden' ref={imageHandleRef} />
                </div>

                <div className="flex w-full  items-center mt-3 justify-between">
                    <button className='w-full h-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2.5 text-sm' >Submit</button>
                </div>

                <div className="my-3">
                    <p className='text-gray-700 text-sm text-start'>Already have any account ? <Link href={'login'} className='capitalize text-blue-700'>Log In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup