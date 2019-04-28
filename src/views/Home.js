import React from 'react'
import { Layout, Menu, Row, Col, Avatar } from 'antd';
import "antd/dist/antd.css"
import '../assets/styles/_variables.css'
import  '../assets/styles/_home.css'
import HomeCarousel from '../components/Carousel'
import JatiDescription from '../components/JatiDescription'
import WhyJati from '../components/whyJati'
import NewsEvents from '../components/newsEvents'
import Respaldo from '../components/Respaldo'
import Contact from '../components/Contact'

import logoJati from  '../assets/images/home/Jati-Logo.png'
import map from '../assets/images/home/Seccion1-map.png'

const { Header, Content, Footer } = Layout;

const HomeLayout = () => {
  return (
    <Layout className="layout">

      <Header className='mainBlueBg'>
        <Row>
          <Col xs={10} sm={10} md={6} lg={6} xl={6}>
            <Avatar src={logoJati} style={{width: '55px', height: '55px'}} />
          </Col>
          <Col xs={14} sm={14} md={18} lg={18} xl={18}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px', float: 'right', color: 'white' }}
              className = 'mainBlueBg'
            >
              <Menu.Item key="1">CONOCENOS</Menu.Item>
              <Menu.Item key="2">NOTICIAS Y EVENTOS</Menu.Item>
              <Menu.Item key="3">RESPALDO</Menu.Item>
              <Menu.Item key="4">DONACIONES</Menu.Item>
              <Menu.Item key="5">CONTACTOS</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <HomeCarousel />
        <img src={map} />
        <JatiDescription />
        <WhyJati />

        <NewsEvents />
        <Respaldo />
        <Contact />
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Proyecto Jati ©2019 Created by Jati
      </Footer>

    </Layout>

  )
}

const Home = () => {
  return (
    <HomeLayout />
  )
}

export default Home
