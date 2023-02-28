import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DropdownBrand from './DropdownBrand.jsx';
import DropdownCase from './DropdownCase.jsx';

import imgLogo from '../../assets/images/logo-click-coque.png';

import {
    URL_HOME,
    URL_LOGIN,
    URL_REGISTER,
    URL_LISTPRODUCT,
    URL_LISTFAVORITE,
    URL_LISTRECENT,
    URL_LISTACCESSORIES,
    URL_ACCESSORYVIEW,
} from './../../shared/constants/urls/urlConstants';
import { selectIsLogged, signOut } from './../../shared/redux-store/authenticationSlice';
import SearchBar from './SearchBar';

const Navbar = () => {
    const [showBrands, setShowBrands] = useState(false);
    const [showCases, setShowCases] = useState(false);
    const handleClickBrand = () => {
        setShowBrands(!showBrands);
        if (showCases === true) {
            setShowCases(!showCases);
        }
    };
    const handleClickCase = () => {
        setShowCases(!showCases);
        if (showBrands === true) {
            setShowBrands(!showBrands);
        }
    };
const [isOpen, setIsOpen] = useState(false);

    return (
        <Disclosure as="nav" className="top-0 fixed z-50 w-full bg-white shadow-md">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                            <div>
                                <Link to={URL_HOME}>
                                    <img
                                        className="h-8 w-auto sm:h-10 cursor-pointer"
                                        src={imgLogo}
                                        alt="Click Coques Logo"
                                        width={200}
                                        height={60}
                                    />
                                </Link>
                            </div>
                            <div className="relative inline-block text-left">
                                <DropdownBrand />
                            </div>

                            <div>
                                <Link
                                    className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                                    to={URL_ACCESSORYVIEW}
                                >
                                    Accessoires
                                </Link>
                            </div>

                            <div className="relative inline-block text-left">
                                <DropdownCase />
                            </div>

                            <div>
                                <Link
                                    className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                                    to={'/about'}
                                >
                                    À propos
                                </Link>
                            </div>
                            <div>
                                <SearchBar />
                            </div>
                            <div className="hidden md:flex items-center justify-end flex-1 lg:w-0">
                                <ConnectionBtn />
                            </div>

                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button
                                    className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-primary 
                                    focus:outline-none transform active:scale-95 active:ring-2 active:ring-offset-2 active:ring-primary "
                                >
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        enter="transition"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Disclosure.Panel className="p-4 md:hidden ">
                            <hr />
                            <div className="p-4">
                                <ConnectionBtn />
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;

const ConnectionBtn = () => {
    const isLogged = useSelector(selectIsLogged);
    const dispatch = useDispatch();
    /* const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]'); */
    /* console.log('res', cartFromLocalStorage); */

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || '[]'));

    useEffect(() => {
        const onStorage = () => {
            setCart(JSON.parse(localStorage.getItem('cart') || '[]'));
        };

        window.addEventListener('storage', onStorage);

        return () => {
            window.removeEventListener('storage', onStorage);
        };
    }, []);

    const getTotalArticles = () => {
        let qty = 0;
        for (let i = 0; i < cart.length; i++) {
            qty += cart[i].quantity;
        }
        return qty;
    };
    console.log('res2', getTotalArticles());
    if (isLogged)
        return (
            <button className="ml-8 btn btn-green" onClick={() => dispatch(signOut())}>
                Déconnexion
            </button>
        );
    else
        return (
            <div className="flex justify-center md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div>
                    {' '}
                    <Link to={URL_LOGIN}>
                        <div className="link">Connexion</div>
                    </Link>
                </div>
                <div>
                    <Link to={URL_REGISTER}>
                        <button className="btn btn-green">Inscription</button>
                    </Link>
                </div>
                <div className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                    <Link to="/myCart" className="relative flex">
                        <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                        </svg>
                        {getTotalArticles() > 0 && (
                            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                                {getTotalArticles()} {console.log('res', useDispatch)}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        );
};
