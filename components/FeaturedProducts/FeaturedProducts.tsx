'use client'
import React, { useEffect, useState } from 'react'
import { productData } from '../static/data'
import ProductCard from '../ProductCard/ProductCard'

type Props = {}

const FeaturedProducts = (props: Props) => {



    useEffect(()=>{
        
    },[])

  return (
    <div className='mx-20'>
        <div className="">
            <h1 className='capitalize text-[24px] font-medium text-gray-800'>Best Deals</h1>
        </div>
        <div className="grid grid-cols-5 gap-5">
            {
                productData && productData.map((item,index) => <ProductCard item={item} key={index}  /> )
            }
        </div>
    </div>
  )
}

export default FeaturedProducts