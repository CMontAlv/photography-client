import * as React from 'react';
import { Form } from 'react-bootstrap';

import { AsyncButton } from '../../components/async-button';
import { Page } from '../../components/page';

import { useFormFields } from '../../hooks/use-form-fields';

import { login } from '../../state/application/actions';
import { useDispatch } from '../../state/store';

import './styles.css';

export const Login: React.FunctionComponent = () => {
    const [fields, setFields] = useFormFields({ email: '', password: '' });

    const dispatch = useDispatch();

    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(login());
    };

    return (
        <Page className="login-page">
            <Form onSubmit={loginHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={fields.email} onChange={setFields} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={fields.password} onChange={setFields} />
                </Form.Group>
                <AsyncButton block type="submit" isLoading={false} disabled={false}>
                    Login
                </AsyncButton>
            </Form>
        </Page>
    );
};
