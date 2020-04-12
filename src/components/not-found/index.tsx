import React from 'react';

import './styles.css';
import { Page } from '../page';

export const NotFound: React.FunctionComponent = () => {
    return (
        <Page className="not-found-page">
            <h3>Sorry, page not found!</h3>
        </Page>
    );
};
