import React from 'react';
import '../Cart/Cart.css';


export default function Cart(props) {
  const {cartItems}=props;
    return (
      <aside>
      <h2>Shopping cart</h2>

        {cartItems.length === 0 && 
          <div>
          <br/>
          <h5>title: n/a </h5>
          <p>qty: 0</p>
          <p>Total: $0 </p>
          <button className='add-cart-button'> add </button>
          <button className='remove-cart-button'> remove</button>

          <hr/>
    
          </div>
      }
</aside>
    );
  }
  