import React, { useState, useEffect } from 'react';

import { myAccount } from './../../api/backend/account';
import ButtonModifAccount from './../../shared/components/form-and-error-components/ButtonModifAccount';
import ButtonCloseAccount from './../../shared/components/form-and-error-components/ButtonCloseAccount';

/**
 * Component Form Edition
 * @author Laure NDOULOU
 */

const FormEdition = ({ id }) => {
    const [user, setUser] = useState([]);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        id = 2
        myAccount(id)
            .then((response) => {
                console.log(response.data.address);
                setUser(response.data);
                setDisabled(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="bg-white mb-4">
            <div className="flex sm:grid sm:grid-cols-12 gap-3 ml-12 mr-12">
                <div className="col-start-1 col-span-9">

                    {/* INFORMATION ET CONFIDENTIALITE */}
                    <p className="text-2xl font-bold">Informations et confidentialités</p>

                    <div className="grid gap-4 grid-cols-2 mt-8 mb-2 font-bold">
                        <div>
                            <label htmlFor="firstName">Nom:</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="border-0 py-1"
                                value={user.firstName}
                                disabled={disabled}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Prénom :</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                className="border-0 py-1"
                                value={user.lastName}
                                disabled={disabled}
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="font-bold">
                        <label htmlFor="number">Adresse :</label>
                        <div className="inline space-x-8">
                            <input
                                type="text"
                                name="number"
                                id="number"
                                placeholder="Numéro de rue"
                                className="border-0 py-1 ml-8"
                                value={
                                    user.address && user.address.number
                                        ? user.address.number
                                        : 'test'
                                }
                                disabled={disabled}
                            />
                            <input
                                type="text"
                                name="street"
                                placeholder="Rue"
                                className="border-0 py-1"
                                value={
                                    user.address && user.address.street
                                        ? user.address.street
                                        : 'test'
                                }
                                disabled={disabled}
                            />
                            <input
                                type="text"
                                name="zipcode"
                                placeholder="Code postal"
                                className="border-0 py-1"
                                value={
                                    user.address && user.address.zipcode
                                        ? user.address.zipcode
                                        : 'test'
                                }
                                disabled={disabled}
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder="Ville"
                                className="border-0 py-1"
                                value={
                                    user.address && user.address.city
                                        ? user.address.city
                                        : 'test'
                                }
                                disabled={disabled}
                            />
                        </div>
                        <hr />
                    </div>

                    <div className="mt-2 mb-6 font-bold">
                        <label htmlFor="country">Pays :</label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            className="border-0 py-1"
                            value={
                                user.address && user.address.country
                                    ? user.address.country
                                    : 'test'
                            }
                            disabled={disabled}
                        />
                    </div>

                    {/* INFORMATION DE COMPTE */}

                    <p className="text-2xl font-bold"> Informations de compte</p>
                    <div className="mt-8 mb-2 font-bold">
                        <label htmlFor="birthDate">Date de naissance :</label>
                        <input
                            type="text"
                            name="birthDate"
                            id="birthDate"
                            className="border-0 py-1"
                            value={user.birthDate}
                            disabled={disabled}
                        />
                    </div>
                    <hr />

                    <div className="mt-2 mb-2 font-bold">
                        <label htmlFor="phoneNumber">Numéro de téléphone :</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            className="border-0 py-1"
                            value={user.phoneNumber}
                            disabled={disabled}
                        />
                    </div>
                    <hr />
                    <div className="mt-2 mb-6 font-bold">
                        <label htmlFor="email">E-mail :</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="border-0 py-1"
                            value={user.email}
                            disabled={disabled}
                        />
                    </div>
                </div>

                <div className="hrAccountVertical sm:0 2xl:col-start-10 col-end-11"></div>

                <div className="col-start-11 col-end-13 justify-center">
                    <ButtonModifAccount />
                    <ButtonCloseAccount />
                </div>
            </div>
        </div>
    );
}
export default FormEdition;
