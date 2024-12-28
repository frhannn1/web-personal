import React, { useState } from "react";
import Navbarr from "@/Components/Navbarr";
import About from "@/Components/About";
import Skills from "@/Components/Skills";
import Contact from "@/Components/Contact";
import { DownloadOutlined } from "@ant-design/icons";
import { Col, Button, Row, Typography } from "antd";
const { Title } = Typography;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/app.css";
import { motion } from "motion/react";


export default function Homepage() {
    const [size, setSize] = useState("large");
    const handleDownload = () => {
        window.open(
            "https://drive.google.com/file/d/1Kg6h0BEIV5UyjmElJCLlhKUZig5Otd0X/view?usp=sharing",
            "_blank"
        );
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
    };
    return (
        <>
            <div className="background-latar">
                <Navbarr></Navbarr>
                <div>
                    <Row style={{ marginRight: 0 }}>
                        <Col
                            xs={20}
                            sm={18}
                            md={12}
                            lg={12}
                            xl={12}
                            style={{ marginBlockStart: "8%" }}
                        >
                            <motion.img
                                src="/fotokuu.svg"
                                alt="foto"
                                className="responsive-image"
                                style={{
                                    borderRadius: "50%", // Membuat border lingkaran
                                    padding: "5px", // Menambah jarak untuk gradasi terlihat
                                    background:
                                        "linear-gradient(to right, lightblue, cyan)", // Gradasi warna biru
                                    display: "block", // Opsional untuk memastikan layout gambar
                                }}
                                initial={{ opacity: 0 }} // Mulai dengan tidak nampak
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileInView={{opacity:1, transition: {delay: 0.5, duration: 1} }}
                                viewport={{ once: false, amount: 0.5 }} // Durasi dan easing
                            />
                        </Col>
                        <Col
                            xs={24}
                            sm={12}
                            md={12}
                            lg={12}
                            xl={12}
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                marginBlockStart: "14%",
                            }}
                        >
                            <motion.div
                               initial={{ opacity: 0 , x:50}}
                               animate={{ x:0 }} // Mulai dengan tidak nampak
                               transition={{ duration: 0.5, ease: "linear"}}
                               whileInView={{opacity:1, transition: { delay: 0.2, duration: 1} }}
                               viewport={{ once: false, amount: 0.5 }}
                            >
                                <Title
                                    level={1}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: 0,
                                        marginLeft: "6%",
                                    }}
                                >
                                    Farhan Ainurrahman
                                </Title>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 , x:50}}
                                animate={{ x:0 }} // Mulai dengan tidak nampak
                                transition={{ duration: 0.5, ease: "linear"}}
                                whileInView={{opacity:1, transition: { delay: 0.2, duration: 1} }}
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                <Title
                                    level={2}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: 0,
                                        marginLeft: "6%",
                                    }}
                                >
                                    Software Engineer and Data Scientist
                                </Title>
                            </motion.div>

                            <motion.div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "25px",
                                    margin: "5px",
                                    marginLeft: "6%",
                                }}
                                initial={{ opacity: 0 , x:50}}
                                animate={{ x:0 }}
                                transition={{ duration: 0.5, ease: "linear"}}
                                whileInView={{opacity:1, transition: { delay: 0.2, duration: 1} }}
                                viewport={{ once: false, amount: 0.5 }}
                            >
                                {[
                                    {
                                        href: "https://www.instagram.com/farhan.ainurrahman",
                                        icon: ["fab", "instagram"],
                                    },
                                    {
                                        href: "https://www.linkedin.com/in/farhanainurr/",
                                        icon: ["fab", "linkedin"],
                                    },
                                    {
                                        href: "https://github.com/frhannn1",
                                        icon: ["fab", "github"],
                                    },
                                ].map((item, index) => (
                                    <motion.span
                                        key={index}
                                        style={{
                                            fontSize: "30px",
                                            cursor: "pointer",
                                        }}
                                        whileHover={{ scale: 1.2 }} // Efek hover
                                        transition={{ duration: 0.3 }}
                                    >
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                            }}
                                        >
                                            <FontAwesomeIcon icon={item.icon} />
                                        </a>
                                    </motion.span>
                                ))}

                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Button
                                        type="primary"
                                        style={{
                                            backgroundColor:
                                                "rgb(20, 192, 192)",
                                        }}
                                        icon={<DownloadOutlined />}
                                        size="large"
                                        onClick={handleDownload}
                                    >
                                        Download CV
                                    </Button>
                                </motion.span>
                            </motion.div>
                        </Col>
                    </Row>
                </div>

                <About></About>
                <Skills></Skills>
                <Contact></Contact>
            </div>
        </>
    );
}
