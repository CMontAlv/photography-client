import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './constants';

export type LoginAction = {
    type: typeof LOGIN;
};
export const login = (): LoginAction => ({
    type: LOGIN,
});

export type LoginSuccessAction = {
    type: typeof LOGIN_SUCCESS;
};
export const loginSuccess = (): LoginSuccessAction => ({
    type: LOGIN_SUCCESS,
});

export type LoginErrorAction = {
    type: typeof LOGIN_ERROR;
};
export const loginError = (): LoginErrorAction => ({
    type: LOGIN_ERROR,
});

export type LogoutAction = {
    type: typeof LOGOUT;
};
export const logout = (): LogoutAction => ({
    type: LOGOUT,
});

export type ApplicationAction = LoginAction | LogoutAction;
