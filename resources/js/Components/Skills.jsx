import Container from 'react-bootstrap/Container';
import { Typography } from 'antd';
const { Title } = Typography;
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills(){

    return(
        <>
    <Container id='skill' style={{
        paddingTop:"1%"
    }}>
      <Title
        level={1}
        style={{
          marginBlockStart: '2%',
          display: 'flex',
          justifyContent: 'center',
          marginBlockEnd: '4%',
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
        <Container className="b" 
    style={{
      border: "2px solid rgb(19, 210, 210)", 
      borderRadius: "10px", 
      
    }}>
    </Container>
        </Col>
        </Row>
    </Container>
    </Container>

        </>
    );
}

export default Skills;