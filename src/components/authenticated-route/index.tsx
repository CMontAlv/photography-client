import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import * as routes from '../../constants/routes';

import { getIsLoggedIn } from '../../state/application/selectors';
import { useSelector } from '../../state/store';

type Props = React.ComponentProps<typeof Route>;

export const AuthenticatedRoute: React.FunctionComponent<Props> = ({ children, ...rest }) => {
    const { pathname, search } = useLocation();
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Route {...rest}>
            {isLoggedIn ? children : <Redirect to={`${routes.login}?redirect=${pathname}${search}`} />}
        </Route>
    );
};
