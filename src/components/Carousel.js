import React from 'react'
import { Carousel } from 'antd'
import "antd/dist/antd.css"

// importing pics for Carousel
import slider1 from '../assets/images/home/carousel/Slider-1.png'
import slider2 from '../assets/images/home/carousel/carousel-group2.jpg'
import slider3 from '../assets/images/home/carousel/carousel-group3.jpg'
import slider4 from '../assets/images/home/carousel/carousel-4.jpg'

const HomeCarousel = () => {
  return (
    <Carousel
      effect="fade"
      infinite = 'true'
      slidesToShow = '1'
      slidesToScroll= '1'
      className = 'sliderSection'
      >
      <div>
        <img src={slider1} className='carousel-img' alt='sliderImg' />
      </div>
      <div>
        <img src={slider2} className='carousel-img' alt='sliderImg2' />
      </div>
      <div>
        <img src={slider3} className='carousel-img' alt='sliderImg3' />
      </div>
      <div>
        <img src={slider4} className='carousel-img' alt='sliderImg' />
      </div>
  </Carousel>
  )
}

export default HomeCarousel
