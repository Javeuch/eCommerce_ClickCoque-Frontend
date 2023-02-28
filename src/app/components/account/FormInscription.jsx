import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ButtonBackToHome from '../../shared/components/form-and-error-components/ButtonBackToHome';
import Input from '../../shared/components/form-and-error-components/Input';
import { signUp } from './../../api/backend/account';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { Checkbox } from './../../shared/components/form-and-error-components/InputChoices';
import { defaulValuesInscription } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormInscription } from './../../shared/constants/formik-yup/yup/yupUser';
import { URL_HOME } from './../../shared/constants/urls/urlConstants';

/**
 * Component Form Inscription
 * Use Formik to create the Form to register
 *
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Laure NDOULOU
 */
const FormInscription = ({ submit }) => (
    <Formik
        initialValues={defaulValuesInscription}
        onSubmit={submit}
        validationSchema={schemaFormInscription}
    >
        {({ errors }) => (
            <Form className="mt-8 space-y-6 ">
                <div className="px-1 py-1 text-left">
                    <div className=" rounded-md shadow-sm -space-y-px">
                        <label>
                            {' '}
                            Prénom :
                            <Field
                                type="text"
                                name="firstName"
                                placeholder="John"
                                component={Input}
                                className="rounded-none rounded-t-md mb-2"
                            />
                            {errors.firstName && (
                                <ErrorMessSmall
                                    right
                                    message="Prénom simple ou composé de 2 à 30 caractères: majuscules, minuscules ou spéciaux(ç,ï,î,ü,ê,ë,à,é,è)"
                                />
                            )}
                        </label>
                        <label>
                            {' '}
                            Nom de famille :
                            <Field
                                type="text"
                                name="lastName"
                                placeholder="Doe"
                                component={Input}
                                className="rounded-none mb-3"
                            />
                            {errors.lastName && (
                                <ErrorMessSmall
                                    right
                                    message="Nom simple ou composé de 2 à 30 caractères: majuscules, minuscules ou spéciaux(ç,ï,î,ü,ê,ë,à,é,è)"
                                />
                            )}
                        </label>
                        <label>
                            {' '}
                            Pseudo:
                            <Field
                                type="text"
                                name="username"
                                placeholder="ex : Jhonny"
                                component={Input}
                                className="rounded-none mb-3"
                            />
                            {errors.username && (
                                <ErrorMessSmall
                                    right
                                    message="Pseudo simple ou composé de 2 à 30 caractères: majuscules, minuscules ou spéciaux(ç,ï,î,ü,ê,ë,à,é,è)"
                                />
                            )}
                        </label>
                        <label>
                            {' '}
                            E-mail:
                            <Field
                                type="email"
                                name="email"
                                placeholder="john.doe@exemple.com"
                                component={Input}
                                className="rounded-none mb-3"
                            />
                        </label>
                        {errors.email && (
                            <ErrorMessSmall
                                right
                                message="L'adresse mail doit être dans le format indiqué"
                            />
                        )}
                        <label>
                            {' '}
                            Confirmation de l'email:
                            <Field
                                type="email"
                                name="emailConfirmation"
                                placeholder="john.doe@exemple.com"
                                component={Input}
                                className="rounded-none mb-3"
                            />
                            {errors.emailConfirmation && (
                                <ErrorMessSmall
                                    right
                                    message="L'email doit être identique à celui entré au-dessus"
                                />
                            )}
                        </label>
                        <label>
                            {' '}
                            Password:
                            <Field
                                type="password"
                                name="password"
                                placeholder="•••••••••"
                                component={Input}
                                className="rounded-none mb-3"
                            />
                            {errors.password && (
                                <ErrorMessSmall
                                    right
                                    message="Le mot de passe de 8 à 15 caractères doit contenir au minimum une majuscule, une minuscule, un chiffre et un caractère spécial (-,+,!,?,*,$,&,#,~,@,%,_)"
                                />
                            )}
                        </label>
                        <label>
                            {' '}
                            Confirmation du mot de passe:
                            <Field
                                type="password"
                                name="passwordConfirmation"
                                placeholder="•••••••••"
                                component={Input}
                                className="rounded-none rounded-b-md mb-3"
                            />
                            {errors.passwordConfirmation && (
                                <ErrorMessSmall
                                    right
                                    message="Le mot de passe doit être identique à celui entré au-dessus"
                                />
                            )}
                        </label>
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
                                    type="submit"
                                    className="btn_account relative btn sm:w-full mt-2 sm:mt-10 text-black focus:ring-2 focus:outline-none focus:ring-gray-400"
                                >
                                    S'inscrire
                                </button>

                                <ButtonBackToHome />
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        )}
    </Formik>
);

/**
 * Component Login
 *
 * will need in props:
 *  - Submit Function
 *  - errorLog boolean
 *  - validationSchema
 *
 * See above for information
 *
 * @author Peter Mollet
 */
const Inscription = () => {
    const [errors, setErrors] = useState(false);
    const history = useHistory();

    const handleInscription = (values) => {
        signUp(values)
            .then((res) => {
                if (res.status === 200) {
                    alert('Compte enregistré avec sucçès!');
                    history.push(URL_HOME);
                }
            })
            .catch(() => setErrors(true));
    };
    return (
        <div className="w-full h-full bg-white p-4 rounded-md shadow py-12 px-6 mb-10">
            <div>
                <h2 className="my-5 text-center sm:text-left text-3xl font-medium sm:font-bold text-gray-800">
                    Inscription
                </h2>
            </div>

            <hr className="hrAccount" />

            <FormInscription errors={errors} submit={handleInscription} />
        </div>
    );
};

export default Inscription;
