import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL_REGISTER } from '../../constants/urls/urlConstants';
/**
 *button to add one user in the list users
 * @param {function} addOneUser 
 * @param {object} history
 * @author Laure NDOULOU
 */

const ListUsersAddBtn = () => {
    
    const history = useHistory();
    const addOneUser = () => {
        history.push(URL_REGISTER );
    };

    return (
        <button
            type="button"
            className="btn-link-primary"
            onClick={addOneUser }
        >
            Ajouter un utilisateur
        </button>
    );
};

export default ListUsersAddBtn;
