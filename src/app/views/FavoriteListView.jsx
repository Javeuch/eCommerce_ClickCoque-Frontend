import React from 'react';
import ScrollToTop from './../shared/components/utils-components/ScrollToTop.jsx';
import FavoriteList from './../shared/components/container/FavoriteList.jsx';

/**
 * @Author Maxime
 */

const FavoriteListView = () => {
    return (
        <div>
            <div className="my-24 h-full">
                <ScrollToTop />
                <h1 className="py-5 text-center
                               font-extrabold text-amber-400 drop-shadow-xl"
                >
                    Nos Clients apprécient...
                </h1>
            </div>
            <FavoriteList />
        </div>
    );
};

export default FavoriteListView;
