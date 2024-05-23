import BestDeals from '@/components/BestDeals/BestDeals'
import BrandingData from '@/components/BrandingData/BrandingData'
import Brands from '@/components/Brands/Brands'
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts'
import Footer from '@/components/Footer/Footer'
import FooterSubscribe from '@/components/FooterSubscribe/FooterSubscribe'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import OfferCard from '@/components/OfferCard/OfferCard'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='h-[1500px]'>
      <Header active={0} />
      <Hero />
      <BrandingData />
      <BestDeals />
      <div className="mx-20">
        <div className="">
          <h1 className='capitalize text-[24px] font-medium text-gray-800'>Best Deals</h1>
        </div>
        <OfferCard />
      </div>
      <FeaturedProducts />
      <Brands />
      <FooterSubscribe />
      <Footer />
    </div>
  )
}

export default Home