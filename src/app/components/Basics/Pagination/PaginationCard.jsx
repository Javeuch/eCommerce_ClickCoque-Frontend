import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function FavoriteListPagination() {

    const [items, setItem] = useState([]);

    useEffect(() => {
        apiBackEnd.get('http://localhost:8080/Product/favorite').then((response) => {
            setItem(response.data);
        });
    }, []);
}

export default FavoriteListPagination;
