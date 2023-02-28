/**
 * validation scheme for the modification form
 * @author Laure ndoulou
 */

import * as Yup from 'yup';

import {
    validBirthDate,
    validCity,
    validCountry,
    validEmail,
    validFirstName,
    validLastName,
    validNumber,
    validPhoneNumber,
    validStreet,
    validZipcode,
} from './../../regex';

export const schemaFormModification = Yup.object().shape({
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
    number: Yup.string()
        .matches(validNumber)
        .min('1')
        .max('10')
        .required('Required input'),
    street: Yup.string()
        .matches(validStreet)
        .min('2')
        .max('50')
        .required('Required input'),
    zipcode: Yup.string()
        .matches(validZipcode)
        .min('2')
        .max('20')
        .required('Required input'),
    city: Yup.string().matches(validCity).min('2').max('50').required('Required input'),
    country: Yup.string()
        .matches(validCountry)
        .min('2')
        .max('50')
        .required('Required input'),
    birthDate: Yup.string()
        .matches(validBirthDate)
        .min('10')
        .max('10')
        .required('Required input'),
    phoneNumber: Yup.string()
        .matches(validPhoneNumber)
        .min('10')
        .max('10')
        .required('Required input'),

    email: Yup.string().matches(validEmail).required('Required input'),
    gcu: Yup.boolean()
        .oneOf([true], "Vous devez acceptez les conditions d'utilisation")
        .required('Required input'),
});
