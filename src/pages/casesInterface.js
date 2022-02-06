import React, {useEffect, useState} from 'react'
import NavBarUser from '../components/NavBarUser';
import CancerMenu from '../components/CancerMenu';
import {NavLink, Navigate} from 'react-router-dom';
import {Layout, Input, List} from 'antd';
import { useLocation } from 'react-router';
import './caseInterface.css';

const {Header, Content} = Layout;
const {Search} = Input;
const onSearch = value => console.log(value);

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const cases = {
  "Head and Neck": 
  ["Nasopharynx Cancer", "Oropharynx Cancer A", "Larynx Cancer", "Oropharynx Cancer B"],
  "Gastrointestinal": 
  ["Anal Cancer A", "Anal Cancer B", "Anal Cancer C", 
  "Rectal Cancer A", "Rectal Cancer B",
  "Esophogeal Cancer A", "Esophogeal Cancer B",
  "Gastric Cancer A", "Gastric Cancer B",
  "Pancreatic Cancer A", "Pancreatic Cancer B",
  "Hepatocellular Carcinoma"],
  "Gynecologic": 
  ["Cervical Cancer A", "Endometrial Cancer", "Vaginal Cancer", "Cervical Cancer B"],
  "Pediatric": 
  ["No case yet"],
  "Genitourinary": 
  ["Prostate Cancer A", "Prostate Cancer B", "Prostate Cancer C", "Prostate Cancer D", "Prostate Cancer E",
  "Bladder Cancer", "Seminoma"]
}

function CasesInterface() {
  const {state} = useLocation();
  const [currentCancer, setCurrentCancer] = useState(state[0]);
  const handleClick = (newValue) =>{
    setCurrentCancer(newValue);
  }

  return (
    <Layout>
        <Header></Header>
        <NavBarUser></NavBarUser>
        <Layout>
        <CancerMenu cancers={state} onChange = {handleClick}></CancerMenu>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
          </div>
          <List
            size="large"
            bordered
            dataSource={ cases[currentCancer] }
            renderItem={item => <List.Item><NavLink to = {"/questions/"+item} >{item}</NavLink></List.Item>}
          />
        </Content>
        </Layout>
    </Layout>
  );
}

export default CasesInterface;