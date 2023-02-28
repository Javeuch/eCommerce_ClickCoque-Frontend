import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { URL_HOME } from './../shared/constants/urls/urlConstants';

/* import useDispatch from 'react-redux'; */
const ShoppingCartView = () => {
    let shippingCost = 0; /* [0, 3.99, 6.99]; */
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(cartFromLocalStorage);

    const getTotalPrice = () => {
        return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
    };
    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        if (amount > 0) {
            newCart.find((item) => item.name === product.name).quantity = amount;
        }
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('storage'));
    };
    const { goBack } = useHistory();

    // Function remove article from cart
    const removeFromCart = (item) => {
        cart.splice(item.index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart([...cart]);
        window.dispatchEvent(new Event('storage'));
    };

    // Cumulative function of articles
    const getTotalArticles = () => {
        let qty = 0;
        for (let i = 0; i < cart.length; i++) {
            qty += cart[i].quantity;
        }
        return qty;
    };

    return (
        <div className="flex md:flex-row flex-col justify-end">
            <div
                className="lg:w-3/4 w-full md:pl-10 pl-4 pr-4 md:pr-4 md:py-6 py-8 bg-gray-100 overflow-y-auto overflow-x-hidden h-screen"
                id="scroll"
            >
                {cart.length === 0 ? (
                    <h3 className="text-center text-gray-300 mt-24 mb-24">
                        Votre panier est actuellement vide
                    </h3>
                ) : (
                    <h4 className="flex-row  ml-32 text-4xl text-center font-black text-gray-800 my-8  md:container md:mx-auto">
                        Panier
                    </h4>
                )}

                {cart.map((product, index) => {
                    return (
                        <div
                            key={index}
                            className="md:flex items-center mt-4 pr-4 border-t border-gray-200 bg-white"
                        >
                            <div className="w-1/4 pl-20">
                                <img
                                    src={product.photoProducts[0].url_photo}
                                    className="w-1/2 h-1/2 object-center object-cover"
                                />
                            </div>
                            <div className="md:pl-20 md:w-3/4">
                                <div className="flex items-center justify-between w-full pt-1">
                                    <p className="text-base font-black leading-none text-gray-800">
                                        {product.name}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-5 pr-6">
                                    <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                                        ref : {product.reference}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-5 pr-6">
                                    <p className="text-base font-black leading-none text-gray-800">
                                        {product.price} €
                                    </p>
                                </div>
                            </div>

                            <div className="sm:max-w-4 grid grid-cols-3 w-32">
                                <button
                                    className="btn h-8 text-xl mt-5 p-3"
                                    value={product.quantity - 1}
                                    onClick={(e) =>
                                        setQuantity(product, parseInt(e.target.value))
                                    }
                                >
                                    -
                                </button>
                                <input
                                    className="h-8 text-xl mt-5 p-3"
                                    value={product.quantity}
                                    onChange={(e) =>
                                        setQuantity(product, parseInt(e.target.value))
                                    }
                                />
                                <button
                                    className="btn h-8 text-xl mt-5 p-3"
                                    value={product.quantity + 1}
                                    onClick={(e) =>
                                        setQuantity(product, parseInt(e.target.value))
                                    }
                                >
                                    +
                                </button>

                                <button
                                    className="btn flex w-24 mx-auto mt-4 mb-4"
                                    onClick={() => removeFromCart({ index })}
                                >
                                    <div className="w-1/5">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z" />
                                        </svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    );
                })}

                <div className="flex flex-rows-2 mt-8">
                    <Link
                        to={URL_HOME}
                        className="flex-row text-sm  leading-none decoration-gray-700 italic ml-28 h-4
                            transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-10 hover:bg-yellow-600 decoration-white duration-300 ..."
                    >
                        &larr; Continuer mes achats
                    </Link>
                    {/*  <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-chevron-left ml-60"
                            width={16}
                            height={16}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg> */}
                    <div className="flex">
                        {/* Condition Cart is not empty: Global Trash appears */}
                        {cart.length != 0 && (
                            <button
                                className="btn flex flex-wrap text-gray color-gray-200  ml-72 w-28"
                                onClick={() => {
                                    localStorage.clear();
                                    window.dispatchEvent(new Event('storage'));
                                    setCart([]);
                                }}
                            >
                                {/* Trash Cart Icon */}
                                <div className="flex-col text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className=""
                                    >
                                        <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                                    </svg>
                                    <div className="text-center mt-1">Vider</div>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="xl:w-1/4 md:w-1/3 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:max-h-full px-5 py-14 justify-between overflow-y-auto bg-gray-200">
                    <div className="bg-white px-18">
                        <p className="text-4xl font-black leading-9 text-gray-800 text-center bg-gray-200 py-5">
                            Résumé
                        </p>
                        <div className="flex items-center justify-between pt-16">
                            <p className="text-sm leading-none text-gray-800 px-8">
                                Nombre d'articles :
                            </p>
                            <p className="text-base leading-none text-gray-800 px-8">
                                {getTotalArticles()}
                            </p>
                        </div>
                        {/*                         <div className="flex items-center justify-between pt-16">
                            <p className="text-sm leading-none text-gray-800 px-8">
                                Sous-total :{' '}
                            </p>
                            <p className="text-sm leading-none text-gray-800 px-8">
                                {getTotalPrice()} €
                            </p>
                        </div> */}
                        {/* Shipping costs unuseful on this page */}
                        {/*                         <div className="flex items-center justify-between pt-5">
                            <p className="text-sm leading-none text-gray-800 px-8">
                                Frais de livraison :
                            </p>
                            <p className="text-sm leading-none text-gray-800 px-8">
                                {shippingCost} €
                            </p>
                        </div> */}
                    </div>
                    <div>
                        <div className="flex items-center pb-6 justify-between lg:pt-22 px-8 bg-white">
                            <div className="text-sm leading-normal text-gray-800 pt-20">
                                Total Hors Frais De Livraison :
                            </div>
                            <div className="shrink-0 text-xl font-bold leading-normal text-right text-gray-800 pt-20">
                                {getTotalPrice()} €
                            </div>
                        </div>
                        <Link to="/order-view">
                            <button className="text-base leading-none w-full py-5 mt-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                Valider la commande
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartView;
