import { createSelector } from 'reselect';

import { ApplicationState } from './';
import { StoreState } from '../types';

const getState = (state: StoreState): ApplicationState => state.application;

export const getIsLoggedIn: (state: StoreState) => boolean = createSelector([getState], (state) => state.isLoggedIn);

export const getIsLoggingIn: (state: StoreState) => boolean = createSelector([getState], (state) => state.isLoggingIn);

export const getHasLoginError: (state: StoreState) => boolean = createSelector(
    [getState],
    (state) => state.hasLoginError
);

export const getHasSignUpError: (state: StoreState) => boolean = createSelector(
    [getState],
    (state) => state.hasSignUpError
);
