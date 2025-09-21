import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo_cpem.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="nav-dimensions">
      <Container className="d-flex align-items-center justify-content-between px-0">
        <div className="logo-container">
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="Logo Cpem N°83" />
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-between w-100"
        >
          <Nav className="nav-links d-flex justify-content-center">
            <Nav.Link className="text-dark mx-2" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-dark mx-2" href="#features">
              About
            </Nav.Link>
            <Nav.Link className="text-dark mx-2" href="#pricing">
              Academics
            </Nav.Link>
            <Nav.Link className="text-dark mx-2" href="#pricing">
              Activities
            </Nav.Link>
          </Nav>

          <div className="container-socialNet d-flex justify-content-end">
            <a
              href="https://www.facebook.com/cpem.taquimilan.2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook mx-2"></i>
            </a>

            <i className="bi bi-instagram mx-2"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
