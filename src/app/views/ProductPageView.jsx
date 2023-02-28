import React from 'react';
import ProductPage from './ProductPage';
import { useParams } from 'react-router-dom';
import ScrollToTop from '../shared/components/utils-components/ScrollToTop';

const ProductPageView = () => {
    const { idProduct } = useParams();

    return (
        <div>
            <ScrollToTop />
            <ProductPage id={idProduct} />
        </div>
    );
};
export default ProductPageView;
