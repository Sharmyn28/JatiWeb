import React from 'react'
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css"
import '../assets/styles/_variables.css'
import HomeCarousel from '../components/Carousel'
import JatiDescription from '../components/JatiDescription'
import WhyJati from '../components/whyJati'
import NewsEvents from '../components/newsEvents'
import Respaldo from '../components/Respaldo'
import Contact from '../components/Contact'

const { Header, Content, Footer } = Layout;

const HomeLayout = () => {
  return (
    <Layout className="layout">

      <Header className='mainBlueBg'>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
          className = 'mainBlueBg'
        >
        <Menu.Item key="1">Conócenos</Menu.Item>
        <Menu.Item key="2">Noticias y Eventos</Menu.Item>
        <Menu.Item key="3">Respaldo</Menu.Item>
        <Menu.Item key="4">Donaciones</Menu.Item>
        <Menu.Item key="5">Contactos</Menu.Item>
      </Menu>
      </Header>

      <Content style={{ padding: '0 50px' }}>
        <HomeCarousel />
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
