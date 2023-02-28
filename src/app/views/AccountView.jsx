import React from 'react';

import Account from '../components/account/Account';

/**
 * Component viewed for the account page
 * @author Laure NDOULOU
 */
const AccountView = ({id}) => {
    return (
        <>
            <div className="flex-stretch">
                <p className="text-center text-4xl mt-8 mb-8 font-bold">
                    Mon Compte
                </p>
            </div>
            <div className="ml-12 mr-12">
                <Account id={id}/>
            </div>
        </>
    );
};

export default AccountView;
