import React, {useState} from 'react'
import NavBarUser from '../components/NavBarUser';
import {Layout, Menu, Pagination, Card, Carousel, Modal, Button} from 'antd';
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
  height: '800px',
  color: 'black',
  lineHeight: '20px',
  background: '#eee',
};

function Questions() {
  const [currentType, setCurrentType] = useState(questionTypes[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ModalAnswer, setModalAnswer] = useState(99);
  const showModal = (value) => {
    setIsModalVisible(true);
    setModalAnswer(value);
  };
  const success = (value) => {
    Modal.success({
      content: 'some messages...some messages...',
    });
  }
  const error = () => {
    Modal.error({
      content: 'some messages...some messages...',
    });
  }
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const onChangePage = (value) => {
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
              <Carousel afterChange={onChangeCarousel}>
                <div>
                  <h3 style={contentStyle}>
                    {prostateCancerA[currentType][(currentPage-1)*3].text.map((para, i) => {
                      return <p key={i}>{para}</p>
                    })}
                  </h3>
                </div>
                <div>
                  <h3 style={contentStyle}>
                    {/* {console.log(prostateCancerA[currentType][(currentPage-1)*3 + 1])} */}
                    {prostateCancerA[currentType][(currentPage-1)*3 + 1].type === "seeAnswerButton" ?
                     prostateCancerA[currentType][(currentPage-1)*3 + 1].questions.map((qa, i) => {
                      return <div key={i}>
                        {qa.question}
                        <div>{qa.answer}</div>
                        <Button type="primary" onClick={() => showModal(qa.answer)}>View Answer</Button>
                        <Modal title="Answer" visible={isModalVisible} onOk={handleOk}>
                          {ModalAnswer}
                        </Modal>
                      </div>
                    })
                    :
                    <div>
                      <div>{prostateCancerA[currentType][(currentPage-1)*3 + 1].question}</div>
                      <div>
                      {prostateCancerA[currentType][(currentPage-1)*3 + 1].options.map((oa,i) => {
                        return <div><Button onClick={() => showModal(oa.reason)}>
                            {oa.answer}
                          </Button>
                            <Modal title="Answer" visible={isModalVisible} onOk={handleOk}>
                              <div>
                              {oa.correct == true ? 
                              <CheckCircleOutlined  style={{color:'green'}}/> :
                              <CloseCircleOutlined   style={{color:'red'}}/>
                              }
                              </div>
                              {ModalAnswer}
                            </Modal>
                          </div>
                      })}
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
            <Pagination onChange={onChangePage} simple defaultCurrent={1} total={prostateCancerA[currentType].length /3 * 10}/>
        </Content>

        </Layout>
        </Layout>
        
    )
}
export default Questions;