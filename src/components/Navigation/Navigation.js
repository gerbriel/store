import './Navigation.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../Search/Search';

// const getQuery=()=>{
//   return(

//   )
// }

export default function Navigation (props) {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="#home">FakeStoreAPI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="mr-auto"></Nav>

      <Search/>
      <Form inline>
      <Nav.Link href="#product-details">Product Details</Nav.Link>
      <Nav.Link href="#cart">Cart</Nav.Link>
      <Nav.Link href="#checkout">Checkout</Nav.Link>
      <Nav.Link bg="light"href="#log-out">Log out</Nav.Link>
    </Form>
    </Navbar.Collapse>
  </Navbar>
    );
  };
