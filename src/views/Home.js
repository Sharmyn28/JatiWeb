import React from 'react'
import { Layout, Menu, Row, Col, Avatar } from 'antd';
import "antd/dist/antd.css"
import '../assets/styles/_variables.css'
import  '../assets/styles/_home.css'

//import components for view
import HomeCarousel from '../components/Carousel'
import JatiDescription from '../components/JatiDescription'
import WhyJati from '../components/whyJati'
import NewsEvents from '../components/newsEvents'
import Respaldo from '../components/Respaldo'
import Contact from '../components/Contact'

//import images
import logoJati from  '../assets/images/home/Jati-Logo.png'
import map from '../assets/images/home/Seccion1-map.png'

const { Header, Content, Footer, Sider } = Layout;

const HomeLayout = () => {
  const state = {
    collapsed: false,
  }

  return (
    <Layout className="layout">

      <Header className='mainBlueBg header'>
        <Row>
          <Col xs={8} sm={10} md={6} lg={6} xl={6}>
            <Avatar src={logoJati} className='logo-menu' />
          </Col>
          <Col xs={16} sm={14} md={18} lg={18} xl={18}>

              <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                className = 'mainBlueBg content-menu'
                defaultSelectedKeys={['1']}
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

      <Content >
        <HomeCarousel />
        <img src={map} className='img--responsive' alt ='mapJati' />
        <JatiDescription  />
        <WhyJati />
        <NewsEvents />
        <Respaldo />
        <Contact />
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
