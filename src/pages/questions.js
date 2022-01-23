import React from 'react'
import NavBarUser from '../components/NavBarUser';
import {Layout, Menu} from 'antd';


const {Header, Content, Sider} = Layout;

function Questions(){
    return(
        <Layout>
        <Header></Header>
        <NavBarUser></NavBarUser>
        <Layout>
        <Sider width={200} className="site-layout-background" style={{ height: '1000px' }}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                    <Menu.Item key="1">Initial Presentation</Menu.Item>
                    <Menu.Item key="2">Work-Up</Menu.Item>
                    <Menu.Item key="3">Staging</Menu.Item>
                    <Menu.Item key="4">Treatment Paradigm</Menu.Item>
                    <Menu.Item key="5">Radiation Planning</Menu.Item>
                    <Menu.Item key="6">OTVs</Menu.Item>
                    <Menu.Item key="7">Follow-up</Menu.Item>
                </Menu>
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
        </Content>
        </Layout>
        </Layout>
        
    )
}
export default Questions;