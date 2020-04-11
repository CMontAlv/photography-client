import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getIsLoggedIn } from '../../state/application/selectors';
import { useSelector } from '../../state/store';

function querystring(name: string, url: string = window.location.href) {
    name = name.replace(/[[]]/g, '\\$&');

    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
    const results = regex.exec(url);

    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

type Props = React.ComponentProps<typeof Route>;

export const UnauthenticatedRoute: React.FunctionComponent<Props> = ({ children, ...rest }) => {
    const redirect = querystring('redirect');
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Route {...rest}>
            {!isLoggedIn ? children : <Redirect to={redirect === '' || redirect === null ? '/' : redirect} />}
        </Route>
    );
};
