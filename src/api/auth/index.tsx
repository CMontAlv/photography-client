import { Auth } from 'aws-amplify';

export const login = async (email: string, password: string): Promise<[any, Error | null]> => {
    try {
        const result = await Auth.signIn(email, password);

        return [result, null];
    } catch (e) {
        return [null, e];
    }
};

export const logout = async (): Promise<[any, Error | null]> => {
    try {
        await Auth.signOut();

        return [{ status: 200 }, null];
    } catch (e) {
        return [null, e];
    }
};

export const signUp = async (email: string, password: string): Promise<[any, Error | null]> => {
    try {
        const newUser = await Auth.signUp({
            username: email,
            password: password,
        });

        return [newUser, null];
    } catch (e) {
        return [null, e];
    }
};

export const confirmSignUp = async (email: string, confirmationCode: string): Promise<[any, Error | null]> => {
    try {
        await Auth.confirmSignUp(email, confirmationCode);

        return [{ status: 200 }, null];
    } catch (e) {
        return [null, e];
    }
};

export const checkCurrentSession = async (): Promise<[any, Error | null]> => {
    try {
        const result = await Auth.currentSession();

        return [{ status: 200 }, null];
    } catch (e) {
        return [null, e];
    }
};

export const api = {
    login,
    logout,
    signUp,
    confirmSignUp,
    checkCurrentSession,
};
