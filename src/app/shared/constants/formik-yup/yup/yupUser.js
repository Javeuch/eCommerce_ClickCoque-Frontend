import * as Yup from 'yup';

import {
    validEmail,
    validFirstName,
    validLastName,
    validPassword,
    validUsername,
} from './../../regex';

export const schemaFormLogin = Yup.object().shape({
    username: Yup.string().matches(validUsername).required('Required input'),
    password: Yup.string().matches(validPassword).required('Required input'),
});

export const schemaFormInscription = Yup.object().shape({
    firstName: Yup.string()
        .matches(validFirstName)
        .min('2')
        .max('30')
        .required('Required input'),
    lastName: Yup.string()
        .min('2')
        .max('30')
        .matches(validLastName)
        .required('Required input'),
    username: Yup.string().matches(validUsername).required('Required input'),
    email: Yup.string().matches(validEmail).required('Required input'),
    emailConfirmation: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Confirmation email inccorecte !')
        .required('Required input'),
    password: Yup.string()
        .matches(
            validPassword,
            'Le mot de passe doit contenir 8 à 15 caractères:1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spéciale(-,+,!,?,*,$,&,#,~,@,%)',
        )
        .required('Required input'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Confirmation de mot de passe inccorecte !')
        .required('Required input'),
    gcu: Yup.boolean()
        .oneOf([true], "Vous devez acceptez les conditions d'utilisation")
        .required('Required input'),
});


