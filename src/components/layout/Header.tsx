import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg">
        <Container >
          <Navbar.Collapse id="responsive-navbar-nav">
          <img
              src="assets/img/phone.png"
              width="20"
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Nav.Link href="#features">+022 319 821 967</Nav.Link>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">
            <img
              src="assets/img/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
