import React, { useState, useEffect } from 'react';
import { myAccount } from '../api/backend/account.js';
import { Link } from 'react-router-dom';
import la_poste from '../assets/images/page_commande/la_poste.png';
import mondial_relay from '../assets/images/page_commande/mondial_relay.png';
import boutique from '../assets/images/page_commande/boutique.png';
import cb from '../assets/images/page_commande/cb.png';
import visa from '../assets/images/page_commande/visa.png';
import mastercard from '../assets/images/page_commande/mastercard.png';
import paypal from '../assets/images/page_commande/paypal.png';
/**
 * Toast message imports below (installation: npm install --save react-toastify)
 */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderPaymentView = ({ id }) => {
    //TODO: replace the hard-coded id=2 with an id from connection
    const [user, setUser] = useState([]);
    useEffect(() => {
        id = 2;
        myAccount(id).then((response) => {
            setUser(response.data);
        });
    }, []);

    const [checked, setChecked] = useState(false);
    // Function setting shipping costs in radio buttons selection
    const [shippingCosts, setShippingCosts] = useState();
    const onChangeShippingCosts = (event) => {
        /* setChecked(true); */
        setShippingCosts(parseFloat(event.target.value));
    };

    // Cumulative function of articles
    const getTotalArticles = () => {
        let qty = 0;
        for (let i = 0; i < cart.length; i++) {
            qty += cart[i].quantity;
        }
        return qty;
    };

    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    const [cart, setCart] = useState(cartFromLocalStorage);

    const getTotalPrice = () => {
        return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
    };

    // Toast message function
    const showToastMessage = () => {
        shippingCosts !== undefined
            ? toast.success('Commande  réalisée avec succès', {
                  position: toast.POSITION.TOP_RIGHT,
              })
            : toast.warning('Veuillez renseigner le mode de livraison !', {
                  position: toast.POSITION.TOP_LEFT,
              });
    };

    return (
        <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div
                className="  active lg:w-3/4 w-full md:pl-10 pl-4 pr-4 md:pr-4 md:py-12 py-8 bg-gray-200 overflow-y-auto overflow-x-hidden h-screen"
                id="scroll"
            >
                <h4 className="text-left md:container md:mx-auto flex-row mx-auto ml-32 pb-10 text-4xl text-center font-black text-gray-800">
                    Payer Ma Commande
                </h4>

                {/* Address information section */}
                <section className="container bg-white px-5 py-2">
                    <h6 className="text-2xl font-bold mt-5">Adresse De Livraison</h6>

                    {/* Last name & Firstname */}
                    <div className="flex flex-row py-10">
                        <div className="basis-1/2">
                            <p className="font-bold">Nom</p>
                            <br />
                            {user.lastName}
                        </div>
                        <div className="basis-1/2">
                            <p className="font-bold">Prénom</p>
                            <br />
                            {user.firstName}
                        </div>
                    </div>

                    {/* Address: number and street */}
                    <div>
                        <p className="font-bold">Adresse</p>
                        <br />
                        {user?.address?.number} rue {user?.address?.street}
                    </div>

                    {/* Town & Zipcode */}
                    <div className="flex flex-row py-10">
                        <div className="basis-1/2">
                            <p className="font-bold">Ville</p>
                            <br />
                            {user?.address?.city}
                        </div>
                        <div className="basis-1/2">
                            <p className="font-bold">Code Postal</p>
                            <br />
                            {user?.address?.zipcode}
                        </div>
                    </div>

                    {/* Country */}
                    <div className="flex flex-row py-10">
                        <div className="basis-1/2">
                            <p className="font-bold">Pays</p>
                            <br />
                            {user?.address?.country}
                        </div>
                    </div>
                </section>

                {/* Adrress modification button */}
                <Link to="/update-account">
                    <button className="text-base leading-none my-5 py-5 px-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                        Modifier Mon Adresse
                    </button>
                </Link>
                {/* Delivery method section */}
                <section className="container bg-white px-5 pt-5">
                    <h6 className="text-2xl font-bold">Mode De Livraison</h6>

                    {/* Delivery organism */}
                    <div className="flex flex-row py-10">
                        <div className="basis-2/5">
                            <p>La Poste (Colissimo)</p>
                            <br />
                            <p>Point Relais</p>
                            <br />
                            <p>Retrait En Magasin</p>
                            <br />
                        </div>
                        <div className="basis-1/5">
                            <p>6 €</p>
                            <br />
                            <p>3,99 €</p>
                            <br />
                            <p>Gratuit</p>
                            <br />
                        </div>
                        <div className="basis-1/5">
                            <img className="w-auto h-6" src={la_poste} alt="" />
                            <br />
                            <img className="w-auto h-6" src={mondial_relay} alt="" />
                            <br />
                            <img className="w-auto h-6" src={boutique} alt="" />
                            <br />
                        </div>
                        <div className="basis-1/5">
                            <div className="flex justify-left">
                                <div className="form-check">
                                    <input
                                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio"
                                        name="RadioDelivery"
                                        value="6"
                                        onChange={onChangeShippingCosts}
                                    />

                                    <div className="form-check pt-12">
                                        <input
                                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="RadioDelivery"
                                            value="3.99"
                                            onChange={onChangeShippingCosts}
                                        />

                                        <div className="form-check pt-12">
                                            <input
                                                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                type="radio"
                                                name="RadioDelivery"
                                                value="0"
                                                onChange={onChangeShippingCosts}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Just to separate sections */}
                <div className="h-10"></div>

                {/* Means of payment section */}
                <section className="container bg-white px-5 pt-5">
                    <h6 className="text-2xl font-bold">Moyen De Paiement</h6>

                    {/* Last name & Firstname */}
                    <div className="flex flex-row py-10">
                        <div className="basis-1/3">
                            <p>Carte Bancaire</p>
                            <br />
                            <p>Visa</p>
                            <br />
                            <p>Mastercard</p>
                            <br />
                            <p>Paypal</p>
                            <br />
                        </div>
                        <div className="basis-1/3">
                            <img className="w-auto h-6" src={cb} alt="" />
                            <br />
                            <img className="w-auto h-6" src={visa} alt="" />
                            <br />
                            <img className="w-auto h-6" src={mastercard} alt="" />
                            <br />
                            <img className="w-auto h-6" src={paypal} alt="" />
                            <br />
                        </div>
                        <div className="basis-1/3">
                            <div className="flex justify-left">
                                <div className="form-check">
                                    <input
                                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="radio"
                                        name="RadioPayment"
                                        id="RadioPayment1"
                                        readOnly
                                    />
                                    <div className="form-check pt-12">
                                        <input
                                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="RadioPayment"
                                            id="RadioPayment2"
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-check pt-12">
                                        <input
                                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="RadioPayment"
                                            id="RadioPayment3"
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-check pt-12">
                                        <input
                                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-500 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="radio"
                                            name="RadioPayment"
                                            id="RadioPayment4"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                        <div className="flex items-center justify-between pt-16">
                            <p className="text-sm leading-none text-gray-800 px-8">
                                Sous-total :
                            </p>
                            <p className="text-sm leading-none text-gray-800 px-8">
                                {getTotalPrice()} €
                            </p>
                        </div>
                        <div className="flex items-center justify-between pt-5">
                            <p className="text-sm leading-none text-gray-800 px-8">
                                Frais de livraison :
                            </p>
                            <p className="text-sm leading-none text-gray-800 px-8">
                                {shippingCosts} €
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center pb-6 justify-between lg:pt-22 px-8 bg-white">
                            <p className="text-2xl leading-normal text-gray-800 pt-20">
                                Total TTC :
                            </p>
                            <p className="text-2xl font-bold leading-normal text-right text-gray-800 pt-20">
                                {(getTotalPrice() + shippingCosts).toFixed(2) || 0} €
                            </p>
                        </div>

                        <div>
                            <button
                                className="text-base leading-none w-full py-5 mt-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                                onClick={showToastMessage}
                            >
                                Payer Ma Commande
                            </button>
                            {/* <ToastContainer /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPaymentView;
