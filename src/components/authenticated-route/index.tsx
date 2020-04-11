import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

type Props = React.ComponentProps<typeof Route>;

export const AuthenticatedRoute: React.FunctionComponent<Props> = ({ children, ...rest }) => {
    const { pathname, search } = useLocation();
    const isAuthenticated = false;

    return (
        <Route {...rest}>{isAuthenticated ? children : <Redirect to={`/login?redirect=${pathname}${search}`} />}</Route>
    );
};
