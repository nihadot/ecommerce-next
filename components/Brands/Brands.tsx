import Image from 'next/image'
import React from 'react'
import { brandingData } from '../static/data'

type Props = {}

const Brands = (props: Props) => {

    const brandComapnies = [
        {
            url: 'https://as1.ftcdn.net/v2/jpg/03/99/98/60/1000_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg'
        },
        {
            url: 'https://t3.ftcdn.net/jpg/04/24/71/16/240_F_424711670_LQv3ab8KONaKLBUFb0Z5TbHcMza0zKrB.jpg'
        },
        {
            url: 'https://as1.ftcdn.net/v2/jpg/03/99/98/60/1000_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg'
        },
        {
            url: 'https://as1.ftcdn.net/v2/jpg/03/99/98/60/1000_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg'
        },
        {
            url: 'https://as1.ftcdn.net/v2/jpg/03/99/98/60/1000_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg'
        },
    ]

    return (
        <div
            className='mx-20 my-10 py-2 border justify-between flex  shadow-md rounded-md'
        >
            {
                brandComapnies && brandComapnies.length > 0 && brandComapnies.map((item,index) => {
                    return (

                        <Image
                        src={item.url}
                        alt='alt'
                        key={index}
                        width={150}
                        height={100}
                        className=' w-1/5 h-[100px] object-contain'
                        />
                    )
                })
            }
        </div>
    )
}

export default Brands