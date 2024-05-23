import Brands from '@/components/Brands/Brands'
import Footer from '@/components/Footer/Footer'
import FooterSubscribe from '@/components/FooterSubscribe/FooterSubscribe'
import Header from '@/components/Header/Header'
import Profile from '@/components/Profile/Profile'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Header />
      <div className="mx-20">
        <Profile/>
      </div>
      <FooterSubscribe />
      <Footer />  
    </div>
  )
}

export default Home