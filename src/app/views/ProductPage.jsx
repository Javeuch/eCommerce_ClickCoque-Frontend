import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
/* import {addToCart} from './../shared/redux-store/cartSlice'; */

// Images besoin d'aide et Colis
import imgCard02 from '../assets/images/HomePage/boite_en_carton_fermee_avec_ruban_demballage.png';
import imgCard03 from '../assets/images/HomePage/picto_televendeur.png';

import { idDetailProduct } from '../api/backend/account';

const ProductPage = ({ id }) => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(cartFromLocalStorage);
    const addToCart = (cartItem) => {
        let newCart = [...cart];
        let productInCart = cart.find((item) => cartItem.name === item.name);
        if (productInCart) {
            productInCart.quantity++;
        } else {
            productInCart = {
                ...cartItem,
                quantity: 1,
            };
            newCart.push(productInCart);
        }
        setCart(newCart);
    };

/*     // Initialisation du Dispatcher
    const dispatch = useDispatch();
    // Function to Add a card to cart
    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }; */

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('storage'));
    }, [cart]);

    const [product, setProduct] = useState([]);
    useEffect(() => {
        idDetailProduct(id).then((response) => {
            setProduct(response.data);
        });
    }, []);

    return (
        <div className="w-full h-full my-10 bg-gray-100">
            <div className="w-full sm:flex sm:flex-grow sm:gap-10 ">
                {/* Left part */}
                <div className="sm:w-1/3 flex-row sm:ml-10 justify-center">
                    {/* Image produit*/}
                    <div className="w-auto h-full flex mx-5 sm:mx-0 sm:h-[225px] lg:h-[425px] object-contain bg-center justify-center bg-white ">
                        {product.photoProducts?.map((img) => (
                            <img key={img.url_photo} src={img.url_photo} />
                        ))}
                    </div>

                    {/* Image suplémentaires */}
                    <div>
                        <ul className="absolute sm:relative invisible sm:visible w-auto flex sm:flex-grow gap-2 justify-center mt-10">
                            <li>
                                {product.photoProducts?.map((img) => (
                                    <img
                                        className="w-[75px] h-[75px] object-contain bg-white"
                                        key={img.url_photo}
                                        src={img.url_photo}
                                    />
                                ))}
                            </li>
                            <li>
                                {product.photoProducts?.map((img) => (
                                    <img
                                        className="w-[75px] h-[75px] object-contain bg-white"
                                        key={img.url_photo}
                                        src={img.url_photo}
                                    />
                                ))}
                            </li>
                            <li>
                                {product.photoProducts?.map((img) => (
                                    <img
                                        className="w-[75px] h-[75px] object-contain bg-white"
                                        key={img.url_photo}
                                        src={img.url_photo}
                                    />
                                ))}
                            </li>
                            <li>
                                {product.photoProducts?.map((img) => (
                                    <img
                                        className="w-[75px] h-[75px] object-contain bg-white"
                                        key={img.url_photo}
                                        src={img.url_photo}
                                    />
                                ))}
                            </li>
                            <li>
                                {product.photoProducts?.map((img) => (
                                    <img
                                        className="w-[75px] h-[75px] object-contain bg-white"
                                        key={img.url_photo}
                                        src={img.url_photo}
                                    />
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right part */}
                <div className="sm:w-1/2 flex-row mx-5 mt-4">
                    {/* Titre */}
                    <h2 className="text-center sm:text-left">{product.name}</h2>

                    {/* Description */}
                    <p className="min-h-[150px] sm:min-h-[120px] lg:h-auto my-4 mr-5 text-center sm:text-left overflow-hidden">
                        {product.description}
                        {product.dateOfInsert}
                    </p>

                    {/* Prix */}
                    <p className="text-4xl font-extrabold text-center sm:text-left">
                        {product.price}€
                    </p>

                    {/* Pastile de couleurs */}
                    <div className="w-full flex flex-row gap-5 my-10 sm:my-5 justify-center sm:justify-start">
                        <p className="absolute sm:relative invisible  sm:visible font-bold text-2xl text-start items-center sm:mr-10">
                            couleurs :
                        </p>
                        <a
                            className="btn_card justify-center flex flex-row rounded-full bg-black hover:ring-2 hover:outline-none hover:ring-gray-400 "
                            href="#"
                        ></a>
                        <a
                            className="btn_card flex flex-row rounded-full bg-gray-700 hover:bg-gray-800"
                            href="#"
                        ></a>
                        <a
                            className="btn_card flex flex-row rounded-full bg-red-700 hover:bg-red-800"
                            href="#"
                        ></a>
                        <a
                            className="btn_card flex flex-row rounded-full bg-blue-700 hover:bg-blue-800"
                            href="#"
                        ></a>
                    </div>

                    {/* Button */}
                    <div className="w-auto flex flex-wrap sm:w-4/5 sm:flex-nowrap sm:flex-row gap-5 my-5">
                        <button
                            type="submit"
                            className="btn_account btn w-full text-white focus:ring-2 focus:outline-none focus:ring-gray-400 hover:text-white"
                            onClick={() => addToCart(product)}
                            /* onClick={handleAddToCart(product)} */
                        >
                            Ajouter au panier
                        </button>
                        <button
                            type="submit"
                            className="btn_account btn w-full text-white focus:ring-2 focus:outline-none focus:ring-gray-400 hover:text-white"
                        >
                            Ajouter au Favoris
                        </button>
                    </div>

                    {/* Help */}
                    <div className="w-full grid grid-cols-2 justify-start pb-10 sm:pb-5">
                        <div className="flex gap-2 mt-10">
                            <img
                                className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
                                src={imgCard03}
                                alt=""
                            />
                            <div>
                                <h3 className="text-xl font-bold">Besoin d'aide ?</h3>
                                <p className="text-base font-normal">
                                    Une équipe à votre écoute 7j/7
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-10">
                            <img
                                className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
                                src={imgCard02}
                                alt=""
                            />
                            <div>
                                <h3 className="text-xl font-bold">Livraison Offerte</h3>
                                <p className="text-base font-normal">
                                    dès 30€ d’achat dans toute la France métropolitaine
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
