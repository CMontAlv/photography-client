import * as React from 'react';
import { Form } from 'react-bootstrap';

import { AsyncButton } from '../../components/async-button';
import { Page } from '../../components/page';

import { useFormFields } from '../../hooks/use-form-fields';

import { login } from '../../state/application/actions';
import { useDispatch, useSelector } from '../../state/store';

import { getIsLoggedIn } from '../../state/application/selectors';

import './styles.css';

export const Login: React.FunctionComponent = () => {
    const [fields, setFields] = useFormFields({ email: '', password: '' });

    const dispatch = useDispatch();

    const loginHandler = (e: UIEvent) => {
        e.preventDefault();

        dispatch(login());
    };

    return (
        <Page className="login-page">
            <Form onSubmit={() => {}}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={fields.email} onChange={setFields} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={fields.password} onChange={setFields} />
                </Form.Group>
                <AsyncButton block type="submit" isLoading={false} disabled={false} onClick={loginHandler}>
                    Login
                </AsyncButton>
            </Form>
        </Page>
    );
};
