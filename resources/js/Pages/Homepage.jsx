import React, { useState } from 'react';
import Navbarr from "@/Components/Navbarr";
import About  from "@/Components/About";
import Skills from '@/Components/Skills';
import { DownloadOutlined } from '@ant-design/icons';
import { Col, Button, Row, Typography } from "antd";
const { Title } = Typography;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../css/app.css";


export default function Homepage() {
    const [size, setSize] = useState('large');
    const handleDownload = () => {
        window.open("https://drive.google.com/file/d/1Kg6h0BEIV5UyjmElJCLlhKUZig5Otd0X/view?usp=sharing", "_blank");
      };
    return (
        <>
        <div className="background-latar">
            <Navbarr></Navbarr>
            <div>

            <Row style={{marginRight : 0}}>
                <Col xs={24} sm={12} md={10} lg={10} xl={10}
                style={{marginBlockStart: "8%",
                          
                }}>
                      <img src="/fotokuu.svg" alt="foto" className="responsive-image" 
                      style={{
                        borderRadius: "50%", // Membuat border lingkaran
                        padding: "5px", // Menambah jarak untuk gradasi terlihat
                        background: "linear-gradient(to right, lightblue, cyan)", // Gradasi warna biru
                        display: "block", // Opsional untuk memastikan layout gambar
                      }}/>
                </Col>
                <Col xs={24} sm={12} md={14} lg={14} xl={14}
                style={{
                    justifyContent:"center",
                    alignItems:"center",
                    marginBlockStart:"14%",
                    
                }}>
                    <Title level={1} style={{ display: "flex",
                                            alignItems:"center",
                                            marginBottom:0,
                                            marginLeft: "8%"
                                            }} 
                    >Farhan Ainurrahman</Title>
                    <Title level={2} style={{ display: "flex",
                                            alignItems:"center",
                                            marginTop:0,
                                            marginLeft: "8%"
                                            }}
                    >Software Engineer and Data Scientist</Title>

                <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "25px", 
                        margin:"5px",
                        marginLeft: "8%"
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
                        <Button type='primary' style={{
                            backgroundColor: "rgb(20, 192, 192)"
                        }} icon={<DownloadOutlined/>} size={size} onClick={handleDownload}>
                        Download CV
                        </Button>  
                    </div>
                </Col>
            </Row>
            </div>
            <div>
            <About></About>
            </div>

            <div>
            <Skills></Skills>
            </div>
        </div>


        </>
    );
}
