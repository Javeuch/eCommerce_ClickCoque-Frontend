import React from 'react';

import FormInscription from './../components/account/FormInscription';
import Login from './../components/account/Login';

/**
 * View/Page Login
 *
 * @param {object} history
 * @author Peter Mollet
 */
const LoginView = () => {
    return (

        <div className="w-full h-auto bg-slate-100">
            <h1 className="flex justify-center w-full h-auto item-center inset-x-0 my-10 sm:p-10 text-5xl sm:text-6xl">
                Connexion
            </h1>


            <div className="sm:flex sm:justify-center gap-10 sm:gap-0 mx-10 sm:flex-grow ">
                <div className="w-full sm:w-1/2 h-full">
                    <Login />
                </div>
                <hr className="my-10 sm:my-0 h-0 sm:h-[890px] hrAccountVertical"></hr>
                <div className="w-full sm:w-1/2 h-full">
                    <FormInscription />
                </div>
            </div>
    

        </div>
    );
};

export default LoginView;
