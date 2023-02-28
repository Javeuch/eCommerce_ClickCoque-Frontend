import React, { useState } from 'react';

//import { Redirect } from 'react-router-dom';
import apiBackEnd from '../../api/backend/api.Backend';
//import { URL_LIST } from '../../shared/constants/urls/urlConstants';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    const submit = (event) => {
        event.preventDefault();
        apiBackEnd
            .get('http://localhost:8080/api/product', { params: { search } })
            .then((response) => {
                console.log(response.data);
            });
    };
    let inputHandler = (e) => {
        setSearch(e.target.value);
    };
    return (
        <form onSubmit={submit} className="flex items-center">
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                        className="w-5 h-4 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="navbar-searchbar"
                    className="block h-6 p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search ..."
                    required
                    value={search}
                    onChange={inputHandler}
                ></input>
            </div>
        </form>
    );
};

export default SearchBar;
