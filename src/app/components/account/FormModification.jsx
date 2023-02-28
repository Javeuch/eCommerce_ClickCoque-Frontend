import { Field, Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LoaderModification from '../../shared/components/utils-components/LoaderModification';
import ButtonBackToAccount from '../../shared/components/form-and-error-components/ButtonBackToAccount';
import Input from '../../shared/components/form-and-error-components/Input';
import { updateAccount } from './../../api/backend/account';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { Checkbox } from './../../shared/components/form-and-error-components/InputChoices';
import { defaulValuesModification } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormModification } from './../../shared/constants/formik-yup/yup/yupFormModification';
import { URL_ACCOUNT } from './../../shared/constants/urls/urlConstants';
import apiBackEnd from './../../api/backend/api.Backend';

/**
 * Component Form Modification
 * Use Formik to create the Form to update
 *
 * @param {function} submit        : submit Function
 * @param {object} initialValues   : the initial values of the form
 * @param {boolean} errorLog       : to display or not the message of fields not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Laure NDOULOU
 */


function FormModification({ submit }) {
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors]       = useState(false);
    const [user, setUser]           = useState([]);
    const [disabled, setDisabled]   = useState(true);
    const history                   = useHistory();

    const handleModification = (values) => {
        console.log(values);
        //transforme la date 
        values.birthDate = new Date(values.birthDate);
        updateAccount(values)
            .then((res) => {
                if (res.status === 200) {
                    alert('Le compte a été modifié avec sucçès!');
                    history.push(URL_ACCOUNT);
                }
            })
            .catch(() => setErrors(true));
    };

    useEffect(() => {
        apiBackEnd.get('http://localhost:8080/api/account/detail/1')
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {isLoading ?
                <LoaderModification />
                :
                <>
                    <Formik
                        initialValues={defaulValuesModification}
                        onSubmit={handleModification}
                    // validationSchema={schemaFormModification}
                    >
                        {({ errors }) => (
                            <Form className="mt-8 space-y-6 ">
                                <div className=' mx-12 my-4'>
                                    <div className="flex-stretch">
                                        <p className="text-center text-4xl mt-12">
                                            <b>Mise-à-jour de mon Compte</b>
                                        </p>
                                    </div>
                                    <div className="px-1 py-1 text-left">
                                        <div className=" rounded-md shadow-sm -space-y-px">

                                            <div className="font-bold">
                                                <label for="firstName">Prénom : </label>
                                                <span class="inline-block">
                                                    <Field
                                                        type="text"
                                                        name="firstName"
                                                        component={Input}
                                                        className="rounded-none rounded-t-md mb-2"
                                                        disabled={disabled}
                                                    />
                                                    {errors.firstName && (
                                                        <ErrorMessSmall
                                                            right
                                                            message="2 à 30 caractères: majuscules, minuscules ou {-,ç,ï,î,ü,ê,ë,à,é,è}"
                                                        />
                                                    )}
                                                </span>
                                            </div>
                                            <div className="font-bold">
                                                <label for="lastName">Nom : </label>
                                                <span class="inline-block">
                                                    <Field
                                                        type="text"
                                                        name="lastName"
                                                        component={Input}
                                                        className="rounded-none mb-3"
                                                        disabled={disabled}
                                                    />
                                                    {errors.lastName && (
                                                        <ErrorMessSmall
                                                            right
                                                            message="2 à 30 caractères: majuscules, minuscules ou {-,ç,ï,î,ü,ê,ë,à,é,è}"
                                                        />
                                                    )}
                                                </span>
                                            </div>
                                            <div className="font-bold"><label for="address.number">Adresse : </label></div>
                                            <div>
                                                <label for="address.number">N° </label>
                                                <span class="inline-block w-12">
                                                    <Field
                                                        type="text"
                                                        name="address.number"
                                                        placeholder="Numéro"
                                                        component={Input}
                                                        className="rounded-none mb-3"
                                                        disabled={disabled}
                                                    />
                                                    {errors.number && (
                                                        <ErrorMessSmall
                                                            right
                                                            message="1 à 10 caractères: chiffres, majuscules, minuscules ou {-,ç,ï,î,ü,ê,ë,à,é,è}"
                                                        />
                                                    )}
                                                </span>
                                                </div>
                                            <div>
                                                <label for="address.street">Rue </label>
                                                <span class="inline-block">
                                                    <Field
                                                        type="text"
                                                        name="address.street"
                                                        placeholder="Rue"
                                                        component={Input}
                                                        className="rounded-none mb-3"
                                                        disabled={disabled}
                                                    />
                                                    {errors.street && (
                                                        <ErrorMessSmall
                                                            right
                                                            message="2 à 50 caractères: chiffres, majuscules, minuscules ou {ç,ï,î,ü,ê,ë,à,é,è}"
                                                        />
                                                    )}
                                                </span>
                                            </div>
                                            <div>
                                            <label for="address.zipcode">Code Postal </label>
                                                <span class="inline-block">
                                                <Field
                                                    type="text"
                                                    name="address.zipcode"
                                                    placeholder="Code postal"
                                                    component={Input}
                                                    className="rounded-none mb-3"
                                                    disabled={disabled}
                                                />
                                                {errors.zipcode && (
                                                    <ErrorMessSmall
                                                        right
                                                        message="2 à 20 caractères: chiffres, majuscules, minuscules ou {ç,ï,î,ü,ê,ë,à,é,è}"
                                                    />
                                                )}
                                                </span>
                                            </div>
                                            <div>
                                            <label for="address.city">Ville </label>
                                                <span class="inline-block">
                                                <Field
                                                    type="text"
                                                    name="address.city"
                                                    placeholder="Ville"
                                                    component={Input}
                                                    className="rounded-none mb-3"
                                                    disabled={disabled}
                                                />
                                                {errors.city && (
                                                    <ErrorMessSmall
                                                        right
                                                        message="2 à 50 caractères: chiffres, majuscules, minuscules ou {ç,ï,î,ü,ê,ë,à,é,è}"
                                                    />
                                                )}
                                                </span>
                                            </div>
                                            <div>
                                            <label for="address.country">Pays </label>
                                                <span class="inline-block">
                                                <Field
                                                    type="text"
                                                    name="address.country"
                                                    placeholder="Pays"
                                                    component={Input}
                                                    className="rounded-none mb-3"
                                                    disabled={disabled}
                                                />
                                                {errors.country && (
                                                    <ErrorMessSmall
                                                        right
                                                        message="2 à 50 caractères: chiffres, majuscules, minuscules ou {ç,ï,î,ü,ê,ë,à,é,è}"
                                                    />
                                                )}
                                                </span>
                                            </div>
                                            <div className="font-bold">
                                                <label for="birthDate">Date de naissance: </label>
                                                <span class="inline-block bg-white h-8">
                                                <Field
                                                    type="localDate"
                                                    name="birthDate"
                                                    placeholder="aaaa-mm-jj"
                                                    component={Input}
                                                    className="rounded-none mb-3"
                                                    disabled={disabled}
                                                />
                                                {errors.birthDate && (
                                                    <ErrorMessSmall
                                                        right
                                                        message="Date au format indiqué"
                                                    />
                                                )}
                                            </span>
                                        </div>
                                            <div className="font-bold">
                                                <label for="phoneNumber">Numéro de téléphone: </label>
                                                <span class="inline-block">
                                                <Field
                                                    type="text"
                                                    name="phoneNumber"
                                                    component={Input}
                                                    className="rounded-none mb-3"
                                                    disabled={disabled}
                                                />
                                                {errors.phoneNumber && (
                                                    <ErrorMessSmall
                                                        right
                                                        message="Numéro composé de 10 chiffres"
                                                    />
                                                )}
                                            </span>
                                        </div>
                                            <div className="font-bold">
                                            <label for="email">E-mail: </label>
                                                <span class="inline-block w-2/3">
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="john.doe@exemple.com"
                                                    component={Input}
                                                    className="rounded-none rounded-b-md mb-3"
                                                //disabled={disabled} A décommenter si besoin de modification de l'e-mail
                                                />
                                                {errors.email && (
                                                    <ErrorMessSmall
                                                        right
                                                        message="Email au format indiqué"
                                                    />
                                                )}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-xs mt-8">
                                            Vos données personnelles seront utilisées pour faciliter votre
                                            expérience sur ce site web, pour gérer l`accès à votre compte et à
                                            d`autres fins décrites dans notre &nbsp;
                                            <a href="#" className="font-medium text-blue-600 hover:underline">
                                                politique de confidentialité
                                            </a>
                                            .
                                        </p>
                                        <div className="flex sm:flex-grow w-auto items-center text-xs sm:text-base my-4 ">
                                            {' '}
                                            <Field
                                                className="rounded text-yellow-400 group-hover:text-orange-300 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
                                                type="checkbox"
                                                name="gcu"
                                                component={Checkbox}
                                            />
                                            <label>
                                                J`accepte les termes &nbsp;
                                                <a
                                                    href="#"
                                                    className="font-medium text-blue-600 hover:underline"
                                                >
                                                    d`utilisations générales
                                                </a>
                                                <br />
                                                {errors.gcu && (
                                                    <ErrorMessSmall
                                                        left
                                                        message="Accepter les conditions d'utilisation"
                                                        className="absolute"
                                                    />
                                                )}
                                            </label>
                                        </div>
                                        <div>
                                            <div className="w-auto h-auto sm:mx-5">
                                                <div className="flex flex-grow w-auto gap-2 sm:gap-5 sm:mx-5">
                                                    <button
                                                        className="btn_account relative btn sm:w-full mt-2 sm:mt-10 text-black focus:ring-2 focus:outline-none focus:ring-gray-400"
                                                        type="button"
                                                        onClick={() => { setDisabled(false) }}
                                                    >
                                                        Activer la modification
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn_account relative btn sm:w-full mt-2 sm:mt-10 text-black focus:ring-2 focus:outline-none focus:ring-gray-400"
                                                    //onClick={handleModification} A ne pas écrire
                                                    >
                                                        Enregistrer les modifications

                                                    </button>

                                                    <ButtonBackToAccount />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </>
            }
        </>
    )
}
export default FormModification;

