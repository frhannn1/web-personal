import {  Typography } from "antd";
const { Title } = Typography;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Experience from "./Experiences";
function About(){
    return(
        <>

        <Container id="about" style={{
            paddingTop:"1%"
        }}>
        <Title level={1} style={{
            marginBlockStart: "8%",
            display: "flex",
            justifyContent: "center",
            marginBlockEnd:"3%"
        }}>About Me</Title>
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
      backgroundColor:"rgba(255, 255, 255, 0.43)",
      padding: "4%"
    }}>
        
        <p>Hello! I’m an Information Technology student at Universitas Brawijaya with a 
            deep passion for Software Engineering, Data Science, and Machine Learning. My journey has
             been driven by curiosity and a desire to build innovative solutions that make a difference.
             <br />I specialize in:</p>
                <br />
             <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                <li>Designing and managing web applications, seamlessly integrating front-end and back-end technologies.</li>
                <li>Developing predictive models and analyzing large datasets to uncover insights that drive decision-making.</li>
                <li>Crafting intelligent systems powered by cutting-edge machine learning algorithms.</li>
            </ul>
             <br />
        <p>As someone who thrives on challenges, I am always eager to learn, adapt, and grow in a fast-paced 
            tech landscape. Beyond my technical expertise, I take pride in my analytical thinking, proactive 
            approach, and strong communication skills, which help me collaborate effectively and deliver impactful
             results. <br/>Let’s shape the future together, one project at a time! 🚀</p>

        </Container>
        </Col>
      </Row>
        </Container>

        <Container>
            <Experience></Experience>
        </Container>
        
       
        
        </>
    );



}

export default About;