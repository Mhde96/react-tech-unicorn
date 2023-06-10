import { Col, Container, Row } from "react-bootstrap";
import { DiscountSection } from "./home/sections/DiscountSection";
import { CarouselSectionHome } from "./home/sections/carousel/CarouselSectionHome";

export const HomePage = () => {
  return (
    <>
    <Container>
      
         
    <DiscountSection/>
    <CarouselSectionHome/>
    </Container> 

    </>
  );
};
