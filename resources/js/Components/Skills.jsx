import Container from 'react-bootstrap/Container';
import { Typography } from 'antd';
const { Title } = Typography;
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portofolio from './Portofolio';
import { motion } from "motion/react";


function Skills(){

    return(
        <>
    <Container id='skill' style={{
        paddingTop:"4%"
    }}>
        <motion.div
        initial={{ opacity: 0, scale: 0.2}}
        whileInView={{ opacity:1, scale: 1, transition:{delay:0.2, duration: 0.5  } }}
        viewport={{ once:false, amount: 0.5 }}
        >

      <Title
        level={1}
        style={{
          marginBlockStart: '2%',
          display: 'flex',
          justifyContent: 'center',
          marginBlockEnd: '3%',
          fontFamily: "Poppins, sans-serif"
        }}
      >
        Skills and Technology
      </Title>
        </motion.div>
      <Container>
      <Row style={{
        marginLeft:"12%",
        marginRight:"12%",
        paddingBottom:"2%"
      }}>

        <Col>
<motion.div
initial={{ opacity: 0, scale: 0.8}}
whileInView={{ opacity:1, scale: 1, transition:{delay:0.2, duration: 0.4  } }}
viewport={{ once:false, amount: 0.5 }}
>

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
            <motion.img

              src={src}
              alt={`Logo ${index}`}
              style={{
                width: "50%",
                height: "auto",
                objectFit: "contain",
              }}
              initial={{ opacity: 0, scale: 0.2}}
              whileInView={{ opacity:1, scale: 1, transition:{delay:0.2, duration: 0.5  } }}
              viewport={{ once:false, amount: 0.5 }}
            />
          </Col>
        ))}
      </Row>
    </Container>
</motion.div>
        </Col>
        </Row>
    </Container>
    </Container>
        <Portofolio></Portofolio>
        </>
    );
}

export default Skills;
