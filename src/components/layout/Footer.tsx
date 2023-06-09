import { Row, Col, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Navbar.Brand href="#home">
            <img
              src="assets/svg/logo-footer.svg"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Row>
        <br/>
        <Row>
          <Col lg={5}>
            OurStudio is a digital agency UI / UX Design and Website Development
            located in Ohio, United States of America
          </Col>
          <Col lg={1} />
          <Col lg={3}>
            <Navbar.Text>Our Social Media</Navbar.Text>
            <Nav.Link>Facebook</Nav.Link>
            <Nav.Link>Twitter</Nav.Link>
            <Nav.Link>Instagram</Nav.Link>
            <Nav.Link>Youtube</Nav.Link>
          </Col>
          <Col lg={3}>
            <Navbar.Text>Contact</Navbar.Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
