import React from 'react'
import { Row, Col} from 'antd';
import "antd/dist/antd.css"

// importing images
import teamIcon from '../assets/images/home/whyJatiIcons/Jati-equipo-Logo.png'
import peruvianFlagIcon from '../assets/images/home/whyJatiIcons/Jati-bandera-Logo.png'
import buildingIcon from '../assets/images/home/whyJatiIcons/Jati-casa-Logo.png'

const ReasonsJati = () => {
  return (
    <div className='mtop80'>
      <Row>
        <Col xs={{ span: 18, offset: 3 }} sm= {{span: 18, offset: 3}} md={{span: 5, offset: 2}} lg={{span: 4, offset: 4}}  className='col-itemBox'>
          <img className='img--responsive'  src={teamIcon} alt='teamIcon' />
          <p className='col-itemBox-txt'> UN EQUIPO MULTI DISCIPLINARIO </p>
        </Col>
        <Col  xs={{ span: 18, offset: 3 }} sm= {{span: 18, offset: 3}} md={{span: 5, offset: 2}} lg={{span: 4, offset: 2}} className='col-itemBox'>
          <img className='img--responsive' src={peruvianFlagIcon} alt='flagIcon' />
          <p className='col-itemBox-txt'> UNICO EQUIPO PERUANO ENTRE LOS FINALISTAS </p>
        </Col>
        <Col  xs={{ span: 18, offset: 3 }} sm= {{span: 18, offset: 3}} md={{span: 5, offset: 2}} lg={{span: 4, offset: 2}} className='col-itemBox'>
          <img className='img--responsive' src={buildingIcon} alt='houseIcon' />
          <p className='col-itemBox-txt'> CONSTRUYENDO PARA LAS FAMILIAS PERUANAS </p>
        </Col>
      </Row>
    </div>
  )
}

// xs={24} sm={24} md={8} lg={8} xl={8}
// type="flex" justify="space-around"  span={4}
const WhyJati = () => {
  return (
    <div className='whyJatiSection'>
      <Row>
        <h1 className='titles-description txtWhite txt-center'> ¿Por qué apoyar a Játi? </h1>
      </Row>
      <Row>
        <p className='txtWhite txt-center subtitle-p'> Segunda vez consecutiva que el equipo de la <strong>UNI</strong> queda como uno de los finalistas del concurso <strong>Solar Decathlon</strong>. </p>
      </Row>
      <ReasonsJati />
    </div>
  )
}

export default WhyJati
