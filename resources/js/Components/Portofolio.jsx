import Container from 'react-bootstrap/Container';
import { Typography } from 'antd';
const { Title } = Typography;
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {motion} from 'motion/react'

export default function Portofolio(){
    return(
       <>
         <Container style={{
        paddingTop:"1%"
    }}>
    <motion.div
    initial={{ opacity:0, y: 50 }}
    whileInView={{ opacity:1 , y:0, transition:{delay:0.2, duration:0.5} }}
    viewport={{ once: false, amount:0.5 }}
    >
      <Title
        level={1}
        style={{
          marginBlockStart: '1%',
          display: 'flex',
          justifyContent: 'center',

        }}
      >
        Projects Portofolio
      </Title>
    </motion.div>
      <Container style={{
        marginBlockStart:"3%",
        paddingBottom:"2%",

      }}>
        <Row xs={1} md={3} className="g-4" style={{
            marginLeft:"7%",
            marginRight:"7%"
        }}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
            <motion.div
            initial={{ opacity: 0, scale: 0.2 }}
            whileInView={{ opacity:1, scale:1, transition:{delay:0.2, duration:0.5} }}
            viewport={{ once:false, amount: 0.5 }}
            whileHover={{ scale:1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)", transition:{duration:0.1} }}
            >

          <Card style={{
                 border: "1.5px solid rgb(19, 210, 210)",
                 backgroundColor:"rgba(255, 255, 255, 0.43)",
            }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
            </motion.div>
        </Col>
      ))}
    </Row>
      </Container>
      </Container>
       </>
    );
}
