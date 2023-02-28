import React, { useEffect, useState } from 'react';

import apiBackEnd from '../../../api/backend/api.Backend';
import ProductItem from './ProductItem';
import { useHistory } from 'react-router-dom';

function RecentList() {
    const [recentList, setRecentList] = useState([]);
    const [rangeValue, setRangeValue] = useState(4);
    const history = useHistory();

    useEffect(() => {
        apiBackEnd.get('http://localhost:8080/api/product/recent').then((response) => {
            setRecentList(response.data);
        });
    }, []);

    return (
        <div>
            <ul className="grid grid-cols-4 auto-rows-max gap-5 mx-20">
                {recentList
                    .slice(0, rangeValue)
                    .map(
                        ({
                            id_product,
                            photoProducts,
                            average_notation,
                            date_of_insert,
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
                                    date_of_insert={date_of_insert}
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
                        history.push('/recent-list');
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

export default RecentList;
