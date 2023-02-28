import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiBackEnd from '../../../api/backend/api.Backend';
import ProductItem from './ProductItem';

// List of cases by brand

const BrandList = () => {
    const [brandList, setBrandList] = useState([]);
    const { brandId } = useParams();

    useEffect(() => {
        apiBackEnd
            .get(`http://localhost:8080/api/product/brand/1/${brandId}?page0`)
            .then((response) => {
                setBrandList(response.data);
            });
    }, [brandId]);

    return (
        <div>
            <ul>
                <div>
                    <ul className="grid sm:grid-cols-2 auto-rows-max gap-40 mx-40">
                        {brandList.map(
                            ({
                                id_product,
                                photoProducts,
                                average_notation,
                                name,
                                stock,
                                taxe,
                                price,
                                label,
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
                                        label={label}
                                    />
                                );
                            },
                        )}
                    </ul>
                </div>
            </ul>
        </div>
    );
};

export default BrandList;
