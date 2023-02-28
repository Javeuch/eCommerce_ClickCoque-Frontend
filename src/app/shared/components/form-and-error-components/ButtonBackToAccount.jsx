import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL_ACCOUNT } from '../../constants/urls/urlConstants';
/**
 *Button: to cancel and return to account page
 *
 * @param {function} cancelModificationHandler
 * @param {object} history
 * @author Laure NDOULOU
 */

const ButtonBackToAccount = () => {
    //function cancel Button
    const history = useHistory();

    const cancelModificationHandler = () => {
        history.push(URL_ACCOUNT);
    };

    return (
        <button
            type="submit"
            className="btn_account relative btn sm:w-full mt-2 sm:mt-10 text-black focus:ring-2 focus:outline-none focus:ring-gray-400"
            onClick={cancelModificationHandler}
        >
            Retour à la page compte
        </button>
    );
};

export default ButtonBackToAccount;

