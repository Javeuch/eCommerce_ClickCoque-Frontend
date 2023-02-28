import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { URL_HOME } from '../../constants/urls/urlConstants';
import { signOut } from '../../../shared/redux-store/authenticationSlice';

/**
 *Button: to log out and return to home page
 * @author Laure NDOULOU
 */

const ButtonDeconnection = () => {
    const dispatch = useDispatch()
    const history = useHistory();

    const handleSignOut = () =>{ 
        dispatch(signOut())
        history.push(URL_HOME)
    }

    return ( 
        <button className='shadow bg-gray-400 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded' onClick={handleSignOut} >Sign out</button>
    )

}

export default ButtonDeconnection;
