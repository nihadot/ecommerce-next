'use client'
import React, { useEffect, useState } from 'react'
import { productData } from '../static/data'
import ProductCard from '../ProductCard/ProductCard'

type Props = {}

const BestDeals = (props: Props) => {

    const [data,setData] = useState([])


    useEffect(()=>{
        const result = productData && productData.length > 0 && productData.sort((a,b)=> b.total_sell - a.total_sell )
        const firstFive = result.slice(0,5);
        setData(firstFive);
    },[])
  return (
    <div className='mx-20 py-10 '>
        <div className="">
            <h1 className='capitalize text-[24px] font-medium text-gray-800'>Best Deals</h1>
        </div>
        <div className="grid grid-cols-5 gap-5">
            {
                data && data.map((item,index) => <ProductCard item={item} key={index}  /> )
            }
        </div>
    </div>
  )
}

export default BestDeals