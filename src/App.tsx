import React from 'react';

import { api } from './api/auth';

import { NavBar } from './components/nav-bar';

import { Routes } from './Routes';

import { loginSuccess } from './state/application/actions';

import { useDispatch } from './state/store';

export const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        checkSession();
    }, []);

    const checkSession = async () => {
        const [, error] = await api.checkCurrentSession();

        if (!error) {
            dispatch(loginSuccess());
        }
    };

    return (
        <>
            <NavBar />
            <Routes />
        </>
    );
};
