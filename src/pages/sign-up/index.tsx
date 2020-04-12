import * as React from 'react';
import { Form } from 'react-bootstrap';

import { AsyncButton } from '../../components/async-button';
import { Page } from '../../components/page';

import './styles.css';

export const SignUp: React.FunctionComponent = () => {
    const noop = () => {};

    function renderConfirmationForm() {
        return (
            <Form onSubmit={noop}>
                <Form.Group controlId="confirmationCode">
                    <Form.Label>Confirmation Code</Form.Label>
                    <Form.Control autoFocus type="tel" onChange={noop} value={''} />
                    <h4>Please check your email for the code.</h4>
                </Form.Group>
                <AsyncButton block type="submit" bsSize="large" isLoading={false} disabled={false}>
                    Verify
                </AsyncButton>
            </Form>
        );
    }

    function renderForm() {
        return (
            <Form onSubmit={noop}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={''} onChange={noop} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={''} onChange={noop} />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" onChange={noop} value={''} />
                </Form.Group>
                <AsyncButton block type="submit" isLoading={false} disabled={false}>
                    Signup
                </AsyncButton>
            </Form>
        );
    }

    return <Page className="sign-up-page">{true ? renderForm() : renderConfirmationForm()}</Page>;
};
