import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default function CancerMenu(props){
    console.log(props.cancers)
    return (
            <Sider width={200} className="site-layout-background" style={{ height: '700px' }}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {props.cancers.map((cancer,i) =>{
                        return <Menu.Item key ={i}>{cancer}</Menu.Item>
                    })}
                </Menu>
            </Sider>
    )
}