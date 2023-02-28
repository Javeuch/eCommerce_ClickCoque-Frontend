import React, { useEffect, useState } from 'react';
import ProductList from '../shared/components/container/ProductList';


const ProductListView = () => {
    return (
        <section className="w-full mt-28 ">
            <div className="cardContainer">
                <ProductList />
            </div>
        </section>
    );
};

export default ProductListView;

