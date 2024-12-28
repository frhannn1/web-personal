import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@fontsource/poppins';
import { useState } from "react";

function Navbarr() {
  const [activeLink, setActiveLink] = useState("#home");

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <style>
        {`
          .active-link {
            font-weight: bold; /* Membuat teks tebal */
            color: rgb(19, 210, 210) !important; /* Mengubah warna teks menjadi cyan */
          }

          .nav-link {
            transition: color 0.3s ease, transform 0.3s ease; /* Efek transisi untuk hover */
          }

          .nav-link:hover {
            color: rgb(19, 210, 210); /* Mengubah warna teks saat hover */
            transform: scale(1.1); /* Membuat teks sedikit lebih besar saat hover */
          }
        `}
      </style>
      <Navbar className="bg-light p-3 sticky-top " expand="lg">
        <Container>
          <Navbar.Brand
            href="#home"
            className="ms-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold", // Membuat teks bold
              color: "rgb(19, 210, 210)"
            }}
          >
            Farhan.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-light bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-4" style={{ gap: "20px" }}>
              <Nav.Link
                href="#home"
                className={`nav-link text-dark ${activeLink === "#home" ? "active-link" : ""}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => handleNavClick("#home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={`nav-link text-dark ${activeLink === "#about" ? "active-link" : ""}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => handleNavClick("#about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skill"
                className={`nav-link text-dark ${activeLink === "#skill" ? "active-link" : ""}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => handleNavClick("#skill")}
              >
                Skill
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={`nav-link text-dark ${activeLink === "#contact" ? "active-link" : ""}`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => handleNavClick("#contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
