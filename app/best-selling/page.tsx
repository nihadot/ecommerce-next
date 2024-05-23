'use client'
import Brands from '@/components/Brands/Brands'
import Footer from '@/components/Footer/Footer'
import FooterSubscribe from '@/components/FooterSubscribe/FooterSubscribe'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import ProductCard from '@/components/ProductCard/ProductCard'
import { productData } from '@/components/static/data'
import React, { useEffect, useState } from 'react'

type Props = {}

const BestSelling = (props: Props) => {

    const [data, setData] = useState([])

    useEffect(() => {


        const result = productData.sort((a, b) => b.total_sell - a.total_sell)
        setData(result)

    }, [])

    return (
        <div>
            <Header active={1} />


            <div className='mx-20 my-10'>
                <div className="grid grid-cols-5 gap-5">
                    {
                        data && data.map((item, index) => <ProductCard item={item} key={index} />)
                    }
                </div>


            </div>


            <Brands />
            <FooterSubscribe />
            <Footer />
        </div>
    )
}

export default BestSelling