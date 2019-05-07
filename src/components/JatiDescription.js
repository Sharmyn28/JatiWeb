import React from 'react'
import { Row, Col, Button} from 'antd';
import "antd/dist/antd.css"

//importing images
import solar from '../assets/images/home/description/Seccion2-img1.png'
import jati from '../assets/images/home/description/Seccion2-img2.png'

const SolarDecathlon = () => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img className='img--responsive images-maxH' src={solar} alt='SolarDecathlon'/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className='pd50'>
          <h2 className='titles-description txtBlue'> ¿Qué es el Solar Decathlon? </h2>
          <div className='pdTopBtn20 txtFontSize'>
            <p> El solar Decathlon es una competencia internacional en la que universidades de todo el mundo se reúnen para diseñar, construir y operar casas solares sostenibles. </p>
            <p> Organizada por el Departamento de Energía de Estados Unidos desde 2002. Impulsando la investigación en el desarrollo y construcción renovable como única fuente de energía. </p>
          </div>
          <Button type='primary' size='large' className='mainBlueBg txtFontSize'>Seguir Leyendo</Button>
        </Col>
      </Row>
    </div>
  )
}

const Jati = () => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className='pd50'>
          <h2 className='titles-description txtBlue'> ¿Qué es Játi? </h2>
          <div className='pdTopBtn20'>
            <p className='txtFontSize'> Játi significa vivir en comunidad, y proviene de la lengua shipiba. Único equipo finalista del Perú, esta conformado por estudiantes, egresados de la Universidad Nacional de Ingeniería (UNI), quienes vienen trabajando desde abril del 2017, apoyados por renonbrados expertos en la materia, cuya experiencia, solvencia técnica y calidad como profesionales les permite co-idear y sacar adelante este proyecto. </p>
          </div>
          <Button type='primary' size='large' className='mainBlueBg txtFontSize'>Seguir Leyendo</Button>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img className='img--responsive images-maxH' src={jati} alt='JatiDescription'/>
        </Col>
      </Row>
    </div>
  )
}

const JatiDescription = () => {
  return (
    <div className='jatiDescriptionSection'>
      <SolarDecathlon />
      <Jati />
    </div >
  )
}

export default JatiDescription
