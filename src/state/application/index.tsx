import { ApplicationActions } from './actions';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SIGN_UP, SIGN_UP_ERROR } from './constants';

export type ApplicationState = {
    isLoggedIn: boolean;
    isLoggingIn: boolean;
    hasLoginError: boolean;
    hasSignUpError: boolean;
};

export const applicationInitialState: ApplicationState = {
    isLoggedIn: false,
    isLoggingIn: false,
    hasLoginError: false,
    hasSignUpError: false,
};

export const application = (state: ApplicationState, action: ApplicationActions) => {
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
        case SIGN_UP:
            return {
                ...state,
                hasSignUpError: false,
            };
        case SIGN_UP_ERROR: {
            return {
                ...state,
                hasSignUpError: true,
            };
        }
        default:
            return state;
    }
};
