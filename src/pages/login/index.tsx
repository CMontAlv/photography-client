import * as React from 'react';
import { Form, Alert } from 'react-bootstrap';

import { api } from '../../api/auth';

import { AsyncButton } from '../../components/async-button';
import { Page } from '../../components/page';

import { useFormFields } from '../../hooks/use-form-fields';

import { login, loginSuccess, loginError } from '../../state/application/actions';
import { getIsLoggingIn, getHasLoginError } from '../../state/application/selectors';
import { useDispatch, useSelector } from '../../state/store';

import './styles.css';

export const Login: React.FunctionComponent = () => {
    const [fields, setFields] = useFormFields({ email: '', password: '' });

    const dispatch = useDispatch();
    const isLoggingIn = useSelector(getIsLoggingIn);
    const hasLoginError = useSelector(getHasLoginError);

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(login());
        const [user, error] = await api.login(fields.email, fields.password);

        if (error) {
            dispatch(loginError());
            return;
        }

        dispatch(loginSuccess());
    };

    const validateForm = React.useCallback(() => !!fields.email && !!fields.password, [fields]);

    return (
        <Page className="login-page">
            <Form onSubmit={loginHandler}>
                {hasLoginError ? <Alert variant="danger">User or password incorrect.</Alert> : null}
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={fields.email} onChange={setFields} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={fields.password} onChange={setFields} />
                </Form.Group>
                <AsyncButton block type="submit" isLoading={isLoggingIn} disabled={!validateForm()}>
                    Login
                </AsyncButton>
            </Form>
        </Page>
    );
};
