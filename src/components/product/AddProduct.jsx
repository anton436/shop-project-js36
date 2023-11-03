import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
    const {addProduct} = useProducts()
    const [product, setProduct] = useState({
        title: '',
        category:'',
        description: '',
        price: '',
        image:''
    })
    const handleInput = (e) =>{
        if(e.target.name === 'price'){
            const obj = {...product, [e.target.name] : Number(e.target.value)}
            setProduct(obj) 
        }
        else{
            const obj = {...product, [e.target.name] : e.target.value}
            setProduct(obj) 
        }
    }
    return (
        <div>
            <Box sx={{width: '50vw', margin: '20px auto'}}>
                <Typography variant='h4' align='center'>ADMIN PAGE</Typography>
                <TextField onChange={handleInput} fullWidth name='title' label="Title" variant="outlined" />
                <TextField onChange={handleInput} fullWidth name='category' label="Category" variant="outlined" />
                <TextField onChange={handleInput} fullWidth name='description' label="Description" variant="outlined" />
                <TextField onChange={handleInput} type='number' fullWidth name='price' label="Price" variant="outlined" />
                <TextField onChange={handleInput} fullWidth name='image' label="Image URL" variant="outlined" />
                <Button onClick={()=>addProduct(product)} fullWidth variant='outlined'>ADD PRODUCT</Button>
            </Box>
        </div>
    );
};

export default AddProduct;