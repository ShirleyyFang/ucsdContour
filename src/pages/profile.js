import React,{useState} from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import NavBarUser from '../components/NavBarUser';
import {Card, Avatar, Typography, Row, Col, Checkbox, Button} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const {Paragraph} = Typography;


function Profile() {

    const [editableStr, setEditableStr] = useState('This is an editable text.');
    const navigate = useNavigate();
    let cancers = [];

    return (
        <Fragment>
            <NavBarUser></NavBarUser>
            <div style={{ position: 'absolute', top: 200, left: '5%', width: '25%' }}>
                <Card size='default' >
                    <Avatar size={64} icon={<UserOutlined />} style={{ marginLeft: '42%', marginBottom: '12%' }} />
                    <p style={{ textAlign: 'center' }}>First Name: <span>User's First Name</span></p>
                    <p style={{ textAlign: 'center' }}>Last Name: <span>User's Last Name</span></p>
                    <p style={{ textAlign: 'center' }}>Organization: <span>User's organization</span></p>
                    <p style={{ textAlign: 'center' }}>Profession: <span>User's profession</span></p>
                    <p style={{ textAlign: 'center' }}>Post graduation year: <span>User's post grad year</span></p>
                </Card>
            </div>
            <div style={{ position: 'absolute', top: 200, right: '5%', width: '55%' }}>
                <Card title="My Account" >
                    <Row>
                    <Col span ={5}>Username: </Col> 
                    <Col span ={19}><Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph></Col>
                    </Row>
                    <Row>
                    <Col span ={5}>Email: </Col> 
                    <Col span ={19}><Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph></Col>
                    </Row>
                    <Row>
                    <Col span ={5}>Password: </Col> 
                    <Col span ={19}><Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph></Col>
                    </Row>
                </Card>
            </div>
            <div style={{ position: 'absolute', top: 500, right: '5%', width: '55%' }}>
                <Card title="Choose Cancer Types" >
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                    <Row>
                    <Col span ={8}>Head and Neck </Col> 
                    <Col span ={16}><Checkbox value = "Head and Neck" onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                    <Row>
                    <Col span ={8}>Gynecologic </Col> 
                    <Col span ={16}><Checkbox value = "Gynecologic" onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                    <Row>
                    <Col span ={8}>Gastrointestinal </Col> 
                    <Col span ={16}><Checkbox value = "Gastrointestinal" onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                    <Row>
                    <Col span ={8}>Pediatric </Col> 
                    <Col span ={16}><Checkbox value = "Pediatric" onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                    <Row>
                    <Col span ={8}>Genitourinary </Col> 
                    <Col span ={16}><Checkbox value = "Genitourinary" onChange={onChange}>Yes</Checkbox></Col>
                    </Row>
                </Checkbox.Group>
                </Card>
                <Button type="primary" htmlType="submit" style={{marginLeft:'85%'}} onClick={onClick}>Submit</Button>
            </div>
        </Fragment>
    );
    function onChange(checkedValues) {
        cancers = checkedValues;
        console.log(cancers);
    }
    function onClick(){
        navigate('/cases',{state: cancers});
        console.log("pass",cancers)
    }
};


export default Profile;