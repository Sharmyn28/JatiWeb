import React from 'react'
import { Row, Col} from 'antd';
import "antd/dist/antd.css"

const ReasonsJati = () => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <p> UN EQUIPO MULTIDISCIPLINARIO </p>
        </Col>

        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <p> UNICO EQUIPO PERUANO ENTRE LOS FINALISTAS </p>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <p> CONSTRUYENDO UN FUTURO MEJOR PARA LAS FAMILIAS PERUANAS </p>
        </Col>
      </Row>
    </div>
  )
}

const WhyJati = () => {
  return (
    <div>
      <Row>
      imagen
        <h2> ¿Por qué apoyar a Játi? </h2>
      </Row>
      <Row>
        <p> Segunda vez consecutiva que el equipo de la <strong>UNI</strong> queda como uno de los finalistas del concurso <strong>Solar Decathlon</strong>. </p>
      </Row>
      <ReasonsJati />
    </div>
  )
}

export default WhyJati
