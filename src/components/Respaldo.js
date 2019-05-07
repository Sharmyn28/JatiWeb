import React from 'react'
import { Carousel, Row, Col } from 'antd'
import "antd/dist/antd.css"

//importing images
import respaldo1 from '../assets/images/home/respaldo/respaldo1.jpg'
import respaldo2 from '../assets/images/home/respaldo/respaldo2.jpg'

const RespaldoSlider = () => {
  return (
    <Carousel
      effect="fade"
      infinite = 'true'
      slidesToShow = '1'
      slidesToScroll= '1'
      arrows='true'
      >
      <div>
        <Row>
          <Col xs={12} sm={12} md={{span: 10, offset:2}} lg={{span: 10, offset:2}} xl={{span: 10, offset:2}} >
            <img src={respaldo2} className='img--responsive' alt='respaldo' />
          </Col>
          <Col xs={12} sm={12} md={{span: 8, offset:1}} lg={{span: 8, offset:1}} xl={{span: 8, offset:1}}>
            <div>
              <p className='txtBlue bold'> MIGUEL SALVATIERRA </p>
              <small className='txtGreen bold'> CEO DE SOLA INDUSTRY </small>
            </div>
            <div>
              <p className='txtGrey'> Decidimos apoyar al Proyecto Jati porque no solo tiene un modelo de vivienda sostenible que es de mucha utilidad para los pobladores de las zonas de la amazonía peruana sino también que quieren realizar un gran cambio en nuestra sociedad de hoy en día. </p>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        Carrousel 2
      </div>
      <div>
        Carrousel 2
      </div>
    </Carousel>
  )
}
// TODO: arreglar los arrows
const Respaldo = () => {
  return (
    <div className='respaldoSection'>
      <h2 className='section-title txtBlue'> Nuestro respaldo </h2>
      <p className='txtGrey txt-center'> Quienes ya forman parte del proyecto </p>
      <div className='respaldoSlider'>
        <RespaldoSlider />
      </div>
    </div>
  )
}

export default Respaldo
