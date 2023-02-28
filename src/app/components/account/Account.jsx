import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../shared/redux-store/authenticationSlice';
import { URL_HOME } from '../../shared/constants/urls/urlConstants';
import FormEdition from '../account/FormEdition';

/**
 * Component of Page myAccount
 * @param {function}: Functions
 * @param {object} history
 * @author Laure NDOULOU
 */
const Account = ({id}) => {
    const history = useHistory();
    const dispatch = useDispatch()

    const showDataConfidentialities = () => {
        history.push(URL_HOME);
    };

    const showOrderHistory = () => {
        history.push(URL_HOME);
    };

    const showReturnPackage = () => {
        history.push(URL_HOME);
    };

    const showMyFavorites = () => {
        history.push(URL_HOME);
    };

    const handleSignOut = () =>{ 
        dispatch(signOut())
        history.push(URL_HOME)
    }

    return (
        <div>
            <div className="bg-white h-auto mb-8">
                <div className="flex flex-wrap px-8 py-3 justify-center gap-4 sm:gap-4 xl:gap-14">
                    <button
                        type="button"
                        className="w-48 h-12 px-5 bg-transparent text-center text-amber-300 font-medium text-lg leading-tight border border-amber-400 rounded shadow hover:bg-gray-100 focus:text-white focus:bg-amber-300 focus:outline-none focus:ring-0 active:bg-amber-300 active:text-white transition duration-300 ease-in-out "
                        onClick={showDataConfidentialities}
                    >
                        Données & <br />
                        confidencialités
                    </button>

                    <button
                        type="button"
                        className="w-48 h-12 px-5 bg-transparent text-center text-amber-300 font-medium text-lg leading-tight border border-amber-400 rounded shadow hover:bg-gray-100 focus:text-white focus:bg-amber-300 focus:outline-none focus:ring-0 active:bg-amber-300 active:text-white transition duration-300 ease-in-out"
                        onClick={showOrderHistory}
                    >
                        Historique <br />
                        commandes
                    </button>

                    <button
                        type="button"
                        className="w-48 h-12 px-5 bg-transparent text-center text-amber-300 font-medium text-lg leading-tight border border-amber-400 rounded shadow hover:bg-gray-100 focus:text-white focus:bg-amber-300 focus:outline-none focus:ring-0 active:bg-amber-300 active:text-white transition duration-300 ease-in-out"
                        onClick={showReturnPackage}
                    >
                        Retour colis
                    </button>

                    <button
                        type="button"
                        className="w-48 h-12 px-5 bg-transparent text-center text-amber-300 font-medium text-lg leading-tight border border-amber-400 rounded shadow hover:bg-gray-100 focus:text-white focus:bg-amber-300 focus:outline-none focus:ring-0 active:bg-amber-300 active:text-white transition duration-300 ease-in-out"
                        onClick={showMyFavorites}
                    >
                        Mes favoris
                    </button>

                    <button
                        type="button"
                        className="w-48 h-12 px-6 bg-transparent text-center text-amber-300 font-medium text-lg leading-tight border border-amber-400 rounded shadow hover:bg-gray-100 focus:text-white focus:bg-amber-300 focus:outline-none focus:ring-0 active:bg-amber-300 active:text-white transition duration-300 ease-in-out"
                        onClick={handleSignOut}
                    >
                        Me déconnecter
                    </button>
                </div>
            </div>
            <FormEdition id={id} />
        </div>
    );
};

export default Account;
