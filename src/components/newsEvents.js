import React from 'react'
import { Row, Col, Button } from 'antd'
import "antd/dist/antd.css"

// importing images
import news from '../assets/images/home/description/Seccion2-img1.png'

const News = () => {
  return (
    <div className='newSection'>
      <Col xs={24} sm={24} md={14} lg={14} xl={14}>
        <h3 className='txt-center txtBlue bold subtitle-Events'> Noticias </h3>
        <Col xs={10} sm={10} md={{span: 6, offset: 4}} lg={{span: 6, offset: 4}} xl={{span: 6, offset: 4}}>
          <p className='txtBlue bold'> Publicado: </p>
          <p className='txtGreen'> 20 DE AGOSTO DEL 2018 </p>
        </Col>
        <Col xs={14} sm={14} md={12} lg={12} xl={12} className='newsImg'>
          <img src={news} className='img--responsive' alt='noticia' />
        </Col>
      </Col>
    </div>
  )
}

const Events = () => {
  return  (
    <div className='eventSection'>
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <h3 className='txtBlue bold subtitle-Events'> Eventos </h3>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <p className='txtBlue bold'> Comienzan a unirse nuevos socios al proyecto. </p>
          <p> La compañía de paneles solare Solar se une al proyexto Jati y con esto espera ayudar a la comunidad amazónica.</p>
          <Button type='primary' className='mainBlueBg'>Seguir Leyendo</Button>
        </Col>
      </Col>
    </div>
  )
}

const NewsEvents = () => {
  return (
    <div className='NewsEventsSection'>
      <h1 className='section-title txtBlue'> Ultimas Noticias y Eventos </h1>
      <Row>
        <News />
          <Events />
      </Row>
      <Row className='divBtnCenter'>
        <Button type='primary' className='mainBlueBg centerDiv' size='large'>Ver más noticias</Button>
      </Row>
    </div>
  )
}

export default NewsEvents
