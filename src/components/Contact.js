import React from 'react'
import { Row, Col, Button, Form, Icon, Input } from 'antd'
import "antd/dist/antd.css"


const Contact = () => {
  return (
    <div>
      <Row>
        <Col>
          imagen
          <p> Decidimos apoyar el Proyecto Jati porque no solo tiene un modelo de vivienda sostenible que es de mucha utilidad para los pobladores de las zonas de la amazonía peruana sino también que quieren realizar un gran cambio en nuestra sociedead de hoy en día.</p>
        </Col>

        <Col>
          Mantente Informado de nuestras novedades:



        </Col>
      </Row>
    </div>
  )
}

export default Contact

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
