import React from 'react'
import { useHistory } from 'react-router-dom';

import { URL_HOME } from '../../constants/urls/urlConstants';
/**
 *Button: to cancel and return to home page
 *
 * @param {function} closeAccountHandler
 * @param {object} history
 * @author Laure NDOULOU
 */
const ButtonCloseAccount = () => {
        //function close Form Button
        const history = useHistory();

        const closeAccountHandler = () => {
            history.push(URL_HOME);
        };
  return (
    <div>
         <button
            type="button"
            className="btnmodifyaccount btn_account relative btn sm:w-full mt-2 sm:mt-10 text-white focus:ring-2 focus:outline-none focus:ring-gray-400"
            onClick={closeAccountHandler}
        >
            Fermer
        </button>
    </div>
  )
}

export default ButtonCloseAccount