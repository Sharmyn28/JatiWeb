import React from 'react'
import { Carousel } from 'antd'
import "antd/dist/antd.css"

// importing pics for Carousel
import slider1 from '../assets/images/home/carousel/Slider-1.png'

const HomeCarousel = () => {
  return (
    <Carousel
      effect="fade"
      infinite = 'true'
      slidesToShow = '1'
      slidesToScroll= '1'
      className = 'sliderSection'
      slidesToShow = '1'
      slidesToScroll = '1'
      >
      <div>
        <img src={slider1} className='carousel-img'/>
      </div>
      <div>
        <img src={slider1} className='carousel-img' />
      </div>
      <div>
        <img src={slider1} className='carousel-img'/>
      </div>
      <div>
        <img src={slider1} className='carousel-img'/>
      </div>
  </Carousel>
  )
}

export default HomeCarousel
