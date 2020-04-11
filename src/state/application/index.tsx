import { LOGIN, LOGOUT } from './constants';
import { Action } from '../types';

export type ApplicationState = {
    isLoggedIn: boolean;
};

export const applicationInitialState: ApplicationState = {
    isLoggedIn: false,
};

export const application = (state: ApplicationState, action: Action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
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
