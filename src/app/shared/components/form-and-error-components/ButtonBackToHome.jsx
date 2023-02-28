import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL_HOME } from '../../constants/urls/urlConstants';
/**
 *Button: to cancel and return to home page
 *
 * @param {function} cancelInscriptionHandler
 * @param {object} history
 * @author Laure NDOULOU
 */

const ButtonBackToHome = () => {
    //function cancel Button
    const history = useHistory();

    const cancelInscriptionHandler = () => {
        history.push(URL_HOME);
    };

    return (
        <button
            type="submit"
            className="btn_account relative btn sm:w-full mt-2 sm:mt-10 text-black focus:ring-2 focus:outline-none focus:ring-gray-400"
            onClick={cancelInscriptionHandler}
        >
            Annuler
        </button>
    );
};

export default ButtonBackToHome;


