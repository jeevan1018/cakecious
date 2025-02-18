import React from 'react'
import '../Components/Body/Body.scss'
import Header from '../Components/Header/Navbar'
import Heading from '../Components/Body/Heading'
import Content from '../Components/Body/Content'
import ImageSlider from '../Components/Body/ImageSlide'
import Information from '../Components/Body/Information'
import Cakes from '../Components/Body/Cakes'
import Video from '../Components/Body/Video'
import Service from '../Components/Body/Service'
import ReviewComponent from '../Components/Body/Reviews'
import Blog from '../Components/Body/Blog'

const Index = () => {
  return (
    <div>
      <Header/>
      <Heading/>
      <ImageSlider/>
      <Information/>
      <Content/>
      <Cakes/>
      <Video/>
      <Service/>
      <div className='review-container'>
      <ReviewComponent/>
      </div>
      <Blog/>
    </div>
  )
}

export default Index
