import Container from 'react-bootstrap/Container';
import { Typography } from 'antd';
const { Title } = Typography;
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

export default function Contact(){
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
          marginBlockEnd: '1%',
        }}
      >
        Contact Me
      </Title>
      <p  style={{
        marginBlockStart: '0%',
        display: 'flex',
        justifyContent: 'center',
        marginBlockEnd: '3%',
      }}> Find u yeshbadb</p>
      <Row style={{
        marginLeft:"12%",
        marginRight:"12%",
        paddingBottom:"3%"
      }}>
        
        <Col>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@gmail.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Massage</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button
                type="submit"
                style={{ 
                    backgroundColor: "rgb(20, 192, 192)" , 
                    color: 'white', 
                    paddingLeft: '1rem', 
                    paddingRight: '1rem'
                 }}
            >
                Submit 
            </Button>
            
        </Col>
        </Row>
      </Container>
{/* FOOTEER */}
      <Container>
      <p  style={{
        marginBlockStart: '0%',
        display: 'flex',
        justifyContent: 'center',
        paddingBlockEnd:'2%',

      }}>&copy; 2024 Farhan Ainurrahman. All rights reserved.</p>
      </Container>
        
        </>

    )
}