import React from 'react';
import ScrollToTop from './../shared/components/utils-components/ScrollToTop.jsx';
import AccessoryList from '../shared/components/container/AccessoryList';

/**
 * @Author Maxime
 */

const AccessoryListView = () => {
    return (
        <div>
            <div className="my-24 h-full">
                <ScrollToTop />
                <h1
                    className="py-10 text-center
            font-extrabold text-amber-400 drop-shadow-xl"
                >
                    Nos Accessoires
                </h1>
            </div>
            <AccessoryList />
        </div>
    );
};

export default AccessoryListView;
