import React from 'react';

import Carousel from '../components/Basics/Carousel/Carousel';
import FavoriteList from '../shared/components/container/FavoriteList';
import RecentList from '../shared/components/container/RecentList';
import AccessoryList from '../shared/components/container/AccessoryList';
import { Link } from 'react-router-dom'
import { URL_LISTBRAND } from './../shared/constants/urls/urlConstants';
import ScrollToTop from '../shared/components/utils-components/ScrollToTop';
/* import { ROLE_ADMIN } from './../shared/constants/rolesConstant';
import { URL_ADMIN_HOME } from './../shared/constants/urls/urlConstants';
import { hasRole } from './../shared/services/accountServices'; */

const HomeView = () => {
    return (
        // ------------------------   HOME BODY   ----------------------- \\
        <div className="flex flex-col w-full">
            <ScrollToTop />
            {/* -------------- Header Accueil ------------------ */}
            <div className="flex w-auto sm:w-full">
                <div className="flex flex-wrap w-full">
                    <div className="relatif flex flex-wrap w-full">
                        {/* Container */}
                        <img className="cover_home w-full" src="" alt="" />
                        <h1 className="title_home w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl mt-0 sm:mt-20 sm:text-5xl lg:text-6xl sm:transform-none sm:top-10 sm:left-5">
                            Nouvelle collection 2022 !
                        </h1>
                        <div className="flex items-center justify-center w-full -translate-y-20 lg:transform-none">
                            <Link to={URL_LISTBRAND}>
                                <button
                                    type="button"
                                    className="btn_home_discover flex items-center justify-center lg:right-10 lg:absolute"
                                >
                                    D&eacute;couvrir
                                </button>
                            </Link>
                        </div>
                        {/* Button */}
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------ */}

            {/* -------------- Accueil Pub #1 ------------------ */}
            <section className="bg-white bg-auto flex flex-row mb-2 sm:mb-5">
                {/* ---- Paiement sécurisé ---- */}
                <div className="pt-20 bg-white grow">
                    <div className="cadenas mx-auto flex flex-wrap" />
                    <h5 className="pt-8 text-xs sm:text-2xl font-bold  text-center ">
                        Paiements s&eacute;curis&eacute;s
                    </h5>
                    <p className="font-normal text-black text-center pb-8 text-xs sm:text-base">
                        Transactions prot&eacute;g&eacute;es et confidentielles
                    </p>
                </div>
                {/* ----Des prix très bas ---- */}
                <div className="pt-20 bg-white  grow">
                    <div className="price mx-auto flex flex-wrap" />
                    <h5 className="pt-8 sm:text-2xl text-xs font-bold text-center ">
                        Des prix très bas
                    </h5>
                    <p className="font-normal text-black text-center pb-8 text-xs sm:text-base">
                        Excellent rapport qualit&eacute;/prix
                    </p>
                </div>
                {/* ---- Retour facile ---- */}
                <div className="pt-20 bg-white grow">
                    <div className="recycle mx-auto flex flex-wrap" />
                    <h5 className="pt-8 sm:text-2xl font-bold text-center text-xs ">
                        Retour facile
                    </h5>
                    <p className="font-normal text-black text-center pb-8 text-xs sm:text-base">
                        Retournez votre commande sous 14 jours
                    </p>
                </div>
            </section>
            {/* ------------------------------------------------------ */}

            {/* -------------- Card list #1 - LES COUPS DE COEUR ------------------ */}
            <div className="relative w-full h-full bg-gray-200">
                <div className="w-full flex flew-grow h-full bg-gray-200">
                    <div className="absolute font-bold my-10 left-4 sm:left-0 sm:my-5 sm:ml-10 sm:text-left">
                        <h2 className="text-3xl sm:text-5xl">Les Coups De Coeur</h2>{' '}
                        {/* Titre card list */}
                    </div>

                    {/* ------ Cards ------ */}
                    <section className="w-full mt-28 ">
                        <div className="cardContainer">
                            <FavoriteList />
                        </div>
                    </section>
                </div>

                {/* ------ Degradé gris ------ */}
                <div className="absolute w-full z-0">
                    {/* <div className='grad1 relative w-full z-10'></div> */}
                </div>

                <hr className="hr_Style mb-10 sm:mb-0" />
            </div>
            {/* ------------------------------------------------------ */}

            {/* -------------- Card list #2 - LES NOUVEAUTES ------------------ */}
            <div className="relative w-full h-full bg-gray-200">
                <div className="w-full flex flew-grow h-full bg-gray-200">
                    <div className="absolute font-bold my-10 left-4 sm:left-0 sm:my-5 sm:ml-10 sm:text-left">
                        <h2 className="text-3xl sm:text-5xl">Les Nouveaut&eacute;s</h2>{' '}
                        {/* Titre card list */}
                    </div>

                    {/* ------ Cards ------ */}
                    <section className="w-full mt-28 ">
                        <div className="cardContainer">
                            <RecentList />
                        </div>
                    </section>
                </div>

                {/* ------ Degradé gris ------ */}
                <div className="absolute w-full z-0">
                    {/* <div className='grad1 relative w-full z-10'></div> */}
                </div>

                <hr className="hr_Style mb-10 sm:mb-0" />
            </div>
            {/* ------------------------------------------------------ */}

            {/* -------------- Carousel ------------------ */}
            <div>
                <div className="p-10">
                    <div className="relative flex justify-center items-center gap-2 overflow-hidden">
                        <Carousel />
                    </div>
                </div>
            </div>

            {/* -------------- List Promo ------------------ */}
            <div className="relative w-full h-full bg-gray-200">
                {/* Titre card list */}
                <div className="absolute font-bold my-5 ml-10 text-left">
                    <h2 className="text-3xl sm:text-5xl">Nos Produits Les Plus Vendus</h2>
                </div>

                {/* ----  ---- */}
                <div className="flex flex-col sm:flex-row w-full h-screen bg-gray-200 gap-5 my-32 px-10">
                    {/* ---- Pub gauche ---- */}
                    <div className="flex flex-grow w-full h-full">
                        <div className="relative w-full justify-right">
                            <h1 className="absolute text-center font-bold bottom-24 right-12 sm:right-32 p-3 text-lg text-white sm:text-right lg:text-3xl sm:text-2xl sm:bottom-44">
                                Google pixel 6
                            </h1>
                            <h1 className="absolute text-center font-bold bottom-16 right-24 sm:right-36 p-3 text-lg text-white sm:text-right lg:text-3xl lg:right-72 sm:text-2xl sm:bottom-28">
                                5G
                            </h1>
                            <img className="left_pub w-full h-full" src="" alt="" />
                            <Link to="/product/7">
                            <button
                                type="button"
                                className="btn_pub bottom-5 right-10 sm:right-5"
                            >
                                D&eacute;couvrir
                            </button>
                            </Link>
                        </div>
                    </div>

                    {/* ---- Pub droite ---- */}
                    <div className="flex flex-col w-full h-full gap-y-8">
                        <div className="relative flex w-full h-full">
                            <h1 className="absolute text-center sm:text-right font-bold bottom-20 sm:bottom-5 left-1 text-lg p-3 text-white lg:text-xl lg:left-3 sm:left-0 sm:text-lg">
                                Coque OnePlus Nord CE 2 Lite 5G
                            </h1>
                            <img className="right_pub1 w-full h-full" src="" alt="" />
                            <button
                                type="button"
                                className="btn_pub bottom-5 right-10 sm:right-5"
                            >
                                D&eacute;couvrir
                            </button>
                        </div>
                        <div className="relative flex w-full h-full">
                            <h1 className="absolute text-center sm:text-right font-bold bottom-20 sm:bottom-5 left-1 text-lg p-3 text-white lg:text-xl lg:left-3 sm:left-0 sm:text-lg">
                                Housses Sony Xperia XZ2{' '}
                            </h1>
                            <img className="right_pub2 w-full h-full" src="" alt="" />
                            <button
                                type="button"
                                className="btn_pub bottom-5 right-10 sm:right-5"
                            >
                                D&eacute;couvrir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------ */}

            {/* -------------- Accueil Pub #3 ------------------ */}
            <section className="bg-white bg-auto flex flex-row mb-2 sm:mb-5">
                {/* ---- Livraison Offerte ---- */}
                <div className="pt-20 bg-white grow">
                    <div className="delivery mx-auto flex flex-wrap" />
                    <h5 className="pt-8 text-xs sm:text-2xl font-bold text-center">
                        Livraison offerte
                    </h5>
                    <p className="font-normal text-black text-center pb-8 text-xs sm:text-base">
                        dès 30€ d’achat partout en France
                    </p>
                </div>
                {/* ----Des prix très bas ---- */}
                <div className="pt-20 bg-white  grow">
                    <div className="award mx-auto flex flex-wrap" />
                    <h5 className="pt-8 text-xs sm:text-2xl font-bold text-center">
                        Produits de qualit&eacute;
                    </h5>
                    <p className="font-normal text-black text-center pb-8 text-xs sm:text-base">
                        Fabriqu&eacute; en France avec les meilleurs mat&eacute;riaux
                    </p>
                </div>
                {/* ---- Retour facile ---- */}
                <div className="pt-20 bg-white grow">
                    <div className="afterSalesService mx-auto flex flex-wrap" />
                    <h5 className="pt-8 text-xs sm:text-2xl font-bold text-center">
                        SAV 7J/7
                    </h5>
                    <p className="font-normal text-black text-center pb-8 text-xs sm:text-base">
                        Une &eacute;quipe à votre &eacute;coute 7 jours sur 7
                    </p>
                </div>
            </section>
            {/* ------------------------------------------------------ */}

            {/* -------------- Card list #3 ------------------ */}
            <div className="relative w-full h-full bg-gray-200">
                <div className="w-full flex flew-grow h-full bg-gray-200">
                    <div className="absolute font-bold my-10 left-4 sm:left-0 sm:my-5 sm:ml-10 sm:text-left">
                        <h2 className="text-3xl sm:text-5xl">Les Accessoires </h2>{' '}
                        {/* Titre card list */}
                    </div>

                    {/* ------ Cards ------ */}
                    <section className="w-full mt-28">
                        <div className="cardContainer ">
                            <AccessoryList />
                        </div>
                    </section>
                </div>

                {/* ------ Degradé gris ------ */}
                <div className="absolute w-full z-0">
                    {/* <div className='grad1 relative w-full z-10'></div> */}
                </div>

                <hr className="hr_Style mb-10 sm:mb-0" />
            </div>
            {/* ------------------------------------------------------ */}
        </div>
    );
};
export default HomeView;
