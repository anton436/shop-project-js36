import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import CategorySelect from './CategorySelect';

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    price: 0,
  });

  const handleInput = (e) => {
    if (e.target.name === 'price') {
      const obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      const obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };

  return (
    <Box sx={{ width: '50vw', margin: '20px auto' }}>
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInput}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
      />
      <CategorySelect/>
      <TextField
        onChange={handleInput}
        fullWidth
        name="description"
        label="Description"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="price"
        type="number"
        label="Price"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="image"
        label="Image URL"
        variant="outlined"
      />
      <Button onClick={() => addProduct(product)} fullWidth variant="outlined">
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
