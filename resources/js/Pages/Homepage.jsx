import Navbar from "@/Components/Navbar";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;

export default function Homepage() {
    return (
        <>
            <Navbar></Navbar>
            <Row gutter={16}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Title level={1}>Farhan Ainurrahman</Title>
                    <Title level={3}>Software Engineer and Data Scientist</Title>\
                    
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    col-12
                </Col>
            </Row>
        </>
    );
}
