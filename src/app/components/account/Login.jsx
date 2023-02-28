import { LockClosedIcon } from '@heroicons/react/solid';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../shared/components/form-and-error-components/Input';
import { signIn } from '../../shared/redux-store/authenticationSlice';
import { isAuthenticated } from '../../shared/services/accountServices';
import { authenticate } from './../../api/backend/account';
import ErrorMessSmall from './../../shared/components/form-and-error-components/ErrorMessSmall';
import { Checkbox } from './../../shared/components/form-and-error-components/InputChoices';
import { defaulValuesLogin } from './../../shared/constants/formik-yup/default-values-form/idefaultValuesUser';
import { schemaFormLogin } from './../../shared/constants/formik-yup/yup/yupUser';
import { URL_HOME } from './../../shared/constants/urls/urlConstants';

/**
 * Component Form Login
 * Use Formik to create the Form
 *
 * @param {function} submit: submit Function
 * @param {object} initialValues: the initial values of the form
 * @param {boolean} errorLog: to display or not the message of login/mdp not valid
 * @param {object} validationSchema: validation's schema of the form
 * @author Peter Mollet
 */
const FormLogin = ({ submit, errorLog }) => (
    <Formik
        initialValues={defaulValuesLogin}
        onSubmit={submit}
        validationSchema={schemaFormLogin}
    >
        <Form className="mt-8 space-y-6 ">
            <div className="rounded-md shadow-sm">
                Identifiant :
                <Field
                    id="username_login"
                    type="text"
                    name="username"
                    placeholder="Prenom.nom@exemple.com"
                    component={Input}
                    className="rounded-none rounded-t-md"
                    noError
                />
                <br></br>
                Mot de passe :
                <Field
                    id="password_login"
                    type="password"
                    name="password"
                    placeholder="•••••••••"
                    component={Input}
                    className="rounded-none rounded-b-md"
                    noError
                />
            </div>

            <div className="flex items-center justify-between">
                <Field
                    name="rememberMe"
                    label="Se souvenir de moi"
                    component={Checkbox}
                    value={true}
                    className="rounded text-yellow-400 group-hover:text-orange-300 focus:outline-none focus:border-yellow-500 focus:ring-yellow-500"
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="btn_account relative btn w-full sm:mt-10 text-black focus:ring-2 focus:outline-none focus:ring-gray-400"
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon
                            className="h-5 w-5 text-black"
                            aria-hidden="true"
                        />
                    </span>
                    Je me connecte
                </button>
            </div>

            <div className="w-full text-sm text-center sm:text-left">
                <Link to="/forgot-password">
                    <span className="font-medium text-orange-400 hover:text-yellow-400 cursor-pointer">
                        Mot de passe oublié ?
                    </span>
                </Link>
            </div>

            {errorLog && <ErrorMessSmall middle message="Login/Password incorrect(s)" />}
        </Form>
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
const Login = () => {
    const [errorLog, setErrorLog] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = (values) => {
        authenticate(values)
            .then((res) => {
                if (res.status === 200 && res.data.id_token) {
                    dispatch(signIn(res.data.id_token));
                    if (isAuthenticated()) history.push(URL_HOME);
                }
            })
            .catch(() => setErrorLog(true));
    };
    return (
        <div className="w-full h-full bg-white rounded-md shadow space-y-8 py-12 px-4 sm:px-6">
            <div>
                <h2 className="mt-2 text-center sm:text-left text-3xl font-medium sm:font-bold text-gray-800">
                    Connexion
                </h2>
            </div>

            <hr className="hrAccount" />

            <FormLogin errorLog={errorLog} submit={handleLogin} />
        </div>
    );
};

export default Login;
