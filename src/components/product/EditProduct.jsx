import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const EditProduct = () => {
  const { saveChanges, getOneProduct, oneProduct } = useProducts();
  const [product, setProduct] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
    price: 0,
  });

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);

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
        EDIT PRODUCT
      </Typography>
      <TextField
        value={product.title}
        onChange={handleInput}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
      />
      <TextField
        value={product.category}
        onChange={handleInput}
        fullWidth
        name="category"
        label="Category"
        variant="outlined"
      />
      <TextField
        value={product.description}
        onChange={handleInput}
        fullWidth
        name="description"
        label="Description"
        variant="outlined"
      />
      <TextField
        value={product.price}
        onChange={handleInput}
        fullWidth
        name="price"
        type="number"
        label="Price"
        variant="outlined"
      />
      <TextField
        value={product.image}
        onChange={handleInput}
        fullWidth
        name="image"
        label="Image URL"
        variant="outlined"
      />
      <Button
        onClick={() => saveChanges(id, product)}
        fullWidth
        variant="outlined"
      >
        SAVE CHANGES
      </Button>
    </Box>
  );
};

export default EditProduct;
