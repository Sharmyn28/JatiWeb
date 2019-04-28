import React from 'react'
import { Row, Col, Button } from 'antd'
import "antd/dist/antd.css"

const News = () => {
  return (
    <div>
      <Col>
        <h3> Noticias </h3>
        <Col>
          <p> Publicado: </p>
          <p> Fecha </p>
        </Col>
        <Col>
          imagen
        </Col>
      </Col>
    </div>
  )
}

const Events = () => {
  return  (
    <div>
      <Col>
        <h3> Eventos </h3>
        <div>
          <p> Titulos </p>
          <p> sadasdfadsfdads </p>
          <Button type='primary' className='mainBlueBg'>Seguir Leyendo</Button>
        </div>
      </Col>
    </div>
  )
}

const NewsEvents = () => {
  return (
    <div>
      <h2> Noticias y Eventos </h2>
      <Row>
        <News />
          <Events />
      </Row>
      <Button type='primary' className='mainBlueBg'>Ver más noticias</Button>
    </div>
  )
}

export default NewsEvents
