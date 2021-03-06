import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { NotFound } from './components/not-found';
import { AuthenticatedRoute } from './components/authenticated-route';
import { UnauthenticatedRoute } from './components/unauthenticated-route';

import * as routes from './constants/routes';

import { Login } from './pages/login';
import { SignUp } from './pages/sign-up';
import { Entries } from './pages/entries';
import { NewEntry } from './pages/new-entry';
import { Entry } from './pages/entry';

export const Routes: React.FunctionComponent = () => (
    <Switch>
        <AuthenticatedRoute exact path={routes.home}>
            <Entries />
        </AuthenticatedRoute>
        <UnauthenticatedRoute exact path={routes.login}>
            <Login />
        </UnauthenticatedRoute>
        <UnauthenticatedRoute exact path={routes.signUp}>
            <SignUp />
        </UnauthenticatedRoute>
        <AuthenticatedRoute exact path={routes.newEntry}>
            <NewEntry />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path={routes.entry}>
            <Entry />
        </AuthenticatedRoute>
        {/* Finally, catch all unmatched routes */}
        <Route>
            <NotFound />
        </Route>
    </Switch>
);
