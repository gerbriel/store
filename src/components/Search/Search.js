import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const Search = ({getQuery})=>{
    const [text, setText]=useState('')
    const [ query, setQuery ] = useState('')
    const onChange=(q)=> {
        setText(q)
        getQuery(q)
    }

    return(
        <Form className='search' >
            <FormControl
            getQuery={(q) => setQuery(q)} 
            type='text'
            placeholder='Search...'
            className='mr-sm-2'
            value={text}
            autoFocus
            onChange={(e) => onChange(e.target.value)}
            />
        </Form>

    )
}

export default Search; 