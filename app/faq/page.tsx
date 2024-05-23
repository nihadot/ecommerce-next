import Brands from '@/components/Brands/Brands'
import FaqComponent from '@/components/FaqComponent/FaqComponent'
import Footer from '@/components/Footer/Footer'
import FooterSubscribe from '@/components/FooterSubscribe/FooterSubscribe'
import Header from '@/components/Header/Header'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
            <Header active={4} />
            <div className="mx-20">

            <FaqComponent/>
            </div>
            <Brands />
            <FooterSubscribe />
            <Footer />
        
    </div>
  )
}

export default page