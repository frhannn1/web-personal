import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@fontsource/poppins';

function Navbarr() {
  return (
    <Navbar className="bg-dark" >
      <Container>
        <Navbar.Brand href="#home" className='text-light' style={{ fontFamily: 'Poppins, sans-serif' }}>Farhan.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-white bg-white'/>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Tambahkan kelas ms-auto untuk memindahkan elemen ke kanan */}
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='text-light' style={{ fontFamily: 'Poppins, sans-serif' }}>Home</Nav.Link>
            <Nav.Link href="#link"className='text-light' style={{ fontFamily: 'Poppins, sans-serif' }}>About</Nav.Link>
            <Nav.Link href="#link" className='text-light' style={{ fontFamily: 'Poppins, sans-serif' }}>Skill</Nav.Link>
            <Nav.Link href="#link"className='text-light' style={{ fontFamily: 'Poppins, sans-serif' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
