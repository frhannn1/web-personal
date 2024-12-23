import Navbarr from "@/Components/Navbarr";
import { Col, Flex, Row, Typography } from "antd";
const { Title } = Typography;

export default function Homepage() {
    return (
        <>
            <Navbarr></Navbarr>
            <Row style={{marginRight : 0}}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} 
               style={{ display: "ms-grid",
                alignItems:"center",
                justifyContent : "center",
                }}>
                    <Title level={2} style={{marginBottom:0}} >Farhan Ainurrahman</Title>
                    <Title level={4} style={{marginTop:0}}>Software Engineer and Data Scientist</Title>
                    
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    col-12
                </Col>
            </Row>
        </>
    );
}
