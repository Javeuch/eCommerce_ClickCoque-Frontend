import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FormInscriptionView from './../views/FormInscriptionView';
import FormModificationView from '../views/FormModificationView';
import AccessoryList from '../shared/components/container/AccessoryList';
import { PrivateRoute } from '../shared/components/utils-components/PrivateRoute';
import { ROLE_ADMIN } from '../shared/constants/rolesConstant';
import * as URL from '../shared/constants/urls/urlConstants';
import { customHistory } from '../shared/services/historyServices';
import AdminHomeView from '../views/AdminHomeView';
import HomeView from '../views/HomeView';
import ListInscriptionView from '../views/ListInscriptionView';
import LoginView from '../views/LoginView';
import AccountView from './../views/AccountView';
import ListView from './../views/ListView';
import FavoriteList from './../shared/components/container/FavoriteList';
import RecentList from './../shared/components/container/RecentList';
import ShoppingCartView from './../views/ShoppingCartView';
import ProductListView from './../views/ProductListView';
import ProductPageView from './../views/ProductPageView';
import ConditionGeneralVente from '../views/CGVView';
import BrandListView from './../views/BrandListView';
import GenericBrandListView from './../views/GenericBrandListView';
import ConditionGeneralUtilisation from '../views/CGUView';
import ContactView from '../views/ContactView';
import MentionsView from '../views/MentionsView';
import About from '../views/AboutView';
import BrandView from '../views/BrandView.jsx';
import FavoriteListView from '../views/FavoriteListView.jsx';
import RecentListView from '../views/RecentListView.jsx';
import AccessoryListView from '../views/AccessoryListView.jsx';
import OrderPaymentView from '../views/OrderPaymentView.jsx';

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
    return (
        <Switch history={customHistory}>
            <PrivateRoute exact path={URL.URL_HOME} component={HomeView} />
            <PrivateRoute
                path={URL.URL_ADMIN_HOME}
                component={AdminHomeView}
                roles={[ROLE_ADMIN]}
            />
            <Route path={URL.URL_LOGIN} component={LoginView} />
            <Route path={URL.URL_LIST} component={ListView} />
            <Route path={URL.URL_REGISTER} component={FormInscriptionView} />
            <Route path={URL.URL_LISTINSCRIPTION} component={ListInscriptionView} />
            <Route path={URL.URL_ACCOUNT} component={AccountView} />
            <Route path={URL.URL_UPDATEACCOUNT} component={FormModificationView} />
            <Route path={URL.URL_LISTPRODUCT} component={ProductListView} />
            <Route path={URL.URL_LISTFAVORITE} component={FavoriteList} />
            <Route path={URL.URL_LISTRECENT} component={RecentList} />
            <Route path={URL.URL_LISTACCESSORIES} component={AccessoryList} />
            <Route path={URL.URL_CART} component={ShoppingCartView} />
            <Route path={URL.URL_PRODUCT} component={ProductPageView} />
            <Route path={URL.URL_CGV} component={ConditionGeneralVente} />
            <Route path={URL.URL_CGU} component={ConditionGeneralUtilisation} />
            <Route path={URL.URL_MENTIONS} component={MentionsView} />
            <Route path={URL.URL_CONTACT} component={ContactView} />
            <Route path={URL.URL_ABOUT} component={About} />
            <Route path={URL.URL_LISTBRAND} component={BrandListView} />
            <Route path={URL.URL_BRANDVIEW} component={BrandView} />
            <Route path={URL.URL_FAVORITEVIEW} component={FavoriteListView} />
            <Route path={URL.URL_ACCESSORYVIEW} component={AccessoryListView} />
            <Route path={URL.URL_RECENTVIEW} component={RecentListView} />
            <Route path={URL.URL_ORDERVIEW} component={OrderPaymentView} />
            {/* existing but unconnected path */}
            <Route path={URL.URL_BRANDHIDDEN} component={GenericBrandListView} />
        </Switch>
    );
};

export default Routes;
