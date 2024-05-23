'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React, { useState } from 'react'
import { navItems, productData } from '../static/data'
import Link from 'next/link'
import { IoIosArrowDown, IoIosArrowUp, IoIosMenu } from "react-icons/io";
import { FaHeart, FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import DropDown from '../DropDown/DropDown'
import Cart from '../Cart/Cart'
import WhishList from "../WhishList/WhishList"

type Props = {
    active:number;
}

const Header = ({active}: Props) => {

    const router = useRouter()

    const [searchQuery, setSearchQuery] = React.useState<string>('')
    const [searchedItems, setSearchedItems] = React.useState<string[]>([])
    const [activeHeader, setActiveHeader] = React.useState<boolean>(false)
    const [isVisibleCategories, setIsVisibleCategories] = React.useState<boolean>(false)


        window.addEventListener("scroll", () => {
            if (window.scrollY > 70) {
                setActiveHeader(true)
            } else {
                setActiveHeader(false)
            }
        })
    
    
    
    
    
    
    
    

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            const serachItem = e.target.value.toLocaleLowerCase()
            if (productData && productData.length > 0) {
                const result = productData.filter((item) => item.name.toLocaleLowerCase().includes(serachItem))
                setSearchedItems(result)
            }
        }

        if (e.target.value === "") {
            setSearchedItems([])

        }
    }

    const [cartState,setCartState] = useState(false);
    const [whishListState,setCartWhishListState] = useState(false);


    return (
        <header >

            <div className='px-10 bg-slate-50 h-[85px] flex justify-between items-center'>
                <div className="">
                    <h1 className='font-semibold text-[36px] text-black'>Logo</h1>
                </div>
                <div className="relative">
                    <input type="search" onChange={handleSearch} className='w-[460px] outline-none border border-gray-200 rounded-md px-3 py-2' placeholder='Search...' />

                    <div className="absolute top-12 overflow-auto left-1 bg-white shadow-md rounded-sm w-full h-fit max-h-[300px]">
                        {searchedItems && searchedItems.length > 0 &&
                            productData.map((item, index) => {
                                const productName = item.name.toLocaleLowerCase().replace(/\s+/g, '-')
                                return (
                                    <Link href={`/`} className="flex justify-start items-center gap-3 py-2 px-3" key={index}>
                                        <div className=' overflow-hidden block relative w-[70px] rounded-full h-full object-cover'>
                                            <Image
                                                className='w-full h-full'
                                                src={item.image_Url[0].url}
                                                width={100}
                                                quality={100}
                                                height={100}
                                                alt={item.name}
                                            />
                                        </div>
                                        <p className='text-gray-800'>{item.name}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="">
                    <button className='bg-blue-950 text-white px-3 py-3 text-lg rounded-md' >Become Seller</button>
                </div>
            </div>

            <div className={`px-10 ${activeHeader ? 'fixed top-0 z-50' : 'relative'} w-full bg-blue-900 h-[80px] flex justify-between items-center text-white`}>
                <div className="bg-white flex justify-between items-center  px-3 py-3 text-black rounded-md">
                    <div className="flex items-center gap-2 justify-center">
                        <IoIosMenu size={29} />
                        <span className='capitalize  block text-[18px]'>all categories</span>
                    </div>
                    { isVisibleCategories ? <IoIosArrowDown onClick={()=> setIsVisibleCategories(false) } size={20} className='ms-2 cursor-pointer'  /> : <IoIosArrowUp onClick={()=> setIsVisibleCategories(true) } size={20} className='ms-2 cursor-pointer' />}
                </div>


                {/*  */}
                { isVisibleCategories &&  <DropDown/>}
                {/*  */}
                <div className="flex gap-4 ">
                    {
                        navItems && navItems.length > 0 &&
                        navItems.map((item, index) => {
                            return (
                                <Link href={item.url} className={`${active === (index) && 'text-green-500'}`} key={index}>
                                    {item.title}
                                </Link>
                            )
                        })
                    }
                </div>


                <div className="flex gap-5 justify-center items-center">
                    <div className="">
                        <p onClick={()=> setCartWhishListState(!whishListState) }   className='relative'>
                            <span className='absolute -top-2 left-3 bg-green-400 rounded-full w-5 h-5 flex justify-center items-center'>0</span>
                            <FaHeart size={26} />
                        </p>
                    </div>
                    <div className="">
                        <p  onClick={()=> setCartState(!cartState) } className='relative'>
                            <span className='absolute -top-2 left-3 bg-green-400 rounded-full w-5 h-5 flex justify-center items-center'>0</span>
                            <FaShoppingCart size={26} />
                        </p>
                    </div>
                    <div className="">
                        <Link href={'/profile'} className='relative'>
                            <FaRegUserCircle   size={26} />
                        </Link>
                    </div>
                </div>
            </div>


            {/* cart */}
            { cartState && <Cart setCartState={setCartState} cartState={cartState}  />}
            {/* cart */}


            {/* whishlist */}
            { whishListState && <WhishList setCartWhishListState={setCartWhishListState} whishListState={whishListState}  />}
            {/* whishlist */}

        </header>
    )
}

export default Header