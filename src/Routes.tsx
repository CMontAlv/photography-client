import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from './containers/login';
import { SignUp } from './containers/sign-up';
import { NotFound } from './components/not-found';
import { AuthenticatedRoute } from './components/authenticated-route';
import { UnauthenticatedRoute } from './components/unauthenticated-route';

export const Routes: React.FunctionComponent = () => (
    <Switch>
        <AuthenticatedRoute exact path="/">
            <></>
        </AuthenticatedRoute>
        <UnauthenticatedRoute exact path="/login">
            <Login />
        </UnauthenticatedRoute>
        <UnauthenticatedRoute exact path="/sign-up">
            <SignUp />
        </UnauthenticatedRoute>
        {/* Finally, catch all unmatched routes */}
        <Route>
            <NotFound />
        </Route>
    </Switch>
);
