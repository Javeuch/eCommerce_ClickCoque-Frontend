import React, { useEffect, useState } from 'react';
import apiBackEnd from '../api/backend/api.Backend';
import ProductItem from '../shared/components/container/ProductItem';

/**
    @author Maxime
    */

function GenericBrandListView() {
    const [value, setValue] = useState();
    const [caseList, setCaseList] = useState([]);

    useEffect(() => {
        apiBackEnd.get('http://localhost:8080/api/product/cases').then((response) => {
            setCaseList(response.data);
        });
    }, []);

    return (
        <div className="mt-20 bg-gray-100 h-full w-full">
            <ul className="flex inline-flex mx-20 space-x-48">
                <li>
                    <button
                        className="btn_card w-auto h-auto"
                        type="button"
                        name="brandButton"
                        onClick={() => setValue(8)}
                    >
                        Huawei
                    </button>
                </li>

                <li>
                    <button
                        className="btn_card w-auto h-auto"
                        type="button"
                        name="brandButton"
                        onClick={() => setValue(1)}
                    >
                        Samsung
                    </button>
                </li>

                <li>
                    <button
                        className="btn_card w-auto h-auto"
                        type="button"
                        name="brandButton"
                        onClick={() => setValue(11)}
                    >
                        Xiaomi
                    </button>
                </li>

                <li>
                    <button
                        className="btn_card w-auto h-auto"
                        type="button"
                        name="brandButton"
                        onClick={() => setValue(5)}
                    >
                        Apple
                    </button>
                </li>

                <li>
                    <button
                        className="btn_card w-auto h-auto"
                        type="button"
                        name="brandButton"
                        onClick={() => setValue(12)}
                    >
                        Sony
                    </button>
                </li>

                <li>
                    <button
                        className="btn_card w-auto h-auto"
                        type="button"
                        name="brandButton"
                        onClick={() => setValue(4)}
                    >
                        Google
                    </button>
                </li>
            </ul>
            <ul className="sm:flex flex-row mt-20">
                {caseList
                    .filter((caseList) => {
                        return caseList.brand.brandId === value;
                    })
                    .map(
                        ({
                            id_product,
                            photoProducts,
                            average_notation,
                            name,
                            stock,
                            taxe,
                            price,
                            description,
                            brand,
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
                                    description={description}
                                    brand={brand}
                                    label={label}
                                />
                            );
                        },
                    )}
            </ul>
        </div>
    );
}

export default GenericBrandListView;
