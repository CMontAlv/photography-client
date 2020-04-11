import * as React from 'react';
import { Form } from 'react-bootstrap';

import { AsyncButton } from '../../components/async-button';
import { Page } from '../../components/page';

import './styles.css';

export const Login: React.FunctionComponent = () => {
    const [fields, setFields] = React.useState({ email: '', password: '' });
    const noop = () => {};

    return (
        <Page className="login-page">
            <Form onSubmit={noop}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={fields.email} onChange={noop} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={fields.password} onChange={noop} />
                </Form.Group>
                <AsyncButton block type="submit" isLoading={false} disabled={false}>
                    Login
                </AsyncButton>
            </Form>
        </Page>
    );
};
