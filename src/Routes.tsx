import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from './pages/login';
import { SignUp } from './pages/sign-up';
import { Home } from './pages/home';
import { Entries } from './pages/entries';
import { NewEntry } from './pages/new-entry';
import { NotFound } from './components/not-found';
import { AuthenticatedRoute } from './components/authenticated-route';
import { UnauthenticatedRoute } from './components/unauthenticated-route';

export const Routes: React.FunctionComponent = () => (
    <Switch>
        <AuthenticatedRoute exact path="/">
            <Home />
        </AuthenticatedRoute>
        <UnauthenticatedRoute exact path="/login">
            <Login />
        </UnauthenticatedRoute>
        <UnauthenticatedRoute exact path="/sign-up">
            <SignUp />
        </UnauthenticatedRoute>
        <AuthenticatedRoute exact path="/entries">
            <Entries />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/new-entry">
            <NewEntry />
        </AuthenticatedRoute>
        {/* Finally, catch all unmatched routes */}
        <Route>
            <NotFound />
        </Route>
    </Switch>
);
