import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';
import { Box } from '@mui/material';

const ProductList = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default ProductList;
