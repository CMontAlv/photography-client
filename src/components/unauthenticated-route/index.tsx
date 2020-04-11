import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
    const isAuthenticated = false;

    return (
        <Route {...rest}>
            {!isAuthenticated ? children : <Redirect to={redirect === '' || redirect === null ? '/' : redirect} />}
        </Route>
    );
};
