import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";

export default function MyNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById("contact-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Ana Sayfa butonuna tıklandığında en üste scroll yapacak fonksiyon
  const handleHomeClick = (e) => {
    e.preventDefault();
    // Eğer zaten ana sayfadaysak, window.scrollTo ile en üste yumuşakça kaydır
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Eğer başka bir sayfadaysak önce ana sayfaya yönlendir, sonra en üste kaydır
      navigate("/", { replace: false });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/img/logo2.png"
            alt="Logo"
            height="40"
            style={{ objectFit: "contain" }}
            className="me-2"
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          {/* Ana Sayfa butonuna özel onClick ekliyoruz */}
          <Nav.Link as={Link} to="/" onClick={handleHomeClick}>Ana Sayfa</Nav.Link>
          <Nav.Link as={Link} to="/kategoriler">Kategoriler</Nav.Link>
          <Nav.Link href="#contact-section" onClick={handleContactClick}>İletişim</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
