import { Col, Container, Row } from "react-bootstrap";

export const HomePage = () => {
  return (
    <Container>
      <div id="home-page-styles">
        <Col lg={4}>
          <h1> Sort out Your</h1>
          <h1> Spring Look</h1>
          <div>
            We will help to develop every smallest thing into a big one for your
            company.
          </div>
          <div className="button">
            <span>Shop</span>
            <img src="assets/svg/arrow.svg" />
          </div>
        </Col>
        <Col lg={8}>
          <div className="images">
            <div />
            <div />
          </div>
        </Col>
      </div>
    </Container>
  );
};
