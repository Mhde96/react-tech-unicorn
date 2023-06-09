import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const PlatformLayout = () => {
  return (
    <>
     <Container>
      <Header />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
