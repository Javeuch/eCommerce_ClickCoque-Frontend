import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import apiBackEnd from '../api/backend/api.Backend';
import ProductItem from '../shared/components/container/ProductItem';
import { URL_BRANDVIEW } from '../shared/constants/urls/urlConstants';
import ScrollToTop from '../shared/components/utils-components/ScrollToTop';

/**
 * @Author Maxime
 */

const BrandListView = () => {
    const [value, setValue] = useState();
    const history = useHistory();
    const { brandId, label } = useParams();

    const routeChange = () => {
        let path = `/brand/1/:brandId`;
        history.push(path);
    };
    const [brandList8, setBrandList8] = useState([]);
    useEffect(() => {
        apiBackEnd
            .get('http://localhost:8080/api/product/brand/1/8?page0&size=')
            .then((response) => {
                setBrandList8(response.data);
            });
    }, []);

    const [brandList1, setBrandList1] = useState([]);
    useEffect(() => {
        apiBackEnd
            .get('http://localhost:8080/api/product/brand/1/1?page0&size=')
            .then((response) => {
                setBrandList1(response.data);
            });
    }, []);

    const [brandList11, setBrandList11] = useState([]);
    useEffect(() => {
        apiBackEnd
            .get('http://localhost:8080/api/product/brand/1/11?page0&size=')
            .then((response) => {
                setBrandList11(response.data);
            });
    }, []);

    const [brandList5, setBrandList5] = useState([]);
    useEffect(() => {
        apiBackEnd
            .get('http://localhost:8080/api/product/brand/1/5?page0&size=')
            .then((response) => {
                setBrandList5(response.data);
            });
    }, []);

    const [brandList12, setBrandList12] = useState([]);
    useEffect(() => {
        apiBackEnd
            .get('http://localhost:8080/api/product/brand/1/12?page0&size=')
            .then((response) => {
                setBrandList12(response.data);
            });
    }, []);

    const [brandList4, setBrandList4] = useState([]);
    useEffect(() => {
        apiBackEnd
            .get('http://localhost:8080/api/product/brand/1/4?page0&size=')
            .then((response) => {
                setBrandList4(response.data);
            });
    }, []);

    // "if" avoid loading error "undefined"
    if (brandList8.length > 0) {
        console.log('reponse', value);
    }

    return (
        <div className="bg-gray-100 h-full w-full">
            <ScrollToTop />
            <h1 className="text-center mt-20">Nos Coques Par Marque </h1>
            <ul>
                <div>
                    <Link to={'/brand/huawei/8'}>
                        <button className="btn-yellow mt-28 ml-20 text-4xl rounded-lg">
                            <p className="p-5">Huawei</p>
                        </button>
                    </Link>
                </div>
                <div>
                    <ul className="grid grid-cols-4 auto-rows-max gap-5 mx-20">
                        {brandList8.map(
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
                </div>

                <li>
                    <Link to={'/brand/samsung/1'}>
                        <button className="btn-yellow mt-28 ml-20 text-4xl rounded-lg">
                            <p className="p-5">Samsung</p>
                        </button>
                    </Link>
                </li>
                <div>
                    <ul className="grid grid-cols-4 auto-rows-max gap-5 mx-20">
                        {brandList1.map(
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
                </div>

                <li>
                    <Link to={'/brand/xiaomi/11'}>
                        <button className="btn-yellow mt-28 ml-20 text-4xl rounded-lg">
                            <p className="p-5">Xiaomi</p>
                        </button>
                    </Link>
                </li>
                <div>
                    <ul className="grid grid-cols-4 auto-rows-max gap-5 mx-20">
                        {brandList11.map(
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
                </div>
                <li>
                    <Link to={'/brand/apple/5'}>
                        <button className="btn-yellow mt-28 ml-20 text-4xl rounded-lg">
                            <p className="p-5">Apple</p>
                        </button>
                    </Link>
                </li>
                <div>
                    <ul className="grid grid-cols-4 auto-rows-max gap-5 mx-20">
                        {brandList5.map(
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
                </div>
                <li>
                    <Link to={'/brand/sony/12'}>
                        <button className="btn-yellow mt-28 ml-20 text-4xl rounded-lg">
                            <p className="p-5">Sony</p>
                        </button>
                    </Link>
                </li>
                <div>
                    <ul className="grid grid-cols-4 auto-rows-max gap-5 mx-20">
                        {brandList12.map(
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
                </div>
                <li>
                    <Link to={'/brand/google/4'}>
                        <button className="btn-yellow mt-28 ml-20 text-4xl rounded-lg">
                            <p className="p-5">Google</p>
                        </button>
                    </Link>
                </li>
                <div>
                    <ul className="grid grid-cols-4 auto-rows-max gap-5 mx-20">
                        {brandList4.map(
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
                </div>
            </ul>
        </div>
    );
};

export default BrandListView;
