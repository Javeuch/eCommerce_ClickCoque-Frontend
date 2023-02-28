import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL_UPDATEACCOUNT } from '../../constants/urls/urlConstants';
/**
 *Button: go to Form Modification
 *
 * @param {function} goToModifAccount
 * @param {object} history
 * @author Laure NDOULOU
 */

const ButtonModifAccount = () => {

    const history = useHistory();
    //function 
    const goToModifAccount = () => {
        history.push(URL_UPDATEACCOUNT);
    };

    return (
        <button
            type="button"
            className="btnmodifyaccount btn_account relative btn sm:w-full text-white focus:ring-2 focus:outline-none focus:ring-gray-400"
            onClick={goToModifAccount}
        >
            Modifier
        </button>
    );
};

export default ButtonModifAccount;



