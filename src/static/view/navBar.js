import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/main.css';
import logoUrl from '../img/aurora-logo.jpg';
import logo from "../img/THESUS-LOGO1.avif";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Navbar_thesus() {
  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 container-fluid font_for_all font_navbar">
          <Container>
            <Navbar.Brand href="#">
              <img src={logoUrl}
                width="100" height="100"
                alt="Logo" />
              ABI company
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="font_for_all font_navbar">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="font_for_all font_navbar">Home</Nav.Link>
                  <Nav.Link href="#action2" className='font_for_all font_navbar'>Link</Nav.Link>

                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 font_for_all font_navbar"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" className='font_for_all font_navbar'>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );

}