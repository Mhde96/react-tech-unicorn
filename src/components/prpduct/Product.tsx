import { Col, Row } from "react-bootstrap";
import "./product-styles.scss";

type productType = {
  item: any;
};
export const Product = (props: productType) => {
  const { item } = props;
  return (
    <div id="product-styles">
      <div
        className="product-img"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="container-icon">
          <img src="assets/svg/heart.svg" />
        </div>
      </div>
      <br />

      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="h5 category">{item.category}</div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center ">
          <div className="h3 title ellipsis">{item.title}</div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center ">
          <div className="h6 title ellipsis">{item.description}</div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center ">
          <div className="h3 price">${item.price}</div>
        </Col>
      </Row>
    </div>
  );
};
