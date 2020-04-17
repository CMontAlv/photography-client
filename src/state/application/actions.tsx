import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './constants';

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

export type SignUpAction = {
    type: typeof SIGN_UP;
};
export const signUp = (): SignUpAction => ({
    type: SIGN_UP,
});

export type SignUpSuccessAction = {
    type: typeof SIGN_UP_SUCCESS;
};
export const signUpSuccess = (): SignUpSuccessAction => ({
    type: SIGN_UP_SUCCESS,
});

export type SignUpErrorAction = {
    type: typeof SIGN_UP_ERROR;
};
export const signUpError = (): SignUpErrorAction => ({
    type: SIGN_UP_ERROR,
});

export type ApplicationActions =
    | LoginAction
    | LoginSuccessAction
    | LoginErrorAction
    | LogoutAction
    | SignUpAction
    | SignUpSuccessAction
    | SignUpErrorAction;
