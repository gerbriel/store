
import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ items}) => {
    return (
    <div className='product-details'>
        {items.map((item, index)=> (
            <div className='filter' key={index}>
            <div className='filter-results'></div>
            <div className='filter-sort'>
            <row>
            <h5>{item.title}</h5>
            <img src={item.image} alt={item.description}/>
            <div>
                
                <p>${item.price}</p>
                <p>{item.category}</p>
                <p>{item.description}</p>
                <p>sku#{item.id}</p>
                <button className='add-button'>Add to cart</button>
            </div>
            </row>
            </div>
            <hr/>
            </div>
        ))}
    </div>
    )

}

export default ProductDetails;