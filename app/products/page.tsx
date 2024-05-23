'use client'

import Brands from '@/components/Brands/Brands'
import Footer from '@/components/Footer/Footer'
import FooterSubscribe from '@/components/FooterSubscribe/FooterSubscribe'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import ProductCard from '@/components/ProductCard/ProductCard'
import { productData } from '@/components/static/data'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const Products = () => {

    const searchParams = useSearchParams()
    const [data, setData] = useState([])

    const search = searchParams.get('category')

    useEffect(() => {

        if(search){
            const result = productData.filter((item) => item.category === search)
            setData(result)
        }else{
            const result = productData.sort((item) => item.total_sell - item.total_sell)
            setData(result)

        }
    }, [search])

    return (
        <>
            <Header active={2} />
            
            <div className='mx-20'>

                <div className="">
                    <h1 className='capitalize text-[24px] font-medium text-gray-800'>Best Deals</h1>
                </div>
                <div className="grid grid-cols-5 gap-5">
                    {
                        data && data.map((item, index) => <ProductCard item={item} key={index} />)
                    }
                </div>


            </div>
            <Brands />
            <FooterSubscribe />
            <Footer />
        </>
    )
}

export default Products