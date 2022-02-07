import React, {useState} from 'react'
import NavBarUser from '../components/NavBarUser';
import {Layout, Menu, Pagination, Card, Carousel} from 'antd';
import reactDom from 'react-dom';
import { ConsoleLogger } from '@aws-amplify/core';


const {Header, Content, Sider} = Layout;

const questionTypes = [
  "Initial Presentation",
  "Work-Up",
  "Staging",
  "Treatment Paradigm",
  "Radiation Planning",
  "OTVs",
  "Follow"
];

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#eee',
};

function Questions(){
    const [currentType, setCurrentType] = useState(questionTypes[0]);
    const [currentPage, setCurrentPage] = useState(1);
    const onChange = (value) => {
      setCurrentPage(value);
    }
    return(
        <Layout>
        <Header></Header>
        <NavBarUser></NavBarUser>
        <Layout>
        <Sider width={200} className="site-layout-background" style={{ height: '1000px' }}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} 
                  onClick = {({key}) => {setCurrentType(questionTypes[key])}} 
                >
                    {questionTypes.map((type,i) =>{
                        return <Menu.Item key ={i}>{type}</Menu.Item>
                    })}
                </Menu>
        </Sider>
        <Content
          className="site-layout-background"
          style={{
            padding: 50,
            margin: 0,
            minHeight: 280
          }}>
            <Card style={{ width: '90%', minHeight: 300 }}>
              <div>
                {currentType + " / Page " + currentPage}
              </div>
              <Carousel afterChange={onChange}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </Card>
            <Pagination onChange={onChange} simple defaultCurrent={1} total={50}/>
        </Content>

        </Layout>
        </Layout>
        
    )
}
export default Questions;