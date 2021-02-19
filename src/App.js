import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import ProductGrid from './components/Product/ProductGrid';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search/Search';
import Auth from './containers/Auth/Auth';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Logout from './components/Logout/Logout';
import ProductDetails from './components/Product/ProductDetails/ProductDetails';



const App = () => {
  const [ items, setItems ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ query, setQuery ] = useState('');
  const [cartItems, setCartItems ] = useState([]);
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://fakestoreapi.com/products?title=${query}`)
      
      console.log(result.data)
      
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <BrowserRouter>
    <div className="App">
    <Auth/>
      <Navigation/>
      <div>
      <Container>
        <Row>
        <ProductGrid isLoading={isLoading} items={items}/>
        </Row>
        <ProductDetails items={items}></ProductDetails>
      </Container>
      <Cart cartItems={cartItems}/>
      </div>
      <Logout />
    </div>
    </BrowserRouter>
  );
}

export default App;
