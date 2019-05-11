import React from 'react'
import { Row, Col, Button, Form, Icon, Input } from 'antd'
import "antd/dist/antd.css"

// importing images
import logo from '../assets/images/home/Jati-Logo-big.png'

const { TextArea } = Input

const FormContact = () => {
  return (
    <Form  className="login-form contactForm">
      <Form.Item>
        <Row>
          <Col xs={24} sm={24} md={{span: 11}} lg={{span: 11}} xl={{span: 11}}>
            <Input type='text' placeholder="Nombre" />
          </Col>
          <Col xs={24} sm={24} md={{span: 12, offset:1}} lg={{span: 12, offset:1}} xl={{span: 12, offset:1}}>
            <Input type='text' placeholder='Apellido' />
          </Col>
        </Row>
      </Form.Item>
      <Form.Item>
        <Input type="email" placeholder="Correo electrónico" />
      </Form.Item>
      <Form.Item>
        <Input  type="number" placeholder="Celular" maxLength={9} />
      </Form.Item>
      <Form.Item>
        <TextArea placeholder="Preguntas" autosize={{ minRows: 3, maxRows: 6 }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size='large' className="login-form-button greenBg">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  )
}

const Contact = () => {
  return (
    <div className='contactSection'>
      <Row>
        <Col md={{span: 8, offset:2}} lg={{span: 8, offset:2}} xl={{span: 8, offset:2}} className='logo-contact'>
          <div className='complete-center-div'>
            <div>
              <img src={logo} className='img--responsive' alt='logo' />
            </div>
          </div>
          <Col xs={24} sm={24} md={{span:14, offset:5}} lg={{span:14, offset:5}} xl={{span:14, offset:5}} className='contact-info'>
            <small className='txtWhite'> Decidimos apoyar el Proyecto Jati porque no solo tiene un modelo de vivienda sostenible que es de mucha utilidad para los pobladores de las zonas de la amazonía peruana sino también que quieren realizar un gran cambio en nuestra sociedead de hoy en día.</small>
          </Col>
        </Col>

        <Col xs={{span: 22, offset:1}} sm={{span: 22, offset:1}} md={{span: 10, offset:1}} lg={{span: 10, offset:1}} xl={{span: 10, offset:1}}>
          <p className='txtWhite bold txt-center'>Mantente Informado de nuestras novedades:</p>
          <FormContact />
        </Col>
      </Row>
    </div>
  )
}

export default Contact
//
// <Form  className="login-form">
//   <Form.Item>
//     // {getFieldDecorator( {
//     //   rules: [{ required: true, message: 'Please input your username!' }],
//     // })(
//     //   <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" />
//     // )}
//     <input  placeholder="Nombre" />
//   </Form.Item>
//   <Form.Item>
//     // {getFieldDecorator( {
//     //   rules: [{ required: true, message: 'Please input your Password!' }],
//     // })(
//     //   <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Correo electrónico" />
//     // )}
//       <input type="password" placeholder="Correo electrónico" />
//   </Form.Item>
//   <Form.Item>
//     // {getFieldDecorator('phone', {
//     //   rules: [{ required: true, message: 'Please input your Password!' }],
//     // })(
//     //   <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Celular" />
//     // )}
//     <input  type="password" placeholder="Celular" />
//   </Form.Item>
//   <Form.Item>
//     // {getFieldDecorator('question', {
//     //   rules: [{ required: true, message: 'Please input your Password!' }],
//     // })(
//     //   <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Preguntas" />
//     // )}
//     <input  type="password" placeholder="Preguntas" />
//   </Form.Item>
//
//   <Form.Item>
//     <Button type="primary" htmlType="submit" className="login-form-button">
//       Log in
//     </Button>
//   </Form.Item>
// </Form>
