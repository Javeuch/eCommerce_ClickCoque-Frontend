import React from 'react';
import ScrollToTop from './../../shared/components/utils-components/ScrollToTop';

function StylyTitle() {
    const myTitle = ['Nos Accessoires', 'Nos Coups de Coeur', 'Les Nouveautés'];

console.log('res =', myTitle);
    if (myTitle === 'Nos Accessoires') {
        return (
            <div className="my-24 h-full">
                <ScrollToTop />
                <h1
                    className="py-10 text-center
            font-extrabold text-amber-400 drop-shadow-xl"
                >
                    {myTitle[0]}
                </h1>
            </div>
        );
    } else if (myTitle === 'Nos Coups de Coeur') {
        return <div>{myTitle[1]}</div>;
    } else {
        return <div></div>;
    }
}

export default StylyTitle;
