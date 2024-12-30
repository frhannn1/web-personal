import { Timeline, Card } from 'antd';
import Container from 'react-bootstrap/Container';
import { Typography } from 'antd';
const { Title } = Typography;
import { motion } from "motion/react";


const Experience = () => (
  <>

          <Container style={{ fontFamily: "Poppins, sans-serif" }}>
<motion.div
    initial={{ opacity:0, y: -50 }}
    whileInView={{ opacity: 1, y:0, transition:{delay:0.2, duration:0.5} }}
    viewport={{ once: false, amount:0.5 }}
>
      <Title
        level={1}
        style={{
          marginBlockStart: '3%',
          display: 'flex',
          justifyContent: 'center',
          marginBlockEnd: '4%',
        }}
      >
        Experiences
      </Title>
</motion.div>

<motion.div
     initial={{ opacity:0, y: 50 }}
     whileInView={{ opacity: 1, y:0, transition:{delay:0.2, duration:0.5} }}
     viewport={{ once: false, amount:0.5 }}
>

      <Timeline
        mode="alternate"
        items={[
          {
            color: 'green',
            children: (
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 1 } }}
                viewport={{ once: false , amount:0.5}}
              >
              <Card
                title="Teaching Asistant"
                bordered={true}
                style={{ width: "70%", fontSize: '12px', border:"1.5px solid rgb(19, 210, 210)",fontFamily: "Poppins, sans-serif"}}

              >
                <p style={{ fontFamily: "Poppins, sans-serif" }}>Teaching Asistant Algoritm and Data Structure</p>
              </Card>
              </motion.div>
            ),
          },
          {
            children: (
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 1 } }}
                viewport={{ once: false , amount:0.5}}
              >
              <Card
              title="Coordinator (KBMDSI)"
              bordered={true}
                style={{
                  marginLeft: "auto",
                  width: "70%",
                   fontSize: '12px',
                    border:"1.5px solid rgb(19, 210, 210)",
                    fontFamily: "Poppins, sans-serif"
                }}
              >
                <p style={{ fontFamily: "Poppins, sans-serif" }}> Coordinated the staff of Commission 1 BPMDSI in KBMDSI</p>
              </Card>
              </motion.div>
            ),
          },
          {
            color: 'green',
            children: (
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 1 } }}
                viewport={{ once: false , amount:0.5}}
              >
                <Card
                  title="Teaching Assistant"
                  bordered={true}
                  style={{
                    width: "70%",
                    fontSize: '12px',
                    border: "1.5px solid rgb(19, 210, 210)",
                    fontFamily: "Poppins, sans-serif"
                  }}
                >
                  <p style={{ fontFamily: "Poppins, sans-serif" }}>Teaching Assistant Advanced Programming</p>
                </Card>
              </motion.div>
            ),
          },
        ]}
      />
</motion.div>
    </Container>
  </>
);

export default Experience;
