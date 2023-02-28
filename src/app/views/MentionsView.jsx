import React from 'react';
import Mentions from '../shared/components/container/Mentions';

import ScrollToTop from '../shared/components/utils-components/ScrollToTop';

const MentionsView = () => {
    return (
        <div>
            <ScrollToTop />
            <Mentions />
        </div>
    );
};
export default MentionsView;
