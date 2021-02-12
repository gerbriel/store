import React from 'react';

const ProductGrid = ({ items, isLoading }) => {
    return isLoading ? (
    <p>loading...</p>
    ) : (
    <section>
        {items.map(item => (
            <h1>{item.title}</h1>
        ))}
    </section>
    )
}
export default ProductGrid