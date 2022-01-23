import React, {useState} from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default function CancerMenu( props ){
    const [curCancer, setCurCancer] = useState(0);
    return (
            <Sider width={200} className="site-layout-background" style={{ height: '1000px' }}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick = {({key}) => {setCurCancer(props.cancers[key]); props.onChange(props.cancers[key])}} >
                    {props.cancers.map((cancer,i) =>{
                        return <Menu.Item key ={i}>{cancer}</Menu.Item>
                    })}
                </Menu>
            </Sider>
    )
}