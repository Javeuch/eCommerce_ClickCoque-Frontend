import React, { useEffect, useState } from 'react';
import apiBackEnd from '../../../api/backend/api.Backend';
import ProductItem from './ProductItem';
import { useHistory } from 'react-router-dom';

function FavoriteList() {
    const [favoriteList, setFavoriteList] = useState([]);
    const [rangeValue, setRangeValue] = useState(4);
    const history = useHistory();

    /**
    @author Maxime
    */

    useEffect(() => {
        apiBackEnd.get('http://localhost:8080/api/product/favorite').then((response) => {
            setFavoriteList(response.data);
        });
    }, []);

    return (
        <div className="mt-20">
            <ul className="grid grid-cols-4 auto-rows-max gap-5 mx-20">
                
                {favoriteList
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
            {/* ------ Bouton fin de card list ------ */}
            <button
                onClick={() => {
                    if (rangeValue == 4) {
                        setRangeValue(8);
                    } else {
                        history.push('/favorite-list');
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

export default FavoriteList;
