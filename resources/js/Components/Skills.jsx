import Container from 'react-bootstrap/Container';
import { Typography } from 'antd';
const { Title } = Typography;
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portofolio from './Portofolio';



function Skills(){

    return(
        <>
    <Container id='skill' style={{
        paddingTop:"4%"
    }}>
      <Title
        level={1}
        style={{
          marginBlockStart: '2%',
          display: 'flex',
          justifyContent: 'center',
          marginBlockEnd: '3%',
        }}
      >
        Skills and Technology
      </Title>
      <Container>
      <Row style={{
        marginLeft:"12%",
        marginRight:"12%",
        paddingBottom:"2%"
      }}>
        
        <Col>
        <Container 
      style={{
        border: "1px solid rgb(19, 210, 210)",
        backgroundColor:"rgba(255, 255, 255, 0.43)",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Row>
        {['/images/html-5.svg', '/images/css-3.svg', '/images/javascript.svg', '/images/python.svg', 
         '/images/php.svg','/images/java.svg', '/images/mysql.svg','images/node-js.svg','/images/react.svg','/images/laravel.svg', '/images/scikitlearn.svg','images/hapi.svg'].map((src, index) => (
            <Col lg={2} xs={4} md={4} key={index} className="d-flex justify-content-center" style={{ marginBottom: "1%", marginTop:"1%" }}>
            <img 
              src={src} 
              alt={`Logo ${index}`} 
              style={{
                width: "50%", 
                height: "auto",
                objectFit: "contain",
              }} 
            />
          </Col>
        ))}
      </Row>
    </Container>
        </Col>
        </Row>
    </Container>
    </Container>
        <Portofolio></Portofolio>
        </>
    );
}

export default Skills;