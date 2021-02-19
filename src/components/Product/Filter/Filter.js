import React from 'react';

const Filter = ({ items}) => {
    return (
    <div className='filter'>
            <div className='filter'>
            <div className='filter-results'></div>
            <div className='filter-sort'>filter
                <select>price
                    <option value='lowest'>lowest</option>
                    <option value='highest'>highest</option>
                </select>
            </div>
            <div className='filter-category'>
                <select>category
                    <option value='menclothing'>men clothing</option>
                    <option value='womenclothing'>women clothing</option>
                    <option value='jewelery'>jewelery</option>
                    <option value='electronics'>electronics</option>

                </select>
            </div>
            </div>
        
    </div>
    )

}

export default Filter;