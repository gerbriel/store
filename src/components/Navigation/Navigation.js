import './Navigation.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Search from '../Search/Search';
import ProductGrid from '../Product/ProductGrid';
import { Switch, Route } from 'react-router-dom';


// const getQuery=()=>{
//   return(

//   )
// }
const Navigation = (props) => {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">FakeStoreAPI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="mr-auto"></Nav>

      <Search/>

      <Form inline>
      <Nav.Link href="/product-details">Product Details</Nav.Link>
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/auth">Login</Nav.Link>
      <Nav.Link bg="light"href="/log-out">Log out</Nav.Link>
    </Form>
    </Navbar.Collapse>
    
  </Navbar>
    );
  };

  export default Navigation;