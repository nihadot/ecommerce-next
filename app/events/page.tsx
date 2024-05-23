import Brands from '@/components/Brands/Brands'
import Footer from '@/components/Footer/Footer'
import FooterSubscribe from '@/components/FooterSubscribe/FooterSubscribe'
import Header from '@/components/Header/Header'
import OfferCard from '@/components/OfferCard/OfferCard'
import React from 'react'

type Props = {}

const Events = (props: Props) => {
  return (
    <>
       <Header active={3} />
            
            <div className='mx-20'>

            <OfferCard/>
            <OfferCard/>
            <OfferCard/>


            </div>
            <Brands />
            <FooterSubscribe />
            <Footer  />   
    </>
  )
}

export default Events