import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/row';
import './Product.css';
import LinesEllipsis from 'react-lines-ellipsis';
import Filter from './Filter/Filter';

const ProductGrid = ({ items, isLoading}) => {
    return isLoading ? (
    <p>loading...</p>
    ) : (
    <div className='grid'>
    <Filter items={items}></Filter>
        {items.map((item, index)=> (
            <div className='box' key={index}>
                <img src={item.image} alt={item.description}/>
                <p>{item.title}</p>
                <Container>
                    <Row>
                        <button>+</button>
                    </Row>
                </Container>
            </div>
        ))}
    </div>
    )

}
export default ProductGrid

