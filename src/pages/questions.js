import React, {useRef, useState} from 'react'
import NavBarUser from '../components/NavBarUser';
import {Layout, Menu, Pagination, Card, Carousel, Modal, Button, Checkbox} from 'antd';
import { CloseCircleOutlined, CheckCircleOutlined} from '@ant-design/icons';
import {prostateCancerA} from '../questionsForCasesData/prostateCancerA';


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

function onChangeCarousel(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '400px',
  color: 'black',
  lineHeight: '20px',
  background: '#eee',
  overflow: 'auto',
};
const questionStyle = {
  paddingBottom: '50px',
};
const buttonLineStyle = {
  textAlign: 'center',
}
const buttonStyle = {
  minWidth:'180px',
  textAlign:'center',
  paddingLeft:'5px', 
  paddingRight:'5px'
}

function Questions() {
  const [currentType, setCurrentType] = useState(questionTypes[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ModalAnswer, setModalAnswer] = useState(99);
  const [multipleChoiceAnswer, setMultipleChoiceAnswer] = useState(false);
  const slider = useRef();

  const showModalViewAnswer = (value) =>{
    setIsModalVisible(true);
    setModalAnswer(value);
  }
  
  const showModal = (value) => {
    setIsModalVisible(true);
    setMultipleChoiceAnswer(value.correct);
    setModalAnswer(value.reason);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const onChangePage = (value) => {
    setCurrentPage(value);
    slider.current.goTo(0);
  }
  const changeType = (value) => {
    setCurrentType(value);
    onChangePage(1);
  }

    return(
        <Layout>
        <Header></Header>
        <NavBarUser></NavBarUser>
        <Layout>
        <Sider width={200} className="site-layout-background" style={{ height: '1000px' }}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']} 
                  onClick = {({key}) => {changeType(questionTypes[key])}} 
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
              <Carousel afterChange={onChangeCarousel} 
              ref={ref => {slider.current = ref;}}>
                <div>
                  <h3 style={contentStyle}>
                    {prostateCancerA[currentType][(currentPage-1)*3].text.map((para, i) => {
                      return <p key={i}>{para}</p>
                    })}
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>

                    {prostateCancerA[currentType][(currentPage-1)*3 + 1].type === "seeAnswerButton" ? 
                     prostateCancerA[currentType][(currentPage-1)*3 + 1].questions.map((qa, i) => {
                      return <div style = {questionStyle} key={i}>
                        {qa.question}
                        <div style ={ buttonLineStyle }>
                        <Button type="primary" onClick={() => showModalViewAnswer(qa.answer)}>View Answer</Button>
                        <Modal title="Answer" visible={isModalVisible} onOk={handleOk}>
                          {ModalAnswer}
                        </Modal>
                        </div>
                      </div>
                     }) 
                     : 
                     prostateCancerA[currentType][(currentPage-1)*3 + 1].type === "multiple choice" ? 
                    <div>
                      <div style = {questionStyle}>{prostateCancerA[currentType][(currentPage-1)*3 + 1].question}</div>
                      <div style ={ buttonLineStyle }>
                      {prostateCancerA[currentType][(currentPage-1)*3 + 1].options.map((oa,i) => {
                        return <div><Button style ={buttonStyle} onClick={() => showModal(oa)}>
                            {oa.answer}
                          </Button>
                            <Modal title="Answer" visible={isModalVisible} onOk={handleOk}>
                              <div style={{textAlign: 'center'}}>
                              {multipleChoiceAnswer == true ? 
                              <CheckCircleOutlined  style={{color:'green', fontSize: '64px'}}/> :
                              <CloseCircleOutlined  style={{color:'red', fontSize: '64px'}}/>
                              }
                              </div>
                              {ModalAnswer}
                            </Modal>
                        </div>
                      })}
                      </div>
                    </div> 
                    :
                    <div>
                      <div style = {questionStyle}>{prostateCancerA[currentType][(currentPage-1)*3 + 1].question}</div>
                      <div>
                        {prostateCancerA[currentType][(currentPage-1)*3 + 1].selections.map((s,i) => {
                          return <div><Checkbox>{s}</Checkbox></div>
                        })}
                        <div style ={ buttonLineStyle }>
                        <Button type="primary" onClick={() => showModalViewAnswer(prostateCancerA[currentType][(currentPage-1)*3 + 1].answer)}>View Answer</Button>
                        <Modal title="Answer" visible={isModalVisible} onOk={handleOk}>
                          {ModalAnswer}
                        </Modal>
                        </div>
                      </div>
                    </div>
                    }
                  
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                  {prostateCancerA[currentType][(currentPage-1)*3 + 2].text.map((para, i) => {
                      return <p key={i}>{para}</p>
                    })}
                  </h3>
                </div>
              </Carousel>
            </Card>
            <Pagination onChange={onChangePage} current={currentPage} total={prostateCancerA[currentType].length /3 * 10}/>
        </Content>

        </Layout>
        </Layout>
        
    )
}
export default Questions;