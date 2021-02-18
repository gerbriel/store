import React from 'react';



export default function Cart(props) {
  const {cartItems}=props;
    return (
      <aside>
      <h2>Shopping cart</h2>

        {cartItems.length === 0 && 
          <div>
          Cart is Empty 
          <hr/>
    
          </div>
      }
</aside>
    );
  }