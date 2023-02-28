import React from 'react';
import ScrollToTop from './../shared/components/utils-components/ScrollToTop.jsx';
import RecentList from '../shared/components/container/RecentList.jsx';

/**
 * @Author Maxime
 */

const RecentListView = () => {
    return (
        <div>
            <div className="my-24 h-full">
                <ScrollToTop />
                <h1
                    className="py-10 text-center
            font-extrabold text-amber-400 drop-shadow-xl"
                >
                    Derniers cris...
                </h1>
            </div>
            <RecentList />
        </div>
    );
};

export default RecentListView;
