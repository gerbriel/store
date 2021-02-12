import React, {useState, useEffect} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import ProductGrid from './components/Product/ProductGrid';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [ items, setItems ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://fakestoreapi.com/products/1`)
      
      console.log(result.data)
      
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <div className="App">
      <Navigation/>
      <div>
        <ProductGrid isLoading={isLoading} items={items}/>
        <hr/>
        <Cart/>
      </div>
 
    </div>
  )
}

export default App;
