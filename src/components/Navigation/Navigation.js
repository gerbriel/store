import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation (props) {
    return (
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">FakeStoreAPI</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#product">Product</Nav.Link>
        <Nav.Link href="#product-details">Product Details</Nav.Link>
      </Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Nav.Link href="#sign-in">Sign in</Nav.Link>
      <Nav.Link href="#cart">Cart</Nav.Link>
      <Nav.Link href="#checkout">Checkout</Nav.Link>
    </Form>
    </Navbar.Collapse>
  </Navbar>
    );
  };
