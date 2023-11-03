import React from 'react';
import ProductList from '../components/product/ProductList';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';

const ProductPage = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{ width: "300px", flex: "none"}}><CategoryFilter/></div>
            <ProductList/>
        </div>
    );
};

export default ProductPage;