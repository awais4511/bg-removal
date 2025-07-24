import React from 'react'
import Header from '../component/Header'
import Step from '../component/Step'
import BgSlider from '../component/BgSlider'
import Testimonials from '../component/Testimonials'
import Upload from '../component/Upload'

const Home = () => {
  return (
    <div>
      <Header/>
      <Step/>
      <BgSlider/>
      <Testimonials/>
      <Upload/>
    </div>
  )
}

export default Home