import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
