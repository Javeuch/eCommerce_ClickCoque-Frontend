import {
    URL_BACK_ACCOUNT,
    URL_BACK_AUTHENTICATE,
    URL_BACK_LISTINSCRIPTION,
    URL_BACK_SIGNUP,
    URL_BACK_UPDATEACCOUNT,
    URL_BACK_PRODUCT,
    URL_BACK_DELETEUSER,

} from './../../shared/constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values);
}

/**
 * functions: signUp, myAccount and UpdateAccount
 * @author Laure ndoulou
 */

export function signUp(values) {
    return apiBackEnd.post(URL_BACK_SIGNUP, values);
}

export function myAccount(id) {
    return apiBackEnd.get(URL_BACK_ACCOUNT + id);
}

export function updateAccount(values) {
    return apiBackEnd.put(URL_BACK_UPDATEACCOUNT, values);
}

export function getAllAccount() {
    return apiBackEnd.get(URL_BACK_LISTINSCRIPTION);
}

export function idDetailProduct(id) {
    return apiBackEnd.get(URL_BACK_PRODUCT + id);
}
export function desactivateOneAccount(id) {
    return apiBackEnd.delete(URL_BACK_DELETEUSER + id);
}
