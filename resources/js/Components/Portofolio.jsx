import Container from 'react-bootstrap/Container';
import { Typography } from 'antd';
const { Title } = Typography;
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function Portofolio(){
    return(
       <>
         <Container style={{
        paddingTop:"1%"
    }}>
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
        </Col>
      ))}
    </Row>
      </Container>
      </Container>
       </> 
    );
}