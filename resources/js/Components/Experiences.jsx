import { Timeline, Card } from 'antd';
import Container from 'react-bootstrap/Container';
import { Typography } from 'antd';
const { Title } = Typography;

const Experience = () => (
  <>
    <Container>
      <Title
        level={1}
        style={{
          marginBlockStart: '2%',
          display: 'flex',
          justifyContent: 'center',
          marginBlockEnd: '4%',
        }}
      >
        Experiences
      </Title>
      <Timeline
        mode="alternate"
        items={[
          {
            color: 'green',
            children: (
              <Card
                title="Teaching Asistant"
                bordered={true}
                style={{ width: "70%", fontSize: '12px', border:"1.5px solid rgb(19, 210, 210)"}}
                headStyle={{
                    fontSize: "1em",
                  }}
            
              >
                <p>Teaching Asistant Algoritm and Data Structure</p>
              </Card>
            ),
          },
          {
            children: (
              <Card
              title="Coordinator (KBMDSI)"
              bordered={true}
                style={{
                  marginLeft: "auto", 
                  width: "70%", 
                   fontSize: '12px',
                    border:"1.5px solid rgb(19, 210, 210)"
                }}
                headStyle={{
                    fontSize: "1em",
                  }}
            
              >
                <p> Coordinated the staff of Commission 1 BPMDSI in KBMDSI</p>
              </Card>
            ),
          },          
          {
            color: 'green',
            children: (
              <Card
                title="Teaching Asistant"
                bordered={true}
                style={{ width: "70%", fontSize: '12px', border:"1.5px solid rgb(19, 210, 210)" }}
                headStyle={{
                    fontSize: "1em",
                  }}
            
              >
                <p>Teaching Asistant Advanced Programing</p>
              </Card>
            ),
          },
        ]}
      />
    </Container>
  </>
);

export default Experience;
