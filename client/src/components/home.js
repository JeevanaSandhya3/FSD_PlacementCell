import React from 'react'
import WhyRecruitUS from './WhyRecruitUS'
import OverView_New from './Overview'
import Past from './Past'
import ContactUs from './ContactUs'
import Statistics from './Statistics'
import Footer from './footer'
import Navbar from './navbar'

function Home() {
  return (
    <div>
        <Navbar />
        <OverView_New/>
        <WhyRecruitUS/>
        <Past/>
        <Statistics/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home