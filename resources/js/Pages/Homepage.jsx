import Navbarr from "@/Components/Navbarr";
import { Col, Flex, Row, Typography } from "antd";
const { Title } = Typography;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../css/app.css";


export default function Homepage() {
    return (
        <>
            <Navbarr></Navbarr>
            <Row style={{marginRight : 0}}>
                <Col xs={24} sm={12} md={10} lg={10} xl={10}
                style={{marginBlockStart: "8%",
                          
                }}>
                      <img src="/fotoku.png" alt="foto" className="responsive-image" />
                </Col>
                <Col xs={24} sm={12} md={14} lg={14} xl={14}
                style={{
                    justifyContent:"center",
                    alignItems:"center",
                    marginBlockStart:"18%",
                    
                }}>
                    <Title level={1} style={{ display: "flex",
                                            alignItems:"center",
                                            marginBottom:0,
                                            marginLeft: "20%"
                                            }} 
                    >Farhan Ainurrahman</Title>
                    <Title level={2} style={{ display: "flex",
                                            alignItems:"center",
                                            marginTop:0,
                                            marginLeft: "20%"
                                            }}
                    >Software Engineer and Data Scientist</Title>

                <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "25px", /* Jarak antar logo */
                        margin:"5px",
                        marginLeft: "20%"
                    }}>
                        <span style={{ fontSize: "30px", cursor: "pointer" }}>
                        <a href="https://www.instagram.com/farhan.ainurrahman" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                        </span>
                        <span style={{ fontSize: "30px", cursor: "pointer" }}>
                        <a href="https://www.linkedin.com/in/farhanainurr/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                        </span>
                        <span style={{ fontSize: "30px", cursor: "pointer" }}>
                        <a href="https://github.com/frhannn1    " target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        </span>
                    </div>
                    
                  
                </Col>
            </Row>
        </>
    );
}
