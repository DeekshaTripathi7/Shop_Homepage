import { Navbar, Nav, Form, Button, NavDropdown } from "react-bootstrap";

export const Navbars = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto mb-2 mb-lg-0 ms-lg-4">
          <Nav.Link href="#home" active>
            Home
          </Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#all-products">
              All Products
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#popular-items">
              Popular Items
            </NavDropdown.Item>
            <NavDropdown.Item href="#new-arrivals">
              New Arrivals
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Button variant="outline-dark">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              0
            </span>
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
