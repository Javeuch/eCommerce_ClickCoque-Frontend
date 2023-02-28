import React, { useEffect, useState } from 'react';

import apiBackEnd from '../../../api/backend/api.Backend';
import ProductItem from './ProductItem';
import { useHistory } from 'react-router-dom';

/**
@author Maxime 
*/

function AccessoryList() {
    const [accessoryList, setAccessoryList] = useState([]);
    const [rangeValue, setRangeValue] = useState(4);
    const history = useHistory();

    useEffect(() => {
        apiBackEnd
            .get('http://localhost:8080/api/product/category/2?page0&size=8')
            .then((response) => {
                setAccessoryList(response.data);
            });
    }, []);

    return (
        <div className="bg-gray-200">
            <ul className="sm:grid grid-cols-4 auto-cols-auto gap-5 mx-20">
                {accessoryList
                    .slice(0, rangeValue)
                    .map(
                        ({
                            id_product,
                            photoProducts,
                            average_notation,
                            name,
                            stock,
                            taxe,
                            price,
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
                                />
                            );
                        },
                    )}
            </ul>

            {/* ------ Bouton fin de card list ------ */}
            <button
                onClick={() => {
                    if (rangeValue == 4) {
                        setRangeValue(8);
                    } else {
                        history.push('/accessory-list');
                    }
                }}
                className="btn_home_cardList my-10 z-20"
                type="button"
                defaultValue={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
            >
                Découvrir davantage
            </button>
        </div>
    );
}

export default AccessoryList;
