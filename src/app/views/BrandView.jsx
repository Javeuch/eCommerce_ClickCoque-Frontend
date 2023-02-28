import React from 'react';
import { useParams } from 'react-router-dom';
import BrandList from '../shared/components/container/BrandList.jsx';
import ScrollToTop from '../shared/components/utils-components/ScrollToTop';

/* this.props.match.params.brandId; */

const BrandView = (props) => {
    const { brandName } = useParams();
    return (
        <div className="my-24 h-full bg-gray-200">
            <ScrollToTop />
            <h1
                className="py-10 text-center
            font-extrabold text-amber-400 drop-shadow-xl"
            >
                Nos Coques
                {' ' + brandName}
            </h1>

            <BrandList />
        </div>
    );
};

export default BrandView;
