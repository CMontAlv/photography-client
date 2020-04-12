import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './constants';
import { Action } from '../types';

export type ApplicationState = {
    isLoggedIn: boolean;
    isLoggingIn: boolean;
    hasLoginError: boolean;
};

export const applicationInitialState: ApplicationState = {
    isLoggedIn: false,
    isLoggingIn: false,
    hasLoginError: false,
};

export const application = (state: ApplicationState, action: Action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggingIn: true,
                hasLoginError: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                isLoggingIn: false,
                hasLoginError: false,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLoggingIn: false,
                hasLoginError: true,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};
