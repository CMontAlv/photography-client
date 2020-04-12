import { LOGIN, LOGOUT } from './constants';

export type LoginAction = {
    type: typeof LOGIN;
};
export const login = (): LoginAction => ({
    type: LOGIN,
});

export type LogoutAction = {
    type: typeof LOGOUT;
};
export const logout = (): LogoutAction => ({
    type: LOGOUT,
});

export type ApplicationAction = LoginAction | LogoutAction;
