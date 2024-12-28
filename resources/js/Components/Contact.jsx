import Container from 'react-bootstrap/Container';
import { Typography } from 'antd';
const { Title } = Typography;
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {motion} from 'motion/react'


export default function Contact(){
    return(
        <>
         <Container id='contact' style={{
        paddingTop:"4%"
    }}>
<motion.div
initial={{ opacity:0, scale:0.2 }}
whileInView={{ opacity:1, scale:1, transition:{delay:0.2, duration:0.5} }}
viewport={{ once:false, amount: 0.5 }}
    >

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
</motion.div>


      <Row style={{
        marginLeft:"12%",
        marginRight:"12%",
        paddingBottom:"3%"
      }}>

        <Col>
        <motion.div
initial={{ opacity:0, scale:0.2 }}
whileInView={{ opacity:1, scale:1, transition:{delay:0.2, duration:0.5} }}
viewport={{ once:false, amount: 0.5 }}
        >
        <Form style={{ maxWidth: "90%", margin: "0 auto" }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your email address</Form.Label>
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
                    marginInlineStart: "5%",
                    backgroundColor: "rgb(20, 192, 192)" ,
                    color: 'white',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    marginBlockEnd: "2%"
                 }}
            >
                Submit
            </Button>
        </motion.div>

        </Col>
        </Row>
      </Container>
{/* FOOTEER */}
      <Container>
      <p  style={{
        marginBlockStart: '2%',
        display: 'flex',
        justifyContent: 'center',
        paddingBlockEnd:'2%',

      }}>&copy; 2024 Farhan Ainurrahman. All rights reserved.</p>
      </Container>

        </>

    )
}
