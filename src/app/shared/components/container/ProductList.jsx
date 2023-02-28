import produce from 'immer';
import React, { useEffect, useState } from 'react';
import apiBackEnd from '../../../api/backend/api.Backend';

import ProductItem from './ProductItem';

function ProductList() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        apiBackEnd.get('http://localhost:8080/api/product/favorite').then((response) => {
            setProductList(response.data);
        });
    }, []);
    /**
    @author Maxime
    */

    return (
        <div>
            <ul className="sm:flex flex-row mt-10">
                {productList.map(
                    ({
                        id_product,
                        photoProducts,
                        average_notation,
                        name,
                        stock,
                        taxe,
                        price,
                        description,
                    }) => {
                        return (
                            <ProductItem
                                key={id_product}
                                id_product={id_product}
                                photoProducts={photoProducts}
                                average_notation={average_notation}
                                name={name}
                                stock={stock}
                                taxe={taxe}
                                price={price}
                                description={description}
                            />
                        );
                    },
                )}
            </ul>
        </div>
    );
}

export default ProductList;
