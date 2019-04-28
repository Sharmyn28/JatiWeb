import React from 'react'
import { Row, Col, Button} from 'antd';
import "antd/dist/antd.css"

const SolarDecathlon = () => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          Aqui va una imagen
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <h2> ¿Qué es el Solar Decathlon? </h2>
          <p> El solar Decathlon es una competencia internacional en la que universidades de todo el mundo se reúnen para diseñar, construir y operar casas solares sostenibles. </p>
          <p> Organizada por el Departamento de Energía de Estados Unidos desde 2002. Impulsando la investigación en el desarrollo y construcción renovable como única fuente de energía. </p>
          <Button type='primary' className='mainBlueBg'>Seguir Leyendo</Button>
        </Col>
      </Row>
    </div>
  )
}

const Jati = () => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <h2> ¿Qué es Játi? </h2>
          <p> Játi significa vivir en comunidad, y proviene de la lengua shipiba. Único equipo finalista del Perú, esta conformado por estudiantes, egresados de la Universidad Nacional de Ingeniería (UNI), quienes vienen trabajando desde abril del 2017, apoyados por renonbrados expertos en la materia, cuya experiencia, solvencia técnica y calidad como profesionales les permite co-idear y sacar adelante este proyecto. </p>
          <Button type='primary' className='mainBlueBg'>Seguir Leyendo</Button>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          Aquí va una imagen
        </Col>
      </Row>
    </div>
  )
}

const JatiDescription = () => {
  return (
    <>
      <SolarDecathlon />
      <Jati />
    </>
  )
}

export default JatiDescription
