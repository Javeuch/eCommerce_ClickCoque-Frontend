import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DropdownBrand from './DropdownBrand.jsx';
import DropdownCase from './DropdownCase.jsx';
import ConnectionButton from './ConnectionButton.jsx';
import CartIcon from './CartIcon.jsx';
import ProfileIcon from './ProfileIcon.jsx';
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
} from '../../shared/constants/urls/urlConstants';
import { selectIsLogged, signOut } from '../../shared/redux-store/authenticationSlice';
import SearchBar from './SearchBar';

const NavbarResponsive = () => {
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
        <div>
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
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
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {/*                                          <a
                                        href="#"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Dashboard
                                    </a> */}

                                    <div className="relative inline-block text-left">
                                        <DropdownBrand />
                                    </div>

                                    <div>
                                        <Link
                                            className="inline-flex justify-center w-full px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50"
                                            to={URL_ACCESSORYVIEW}
                                        >
                                            Accessoires
                                        </Link>
                                    </div>

                                    <div className="relative inline-block text-left">
                                        <DropdownCase />
                                    </div>

                                    <div className="w-36">
                                        <Link
                                            className="inline justify-center bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                                            to={'/about'}
                                        >
                                            À propos
                                        </Link>
                                    </div>
                                    <div>
                                        <SearchBar />
                                    </div>
                                    <div className="hidden md:flex items-center justify-end flex-1 lg:w-60">
                                        <ConnectionButton />
                                    </div>
                                    <div>
                                        <CartIcon />
                                    </div>
                                    <div>
                                        <ProfileIcon />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {/*  <a
                                    href="#"
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </a> */}
                                <div className="block px-3 py-2 rounded-md text-base font-medium">
                                    <Link to="/myAccount">
                                        <button className="btn">Mon compte</button>
                                    </Link>

                                    <div className="block px-3 py-2 rounded-md text-base font-medium">
                                        <Link to="myCart">
                                            <button className="btn">Mon Panier</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className=" block px-3 py-2 rounded-md text-base font-medium">
                                    <DropdownBrand />
                                </div>

                                <div className="block px-3 py-2 rounded-md text-base font-medium">
                                    <Link to={URL_ACCESSORYVIEW}>
                                        <button className="btn">Accessoires</button>
                                    </Link>
                                </div>

                                <div className="block px-3 py-2 rounded-md text-base font-medium">
                                    <DropdownCase />
                                </div>

                                <div className="block px-3 py-2 rounded-md text-base font-medium">
                                    <Link to={'/about'}>
                                        <button className="btn">À propos</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default NavbarResponsive;